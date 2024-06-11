import React from "react";
import { FaCommentDollar } from "react-icons/fa6";
import "./css/BookingInfo.css"

function BookingInfo({ totalPrice, nightCount, roomID }) {
    return <div className="book">
        <h3>Booking was successful</h3>
        <span>{nightCount} nights in Room {roomID} </span>
        <div className="price">
            <FaCommentDollar />
            Total price ${totalPrice}
        </div>
    </div>
}


export default BookingInfo;
