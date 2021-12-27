import "../styles/globals.scss";
import Layout from '../components/Layout';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
