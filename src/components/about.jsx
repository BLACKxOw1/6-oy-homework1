import vector from "../assets/Vector.svg";
import Person1 from "../assets/6426000_sd-removebg-preview 1 (1).svg";
import Person2 from "../assets/6426000_sd-removebg-preview 1 (2).svg";
import Dots from "../assets/Dots.svg";


function About() {
  return <div className="bg-white w-full ">
    <div className="container w-[1100px] m-auto flex flex-col items-center pt-[100px] pb-[135px] overflow-hidden">
      <div className="pb-[55px] flex flex-col items-center">
        <p className="text-[#3858D6] font-bold text-[16px] leading-[100%] tracking-[0%]">Here are our some of the best clients.</p>
        <h2 className="text-[#1E1D1D] font-bold text-[36px] leading-[100%] tracking-[0%]">What People Say About Us</h2>
      </div>
      <div className="flex gap-[53px] pb-[49px]">
        <div className="bg-[#F6F6F6] w-[524px] h-[239px] rounded-[22px] flex items-center justify-center gap-[29px] cursor-pointer">
          <div className="max-w-[162px] max-h-[179px] rounded-[15px]"><img src={Person1} alt="404" className="object-cover" /></div>
          <div>
            <div>
              <h2 className="text-[#1E1D1D] font-bold text-[24px] leading-[100%] tracking-[0%] pb-[10px]">Hamza Faizi </h2>
              <p className="text-[#8B8E99] font-bold text-[16px] leading-[100%] tracking-[0%]">Don’t waste time, just order! This <br />is the best website to puschase <br />smart watches.</p>
            </div>
            <div className="flex items-center gap-[7px] pt-[9px]">
              <img src={vector} alt="" />
              <img src={vector} alt="" />
              <img src={vector} alt="" />
              <img src={vector} alt="" />
              <img src={vector} alt="" />
            </div>
          </div>
        </div>
        <div className="bg-[#F6F6F6] w-[524px] h-[239px] rounded-[22px] flex items-center justify-center gap-[29px] cursor-pointer">
          <div className="max-w-[162px] max-h-[179px] rounded-[15px]"><img src={Person2} alt="404" className="object-cover" /></div>
          <div>
            <div>
              <h2 className="text-[#1E1D1D] font-bold text-[24px] leading-[100%] tracking-[0%] pb-[10px]">Hafiz Huzaifa</h2>
              <p className="text-[#8B8E99] font-bold text-[16px] leading-[100%] tracking-[0%]">I’ve been purchasing smart <br />watches of Mohid for a long time. <br />All the products are good quality.</p>
            </div>
            <div className="flex items-center gap-[7px] pt-[9px]">
              <img src={vector} alt="" />
              <img src={vector} alt="" />
              <img src={vector} alt="" />
              <img src={vector} alt="" />
              <img src={vector} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div><img src={Dots} alt="404" /></div>
    </div>
  </div>
}

export default About