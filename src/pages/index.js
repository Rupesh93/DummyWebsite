import React,{useState} from 'react'
import Sidebar from '../Slidebar'
import Navbar from "../components/navbar";
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne,homeObjTwo,homeObjThree } from '../components/InfoSection/Data';
import Services from '../components/services';
import Footer from '../components/footer';


const Home = () => {
    const [isOpen,setIsOpen] = useState(false);

    const toggle =() => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar  toggle={toggle}/>
            <HeroSection />
           <InfoSection {...homeObjOne} />
           <InfoSection {...homeObjTwo} />
           <InfoSection {...homeObjThree} /> 
           <Services/>
           <Footer />

        </>
    )
}

export default Home;
