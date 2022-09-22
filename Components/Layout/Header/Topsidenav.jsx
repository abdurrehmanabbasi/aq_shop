import {UserIcon,HeartIcon, ShoppingCartIcon, MapPinIcon, ChevronDownIcon} from "@heroicons/react/24/outline"
const Topsidenav = () => {
    return ( <div className="flex items-center gap-3 h-10">
        <a href="" className="flex  text-lg border-2 text-green-500 p-1">
        <MapPinIcon className="" />
              Country
        <ChevronDownIcon className="w-10" />
        </a>
     
        <a href="" className="flex ml-4 h-6 text-lg">
        <UserIcon className="" />
              Account
        </a>
        
        <a href="" className="flex relative h-6 text-lg">
        <HeartIcon className="" />
        <span className="inline-flex absolute left-4 text-xs -top-2 text-white bg-green-500 rounded-full p-1">8</span>
        <span className="ml-2 text-slate-500">Wishlist</span> 
              
        </a>

        <a href="" className="flex relative h-6 text-lg">
        <ShoppingCartIcon className="" />
        <span className="inline-flex absolute left-4 text-xs -top-2 text-white bg-green-500 rounded-full p-1">2</span>
        <span className="ml-2 text-slate-500">Cart</span> 
              
        </a>
    </div> );
}
 
export default Topsidenav;