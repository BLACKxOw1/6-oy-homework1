import Apple from "../assets/apple-watch-series7-black-myshop-pk-1-removebg-preview 1.svg";
import Xiamoi from "../assets/xiaomi_redmi_watch_2_lite_azul_01_l-removebg-preview 1.svg";
import Fitbit from "../assets/6426000_sd-removebg-preview 1.svg";


function Brand() {
  return <div className="bg-white w-full ">
    <div className="container w-[1100px] m-auto flex justify-between pt-[80px] pb-[110px] color black">
      <div className="w-[354px] h-[239px] rounded-[22px] flex gap-[26px] justify-center items-center bg-[#F6F6F6] cursor-pointer">
        <div>
          <img src={Apple} alt="404" />
        </div>
        <div>
          <h2 className="text-[#1E1D1D] text-[36px] font-bold leading-[100%] tracking-[0%] pb-[10px]">Apple</h2>
          <p className="text-[#8B8E99] text-[16px] font-bold leading-[100%] tracking-[0%]">Apple is one of the <br />most famous smart <br />watches providing <br />company.</p>
        </div>
      </div>
      <div className="w-[354px] h-[239px] rounded-[22px] flex gap-[26px] justify-center items-center bg-[#F6F6F6] cursor-pointer">
        <div>
          <img src={Xiamoi} alt="404" />
        </div>
        <div>
          <h2 className="text-[#1E1D1D] text-[36px] font-bold leading-[100%] tracking-[0%] pb-[10px]">Apple</h2>
          <p className="text-[#8B8E99] text-[16px] font-bold leading-[100%] tracking-[0%]">Apple is one of the <br />most famous smart <br />watches providing <br />company.</p>
        </div>
      </div>
      <div className="w-[354px] h-[239px] rounded-[22px] flex gap-[26px] justify-center items-center bg-[#F6F6F6] cursor-pointer">
        <div>
          <img src={Fitbit} alt="404" />
        </div>
        <div>
          <h2 className="text-[#1E1D1D] text-[36px] font-bold leading-[100%] tracking-[0%] pb-[10px]">Apple</h2>
          <p className="text-[#8B8E99] text-[16px] font-bold leading-[100%] tracking-[0%]">Apple is one of the <br />most famous smart <br />watches providing <br />company.</p>
        </div>
      </div>
    </div>
  </div>
}

export default Brand