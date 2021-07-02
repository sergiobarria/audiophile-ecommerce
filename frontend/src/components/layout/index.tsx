import MainHeader from './main-header/MainHeader';
import Footer from './footer/Footer';

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
