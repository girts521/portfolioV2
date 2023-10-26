// pages/_app.js
import '../src/app/globals.css';  // Import global styles
import Navbar from '../components/Navbar';


function MyApp({ Component, pageProps }) {
  return (
    <div>
        <Navbar />

      <Component {...pageProps} />  {/* The current page component */}
    </div>
  );
}

export default MyApp;
