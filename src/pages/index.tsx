import { Inter } from "next/font/google";
import NavigationBar from "@/components/NavigationBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { useTranslation } from "react-i18next";
import { GetServerSideProps } from "next";
import { HomeProps } from "@/types/props";

const inter = Inter({ subsets: ["latin"] });

const Home = ({ movies }: HomeProps) => {
  const { t } = useTranslation();

  return (
    <>
      <header>
        <NavigationBar />
        <Header />
      </header>
      <main>
        <Section title={t("bestMovies")} data={movies} />
        <Section title={t("bestSeries")} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const moviesRes = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=72a1f6e3e55a59e26bd2ecafac967af3"
  );

  const moviesData = await moviesRes.json();

  return {
    props: {
      movies: moviesData.results,
    },
  };
};

export default Home;
