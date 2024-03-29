import React from "react";
import Movie from "../../Components/Movies";
import Header from "../../Components/Header";
import Hero from "../../Components/Hero";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero
        url={
          "https://image.tmdb.org/t/p/original//yJPI9e3H5fGNTWNzW2p4iSG5qdc.jpg"
        }
        title={"Narcos"}
        desc={
          'A gritty chronicle of the war against Colombia"s infamously violent and powerful drug cartels.'
        }
        url2={"http://www.returndates.com/backgrounds/narcos.logo.png"}
      />
      <Movie />
      <Footer />
    </div>
  );
};
export default Home;
