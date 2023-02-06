import config from "@config/config.json";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ src }) => {
  // destructuring items from config object
  const { base_url, logo, logo_width, logo_height, logo_text, title } =
    config.site;

  return (
    <Link
      href={base_url}
      className="navbar-brand block flex py-1"
      style={{
        height: "100%",
        width: logo_width.replace("px", "") + "px",
      }}
    >
      {src || logo ? (
        <>
          <p className="text-md text-default z-10 -mr-8 mt-1 h-fit rounded-2xl bg-white pr-1">
            WebGennie
          </p>
          <Image
            width={logo_width.replace("px", "") * 2}
            height={logo_height.replace("px", "") * 2}
            src={src ? src : logo}
            alt={title}
            priority
          />
          <p className="text-md text-default mt-auto -ml-6 rounded-2xl bg-white pl-1">
            Solutions
          </p>
        </>
      ) : logo_text ? (
        <p>{logo_text}</p>
      ) : (
        <p>{logo_text}</p>
      )}
    </Link>
  );
};

export default Logo;
