import {useState,useContext} from "react";
import { DarkLightContext } from "../App";
import logo from "../Images_Icons/MY-LOGO.png";
import logoWhite from "../Images_Icons/MY-LOGOWHITE.png";
import mylogo from "../Images_Icons/AccountLogo.jpg";
import { firstdata, seconddata } from "../Data/sidebar_parts";
import { NavLink } from "react-router-dom";
import { BsStars } from "react-icons/bs";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import AccountIcon from "./AccountIcon";
import SidebarMobil from "./SidebarMobil";



const NavLinkList = ({ data }) => (
  <div>
    {data.map((item) => (
      <NavLink
        key={item.id}
        to={item.path}
        className="flex items-center gap-2 p-2 text-sm transition-all duration-300 font-medium hover:bg-neutral-200 hover:dark:bg-[#2A3241] hover:rounded-md dark:text-white"
      >
        {item.icon}
        {item.label}
      </NavLink>
    ))}
  </div>
);

function Sidebar() {
  const {darkMode}=useContext(DarkLightContext);
  const [account,setAccount]=useState(false);
  
const HandelAccount=()=>{
  setAccount(true);
}
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="hidden md:flex flex-col fixed left-0 w-60 h-screen bg-[#F5F6FA] border-r border-neutral-200   overflow-y-auto dark:bg-[#111827] dark:border-gray-700  ">
      
      {/* LOGO */}
      
      <div className="flex justify-center items-center h-16 border-b border-neutral-300 dark:border-gray-700">
        {!darkMode?<img src={logo} alt="MEDX" className="w-40 h-40 " />:
        <img src={logoWhite} alt="MEDX" className="w-40 h-40 " />}
      </div>

      {/* Sidebar Elements */}
      <div className="flex flex-col grow">
        {/* Part 1 */}
        <div className="pt-4 px-4 mb-6 flex flex-col  ">
          <NavLinkList data={firstdata} />
        </div>

        {/* Part 2 */}
        <div className=" px-4 mt-auto">
          <NavLinkList data={seconddata} />
        </div>
      {/* Discount */}
        <div className=" mt-8 p-2 mx-3 bg-white rounded-md border border-neutral-300 dark:bg-[#0C1017] dark:border-gray-700">
          <div className="p-2">
            <BsStars size={22} className="dark:text-white"/>
          </div>
          <h3 className=" font-semibold text-md dark:text-white">Plan about to expire</h3>
          <p className=" text-gray-600 text-sm dark:text-white">
            Enjoy 10% off when renewing your plan today.
          </p>
          <button className="w-full h-10 mt-4 rounded-lg bg-neutral-950 text-white dark:bg-neutral-50 dark:text-black">
            Get the discount
          </button>
        </div>
      </div>

      {/* Account  */}
      <div className="flex items-center gap-1 pl-2 mt-4  h-20   bg-neutral-100 border-t border-neutral-300 dark:bg-[#0C1017] dark:border-gray-700">
        <img src={mylogo} alt="Account" className="rounded-full size-10" />
        <div className="w-full">
          <div className="flex items-center justify-between w-full">
            <div>
              <h1 className="font-medium text-sm dark:text-white">Mohamed EL AAMRANI</h1>
              <p className="text-xs text-neutral-600 font-medium truncate dark:text-white">
              elaamranimohamed4
              
              </p>
            </div>
{/* when to click on account icon it shows the account info  and if you click outside it  hide*/}
            <div onClick={HandelAccount}>
            <PiDotsThreeVerticalBold size={24} className="dark:text-white" />
            {
              account?<AccountIcon accountvariabel={setAccount} />:""
              
            }
            </div>

          </div>
        </div>
      </div>
    </div>





    <SidebarMobil/>
    </div>
  );
}

export default Sidebar;
