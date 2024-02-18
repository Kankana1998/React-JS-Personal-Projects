import {auth, provider} from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth";

import Cookies from 'universal-cookie';
const cookies = new Cookies();

export  const Auth = ({setIsAuth}) => {

    const signInWithGoogle = async () => {
        try{
            const result = await signInWithPopup(auth, provider);
            cookies.set("auth-token", result.user.refreshToken);
            setIsAuth(true);
        } catch(err){
            console.error(err);
        }  
    };

    return (
    <div className="text-white h-[100vh] flex justify-center items-center bg-cover">
        <p className="pr-4">Sign In With Google to Continue</p>
        <button onClick={signInWithGoogle} className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ptl">Sign In With Google</button>
    </div>
    );
}