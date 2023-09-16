/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import './Card.css';
import Cart from '../Cart/Cart';

const Card = () => {
    const [allData, setAllData]  = useState([]);


    useEffect( () => {
        fetch("./data.json")
        .then((Response) => Response.json())
        .then((data) => setAllData(data));
    },[]);

    // console.log(allData);
    return (
        <div className='container'>
            <div className='body-container'>
                <div className='card-container'>
                 {allData.map((data) =>  ( 
                        <div key={data.id} className="card">
                        <img src={data.image} alt="" />

                        <h2>{data.title}</h2>
                        <p>
                        {data.details}
                        </p>
                        <div className="info">
                        <p>price:{data.price} </p>
                        <p>bookmark:</p>
                        </div>
                        <button className="card-btn">Select</button>
                  </div>
                   ))}
                 
                </div>

                <div className=''>
                    <Cart></Cart>
                </div>
                
            </div>

           
        </div>
       
        
    );
};

export default Card;