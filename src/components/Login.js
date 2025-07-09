import { useRef, useState } from "react";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMAGE, USER_AVATAR } from "../utils/constants";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();


    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {

        const message = checkValidateData(email.current.value, password.current.value);
        setErrorMessage(message);
        if(message) return;

        if(!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, { 
                    displayName: name.current.value, 
                    photoURL: USER_AVATAR,
                })
                    .then(() => {
                        const {uid, email, displayName, photoURL} = user; //auth.currentUser
                        dispatch(
                            addUser({
                                uid: uid,
                                email: email,
                                displayName: displayName,
                                photoURL: photoURL,
                            })
                        );
                    })
                    .catch((error) => {
                        setErrorMessage(error.message);
                    });

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode +"-"+ errorMessage);
            });
        } else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid,
                        email,
                        displayName,
                        photoURL,
                    })
                );
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode +"-"+ errorMessage);
            });
        };
    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return(
        <div>
            <Header />
            <div className="absolute">
               <img src={BACKGROUND_IMAGE}
                alt="bg"/>
            </div>
            
            <form onSubmit={(e) => e.preventDefault()} className="absolute bg-black w-3/12 p-12 my-36 mx-auto left-0 right-0 text-white bg-opacity-80">
                <h1 className="font-bold text-3xl p-2 m-2">
                    {isSignInForm ? "Sign In" : "Sign up"}
                </h1>

                {!isSignInForm && 
                    <input 
                        ref={name}
                        type="text" 
                        placeholder="Full Name" 
                        className="w-full p-2 m-2 bg-gray-700" 
                    />
                }

                <input 
                    ref={email}
                    type="text" 
                    placeholder="Email Address" 
                    className="w-full p-2 m-2 bg-gray-700" 
                />

                <input 
                    ref={password}
                    type="password" 
                    placeholder="Password" 
                    className="w-full p-2 m-2 bg-gray-700" 
                />

                <p className="font-bold text-red-600 text-lg pt-2 px-2">{errorMessage}</p>

                <button className="w-full p-2 mx-2 mt-6 mb-4 bg-red-700 rounded-lg" onClick={handleButtonClick}>
                    {isSignInForm ? "Sign In" : "Sign up"}
                </button>

                <p className="p-2 m-2 cursor-pointer" onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix?Sign up now." : "You already have account, Sign In now"}
                </p>
            </form>
        </div>      
    );
};

export default Login;