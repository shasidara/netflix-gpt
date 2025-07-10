import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

    useMovieTrailer(movieId);

    return(
        <div className="w-screen aspect-video">
            <iframe  
               className="w-full h-full"
                width="560" 
                height="315" 
                src={ "https://www.youtube.com/embed/" + trailerVideo?.key + "?si=qqpE88oxBeT7oO9v&autoplay=1&mute=1&rel=0&showinfo=0&controls=0"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
            ></iframe>
        </div>
    );
};

export default VideoBackground;