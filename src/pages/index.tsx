import { GetServerSideProps } from "next";
import { IHomeProps } from "@/types/props";
import fetchPopularMedia from "@/lib/fetchPopularMedia";
import fetchSearchedMedia from "@/lib/fetchSearchedMedia";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import cookie from "cookie";
import { useState } from "react";
import NavigationBar from "@/components/NavigationBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import MobileMenu from "@/components/MobileMenu";
import SearchedMedia from "@/components/SearchedMedia";
import Head from "next/head";
import { useTranslation } from "next-i18next";

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
        searchQuery,
        ...(await serverSideTranslations(language, ["common"])), // renders pages depending on the selected language
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        movies: [],
        tv: [],
        searchArray: [],
        searchQuery: "",
        ...(await serverSideTranslations("en", ["common"])),
      },
    };
  }
};

const Home = ({
  movies,
  tv,
  // language,
  searchArray,
  searchQuery,
}: IHomeProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isSearchedMenuOpen, setIsSearchedMenuOpen] = useState<boolean>(false);
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>TMDB Search Engine</title>
        <meta name="description" content={t("description")} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <NavigationBar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          setIsSearchedMenuOpen={setIsSearchedMenuOpen}
        />
        <Header setIsSearchedMenuOpen={setIsSearchedMenuOpen} />
      </header>
      <SearchedMedia
        data={searchArray}
        language={"language"}
        searchQuery={searchQuery}
        isSearchedMenuOpen={isSearchedMenuOpen}
        setIsSearchedMenuOpen={setIsSearchedMenuOpen}
      />
      <main>
        <Section
          title={"bestMovies"}
          data={movies}
          language={"language"}
          anchor={"bestMovies"}
        />
        <Section
          title={"bestSeries"}
          data={tv}
          language={"language"}
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
