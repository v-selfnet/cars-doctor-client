import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    return (
        <div>
            <h3>Your Bookings: {bookings.length}</h3>

            {/* const {img, title, name, price, email, phone, date} = booking; */}

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
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
                        ></BookingRow>)
                    }
                        
                        
                       
                        
                    </tbody>
                    

                </table>
            </div>
        </div>
    );
};

export default Bookings;