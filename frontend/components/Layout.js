import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
