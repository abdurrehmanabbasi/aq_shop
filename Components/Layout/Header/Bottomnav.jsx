import {ChevronDownIcon, FireIcon, PhoneIcon, Squares2X2Icon} from "@heroicons/react/24/outline"
const Bottomnav = () => {
    return ( <div className="flex justify-around p-2 ">
        
        <div className="flex">
        
        <button className=" flex justify-center items-center bg-green-500  p-1 rounded-lg text-white">
        <Squares2X2Icon className="w-8"/>
            <span>Browse Categories</span>
        <ChevronDownIcon className="w-6"/>    
        </button>

        <div className="ml-14 flex gap-6 justify-center items-center">
            
                <a href="" className="flex text-red-500">
                <FireIcon className="w-8" />
                Hot Deals
                </a>
                
                <a href="" className="">
                Top Dates
                </a>
                <a href="" className="">
                Top Pickles
                </a>
                <a href="" className="">

                Top Other
                </a>
        </div>

        </div>
        
        <div className="flex items-center ml-44">
            <PhoneIcon className="w-10"/>
            <span className="flex flex-col text-center items-center justify-center"><span className="text-green-500 text-lg">+923153558965</span>
            <span className="text-xs">24/7 Support Center</span>
            </span>
        </div>
    </div> );
}
 
export default Bottomnav;