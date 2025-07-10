import MoviesCard from "./MoviesCard";

const MoviesList = ({ title, movies }) => {
    return(movies &&
        <div className="px-6">
            <h1 className="text-3xl text-white p-4">{title}</h1>
            <div className="flex overflow-x-scroll no-scrollbar">
                
                <div className="flex">
                    {movies.map((movie) =>  
                        <MoviesCard key={movie.id} posterpath={movie.poster_path}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MoviesList;