import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config?.lang);

    return(
        <div className="pt-[10%] flex justify-center">
            <form className="p-2 m-2 bg-black w-1/2 grid grid-cols-12">
                <input 
                   type="text" 
                   className="col-span-9 p-2 m-4" 
                   placeholder={lang[langKey].gptSearchPlaceholder}
                />
                <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3">
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;