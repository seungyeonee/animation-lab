import Lottie from "lottie-react";
import LoadingJson from "./assets/lotties/loading.json";

import { useState } from "react";
import LoadingCircle from "./components/etc/LoadingCircle";
import LoadingWave from "./components/etc/LoadingWave";

const App = () => {
  const [type, setType] = useState("css");
  return (
    <div className="wrapper">
      <h1>animation-lab</h1>
      <div>
        <label>
          <input
            type="radio"
            name="animation-types"
            value="css"
            onChange={(e) => {
              setType(e.target.checked ? "css" : "");
            }}
            defaultChecked
          />
          css-animation
        </label>
        <label>
          <input
            type="radio"
            name="animation-types"
            value="lottie"
            onChange={(e) => {
              setType(e.target.checked ? "lottie" : "");
            }}
          />
          lottie
        </label>
      </div>
      <div className="component-area">
        {type === "css" ? (
          <>
            <div>
              <LoadingWave />
              <p>LoadingWave</p>
            </div>
            <div>
              <LoadingCircle />
              <p>LoadingCircle</p>
            </div>
          </>
        ) : (
          <>
            <div>
              <Lottie
                style={{ width: 100, height: 100 }}
                animationData={LoadingJson}
                loop
                autoplay
              />
              <p>Lottie - Loading</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
