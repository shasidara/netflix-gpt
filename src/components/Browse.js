import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopluarMovies from "../hooks/usePopluarMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";

const Browse = () => {
    const showGptView = useSelector((store) => store?.gpt?.showGptView);

    useNowPlayingMovies();
    usePopluarMovies();
    useTopRatedMovies();
    useUpComingMovies();

    return (
        <div>
            <Header />
            {showGptView ? (
                <GptSearchPage /> 
            ) : (
               <>
                    <MainContainer />
                    <SecondaryContainer />
               </>
            )}
            
        </div>
    );
};

export default Browse;