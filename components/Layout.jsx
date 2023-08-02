import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {


  return (
    <div className="layout">
      <Head>
        <title>Dentalcare</title>
      </Head>

        <header className="header">
          <Navbar />
        </header>
      <main className={`main`}>{children}</main>


        <footer className="footer">
          <Footer />
        </footer>
  
    </div>
  );
}

export default Layout;
