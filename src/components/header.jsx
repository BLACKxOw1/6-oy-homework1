import Person from "../assets/Person.svg";
import Logo from "../assets/Logo.svg";
import Search from "../assets/Search.svg";
import Shop from "../assets/Shopping Cart.svg";


function Header() {
  return <div className="bg-[linear-gradient(to_right,#383638,#0B0B0B)] w-full border-b-1 border-zinc-800">
    <div className="container w-[1100px] h-[70px] m-auto flex justify-between items-center text-[#8B8E99]">
      <img className="cursor-pointer" src={Logo} alt="404" />
      <ul className="flex gap-[27px]">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Brands</li>
        <li className="cursor-pointer">Recent Products</li>
        <li className="cursor-pointer">Contact</li>
        <li className="cursor-pointer">About</li>
      </ul>
      <div className="flex gap-4">
        <img className="cursor-pointer" src={Search} alt="" />
        <img className="cursor-pointer" src={Person} alt="" />
        <img className="cursor-pointer" src={Shop} alt="" />
      </div>
    </div>
  </div>
}

export default Header