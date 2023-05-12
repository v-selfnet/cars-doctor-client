const BookingRow = ({ booking }) => {
    const { img, title, name, price, email, phone, date } = booking;
    return (
        <div>
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </td>
                <td>{title}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{date}</td>

                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
        </div>
    );
};

export default BookingRow;