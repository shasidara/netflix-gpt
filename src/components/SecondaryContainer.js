import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store?.movies);

    return (
        <div className="bg-black">
            {movies.nowPlayingMovies &&<div className="relative -mt-72 z-20 pl-16">
                <MoviesList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
                <MoviesList title={"Top Rated"} movies={movies?.topRatedMovies}/>
                <MoviesList title={"Popular"} movies={movies?.popluarMovies}/>
                <MoviesList title={"Upcoming Movies"} movies={movies?.upComingMovies}/>
            </div>}
        </div>
    );
};

export default SecondaryContainer;