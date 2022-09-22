import Header from './Header/index.jsx'
import Footer from './Footer/index.jsx'
const Layout = ({children}) => {
    return ( 
            <div className="root overflow-hidden">
        <Header/>
        <main>{children}</main>
        <Footer/>
        </div>
     );
}
 
export default Layout;