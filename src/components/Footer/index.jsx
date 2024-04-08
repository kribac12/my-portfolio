import { IoIosArrowUp } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-lightColor text-black">
      <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
        <span>Kristine Molvær-Bache © {new Date().getFullYear()}</span>
        <a href="#top" className="hover:underline flex items-center md:text-lg">
          Back to Top <IoIosArrowUp className="ml-2 " />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
