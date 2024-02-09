import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./components/BootstrapClient";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function AppLayout({ children }) {

  return (
    <>
      <Header />
      {children}
      <Footer />
      <BootstrapClient />
    </>
  );
}
