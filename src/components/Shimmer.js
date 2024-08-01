const Shimmer = () => {
  const banner_card = "bg-[#16dd5580]  mx-1 px-1 rounded-full w-28 h-28";
  const shimmer_card = "m-2 p-2 w-[200px] h-[300px] bg-[#16dd5580] rounded-3xl";
  return (
    <>
      <div className="m-4 p-4 text-center font-extrabold text-[30px] opacity-70">What's In Your Mind?</div>
      <div className="animate-pulse m-2 p-2 flex flex-wrap justify-between ">
        <div className={banner_card}> </div>
        <div className={banner_card}> </div>
        <div className={banner_card}> </div>
        <div className={banner_card}> </div>
        <div className={banner_card}> </div>
        <div className={banner_card}> </div>
        <div className={banner_card}> </div>
        <div className={banner_card}> </div>
        <div className={banner_card}> </div>
      </div>
      <div className="mx-7 mt-5 p-4 font-extrabold text-center text-[30px] opacity-70">Top Restaurents</div>
      <div className="animate-pulse flex flex-wrap m-3 p-2 justify-between">
        <div className={shimmer_card}></div>
        <div className={shimmer_card}></div>
        <div className={shimmer_card}></div>
        <div className={shimmer_card}></div>
        <div className={shimmer_card}></div>
        <div className={shimmer_card}></div>
        <div className={shimmer_card}></div>
        <div className={shimmer_card}></div>
        <div className={shimmer_card}></div>
        <div className={shimmer_card}></div>
        <div className={shimmer_card}></div>
        <div className={shimmer_card}></div>
      </div>
    </>
  );
};

export default Shimmer;
