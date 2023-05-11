import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 rounded-2xl">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative'>
                        <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={parts} className=" w-1/2 absolute top-1/2 right-5 border-8  border-red-200 rounded-lg shadow-2xl" />
                    </div>

                    <div className="grid gap-6 lg:w-1/2">
                        <h1 className="font-bold">About</h1>
                        <p className="text-4xl ">We are qualified & of experience in this field</p>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  </p>
                        <button className="btn btn-primary">Get More Info</button>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default About;