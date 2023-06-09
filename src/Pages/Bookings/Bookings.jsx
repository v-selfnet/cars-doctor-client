import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate()

    const url = `https://car-doctor-server-two-ivory.vercel.app/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setBookings(data)
                }
                else {
                    navigate('/login')
                } 
            })
    }, [url, navigate])

    // [handleDelete] function destructure to BookingRow.jsx
    const handleDelete = id => {
        const proceed = confirm('Do you want to Delete?')
        if(proceed){
            fetch(`https://car-doctor-server-two-ivory.vercel.app/bookings/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    alert('Deleted Success')
                    const remaining = bookings.filter(booking => booking._id !== id)
                    setBookings(remaining)
                }
            })
        }
    }

    // update put/patch server/DB
    // [handleConfirm] function destructure to BookingRow.jsx
    const handleBookingConfirm = id => {
        fetch(`https://car-doctor-server-two-ivory.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'}) // send to server status object
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                // update status
                const remaining = bookings.filter(booking => booking._id !== id)
                const updated = bookings.find(booking => booking._id === id)
                updated.status = 'confirm';
                const newBookings = [updated, ...remaining];
                setBookings(newBookings)
            }
        })
    }

    return (
        <div>
            <h3>Your Bookings: {bookings.length}</h3>

            {/* const {img, title, name, price, email, phone, date} = booking; */}

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            {/* <th> */}
                                {/* <label> */}
                                    {/* <input type="checkbox" className="checkbox" /> */}
                                {/* </label> */}
                            {/* </th> */}
                            <th>Image</th>
                            <th>Service</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>email</th>
                            <th>Phone</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}

                            ></BookingRow>)
                        }
                    </tbody>
                    

                </table>
            </div>
        </div>
    );
};

export default Bookings;