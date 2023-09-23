import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import PhoneCard from './PhoneCard';

const Phone = () => {
    // const phone = useLoaderData();
    // console.log(phone);
    const [mobile, setmobile] = useState({});

  const { id } = useParams();

  const phones = useLoaderData();
//   console.log(phones);

  useEffect(() => {

    
    const findPhone = phones?.find((mobile) => mobile.id === id);

    setmobile(findPhone);
  }, [id, phones]);


    return (
        <div>
            <PhoneCard mobile={mobile}></PhoneCard>
        </div>
    );
};

export default Phone;