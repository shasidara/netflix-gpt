const VideoTitle = ({ title, overview }) => {
    return(
        <div className="absolute py-80 px-24 text-white bg-gradient-to-r from-black w-screen aspect-video">
            <h1 className="text-6xl font-bold py-2">{title}</h1>
            <p className="w-1/3 py-2 text-lg">{overview}</p>
            <div className="flex py-4">
                <button className="bg-white px-8 py-3 text-lg text-black rounded-lg font-bold hover:bg-opacity-50 ">
                    ▶ Play
                </button>
                <button className="bg-gray-600 px-6 py-2 text-lg text-black rounded-lg ml-4 font-bold hover:bg-opacity-50">
                    More info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;