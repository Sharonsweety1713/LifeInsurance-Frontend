
import BoxReveal from "@/components/magicui/box-reveal";

const Aboutus=()=> {
  return (
    
    <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-32 ml-36 ">
      <BoxReveal boxColor={"#57B894"} duration={0.5}>
        <p className="text-[4rem] font-semibold">
          About Us<span className="text-[#57B894]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"##57B894"} duration={0.5}>
        {/* <h2 className="mt-[.5rem] text-[2rem]">
          A Promise of Protection for your{" "}
          <span className="text-[#57B894]">Loved Ones</span>
        </h2> */}
      </BoxReveal>

      <BoxReveal boxColor={"#57B894"} duration={0.5}>
        <div className="mt-[1.5rem] text-[1rem]">
          <p>
          
            <span className="font-semibold text-[#57B894] text-[1.5rem]">At Vital Echo, </span>
             we offer personalized and affordable life insurance solutions to secure your family's future.
             Our expert team provides comprehensive coverage options, ensuring peace of mind and financial protection.
              Trust us to be your partner in safeguarding what matters most. Secure your tomorrow with Vital Echo today.
            

        
          </p>
        </div>
      </BoxReveal>

      {/* <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
      </BoxReveal> */}
    </div>
    
  );
}
export default Aboutus;