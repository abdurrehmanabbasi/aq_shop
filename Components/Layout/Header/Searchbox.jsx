import {ChevronDownIcon,MagnifyingGlassIcon} from '@heroicons/react/24/solid'
const Searchbox = () => {
    return ( 
        <div className="flex bg-slate-200 h-10 rounded-md">
        <button className="text-base flex items-center p-2">All Categories <ChevronDownIcon className="w-5 p-1"/> </button>
        <input type="text" placeholder="Search for items" className="bg-transparent outline-none p-2 w-96" />
        <MagnifyingGlassIcon  className="p-2"/>    
        </div>
     );
}
 
export default Searchbox;