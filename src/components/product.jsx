import Watch1 from "../assets/17b2724d5bd682148b44a88441cad7bfa9fe6730_original-removebg-preview 1.svg";
import icon1 from "../assets/Group 5.svg"


function Product() {
  return <div className="bg-[linear-gradient(to_right,#383638,#0B0B0B)] w-full ">
    <div className="container w-[1100px] m-auto flex justify-between">
      <div>
        <h1 className="text-white font-poppins font-bold text-[64px] leading-[125%] tracking-[0%] pt-[154px]">Discover <br />Most Suitable <br />Watches</h1>
        <p className="text-[#8B8E99] font-bold text-[16px] leading-[125%] tracking-[0%] pt-3">Find the best, reliable, and cheap smart watches here. <br />We focus on product quality. Here you can find smart <br />watches of almost all brands. So why you are waiting? <br />Just order now!</p>
        <div className="flex items-center bg-white rounded-[15px] px-4 py-2 mt-14 w-[400px]">
          <img className="cursor-pointer" src={icon1} alt="" />
          <input
            type="text"
            placeholder="Find the best brands"
            className="flex-1 px-3 text-[#8b8e99c9] focus:outline-none"
          />
          <button className="bg-[#3858D6] text-white font-semibold px-5 py-2 rounded-[9px] cursor-pointer">
            Search
          </button>
        </div>
      </div>
      <div className="pt-[102px] pb-[122px]">
        <img src={Watch1} alt="404" />
      </div>
    </div>
  </div>
}

export default Product