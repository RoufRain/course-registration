/* eslint-disable react/jsx-key */
// import {toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// toast.configure()
import swal from 'sweetalert';
import React, { useEffect, useState } from 'react';
import './Card.css';
import Cart from '../Cart/Cart';

const Card = () => {
    const [allData, setAllData]  = useState([]);
    const [selectedData, setSelectedData] = useState([]);

    const [remainingCredit, setRemainingCredit] = useState(20);
    const [totalCredit, setTotalCredit] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);



    useEffect( () => {
        fetch("./data.json")
        .then((Response) => Response.json())
        .then((data) => setAllData(data));
    },[]);

    const handleSelect = (data) =>{
        const isExist = selectedData.find((id) => id.id == data.id);
        let count = data.credit;
        let sum = data.price;

        if(isExist) {
            return alert("This course already selected!");
        }
        else{

            selectedData.forEach((item)=>{
                count = count + item.credit;
            });

            selectedData.forEach((price) => {
                sum = sum + price.price;
            });
           
            setTotalPrice(totalPrice);


            const remainingCredit = 20 - count;
            if(count > 20){
                return swal('Can not select course over 20 credit!' );
            }
            else{
                setTotalCredit(count);
                setRemainingCredit(remainingCredit);
                
                setSelectedData([...selectedData, data]);
            }

            
           
        }
        
        
    } 
    //  console.log(selectedData);


    return (
        <div className='container'>
            <h1 className='heading'>Course Registration</h1>

            <div className='body-container'>
            

                <div className='card-container'>
                 {allData.map((data) =>  ( 
                        <div key={data.id} className="card">
                        <img className='picture' src={data.image} alt="" />

                        <h2 className='title-text'>{data.title}</h2>
                        <p className='info'>
                        {data.details}
                        </p>
                        <div className="info">

                            <p className='price-credit'><span ><img className='icon-image' src="Asset/dollar-sign 1.svg" alt="" /></span>  price: {data.price} </p>

                            <p className='price-credit'><span ><img className='icon-image' src="
                            Asset/Frame (3).svg" alt="" /></span>  credit: {data.credit}hr</p>
                        </div>
                        <button onClick={()=>handleSelect(data)} className="card-btn">Select</button>
                  </div>
                   ))}
                 
                </div>

                <div >
                    <Cart selectedData={selectedData}remainingCredit={remainingCredit} totalCredit={totalCredit} totalPrice={totalPrice} ></Cart>
                </div>
                
            </div>

           
        </div>
       
        
    );
};

export default Card;