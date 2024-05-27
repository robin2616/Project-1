import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import './Footer.css'

function Footer(){
    return(<>
    <div className=" w-[1440px] h-[380px]">


<div id="mainfootbox" className="w-[1217px] h-[182px] relative  rounded-lg left-[102px] top-[60px]">
    
<div id="foot1" className="w-[120px] flex gap-1 flex-col relative h-[156px] left-[102px] top-[60px] ">
    <div className=" font-bold text-xl">Hobbycue</div>
    <div className=" text-xl">About Us</div>
    <div className=" text-xl">Our Services</div>
    <div className=" text-xl">Work with Us</div>
    <div className=" text-xl">FAQ</div>
    <div className=" text-xl">Contact Us</div>
</div>
<div className="w-[150px] flex flex-col gap-1 relative h-[182px] left-[382px] top-[-100px] ">
    <div className=" font-bold text-xl ">How Do I</div>
    <div className=" text-xl">Sign Up</div>
    <div className=" text-xl">Add a Listing</div>
    <div className=" text-xl">Claim Listing</div>
    <div className=" text-xl">Post a Query</div>
    <div className=" text-xl">Add a Blog Post</div>
    <div className=" text-xl">Other Queries</div>
</div>
<div className=" flex flex-col relative w-[150px] h-[130px] left-[682px] top-[-285px] ">
    <div className=" font-bold text-xl">How Do I</div>
    <div className=" text-xl">Sign Up</div>
    <div className=" text-xl">Add a Listing</div>
    <div className=" text-xl">Claim Listing</div>
    <div className=" text-xl">Post a Query</div>
    <div className=" text-xl">Add a Blog Post</div>
    <div className=" text-xl">Other Queries</div>
</div> 
</div>
<div className="w-[360px] relative h-[58px] left-[959px] top-[-100px]">
    <span className=" font-bold text-2xl ">Social Media</span>
    <div className=" flex flex-row gap-3 text-2xl mt-2">
        <span><FaFacebook/></span>
        <span><FaTwitter/></span>
        <span><FaInstagram/></span>
        <span><FaPinterest/></span>
        <span><FaGoogle/></span>
        <span><FaYoutube/></span>
        <span><FaTelegram/></span>
        <span><FaMessage/></span>
    </div>
</div>

<div className="w-[360px] h-[74px] relative    rounded-[8px] left-[959px] top-[120px]">
<span className=" font-bold text-2xl ">Invite Friends</span>
<div className=" flex flex-row mt-4">
    <input className=" h-[40px] w-[300px] rounded-[10px] border-[#8064A2] border-2"/>
    <button className="h-[40px] w-[60px] rounded-[10px] bg-[#8064A2] text-white">Invite</button>
</div>
</div>

        <div className=" bg-[#F7F5F9] h-[78px] relative top-[302px]">
    <span className="w-[209px] relative h-[18px] text-xl font-semibold leading-[18px] tracking-[0.005em] text-left left-[615px] top-[32px]">© Purple Cues Private Limited</span></div>
    </div> 
    </>)
}
export default Footer;