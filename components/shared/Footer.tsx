import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bg-[#aec3b0]">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <h1 className="font-bold text-xl">EventPulse</h1>
        </Link>

        <p>2024 EventPulse. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
