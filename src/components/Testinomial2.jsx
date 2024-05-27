import { TbVectorBezierCircle } from "react-icons/tb";
import './Testinomial2.css'
import { FaPlayCircle } from "react-icons/fa";

function Testinomial2(){
    return(<>
    <div id="maintexztbox" className=" w-[1440px] h-[672px] bg-black-200">

        <div id="insidemain" className="w-[1240px] h-[472px] relative left-[100px] top-[100px] bg-[#F7F5F9] rounded-xl">
        
        <div className=" relative w-[221px] flex flex-row  h-10 left-[40px] top-[50px]">
            <span className="text-[35px] mr-4 text-[#8064A2]"><TbVectorBezierCircle/></span>
            <div className="w-[157px] h-9  text-[30px] font-semibold leading-9 text-left left-[204px] top-[142px]">Testimonials</div>
        </div>

        <div className="w-[1160px] font-semibold translate-y-[-40px]  h-[180px] text-[20px] relative text-lg leading-[30px] tracking-[0.02em] text-left left-[40px] top-[112px]">In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</div>
        
        <div className="w-[776px] absolute h-[100px] gap-0 opacity-[0px] left-[40px] rounded-8px bg-[#CCC1DA] top-[342px]">
            <span className="w-10 h-10 absolute left-[172px] top-[34px]text-4xl"><FaPlayCircle/></span>
        </div>
        
        </div>
        
    </div>
    </>)
}
export default Testinomial2;