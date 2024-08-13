import React from 'react';
import Footer from '@/components/Shared/Footer';
import BoxRevealDemo  from '@/components/magicui/box-animation';
import heartImage from './asserts/heart.png'
import insure from './asserts/Insure.jpg'
import AnimatedCounter from '@/components/Shared/AnimatedCounter';
import Carousal from '@/components/Shared/Carousal';
import Aboutus from '@/components/Shared/Aboutus';
import PolicyCards from '@/components/Shared/PolicyCards';
import Feedback from '@/components/Shared/feedback';
const Home = () => {
    return (
        <>
            <div className="flex items-center justify-between p-5">
                <BoxRevealDemo />
                <img src={heartImage} alt="Heart" className="w-1/2 h-auto ml-5 pt-20" />
            </div>
            
<div className="flex flex-row items-center justify-between p-20 pt-44">
    <img src={insure} alt="Family" className="w-1/2 h-auto ml-5 rounded-3xl" />
    <Aboutus />
</div>

       

            <div className="relative -mt-5"> {/* Adjust the -mt-10 value to reduce space */}
        <div className="flex items-center justify-center my-8 relative"> {/* Adjust my-8 to reduce vertical spacing */}
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-4xl font-semibold">Our Achievement</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
      </div>

      <div className="mt-4"> {/* Adjust the mt-4 value as needed */}
        <AnimatedCounter />
      </div>
       <PolicyCards/>
            <div className="relative -mt-5"> {/* Adjust the -mt-10 value to reduce space */}
        <div className="flex items-center justify-center my-8 relative"> {/* Adjust my-8 to reduce vertical spacing */}
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-4xl font-semibold">Happy Clients!</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
<Carousal/>
<br/>
<br/>
<div className="mx-auto p-4">
           
{/* <div className="relative -mt-5"> Adjust the -mt-10 value to reduce space */}
        <div className="flex items-center justify-center my-8 relative"> {/* Adjust my-8 to reduce vertical spacing */}
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-4xl font-semibold">Feedback</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

            <Feedback />
        </div>
<br/>
<br/>
<br/>
<br/>

            <Footer/>
      </div>
        </>
    );
};

export default Home;
