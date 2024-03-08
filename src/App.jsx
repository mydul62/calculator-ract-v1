import Display from "./Display";
import ButtonContainer from "./ButtonContainer";
import { useState } from "react";
function App() {
  let buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  let [calValue, setCalValue] = useState("");
  let handleButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalValue("");
    } else if (buttonText === "=") {
      setCalValue(eval(calValue))
    } else {
      let newItem = calValue + buttonText;
      setCalValue(newItem);
    }
  };
  return (
    <>
      <div className="calculator max-w-[400px] mx-auto bg-[#30336b] bg-bottom  p-10 bg-no-repeat ">
        <div className="main_calculator max-w-[380px] p-4 my-10 mx-auto border bg-[#eeeeee26] border-[#cccccc8b] rounded-md">
          <Display value={calValue}></Display>
          <ButtonContainer
            onButtonClick={handleButtonClick}
            items={buttonNames}
          ></ButtonContainer>
        </div>
      </div>
    </>
  );
}

export default App;
