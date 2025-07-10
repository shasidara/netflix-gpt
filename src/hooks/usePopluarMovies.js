import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopluarMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopluarMovies = () => {
    const dispatch = useDispatch();

    const getPopluarMovies = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
            API_OPTIONS
        )
        const json = await data.json();
        dispatch(addPopluarMovies(json.results));
    };

    useEffect(() => {
        getPopluarMovies();
    }, []);
};

export default usePopluarMovies