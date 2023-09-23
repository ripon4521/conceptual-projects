import React, { useEffect, useState } from 'react';
import PhoneCard from './PhoneCard';

const Favoirites = () => {
    // console.log(phone);
    const [faviorutes, setfavorites]=useState([]);
    const [noFound, setNofound]=useState(false);
    const [isShow, setIsShow] = useState(false);
    const [totalPrice , setToatalPrice ]= useState(0);

    useEffect(()=>{
        const favouriteItem =JSON.parse(localStorage.getItem('favourites')) ;
        // console.log(favouriteItem);
     if (favouriteItem) {
        setfavorites(favouriteItem);
        const total = favouriteItem.reduce((preValue, currentItem)=>preValue+currentItem.price,0);
        // console.log(total);
        setToatalPrice(total)
     }
     else{
       setNofound('No data Found')
     }
    },[]);
    console.log(faviorutes);

    const handleRemove =()=>{
        localStorage.clear();
        setfavorites([]);
        setNofound('No data Found');
        
        
    }
    return (
        <div>
           <div>

           {
                faviorutes.length> 0 && <button onClick={handleRemove} className='btn btn-success my-5 block mx-auto'>Delete Favorites Item</button> 
            }
          
              {
                faviorutes.length>0 &&   <h1  className='flex justify-center text-2xl text-red-500 my-10'>Total Price: {totalPrice}</h1>
              }
            
           </div>
           {

            noFound? <p className='flex justify-center items-center h-[70vh] text-2xl font-semibold text-red-400'>{noFound}</p> : <div>
                <div className='grid grid-cols-2 gap-10'>
                    {
                        isShow? faviorutes.map(mobile => <PhoneCard mobile={mobile} key={mobile.id}  ></PhoneCard>):

                        faviorutes.slice(0,2).map(mobile => <PhoneCard mobile={mobile} key={mobile.id}  ></PhoneCard>)
                    }
                </div>
                {
                    faviorutes.length >2 &&   <button onClick={()=>setIsShow(!isShow)} className='btn btn-success my-5 block mx-auto'>{isShow? "See Less" : "See More"}</button> 
                }
              

            </div>
           }
        </div>
    );
};

export default Favoirites;