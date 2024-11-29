import {useContext,useEffect,useRef} from 'react'
import mylogo from "../Images_Icons/AccountLogo.jpg";
import { NavLink } from 'react-router-dom';
import { firstdata,seconddata } from '../Data/sidebar_parts';
import { MdLogout } from 'react-icons/md';
import { BsStars } from 'react-icons/bs';
import { DarkLightContext } from '../App';
import LightDark from './LightDark';


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

function SidebarMobil() {
    const sidebarRef = useRef(null);
    const { sidebar,setSidebar }= useContext(DarkLightContext)

   
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setSidebar(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);  
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setSidebar]);

return (

    <div ref={sidebarRef}>
        <div className={!sidebar?'fixed -right-96   ':' flex flex-col transition-all ease-linear duration-300 w-64 sm:w-80 fixed right-0 h-screen md:hidden z-20 bg-[#F5F6FA] border-l border-neutral-200 dark:bg-[#111827] dark:border-gray-700 '}>
            <div className='flex justify-between items-center pl-4'>
                <div className='flex items-center gap-2 mt-4'>
                    <img src={mylogo} alt="Account" className="rounded-full size-8" />
                    <p className='dark:text-white'>Mohamed EL AAMRANI</p>
                </div>
                <LightDark />
            </div>
            
            <div className="flex flex-col grow h-full ">
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

            <div className='flex' >
                <button className='flex items-center justify-center gap-4 w-full  bg-white h-10 rounded-lg m-4 font-medium dark:bg-[#0C1017] dark:border-gray-700 dark:text-white'>
                    <MdLogout className='size-5'/>
                    Logout
                </button>
            </div>    
        </div>
    </div>
)
}

export default SidebarMobil
