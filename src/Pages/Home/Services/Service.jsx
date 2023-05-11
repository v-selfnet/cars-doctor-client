import { Link } from "react-router-dom";

const Service = ({ service }) => {
    const { img, title, price } = service;
    return (
        <div className="card w-72 bg-base-100 shadow-xl">
                <img src={img} alt="Photo" className="w-full rounded-xl" />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-2xl">${price}</p>
                <Link to='/'>Detail</Link>
            </div>
        </div>
    );
};

export default Service;