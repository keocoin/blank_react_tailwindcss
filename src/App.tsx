import { useState } from "react";
import Auth from "./component/Auth";

function App() {
  return (
    <div className="App flex">
      <div className="min-w-screen-sm h-screen w-1/2 bg-blue-300"></div>
      <div className="min-w-screen-sm h-screen w-1/2 bg-white">
        <div className="p-24">
          <div className="logo h-24 w-full text-white">
            <img
              className="h-full mx-auto"
              src="https://cdn.auth0.com/styleguide/components/1.0.8/media/logos/img/logo-grey.png"
              alt=""
            />
          </div>
          <div className="form py-8 text-center">
            <div className="title text-xl py-4 font-medium">
              Hi, welcome back!
            </div>
            <Auth />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
