import img from "../assets/MKUQ3_VW_34FR+watch-45-alum-midnight-nc-7s_VW_34FR_WF_CO-removebg-preview (1) 1.svg";


function Subscribe() {
  return <div className="bg-white w-full ">
    <div className="container w-[1100px] m-auto flex justify-between">
      <div className="w-full h-[377px] bg-[#F6F6F6] flex items-center justify-center gap-[180px] mb-[95px]">
        <div>
          <h1 className="font-bold text-[#1E1D1D] text-[36px] leading-[100%] tracking-[0%]">Subscribe To Newsletter</h1>
          <p className="font-bold text-[#8B8E99] py-5  text-[16px] leading-[100%] tracking-[0%]">Get free guide about smart watches daily. </p>
          <div className="flex items-center bg-white rounded-[15px] mt-2 px-4 py-2 w-[440px]">
            <input
              type="text"
              placeholder="Find the best brands"
              className="flex-1 px-1 text-[#8b8e99c9] focus:outline-none"
            />
            <button className="bg-[#3858D6] text-white font-semibold px-5 py-2 rounded-[9px] cursor-pointer">
              Search
            </button>
          </div>
        </div>
        <div>
          <img className="cursor-pointer" src={img} alt="" />
        </div>
      </div>
    </div>
  </div>
}

export default Subscribe