const ButtonContainer = ({items,onButtonClick}) => {
  return (
    <>
      <div className="buttons mx-4 flex justify-center gap-2 mt-3   flex-wrap  *:w-16 *:h-16 *:text-xl *:border ">
        {items.map((item) => (
          <button onClick={()=>onButtonClick(item)}  className="border-[#ffffff9f] shadow-md  bg-[#d2dae230] rounded-md text-3xl font-bold">
            {item}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonContainer;
