import LogoDark from "public/images/logos/xtremelogo.svg";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
        <Image src={LogoDark} alt="logo" />
    </Link>
  );
};

export default Logo;
