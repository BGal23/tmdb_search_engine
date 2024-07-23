import { useTranslation } from "react-i18next";
import { GetServerSideProps } from "next";
import { HomeProps } from "@/types/props";
import { fetchPopularMedia } from "@/lib/fetchMedia";
import { parse } from "path";
import { useState } from "react";
import NavigationBar from "@/components/NavigationBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import MobileMenu from "@/components/MobileMenu";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const cookies = req.headers.cookie
    ? parse(req.headers.cookie)
    : { base: "i18next=en" };

  const language = cookies.base.split("=")[1] || "en";

  try {
    const movies = await fetchPopularMedia("movie", language);
    const tv = await fetchPopularMedia("tv", language);

    return {
      props: {
        movies,
        tv,
        language,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        movies: [],
        tv: [],
        language: "en",
      },
    };
  }
};

const Home = ({ movies, tv, language }: HomeProps) => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <>
      <header>
        <NavigationBar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <Header />
      </header>
      <main>
        <Section
          title={t("bestMovies")}
          data={movies}
          language={language}
          anchor={"bestMovies"}
        />
        <Section
          title={t("bestSeries")}
          data={tv}
          language={language}
          anchor={"bestSeries"}
        />
      </main>
      <footer>
        <Footer />
      </footer>
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </>
  );
};

export default Home;
