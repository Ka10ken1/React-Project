import React, { useEffect } from 'react';
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import "./css/Card.css"
import { LuBadgeDollarSign } from "react-icons/lu";


function Card({ selectedBoxes, removeFromCard, setSelectedBoxes }) {
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

    return (
        <div className="card">
            <h2 className="cart-title"> Cart </h2>
            <div className='flexing'>
                {
                    selectedBoxes.map((box, index) => (
                        <div key={index} className="box">
                            <img src={box.url} alt={box.name} />
                            <h3>{box.name}</h3>
                            <p>Night Count: {box.nightCount}</p>
                            <div className='controls'>
                                <button onClick={() => handleDecrementDays(index)}><CiCircleMinus /></button>
                                <p>Price:<LuBadgeDollarSign />{selectedBoxes[index].totalPrice}</p>
                                <button onClick={() => handleIncrementDays(index)}><CiCirclePlus /></button>
                            </div>
                            <div className='buttons'>
                                <button onClick={() => handleRemove(index)}>Remove</button>
                                <button>
                                    <Link to="/login" className='list-style'>Book now</Link>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Card;

