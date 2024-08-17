const Hero = () => {
  return (
    <div className=" relative mt-6 lg:mt-[80px]">
      <div className="absolute text-white top-1/2 -translate-y-1/2 ps-4 md:ps-6 lg:ps-8 xl:ps-10">
        <p className="text-gray font-open font-semibold text-[12px] sm:text-[18px] lg:text-[20px] xl:text-[24px]">
          Limited time only
        </p>
        <h1 className="text-[20px] font-rubik sm:text-[26px] lg:text-[40px] xl:text-[74px]">
          Get %30 off
        </h1>
        <p className="text-[10px] max-w-[50%] text-gray font-open font-regular sm:text-[14px] lg:text-[18px] xl:text-[20px]">
          Sneakers made with your comfort in mind so you can put all of
          your focus into your next session.
        </p>
      </div>
      <img src="/bg.png" alt="" />
    </div>
  );
};

export default Hero;
