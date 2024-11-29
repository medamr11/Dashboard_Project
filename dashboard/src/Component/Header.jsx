import { useContext } from "react";
import { DarkLightContext } from "../App";
import Breadcrumbs from "./Breadcrumbs";
import Search from "./Search";
import Calendar from "./Calendar";
import Notification from "./Notification";
import LightDark from "./LightDark";
import logo from "../Images_Icons/MY-LOGO.png";
import logoWhite from "../Images_Icons/MY-LOGOWHITE.png";
import { HiMenu } from "react-icons/hi";



function Header() {
  const { sidebar,setSidebar }= useContext(DarkLightContext)
  const handleSideBar=()=>{
      setSidebar(!sidebar);
  };
  const { darkMode } = useContext(DarkLightContext);
  
  return (
    <div className={`${darkMode && "dark "}`}>
      <div className="hidden md:flex justify-between absolute left-60  right-0 z-20 h-16  bg-[#FCFCFC] dark:bg-[#05070A]">
        {/* Left side of the header */}
        <div className="">
          <Breadcrumbs />
        </div>

        {/* Right side of the header */}
        <div className="flex items-center gap-2 ">
          {/* Search bar */}
          <div className="flex items-center ">
            <Search />
          </div>

          {/* Calendar */}
          <div className="">
            <Calendar />
          </div>

          {/* Notification */}
          <div className="">
            <Notification />
          </div>

          {/* Dark and Light mode toggle */}
          <div className="">
            <LightDark />
          </div>
        </div>
      </div>

      {/* Mobil Version */}

      <div className="flex justify-between items-center  md:hidden fixed w-screen top-0 h-16 z-10  px-2 bg-[#F5F6FA] dark:bg-[#05070A]">
          {/* Logo */}
            <div className="flex justify-center items-center h-16 ">
              {!darkMode?<img src={logo} alt="MEDX" className="w-40 h-40 " />:
              <img src={logoWhite} alt="MEDX" className="w-40 h-40 " />}
            </div>
            <HiMenu onClick={handleSideBar} className="size-8 dark:text-white"/>
      </div>
    </div>
  );
}

export default Header;
