import {IMG_CND_URL} from "../utils/constants";

const MoviesCard = ({ posterpath }) => {
    return(
        <div className="w-48 pr-4">
            <img alt="Movies Poster" src={IMG_CND_URL + posterpath}/>
        </div>
    );
};

export default MoviesCard;