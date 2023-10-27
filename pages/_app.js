// pages/_app.js
import '../src/app/globals.css';  // Import global styles
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function MyApp({ Component, pageProps }) {
  return (
    <div>
        <Navbar />

      <Component {...pageProps} />  {/* The current page component */}
      <Footer />
    </div>
  );
}

export default MyApp;
