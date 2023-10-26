
import { getUsers, signOutUser } from 'lib/firebase'
import { admin } from 'lib/firebaseAdmin'
import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'
import axios from 'axios'

import styles from './index.module.scss'

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const cookies = context.req.headers.cookie
    const token = cookies
      ? cookies
          .split('; ')
          .find((c) => c.startsWith('authToken='))
          .split('=')[1]
      : null
    console.log('headers: ', context.req.headers)
    console.log('token in dashboard:', token)
    console.log('cookies: ', cookies)
    const decodedToken = await admin.auth().verifyIdToken(token)

    if (
      decodedToken.uid === process.env.ADMIN_UID
    ) {
      return { props: {token} }
    } else {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
  } catch (error) {
    console.log('Server-side verification failed', error)
    return {
      props: {},
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
}

const Dashboard = ({token}) => {
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(false)


  useEffect(() => {
  
    const getUsersData = async (idToken) => {
      const encryptedUsers = await getUsers()

      const response = await axios.post(
        '/api/decrypt',
        {
          users: encryptedUsers,
          type: 'users'
        },
        {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        },
      )

      setUsers(response.data)
    }
    
    const fetchData = async () => {
      setLoading(true)
      await getUsersData(token);
      setLoading(false)
    };
  
    fetchData();
  }, [])

  return (
    <>
        <h1 className={styles.heading}>Clients</h1>
        <div className={styles.container}>
          <div className={styles.usersContainer}>
          {/* {loading && (
              <div className={styles.loading}>
                <div className={styles.spinner}>
                  <svg viewBox="0 0 50 50">
                    <circle className={styles.circle1} cx="25" cy="25" r="20" />
                    <circle className={styles.circle2} cx="25" cy="25" r="15" />
                  </svg>
                </div>
              </div>
            )} */}
            <table>
              <thead>
                <tr>
                  <th className={styles.userName}>Name</th>
                  <th className={styles.userSurname}>Surname</th>
                  <th className={styles.userEmail}>Email</th>
                  <th className={styles.userPhone}>Message</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((user) => (
                    <tr className={styles.user} key={user.email}>
                      <td className={styles.userName}>{user.name}</td>
                      <td className={styles.userSurname}>{user.surname}</td>
                      <td className={styles.userEmail}>{user.email}</td>
                      <td className={styles.userMessage}>{user.message}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.button}>
          <button onClick={signOutUser}>sign out</button>
        </div>

    </>
  )
}

export default Dashboard
