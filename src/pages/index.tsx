import { useTranslation } from "react-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import nextConfig from "../../next.config.mjs";
import { GetServerSideProps } from "next";
import { HomeProps } from "@/types/props";
import { fetchPopularMedia } from "@/lib/fetchPopularMedia";
import { fetchSearchedMedia } from "@/lib/fetchSearchedMedia";
import cookie from "cookie";
import { useState } from "react";
import NavigationBar from "@/components/NavigationBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import MobileMenu from "@/components/MobileMenu";
import SearchedMedia from "@/components/SearchedMedia";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, query, locale } = context;
  const cookies = req.headers.cookie ? cookie.parse(req.headers.cookie) : {};
  const language = cookies.i18next || locale || "en";

  try {
    const movies = await fetchPopularMedia("movie", language);
    const tv = await fetchPopularMedia("tv", language);
    const searchQuery = query.search || "";
    const searchArray = await fetchSearchedMedia(
      searchQuery as string,
      language
    );

    return {
      props: {
        movies,
        tv,
        searchArray,
        language,
        searchQuery,
        // ...(await serverSideTranslations(language, ["common"], nextConfig)),
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        movies: [],
        tv: [],
        searchArray: [],
        language: "en",
        searchQuery: "",
      },
    };
  }
};

const Home = ({
  movies,
  tv,
  language,
  searchArray,
  searchQuery,
}: HomeProps) => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isSearchedMenuOpen, setIsSearchedMenuOpen] = useState<boolean>(false);

  // const openSearchModal = (searchQuery: string, setIsSearchedMenuOpen) => {
  //   if (searchQuery.length >= 3) {
  //     setIsSearchedMenuOpen(true);
  //   }
  // };

  // openSearchModal(searchQuery, setIsSearchedMenuOpen);

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
      <SearchedMedia
        data={searchArray}
        language={language}
        searchQuery={searchQuery}
        isSearchedMenuOpen={isSearchedMenuOpen}
        setIsSearchedMenuOpen={setIsSearchedMenuOpen}
      />
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
