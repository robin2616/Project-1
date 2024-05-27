import { HiPlusCircle } from "react-icons/hi";
import './Testinomial1.css'

function Testinomial1() {
    return (<>
        <div id="mainnobox" className=" w-[1440px] h-[484px]  bg-[#F7FDFF]">


            <div id="insidenobox" className="w-[1240px] rounded-xl h-[284px] bg-white border-grey-400 border-2 opacity-[0px] relative left-[100px] top-[100px]">
                <div className=" w-[1160px] h-[204px] relative top-[40px] left-[40px] gap-8 opacity-[0px]">

                    <div  className="w-[232px] h-10 flex flex-row ">
                        <span className=" text-[35px] text-[#0096C8] mr-4"><HiPlusCircle /></span>
                        <div className="w-[168px] h-9 gap-0 opacity-[0px] text-2xl font-bold leading-9 text-left left-16 top-0.5">Add Your Own</div>
                    </div>

                    <div id="textbox" className=" mt-8 mb-8 w-[1160px] h-[60px] text-xl leading-[30px] tracking-[0.02em] font-semibold text-left">Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</div>

                    <div id="lastbtn" className=" w-[121px] text-sm text-[#8064A2] font-semibold leading-4 text-left h-[40px] gap-2.5 border px-[29px] py-3 relative rounded-[8px] border-[0px_0px]"><span id="btntext">Add New</span></div>





                </div>




            </div>




        </div>
    </>)
}
export default Testinomial1;