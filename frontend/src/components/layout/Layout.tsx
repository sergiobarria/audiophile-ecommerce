import MainHeader from "./MainHeader";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
