import React, { useEffect } from 'react';
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci';
import "./css/Card.css"
import { LuBadgeDollarSign } from "react-icons/lu";
import { useTranslation } from 'react-i18next';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import UserProfile from '../UserProfile';

function Card({ selectedBoxes, removeFromCard, setSelectedBoxes }) {

    const [t, _] = useTranslation()

    const { login, isAuthenticated } = useKindeAuth()

    const handleRemove = (idx) => {
        removeFromCard(idx);
    };

    useEffect(() => {
        setSelectedBoxes((boxes) => {
            return boxes.map((item) => {
                return { ...item, totalPrice: item.price };
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

    const handleBook = () => {
        alert("Congratulations for you're request has been booked")
    }

    return (
        <div className="card">
            <h2 className="cart-title"> {t("Cart")} </h2>
            <div className='flexing'>
                {
                    selectedBoxes.map((box, index) => (
                        <div key={index} className="box">
                            <img src={box.url} alt={box.name} />
                            <div>
                                <h3>{box.name}</h3>
                                <p>Night Count: {box.nightCount}</p>
                                <div className='controls'>
                                    <button onClick={() => handleDecrementDays(index)}><CiCircleMinus /></button>
                                    <p>Price:<LuBadgeDollarSign />{selectedBoxes[index].totalPrice}</p>
                                    <button onClick={() => handleIncrementDays(index)}><CiCirclePlus /></button>
                                </div>
                                <div className='buttons'>
                                    <button onClick={() => handleRemove(index)}>Remove</button>
                                    {
                                        isAuthenticated ? (
                                            <button onClick={handleBook} className='list-style'>Book</button>
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
        </div >
    );
}

export default Card;

