                                                                                                                                                                                                                                                                    import { useState } from "react";

const Increase = () => {
  const [Number, setNumber] = useState(0);
  // Number (first variable) ==> read only value (you can't this variable value)
  // setNumber (second Variable) ==> write only value (if you want to change Number variable's  value use setNumber)

  function IncreaseNum() {
    setNumber(Number + 1);
  }

  function DecreaseNum() {
    if (Number > 0) return setNumber(Number - 1);
  }

  function IncreaseJump() {
    setNumber(Number + 5);
  }

  function DescreaseJump() {
    if (Number > 0) return setNumber(Number - 5);
  }

  function Reset() {
    setNumber(0);
  }
  return (
    <>
      <section>
        <h1 className="text-center text-xl font-extrabold mt-10">
          UseState : Change Data (Variable Ne Define Karava Mate Ane Value
          Change Karava Mate)
        </h1>
        <p className="text-center mt-5 font-bold">
          Increase And Decrease Number
        </p>
        <div className="w-72 h-72 text-9xl px-4 py-2 bg-[#222] rounded-xl text-[#555] font-bold flex items-center justify-center mx-auto mt-10">
          {Number}
        </div>
        <div className="flex items-center justify-center mt-5 gap-6">
          <button
            className="px-8 py-4 rounded-xl active:scale-95 active:bg-orange-600 bg-orange-400 font-xl"
            onClick={IncreaseNum}
          >
            Increase
          </button>
          <button
            className="px-8 py-4 rounded-xl active:scale-95 active:bg-orange-600 bg-orange-400 font-xl"
            onClick={DecreaseNum}
          >
            Decrease
          </button>
          <button
            className="px-8 py-4 rounded-xl active:scale-95 active:bg-orange-600 bg-orange-400 font-xl"
            onClick={IncreaseJump}
          >
            Icrease Jump
          </button>
          <button
            className="px-8 py-4 rounded-xl active:scale-95 active:bg-orange-600 bg-orange-400 font-xl"
            onClick={DescreaseJump}
          >
            Decrease Jump
          </button>
          <button
            className="px-8 py-4 rounded-xl active:scale-95 active:bg-orange-600 bg-orange-400 font-xl"
            onClick={Reset}
          >
            Reset
          </button>
        </div>
      </section>
    </>
  );
};

export default Increase;
