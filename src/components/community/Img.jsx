import React from "react";

function Img({img, className}) {
  return (
    <div>
      <img
        src={img}
        alt="THE ACE"
        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)] md:saturate-0 hover:saturate-100 duration-300 ease-in-out"
      />
    </div>
  );
}

export default Img;
