import { useContext } from "react";
import { DarkLightContext } from "../App";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function LightDark() {
    const {darkMode,setDarkMode} = useContext(DarkLightContext);
    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };
    return (
        <div
        onClick={toggleTheme}
        className="flex items-center justify-center  bg-neutral-50 hover:bg-neutral-200 size-9 rounded-lg border border-neutral-400 mt-2 mr-4 dark:bg-[#111827] dark:border-neutral-700 hover:dark:border-neutral-400"
        >
        <button className="">{darkMode ? <MdLightMode className=" text-white"   /> : <MdDarkMode />} </button>
        </div>
    );
}


