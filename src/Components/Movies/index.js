import React from "react";
import TitleList from "../../Components/TitleList";
import { useGetMovieQuery } from "../../Utils/services";

const Movies = ({ getMovies }) => {
  const { data: data1, isLoading: isLoading1 } = useGetMovieQuery(1);
  const { data: data2, isLoading: isLoading2 } = useGetMovieQuery(2);
  const { data: data3, isLoading: isLoading3 } = useGetMovieQuery(3);

  return (
    <div>
      {!isLoading1 && (
        <>
          <TitleList
            title="Netflix Orignals"
            height={"horizontal"}
            slide={data1.results.slice(0, 10)}
          />
          <TitleList title="Trending Now" slide={data1.results.slice(10, 20)} />
        </>
      )}
      {!isLoading2 && (
        <>
          <TitleList title="Top Rated" slide={data2.results.slice(0, 10)} />
          <TitleList
            title="Action Movies"
            slide={data2.results.slice(10, 20)}
          />
        </>
      )}
      {!isLoading3 && (
        <>
          <TitleList title="Comedy Movies" slide={data3.results.slice(0, 10)} />
          <TitleList
            title="Horror Movies"
            slide={data3.results.slice(10, 20)}
          />
        </>
      )}
    </div>
  );
};
export default Movies;
