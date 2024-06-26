import { FaPeopleGroup } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import './Feature.css'



function Feature(){
    return(<>
    <div id="mainbox" className=" relative w-[1440px] h-[818px]">

<div id="box1" className="w-[608px] h-[297px] border-[#8064A2] hover:bg-[#8064A2] hover:text-white  border-2 relative rounded-[8px] left-[100px] top-[100px]">

<div id="icon1" className="w-[147px] h-10 flex flex-row relative left-[44px] top-[40px]">
    <span className=" text-[35px] mr-3 text-[#8064A2]"><FaPeopleGroup/></span>
    <div className="w-[83px] h-9 text-2xl font-bold leading-9 text-left left-52 top-[142px]">
        People
    </div>
</div>

<div id="text1" className="text-xl font-semibold leading-[27px] text-left w-[520px] relative h-[81px] left-10 top-[74px]">
Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.

</div>

<div id="fbtn1" className="w-[122px] relative h-10  gap-2.5 border pl-[30px] pr-[31px] py-3 rounded-[8px] left-10 top-[100px]">
    <button id="fbtn1t" className=" text-[#8064A2] text-xl font-semibold translate-x-[-6px] translate-y-[-5px]">Connect</button>
</div>






</div>

<div id="box2" className="w-[608px] h-[297px] border-[#77933C] hover:bg-[#77933C] hover:text-white border-2 relative rounded-[8px] left-[732px] top-[-200px]">
    

<div id="icon2" className="w-[147px] h-10 flex flex-row relative left-[44px] top-[40px]">
    <span className=" text-[35px] mr-3 text-[#77933C]"><MdLocationOn/></span>
    <div className="w-[83px] h-9 text-2xl font-bold leading-9 text-left left-52 top-[142px]">
        Place
    </div>
</div>

<div id="text2" className="text-xl font-semibold leading-[27px] text-left w-[520px] relative h-[81px] left-10 top-[74px]">
Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.
</div>

<div id="fbtn2" className="w-[122px] relative h-10  gap-2.5 border pl-[30px] pr-[31px] py-3 rounded-[8px] left-10 top-[100px]">
    <button id="fbtnt2" className=" text-[#8064A2] text-xl font-semibold translate-x-[-6px] translate-y-[-5px]">Meet up</button>
</div>




</div>

<div id="box3" className="w-[608px] h-[297px] border-[#C0504D] hover:bg-[#C0504D] hover:text-white border-2 relative  rounded-[8px] left-[100px] top-[-170px]">
    

<div id="icon3" className="w-[147px] h-10 flex flex-row relative left-[44px] top-[40px]">
    <span className=" text-[35px] mr-3 text-[#C0504D]"><FaBagShopping/></span>
    <div className="w-[83px] h-9 text-2xl font-bold leading-9 text-left left-52 top-[142px]">
        Product
    </div>
</div>

<div id="text3" className="text-xl font-semibold leading-[27px] text-left w-[520px] relative h-[81px] left-10 top-[74px]">
Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.
</div>


<div id="fbtn3" className="w-[122px] relative h-10  gap-2.5 border pl-[30px] pr-[31px] py-3 rounded-[8px] left-10 top-[100px]">
    <button id="fbtnt3" className=" text-[#8064A2] text-xl font-semibold translate-x-[-6px] translate-y-[-5px]">Get it</button>
</div>






</div>
<div id="box4" className="w-[608px] h-[297px] border-[#0096C8] hover:bg-[#0096C8] hover:text-white border-2 relative  rounded-[8px] left-[732px] top-[-467px]">
    
<div id="icon4" className="w-[147px] h-10 flex flex-row relative left-[44px] top-[40px]">
    <span className=" text-[35px] mr-3 text-[#0096C8]"><MdDateRange/></span>
    <div className="w-[83px] h-9 text-2xl font-bold leading-9 text-left left-52 top-[142px]">
        Program
    </div>
</div>


<div id="text4" className="text-xl font-semibold leading-[27px] text-left w-[520px] relative h-[81px] left-10 top-[74px]">
Find events, meetups and workshops related to your hobby.  Register or buy tickets online.
</div>



<div id="fbtn4" className="w-[122px] relative h-10  gap-2.5 border pl-[30px] pr-[31px] py-3 rounded-[8px] left-10 top-[100px]">
    <button id="fbtnt4" className=" text-[#8064A2] text-xl font-semibold translate-x-[-6px] translate-y-[-5px]">Attend</button>
</div>









</div>








    </div>
    </>)
}
export default Feature;