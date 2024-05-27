import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { RiLock2Line } from "react-icons/ri";
import img3 from './img3.png'
import { useState } from "react";
import './Homescreen.css'
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

function Homescreen(){
    const[view,updateview] =useState(true)
    return(<>
    
    <div id="mainscreen" className=" w-[1440px] h-[678px] bg-[#F7F5F9]">


<div id="textfir" className="w-[580px] absolute  h-[54px] text-4xl italic font-semibold leading-[54px] tracking-[0.02em] text-left left-[100px] top-[150px]">Explore your <span className="text-blue-400">hobby</span>  or <span className="text-purple-600">passion</span></div>

<div id="mainstat" className="w-[706px] h-[120px] absolute text-xl font-light leading-[30px] tracking-[0.02em] text-left left-[100px] top-[246px]">Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
</div>
<div id="leftone" className="w-[706px] h-[60px] absolute text-xl font-light leading-[30px] tracking-[0.02em] text-left left-[101px] top-[380px]">If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</div>

<div>
    <img id="lastimg" className=" absolute top-[540px] left-[100px] " src={img3} />
</div>





{view?
 <div id="loginbox" className=" bg-[#F7F5F9] relative top-[103px] left-[930px] h-[380px] w-[410px]">
        
<div >
    <button onClick={()=>{updateview(true)}} className="relative mr-2 text-xl p-4">Sign In</button>
    <button onClick={()=>{updateview(false)}} className=" relative p-4 text-xl">Join In</button>
</div>

<button id="fbbtn" className="w-[410px] mt-10 flex flex-row  relative border-[#8064A2]   border-2 h-10 gap-[88px]   rounded-lg">
    <span className=" translate-x-5 text-2xl translate-y-1"><FaGoogle/></span>
    <span className="w-[154px] absolute translate-x-[130px] translate-y-[8px] h-4 text-sm font-semibold leading-4 text-left">Continue with Google</span>
</button>

<button id="goobtn" className="w-[410px] mt-5 flex flex-row relative border-[#8064A2] border-2 h-10 gap-[88px]  pl-6 pr-32 py-3 rounded-lg">
    <span className=" translate-x-[-5px] text-2xl translate-y-[-3px]"><FaFacebook/></span>
    <span className="w-[154px] absolute translate-x-[110px] translate-y-[0px] h-4 text-sm font-semibold leading-4 text-left">Continue with Google</span>
</button>

<span id="txt" className=" absolute left-[37%] translate-y-[70px] text-sm font-normal">Or connect with</span>

<input id="inpemail" placeholder="        Email  " className="w-[410px] h-[40px] mt-10 gap-2.5 border  rounded-lg"/> 

<input id="inppass" placeholder="        Password  " className="w-[410px] h-[40px] mt-3 gap-2.5 border  rounded-lg"/> 

<div id="lock" className=" flex flex-row mt-3 ml-2">
    <span><MdOutlineCheckBoxOutlineBlank/></span>
    <span className="w-[92px] ml-1 h-4 text-sm font-normal leading-4 text-left left-6">Remember me</span>
</div>

<div id="frgt" className=" flex flex-row ">
    <span  className="translate-x-[275px] translate-y-[-15px]"><RiLock2Line/></span>
    <span className=" relative h-4 text-sm font-normal  top-[-20px] translate-x-[280px] translate-y-[3px]">Forgot password?</span>
</div>

<button id="finalbtn" className="w-[410px] h-[40px] absolute translate-y-[7px]  bg-[#F7F5F9] gap-2.5  text-xl font-semibold border-black border-2  rounded-lg">Continue</button> 



</div> 

:
 <div id="signupbox" className=" bg-[#F7F5F9] relative top-[103px] left-[930px] h-[380px] w-[410px]">
        
 <div >
    <button onClick={()=>{updateview(true)}} className="relative mr-2 text-xl p-4">Sign In</button>
    <button onClick={()=>{updateview(false)}} className=" relative p-4 text-xl">Log In</button>
</div>

<button className="w-[410px] mt-10  relative border-[#8064A2] border-2 h-10 gap-[88px]  pl-6 pr-32 py-3 rounded-lg">
    <span className="w-[154px] absolute translate-x-[10px] translate-y-[-8px] h-4 text-sm font-semibold leading-4 text-left">Continue with Google</span>
</button>

<button className="w-[410px] mt-5  relative border-[#8064A2] border-2 h-10 gap-[88px]  pl-6 pr-32 py-3 rounded-lg">
    <span className="w-[154px] absolute translate-x-[10px] translate-y-[-8px] h-4 text-sm font-semibold leading-4 text-left">Continue with Google</span>
</button>

<span className=" absolute left-[37%] translate-y-[70px] text-sm font-normal">Or connect with</span>

<input placeholder="        Email  " className="w-[410px] h-[40px] mt-10 gap-2.5 border  rounded-lg"/> 

<input placeholder="        Password  " className="w-[410px] h-[40px] mt-3 gap-2.5 border  rounded-lg"/> 

<span className="w-[402px] relative h-[18px] text-xs font-normal top-[10px] left-[13px] leading-[25px] text-left">By continuing, you agree to our Terms of Service and Privacy Policy.</span>



<button className="w-[410px] h-[40px] absolute translate-x-[-355px] translate-y-[50px]   gap-2.5 border  rounded-lg text-white font-semibold bg-[#8064A2]">Agree and Continue</button> 


</div> 
}
    </div>
    </>)
}
export default Homescreen;