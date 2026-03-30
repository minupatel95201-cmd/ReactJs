import React from "react";

const Card = ({ data }) => {
  console.log(data.width);
  return (
    <>
      <section>
        <div
          className={`relative overflow-hidden group rounded-xl`}
          style={{width: `${data.width}`}}
        >
          <div className={`flex flex-col items-center justify-center gap-4 p-4`} style={{background: `${data.color}`,height:`${data.height}`}}>
            <h1 className="text-4xl text-white font-bold" style={{color:`${data.textColor}`}}>{data.name}</h1>
            <p className="text-xl text-white/70">Shop Now</p>
          </div>

          {/* overlay img */}
          <img
            src={data.image}
            alt="category_name"
            className="absolute top-0 opacity-100 group-hover:opacity-15 object-cover backdrop-blur-sm h-full w-full"
          />
        </div>
      </section>
    </>
  );
};

export default Card;