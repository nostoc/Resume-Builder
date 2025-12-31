import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children, showHeader = true, showFooter = true }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {showHeader && <Header />}
      <main className="flex-grow">{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
