import useGetPhones from "../../../Hooks/UseGetPhones";
import Phones from "../../Phones/Phones";
import Banner from "./Banner";


const Home = () => {
    const [phones] = useGetPhones();
    // console.log(phones);
    return (
        <div>
           <Banner></Banner>  
           <h1 className="text-3xl my-7 text-center font-semibold">All Phones Here</h1>   
           <Phones phones={phones}></Phones>
        </div>
    );
};

export default Home;