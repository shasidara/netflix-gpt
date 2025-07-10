import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const showGptView = useSelector((store) => store.gpt.showGptView);
    const dispatch = useDispatch();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        })
        .catch((error) => {
            navigate("/error");
        });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayName, photoURL} = user;
                dispatch(
                    addUser({
                        uid: uid, 
                        email: email, 
                        displayName: displayName, 
                        photoURL: photoURL,
                    })
                );
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe();
    }, []);

    const handleGptSearchButton = () => {
        dispatch(toggleGptSearch());
    };

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    };

    return(
        <div className="absolute w-screen px-8 py-8 bg-gradient-to-b from-black z-30 flex justify-between">
            <img className="w-44 " src={ LOGO }
              alt="logo" 
            />

           {user && ( 
            <div className="flex p-2">

                {showGptView && (
                    <select 
                      className="p-2 bg-gray-800 text-white m-2" 
                      onChange={handleLanguageChange}
                    >
                        {SUPPORTED_LANGUAGES.map(
                            (lang) => ( 
                            <option key={lang.identifier} value={lang.identifier}>{lang.name}
                            </option>
                        ))}
                    </select>
                )};

                <button className="py-2 px-4 bg-purple-700 m-2 mr-6 text-white rounded-lg"
                  onClick={handleGptSearchButton}
                >
                    {!showGptView ? "GPT Search" : "HomePage"}
                </button>

                <img 
                    className="w-11 h-11 rounded-sm"
                    alt="user icon"
                    src={user.photoURL}
                />
                <button className="font-bold text-white text-lg" onClick={handleSignOut}>
                    (Sign Out)
                </button>
            </div>)}
        </div> 
    );
};

export default Header;