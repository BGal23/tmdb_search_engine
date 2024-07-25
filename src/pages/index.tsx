import { useTranslation } from "react-i18next";
import { GetServerSideProps } from "next";
import { HomeProps } from "@/types/props";
import { fetchPopularMedia } from "@/lib/fetchPopularMedia";
import { fetchSearchedMedia } from "@/lib/fetchSearchedMedia";
import { parse } from "path";
import { useEffect, useState } from "react";
import NavigationBar from "@/components/NavigationBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import MobileMenu from "@/components/MobileMenu";
import SearchedMedia from "@/components/SearchedMedia";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, query } = context;
  const cookies = req.headers.cookie
    ? parse(req.headers.cookie)
    : { base: "i18next=en" };
  const language = cookies.base.split("=")[1] || "en";

  try {
    const movies = await fetchPopularMedia("movie", language);
    const tv = await fetchPopularMedia("tv", language);
    const searched = await fetchSearchedMedia(query.search as string, language);

    return {
      props: {
        movies,
        tv,
        searched,
        language,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        movies: [],
        tv: [],
        searched: [],
        language: "en",
      },
    };
  }
};

const Home = ({ movies, tv, language, searched }: HomeProps) => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isSearchedMenuOpen, setIsSearchedMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (searched.length > 0) {
      setIsSearchedMenuOpen(true);
    } else {
      setIsSearchedMenuOpen(false);
    }
  }, [searched]);
  return (
    <>
      <Head>
        <title>TMDB Search Engine</title>
        <meta name="description" content="Your page description goes here." />
      </Head>
      <header>
        <NavigationBar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          setIsSearchedMenuOpen={setIsSearchedMenuOpen}
        />
        <Header />
      </header>
      {isSearchedMenuOpen && (
        <SearchedMedia
          data={searched}
          language={language}
          setIsSearchedMenuOpen={setIsSearchedMenuOpen}
        />
      )}
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
