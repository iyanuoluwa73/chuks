import plus from "../images/plus.svg";

function PopularFood({ image, title, description, price }) {
  return (
    <div className="flex justify-between bg-white p-1.5 rounded-lg lg:block lg:w-[30%] lg:p-0 lg:mt-8">
      <img src={image} className="w-1/3 lg:w-full" alt="jollof" />
      <div className="pl-2.5 lg:pt-10 lg:px-4 lg:pb-11">
        <h3 className="font-semibold lg:text-2xl lg:leading-8">{title}</h3>
        <p className="text-xs py-1.5 lg:font-medium lg:text-base lg:leading-6 lg:pt-1.5 lg:pb-9">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-[#ff7a18] font-medium">₦{price}</p>
          <button className=" bg-[#ff7a18] py-1.5 px-1.5 text-white rounded-2xl">
            <img src={plus} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopularFood;
