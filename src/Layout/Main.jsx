import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar'
import Footer from '../Pages/Shared/Footer/Footer'
const Main = () => {
    return (
        <div className='grid gap-10'>

            <Navbar></Navbar>
            
            <Outlet></Outlet>   {/* all home routes */}

            <Footer></Footer>
        </div>
    );
};

export default Main;