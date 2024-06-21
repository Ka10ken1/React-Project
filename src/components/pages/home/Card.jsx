import React, { useEffect, useState } from 'react';
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci';
import "./css/Card.css"
import { LuBadgeDollarSign } from "react-icons/lu";
import { useTranslation } from 'react-i18next';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import BookingInfo from './BookingInfo';


function Card({ selectedBoxes, removeFromCard, setSelectedBoxes }) {

    const [t, _] = useTranslation()
    const { login, isAuthenticated } = useKindeAuth()
    const [booked, setBooked] = useState(false);
    const [roomId, setRoomId] = useState("");

    const handleRemove = (idx) => {
        removeFromCard(idx);
    };

    useEffect(() => {
        setSelectedBoxes((boxes) => {
            return boxes.map((item) => {
                return { ...item, totalPrice: parseInt(item.price) };
            });
        });
    }, []);

    const handleIncrementDays = (idx) => {
        const updatedBoxes = [...selectedBoxes];
        updatedBoxes[idx].nightCount++;
        updatedBoxes[idx].totalPrice = updatedBoxes[idx].price * updatedBoxes[idx].nightCount;
        setSelectedBoxes(updatedBoxes);
    };

    const handleDecrementDays = (idx) => {
        const updatedBoxes = [...selectedBoxes];
        if (updatedBoxes[idx].nightCount > 1) {
            updatedBoxes[idx].nightCount--;
            updatedBoxes[idx].totalPrice = updatedBoxes[idx].price * updatedBoxes[idx].nightCount;
            setSelectedBoxes(updatedBoxes);
        }
    };

    const handleBook = (roomId) => {
        setBooked(true);
        setRoomId(roomId);

        setTimeout(() => {
            setBooked(false);
            setRoomId("");
        }, 3000);
    };

    return (
        <div className='card-container'>
            <div className='card'>
                <h2 className="cart-title"> {t("Cart")} </h2>
                <div className='flexing'>
                    {
                        selectedBoxes.map((box, index) => (
                            <div key={index} className="box">
                                <img src={box.url} alt={box.name} />
                                <div>
                                    <h2>{t("Room")}:{box.roomId}</h2>
                                    <p>{t("Night Count")}: {box.nightCount}</p>
                                    <div className='controls'>
                                        <button onClick={() => handleDecrementDays(index)}><CiCircleMinus /></button>
                                        <p><LuBadgeDollarSign />{selectedBoxes[index].totalPrice}</p>
                                        <button onClick={() => handleIncrementDays(index)}><CiCirclePlus /></button>
                                    </div>
                                    <div className='buttons'>
                                        <button onClick={() => handleRemove(index)}>{t("Remove")}</button>
                                        {
                                            isAuthenticated ? (
                                                <button onClick={() => handleBook(box.roomId)} className='list-style'>{t("Book")}</button>
                                            ) :
                                                (
                                                    <button onClick={login} className='list-style'>Book</button>

                                                )
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={booked ? 'booking-info show' : 'booking-info hide'}>
                <BookingInfo
                    totalPrice={selectedBoxes.reduce((acc, cur) => acc + cur.totalPrice, 0)}
                    nightCount={selectedBoxes.reduce((acc, cur) => acc + cur.nightCount, 0)}
                    roomID={roomId}
                />
            </div>
        </div>
    );
}

export default Card;

