import Image from "next/image";
import Navbar from "./navbar/page";
import Herosection from "./herosection/page";
import Footer from "./footer/page";
import MenuCard from "./menucard/page";





const Home = () => {
  return (
   
<>
      <Navbar/>
    <Herosection/>
    <MenuCard />
    <Footer/>
   

    </>
  );
};

export default Home;


   
