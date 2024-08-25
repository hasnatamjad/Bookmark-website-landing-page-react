import logoBookmark from "../assets/images/logo-bookmark-footer.svg";
import iconFacebook from "../assets/images/icon-facebook.svg";
import iconTwitter from "../assets/images/icon-twitter.svg";

const menu = [
  {
    title: "features",
    url: "#features",
  },
  {
    title: "Download",
    url: "#downloads",
  },
  {
    title: "FAQ",
    url: "#faqs",
  },
];

const socialData = [
  {
    icon: iconFacebook,
    url: "./",
  },
  {
    icon: iconTwitter,
    url: "./",
  },
];
function Footer() {
  return (
    <>
      <footer className="py-14 bg-veryDarkBlue">
        <div className=" container flex flex-col items-center justify-between md:space-x-10 mx-auto space-y-16 px-1 md:flex-row md:space-y-0">
          <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue">
            <img src={logoBookmark} alt="" />
            {menu.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="uppercase hover:text-softRed"
              >
                {item.title}
              </a>
            ))}
          </div>
          <div className="flex space-x-10">
            {socialData.map((item, index) => (
              <a href={item.url} key={index}>
                <img src={item.icon} alt="" className="h-6 ficon" />
              </a>
            ))}
          </div>
          <a
            href="https://www.linkedin.com/in/hasnatamjad"
            target="_blank"
            className="text-grayishBlue text-sm hover:text-softRed"
          >
            Developed by Hasnat
          </a>
        </div>
        {/* <div className="container flex items-center justify-center md:justify-end mx-auto px-6">
          <p className="text-grayishBlue text-sm">Developed by Hasnat</p>
        </div> */}
      </footer>
    </>
  );
}

export default Footer;
