import Header from "@/components/Header";
import Footer from "@/components/Footer";
import '../styles/Layout.module.css';

export default function Layout({children}) {
  return (
    <>
    <Header />
        <main>
            {children}
        </main>
     <Footer />
    </>
  )
}
