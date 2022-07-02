import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
const Layout = ({ children}) => {
    return (
        <div className="contant">
            <Sidebar/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout