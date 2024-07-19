import Image from "next/image";
import { Inter } from "next/font/google";
import NavigationBar from "@/components/NavigationBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <header>
        <NavigationBar />
        <Header />
      </header>
      <main></main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
