import React from "react";
import TitleList from "../../Components/TitleList";
import { useGetTvShowQuery } from "../../Utils/services";

const TvShows = () => {
  const { data: data1, isLoading: isLoading1 } = useGetTvShowQuery(1);
  const { data: data2, isLoading: isLoading2 } = useGetTvShowQuery(2);
  const { data: data3, isLoading: isLoading3 } = useGetTvShowQuery(3);
  return (
    <>
      {!isLoading1 && (
        <TitleList title="Popular" slide={data1.results.slice(0, 10)} />
      )}
      {!isLoading1 && (
        <TitleList title="Top Rated" slide={data1.results.slice(10, 20)} />
      )}
      {!isLoading2 && (
        <TitleList title="Highest Grosing" slide={data2.results.slice(0, 10)} />
      )}
      {!isLoading2 && (
        <TitleList title="New Releases" slide={data2.results.slice(10, 20)} />
      )}
      {!isLoading3 && (
        <TitleList title="Most Liked" slide={data3.results.slice(0, 10)} />
      )}
      {!isLoading3 && (
        <TitleList title="Trending Now" slide={data3.results.slice(10, 20)} />
      )}
    </>
  );
};

export default TvShows;
