import { Outlet } from "react-router-dom";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
// import Blogs from "../pages/Blogs";
// import Bookmarks from "../pages/Bookmarks";
// import Home from "../pages/Home";


const MainLayouts = () => {
    return (
        <div>
            <div className="h-16">
                <Nav></Nav>
            </div>

            {/* <Home></Home>
            <Blogs></Blogs>
            <Bookmarks></Bookmarks> */}
            <div className="min-h-[calc(100vh-116px)]">
            <Outlet></Outlet> 
            </div>  

            <Footer></Footer> 
            
        </div>
    );
};

export default MainLayouts;