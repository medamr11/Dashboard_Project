import {useContext} from "react";
import OverviewTop from "../Component/Overview_Top";
import OverviewBottom from "../Component/Overview_bottom";
import { DarkLightContext } from "../App";
function Home() {
  const {darkMode}=useContext(DarkLightContext);
  return (
    <div  className={`${darkMode && "dark"}`} >
      <main className="flex flex-col md:ml-60    h-svh bg-[#FCFCFC]   dark:bg-[#111827]">
      <OverviewTop /> 
      <OverviewBottom />
      </main>
    </div>
  );
}

export default Home;
