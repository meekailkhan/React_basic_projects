import { useState, useRef, useEffect } from "react";
import NavLink from "../components/ui/NavLink";
import { useLocation } from "react-router-dom";
import { ROUTES } from "@/contant/routes";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  console.log(location);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <header className="bg-gradient-to-r from-[#6bcaf7] sticky via-[#4275de] to-[#1f3d8c] py-1 px-8 flex justify-between items-center z-50">
      <div className="logo flex items-center">
        <img src="/images/hss-logo.png" className="h-16" alt="" />
        <h2 className="logo-text text-yellow-400 text-[clamp(1.5rem,1.5vw,2rem)] font-bold">
          HSS MUNAD
        </h2>
      </div>
      <div className="nav-links ">
        <ul className="nav-items flex items-center gap-8  text-white">
          <NavLink title="Home" onClick={()=> navigate(ROUTES.HOME)}/>
          <div
            className="relative inline-block max-w-[100%] text-center text-black "
            ref={dropdownRef}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`w-max ${
                isOpen ? "bg-yellow-500" : ""
              } text-white px-6 py-2 rounded-4xl font-semibold transition-all  duration-300 md:text-[clamp(0.5rem,1.5vw,1rem)] text-lg`}
            >
              Menu ▾
            </button>

            {isOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 border-2 border-[#f5f5f5] w-52 bg-white  rounded-lg shadow-lg  flex flex-col items-start">
                <NavLink
                  title="Introduction"
                  isNested={true}
                  onClick={() => {
                    navigate(ROUTES.INTRODUCTION);
                    setIsOpen(false)
                  }}
                />
                <NavLink
                  title="Our Team"
                  isNested={true}
                  onClick={() => {
                    navigate(ROUTES.TEAM);
                    setIsOpen(false)
                  }}
                />
                <NavLink
                  title="Developer"
                  isNested={true}
                  onClick={() => {
                    navigate(ROUTES.DEVELOPER);
                    setIsOpen(false)
                  }}
                />
                <NavLink
                  title="Gallery"
                  isNested={true}
                  onClick={() => {
                    navigate(ROUTES.GALLERY)
                    setIsOpen(false)
                  }}
                />
                <NavLink
                  title="Id Card"
                  isNested={true}
                  onClick={() => {
                    navigate(ROUTES.IDCARD);
                    setIsOpen(false)
                  }}
                />
                <NavLink
                  title="Bonafide"
                  isNested={true}
                  onClick={() => {
                    navigate(ROUTES.BONEFIED);
                    setIsOpen(false)
                  }}
                />
              </div>
            )}
          </div>
          <NavLink title="Notice" onClick={() => navigate(ROUTES.NOTICE)} />
          <NavLink title="Book's" onClick={() => navigate(ROUTES.BOOKS)} />
          <NavLink title="Contact Us" onClick={() => navigate(ROUTES.CONTACT)} />
          <NavLink title="Master" onClick={() => navigate(ROUTES.MASTER)} />

          <div className="join-us">
            <button
              onClick={() => navigate(ROUTES.JOIN)}
              className="w-max bg-gradient-to-r from-green-600 to-green-400 py-2 px-6 text-white font-semibold rounded-xl transition-transform duration-300 hover:scale-105"
            >
              Join Us
            </button>
          </div>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
