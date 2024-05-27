import { FaRegMoneyBill1 } from "react-icons/fa6";
import p1 from "./img1.png";
import { FaSearch } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";
import { IoCartSharp } from "react-icons/io5";
import { useState } from "react"
import { TiThMenu } from "react-icons/ti";

import './Header.css'
function Header(){
    const[show,updateshow]=useState(false)
    const[a,b]=useState(false)
    return(<>
    {a && <span id="threedot"><TiThMenu/></span>}
   <div  className=" bg-white h-[80px] w-[1440px]" >
<div className="w-[293.26px] relative  h-[60px] left-[97px] top-2.5">
    <img id="headingpic" src={p1} alt="" />
</div>
<div className="w-[300px] h-10 border  opacity-[0px] rounded-[8px] bg-[#F8F9FA]  relative left-[425px] top-[-38px]">
    <input className=" relative h-[40px] w-[260px] bg-[#F8F9FA] border-grey-200 border-2 rounded-[8px]" placeholder="  Search Here . . .  "></input>
    <div  className="w-[40px] h-[40px] absolute right-[0px] top-[0px] rounded-e-[8px] bg-[#8064A2]">
        <button id="searchtag" className=" absolute text-xl font-light text-white top-2 left-2"><FaSearch/></button>
    </div>
</div>

<div className="w-[525px] flex flex-row gap-2 h-10   opacity-[0px] rounded-[8px] relative left-[815px] top-[-78px]">

<button onMouseEnter={()=>{updateshow(true)}} onMouseLeave={()=>{updateshow(false)}} className="flex flex-row mr-4">
<button className=" text-[30px] text-[#8064A2]"><MdOutlineExplore/></button>
    <button className="text-[20px]">Explore</button>
   
</button>

<button className="flex flex-row mr-4">
<button className=" text-[30px] text-[#8064A2]"><BsStarFill/></button>
    <button  className="text-[20px]">Hobbies</button>
    
</button>

<button className="text-[30px] translate-y-[-3px] text-[#8064A2] mr-4">
    <BsFillBookmarkFill/>
</button>

<button id="bellicon" className="text-[30px] translate-y-[-3px] text-[#8064A2] mr-4">
    <BsBellFill/>
</button>

<button className="text-[30px] translate-y-[-3px] text-[#8064A2] mr-4">
    <IoCartSharp/>
</button> 

<button className="w-28 h-10 text-[#8064A2]  border-[#8064A2] border-2 rounded-[8px] left-[1228px] top-5">
Sign In
</button>


{show &&
<div onMouseEnter={()=>{updateshow(true)}} onMouseLeave={()=>{updateshow(false)}} className="w-[220px] flex flex-col h-[auto] absolute  left-[-60px]  top-[40px]  ">
<span className="p-3 translate-x-3 hover:scale-105  bg-white">People - Community</span>
<span className="p-3 translate-x-3 hover:scale-105 bg-white">Places - Venues</span>
<span className="p-3 translate-x-3 hover:scale-105 bg-white">Programs - Events</span>
<span className="p-3 translate-x-3 hover:scale-105 bg-white">Products - Store</span>
<span className="p-3 translate-x-3 hover:scale-105 bg-white">Blogs</span>
</div>}


</div>














   </div>




    </>)
}
export default Header;