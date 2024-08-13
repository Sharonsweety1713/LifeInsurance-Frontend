
import BoxReveal from "@/components/magicui/box-reveal";

const BoxRevealDemo=()=> {
  return (
    
    <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-32 ml-36 ">
      <BoxReveal boxColor={"#57B894"} duration={0.5}>
        <p className="text-[4rem] font-semibold">
          Vital Echo<span className="text-[#57B894]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"##57B894"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[2rem]">
        Your future echoes with {" "}
          <span className="text-[#57B894]">Security</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#57B894"} duration={0.5}>
        <div className="mt-[1.5rem] text-[1.5rem]">
          <p>
          -&gt;
            <span className="font-semibold text-[#57B894]"> 5000+</span>
             Happy families
            

            . <br />
            -&gt;
            <span className="font-semibold text-[#57B894]"> 100%</span>
            Customer-friendly, and customizable. <br />
          </p>
        </div>
      </BoxReveal>

      {/* <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
      </BoxReveal> */}
    </div>
    
  );
}
export default BoxRevealDemo;