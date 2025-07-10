import { BACKGROUND_IMAGE } from "../utils/constants";
import GptMoviesSuggestions from "./GptMoviesSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
    return(
        <div>
            <div className="absolute -z-10">
                <img src={BACKGROUND_IMAGE}
                   alt="bg"
                />
            </div>
            <GptSearchBar />
            <GptMoviesSuggestions />
        </div>
    );
};

export default GptSearchPage;