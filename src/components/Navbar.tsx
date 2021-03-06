import person from "./images/person3.png";
import "./Navbar.css";
import {useState, useEffect} from "react";


export const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true)
    } else{
      setIsScrolled(false)
    }
  }

  window.addEventListener('scroll', handleScroll)

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
  },[]);

  
  return (
    <div className={`${isScrolled && "w-[100%] h-28 flex flex-row mt-0 fixed top-0 bg-[#1c1c1c] transition duration-[0.9s] ease-in-out"}`} >
    <div className="w-[100%] h-28 flex flex-row mt-0 fixed top-0">
        <div className="w-2/4 h-[100%] flex">
            <div className="w-2/4 h-[100%]  ml-0 flex justify-center items-center">
                <div className="text-center text-xl font-Anton tracking-wide text-white flex"><p>SKILLS AKHADA</p><p className="text-red-500 ml-1">.</p></div>
            </div>
        </div>
        <div className="w-2/4 h-[100%] flex justify-end">
          <div className="w-1/2 h-[100%] flex items-center justify-center">

          <div className="mr-10 ">
            <img src={person} alt="" className="cursor-pointer" />
          </div>

          <div className="w-12 h-12 bg-[#e50914] rounded-full flex flex-col justify-center items-center cursor-pointer">
              <div className="w-3 h-0.5 bg-white rounded"></div>
              <div className="w-3 h-0.5 bg-white rounded mt-0.5"></div>
              <div className="w-3 h-0.5 bg-white rounded mt-0.5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

