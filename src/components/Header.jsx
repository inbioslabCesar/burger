import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleClik = () => {
    setNav(!nav);
  };
  const content = (
    <>
      <div className="block absolute top-14 left-0 w-full right-0 bg-primaryColor border-b border-secondaryColor z-50">
        <ul className="flex flex-col text-center">
          <li className="p-4 hover:text-secondaryColor ease-in duration-200">
            <Link to="#">Inicio</Link>
          </li>
          <li className="p-4 hover:text-secondaryColor ease-in duration-200">
            <Link to="#">Sobre nosotros</Link>
          </li>
          <li className="p-4 hover:text-secondaryColor ease-in duration-200">
            <Link to="#">Menu</Link>
          </li>
          <li className="p-4 hover:text-secondaryColor ease-in duration-200">
            <Link to="#">Revisar</Link>
          </li>
          <li className="p-4 hover:text-secondaryColor ease-in duration-200">
            <Link to="#">Contacto</Link>
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <>
      <div className=" bg-primaryColor fixed top-0 left-0 w-full z-50">
        <nav className="container relative h-14 flex justify-between items-center mt-5">
          <div>
            <Link className="flex text-2xl uppercase font-oswald" to="#">
              Bur <span className="text-secondaryColor">ger</span>
            </Link>
          </div>
          <div className="flex">
            <ul className="hidden  md:flex">
              <li className="p-4 hover:text-secondaryColor ease-in duration-200">
                <Link to="#">Inicio</Link>
              </li>
              <li className="p-4 hover:text-secondaryColor ease-in duration-200">
                <Link to="#">Sobre nosotros</Link>
              </li>
              <li className="p-4 hover:text-secondaryColor ease-in duration-200">
                <Link to="#">Menu</Link>
              </li>
              <li className="p-4 hover:text-secondaryColor ease-in duration-200">
                <Link to="#">Revisar</Link>
              </li>
              <li className="p-4 hover:text-secondaryColor ease-in duration-200">
                <Link to="#">Contacto</Link>
              </li>
            </ul>
          </div>
          <div>{nav && content}</div>
          <div className="flex gap-4">
            <i class="ri-moon-line cursor-pointer text-xl"></i>
            <div className="md:hidden" onClick={handleClik}>
              {nav ? (
                <i class="ri-close-line cursor-pointer text-2xl hover:text-3xl"></i>
              ) : (
                <i class="ri-menu-2-line cursor-pointer text-xl hover:text-3xl"></i>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
