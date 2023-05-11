import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-2xl" />
                
                <div className="absolute h-full bg-gradient-to-r from-[#040404] to-[gba(21, 21, 21, 0) 102.28%)] rounded-2xl">
                    <div className='max-w-lg space-y-7 ml-10 mt-20'>
                        <h2 className='text-7xl text-white font-extrabold'>Affortable Price for Car Service</h2>
                        <p className='text-2xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-secondary mr-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
                
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle mr-5 bg-red-700">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-red-700">❯</a>
                </div>
            
            </div>
            
            
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-2xl" />
                <div className="absolute h-full bg-gradient-to-r from-[#040404] to-[gba(21, 21, 21, 0) 102.28%)] rounded-2xl">
                    <div className='max-w-lg space-y-7 ml-10 mt-20'>
                        <h2 className='text-7xl text-white font-extrabold'>Affortable Price for Car Service</h2>
                        <p className='text-2xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-secondary mr-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5 bg-red-700">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-red-700">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-2xl" />
                <div className="absolute h-full bg-gradient-to-r from-[#040404] to-[gba(21, 21, 21, 0) 102.28%)] rounded-2xl">
                    <div className='max-w-lg space-y-7 ml-10 mt-20'>
                        <h2 className='text-7xl text-white font-extrabold'>Affortable Price for Car Service</h2>
                        <p className='text-2xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-secondary mr-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5 bg-red-700">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-red-700">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-2xl" />
                <div className="absolute h-full bg-gradient-to-r from-[#040404] to-[gba(21, 21, 21, 0) 102.28%)] rounded-2xl">
                    <div className='max-w-lg space-y-7 ml-10 mt-20'>
                        <h2 className='text-7xl text-white font-extrabold'>Affortable Price for Car Service</h2>
                        <p className='text-2xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-secondary mr-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5 bg-red-700">❮</a>
                    <a href="#slide5" className="btn btn-circle bg-red-700">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full rounded-2xl" />
                <div className="absolute h-full bg-gradient-to-r from-[#040404] to-[gba(21, 21, 21, 0) 102.28%)] rounded-2xl">
                    <div className='max-w-lg space-y-7 ml-10 mt-20'>
                        <h2 className='text-7xl text-white font-extrabold'>Affortable Price for Car Service</h2>
                        <p className='text-2xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-secondary mr-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5 bg-red-700">❮</a>
                    <a href="#slide6" className="btn btn-circle bg-red-700">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full rounded-2xl" />
                <div className="absolute h-full bg-gradient-to-r from-[#040404] to-[gba(21, 21, 21, 0) 102.28%)] rounded-2xl">
                    <div className='max-w-lg space-y-7 ml-10 mt-20'>
                        <h2 className='text-7xl text-white font-extrabold'>Affortable Price for Car Service</h2>
                        <p className='text-2xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-secondary mr-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle mr-5 bg-red-700">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-red-700">❯</a>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;