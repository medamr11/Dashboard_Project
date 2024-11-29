import { useEffect, useRef } from "react";
import { IoMdLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";
function AccountIcon({ accountvariabel }) {
    const linkstyle = "flex flex-col h-9 p-2 rounded-md hover:bg-neutral-50 hover:dark:bg-[#2A3241]";
    const Linkref = useRef(null);
//! i need to understand this
    useEffect(() => {
        const handleOutside = (event) => {
        if (Linkref.current && !Linkref.current.contains(event.target)) {
            accountvariabel((prevState) => !prevState);
        }
        };

        document.addEventListener("click", handleOutside, true);
        return () => {
        document.removeEventListener("click", handleOutside, true);
        };
    }, [accountvariabel]);

    return (
        <div ref={Linkref}>
        <div className="flex flex-col justify-between fixed  bottom-4 left-[70px] h-60  px-2 py-2   font-medium text-sm bg-white shadow-lg rounded-lg border divide-y-2 dark:divide-gray-700 dark:bg-[#111827] dark:text-white  dark:border-gray-700 ">
            <div className="">
            <NavLink className={linkstyle}>Profile</NavLink>
            <NavLink className={linkstyle}>My account</NavLink>
            </div>
            <div className="">
            <NavLink className={`${linkstyle} mt-2`}>Add another account</NavLink>
            <NavLink className={linkstyle}>Settings</NavLink>
            </div>

            <NavLink className="flex items-center rounded-md  hover:bg-neutral-50 dark:hover:bg-[#2A3241] ">
            <p className="w-full  h-9 p-2   ">Logout </p>
            <IoMdLogOut size={18}  />
            </NavLink>
        </div>
        </div>
    );
    }

export default AccountIcon;
