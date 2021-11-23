import Sidebar from "./SideBar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
