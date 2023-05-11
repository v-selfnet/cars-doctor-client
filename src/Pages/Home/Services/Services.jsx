import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                console.log(data)
            })
    }, [])

    return (
        <div className="bg-red-100 rounded-2xl py-5">
            <div className="grid gap-6 lg:w-full text-center justify-center px-44 mb-10">
                <h1 className="font-bold">Services</h1>
                <h2 className="text-4xl">Services are avaialble 24/7 days & get connect with us anywhere, anytime...</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>

            <div className="grid justify-center lg:grid-cols-3 gap-10">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className="grid justify-center my-10">
                <button className="btn btn-secondary">Show More</button>
            </div>


        </div>
    );
};

export default Services;