import img2 from "./img2.png";

function End(){
    return(<>
    <div className=" w-[1440px] h-[662px] bg-[#F7FDFF]">

<span className="w-[565px] h-[54px] relative  text-4xl italic font-medium leading-[54px] text-left left-[100px] top-[100px]">Your <span className="text-[#8064A2]">Hobby</span>, Your <span className="text-blue-400">Community</span> ...</span>


<div className=" relative w-[1240px] h-[302px] left-[100px] top-[260px]">
<img src={img2} alt="" />
</div>

<button className="w-[147px] h-[46px] relative text-white  text-xl font-semibold leading-[30px] text-left bg-[#8064A2] gap-2.5  px-4 py-2 rounded-[8px] left-[100px] top-[-150px]">
Get started
</button>







    </div>
    </>)
}
export default End;