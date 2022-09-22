import Logo from "./Logo";
import Searchbox from './Searchbox'
import Topsidenav from "./Topsidenav";
import Topnav from "./Topnav";
import Bottomnav from "./Bottomnav";
const Header = () => {
    return (<header className="border-b-2">
        <Topnav />
        <div className="w-screen h-20 flex items-center justify-evenly bg-white border-2">
        <Logo />
        <Searchbox />    
        <Topsidenav />
        </div>
        <Bottomnav/>
    </header> );
}
 
export default Header;