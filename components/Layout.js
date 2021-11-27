import Sidebar from "./SideBar";
import Footer from "./Footer";
import Header from './Header';

function Layout({ children }) {
  return (
    <>
      <Sidebar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
