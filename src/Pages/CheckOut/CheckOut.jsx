import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

// bookingService
const CheckOut = () => {
    const loadService = useLoaderData();
    const { title, service_id, price } = loadService;

    // call context api for display active user
    const {user} = useContext(AuthContext)
    // console.log(user)
    
    const handleBookNow = event => {
        event.preventDefault()
        const form = event.target;
        const serviceid = form.serviceid.value;
        const title = form.title.value;
        const price = form.price.value;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // const email = user?.email; // use this way for read only data
        const booking = {serviceid, title, price, name, date, email, phone} // take data as object
        console.log(booking)

        // send data to server via [POST]
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Successfully Booked Service. Update to Database.')
            }
        })
    }

    return (
        <form onSubmit={handleBookNow}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-20">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service iD</span>
                    </label>
                    <input type="text" defaultValue={service_id} name="serviceid" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Name</span>
                    </label>
                    <input type="text" defaultValue={title} name="title" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Serivice Price</span>
                    </label>
                    <input type="text" defaultValue={'$' + price} name="price" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" defaultValue={user?.displayName} name="name" placeholder="name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" name="date" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" defaultValue={user?.email} placeholder="email" name="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input type="text" placeholder="phone" name="phone" className="input input-bordered" />
                </div>
            </div>
            <div className="form-control mt-6 mx-20">
                <input className="btn btn-primary btn-block" type="submit" value="Book Now" />
            </div>
        </form>
    );
};

export default CheckOut;