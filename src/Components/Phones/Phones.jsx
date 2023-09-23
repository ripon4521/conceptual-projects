import PhonesCard from "./PhonesCard";

// import useGetPhones from '../../hook/useGetPhones';
const Phones = ({ phones }) => {
  // console.log(phones);
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
    {
        phones?.map(phone=><PhonesCard key={phone.id} phone={phone}></PhonesCard>)
    }
  </div>;
};

export default Phones;
