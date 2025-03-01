import Contact from "./Contact";
import Members from "./Members";

export default function Footer() {
  return (
    <footer className="p-4 flex flex-col md:flex-row gap-8 border-t border-gray-200 justify-between items-center bg-footerfarge text-darkgrey font-anton">
      <div className="text-center md:text-left">
        <Contact />
      </div>
      <div className="text-center md:text-right">
        <Members />
      </div>
      <div className="text-center text-sm text-gray-500">
        <p>ETABLERT 2024</p>
      </div>
    </footer>
  );
}