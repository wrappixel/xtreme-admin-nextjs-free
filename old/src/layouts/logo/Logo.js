import LogoDark from "../../assets/images/logos/xtremelogo.svg";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <Image src={LogoDark} alt="logo" />
      </a>
    </Link>
  );
};

export default Logo;
