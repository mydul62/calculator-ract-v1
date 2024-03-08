const Display = ({value}) => {
  return (
    <>
      <input
        id="display"
        readOnly
        className=" outline-none text-2xl bg-[#eaeaea53]  min-h-20 w-[100%] border px-2 border-[#2f3542]"
        type="text" value={value}
      />
    </>
  );
};
export default Display;
