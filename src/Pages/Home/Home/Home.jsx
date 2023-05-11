import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div className="w-4/5 mx-auto grid gap-10">
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;