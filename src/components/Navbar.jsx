import { useState, useEffect } from "react";
import logoBookmark from "../assets/images/logoBookmark.svg";
import logoBookmarkTwo from "../assets/images/logo-bookmark-footer.svg";
import hamBurger from "../assets/images/hamBurger.svg";
import menuClose from "../assets/images/menuClose.svg";

const menuList = [
  { id: 1, navItem: "Features", url: "#features" },
  { id: 2, navItem: "Download", url: "#download" },
  { id: 3, navItem: "FAQs", url: "#faq" },
];

function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  function handleNav() {
    if (openNav === false) {
      setOpenNav(true);
    } else {
      setOpenNav(false);
    }
  }
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpenNav(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="container relative mx-auto px-4 py-6">
        <div className="flex items-center justify-between md:space-x-20 mt-4 mb-6">
          <div className="z-50">
            <img src={openNav ? logoBookmarkTwo : logoBookmark} alt="" />
          </div>
          <div
            className={`${
              openNav
                ? "flex flex-col fixed inset-0 z-20 w-full h-full max-h-screen px-6 py-1 pt-24 pb-4  text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue "
                : " hidden space-x-10 uppercase text-grayishBlue"
            }  md:flex items-center lg:self-end `}
          >
            <ul
              className={`${
                openNav
                  ? "relative z-1  justify-center  space-y-10 mt-5 "
                  : "items-center space-x-10  text-grayishBlue"
              } flex flex-col md:flex-row items-center uppercase`}
            >
              {menuList.map((item) => (
                <li
                  key={item.id}
                  className={`${
                    openNav ? "text-white " : "text-grayishBlue"
                  } hover:text-softRed`}
                >
                  <a
                    href={item.url}
                    className="tracking-wide"
                    onClick={() => handleScrollTo(item.navItem)}
                  >
                    {item.navItem}
                  </a>
                </li>
              ))}
              <li className="px-8 py-2 text-white bg-softRed uppercase text-lg  shadow-sm rounded-lg border-2 border-softRed hover:text-softRed hover:bg-white cursor-pointer ">
                <a href="">Login</a>
              </li>
            </ul>
          </div>

          <MenuButton openNav={openNav} clrClose={`#fff`} onClick={handleNav} />
        </div>
      </nav>
    </>
  );
}

function MenuButton({
  openNav,
  clrOpen = "#000",
  clrClose = "#000",
  size = "26",
  onClick,
}) {
  return (
    <>
      <div className="block md:hidden z-50 cursor-pointer" onClick={onClick}>
        {!openNav ? (
          <svg
            width={`${size}px`}
            height={`${size}px`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#000000"
                fillRule="evenodd"
                d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
              ></path>
            </g>
          </svg>
        ) : (
          <svg
            width={`${size}px`}
            height={`${size}px`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke={clrClose}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              <path
                d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                fill={clrClose}
              />
            </g>
          </svg>
        )}
      </div>
    </>
  );
}

export default Navbar;
