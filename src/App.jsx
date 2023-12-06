import { useState } from "react";

function App() {
  const [isViewIconVisible, setViewIconVisibility] = useState(false);

  return (
    <div className="bg-very-dark-blue-main-bg h-screen font-outfit flex justify-center items-center ">
      <div className="bg-very-dark-blue-card-bg mx-auto w-80  p-4 rounded-2xl shadow-2xl space-y-4">
        <div
          className="bg-Cyan rounded-2xl overflow-hidden relative"
          onMouseEnter={() => setViewIconVisibility(true)}
          onMouseLeave={() => setViewIconVisibility(false)}
        >
          {/* Main Image */}
          <img
            className="shadow-xl hover:mix-blend-multiply hover:opacity-75 hover:cursor-pointer  z-10"
            src="../images/image-equilibrium.jpg"
            alt="Equilibrium Collection"
          />
          {/* View Icon (Centered, Conditionally Visible) */}
          {isViewIconVisible && (
            <img
              className="absolute left-1/2 bottom-1/3 transform -translate-x-1/2 -translate-y-1/2 opacity-100 transition-opacity duration-300 z-20"
              src="./images/icon-view.svg"
              alt="View Icon"
            />
          )}
        </div>
        <h1 className="text-xl text-White font-outfit font-semibold  hover:text-Cyan hover:cursor-pointer">
          Equilibrium #3429
        </h1>
        <p className="font-light text-soft-blue">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="flex justify-between text-sm">
          <div className="text-Cyan hover:cursor-pointer font-semibold  flex gap-x-2">
            <img
              src="../images/icon-ethereum.svg"
              alt="ethereum-logo"
              className="mr-1 rounded-full"
            />
            <p>0.041 ETH</p>
          </div>
          <div className="text-soft-blue flex justify-between">
            <img
              src="../images/icon-clock.svg"
              alt="clock-logo"
              className="w-4 h-4 mt-0.5 mr-1 rounded-full"
            />
            <p>3 days left</p>
          </div>
        </div>
        <hr className="" />

        <div className="flex items-center gap-x-3 py-2">
          <div className=" bg-White w-10 h-10 rounded-full flex justify-center items-center">
            <img src="../images/image-avatar.png" className="w-9 h-9" />
          </div>
          <div className="text-soft-blue flex gap-1">
            <p>Creation of</p>
            <p className=" hover:text-Cyan hover:cursor-pointer font-semibold">
              Jules Wyvern
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
