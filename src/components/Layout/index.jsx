import Header from "../Header";
import Footer from "../Footer";
import PropTypes from "prop-types";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="mx-auto px-4">{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
