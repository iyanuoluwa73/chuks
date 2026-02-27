function FoodCard({ image, title, description, price }) {
  return (
    <div className="rounded-xl bg-white mb-8 lg:w-[29%] lg:gap-y-16 ">
      <img src={image} className="" alt="jollof" />
      <div className="w-[90%] pt-6 pb-12 text-left m-auto lg:pb-10">
        <h5 className="font-semibold text-2xl ">{title}</h5>
        <p className="font-medium leading-6 pt-2 pb-6">{description}</p>
        <div className="flex items-center justify-between">
          <p className="text-[#ff7a18] font-medium">₦{price}</p>

          <button className=" bg-[#ff7a18] py-3 px-7 text-white rounded-xl font-semibold">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
