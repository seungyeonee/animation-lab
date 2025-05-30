import Lottie from "lottie-react";
import LoadingJson from "./assets/lotties/loading.json";

import { useState } from "react";
import LoadingCircle from "./components/LoadingCircle";
import LoadingWave from "./components/LoadingWave";
import DarkModeSwitch from "./components/DarkModeSwitch";
import Button from "./components/Button";
import Stacks from "./components/list/Stacks";

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
            <div className="box">
              <h3>Loading</h3>
              <div className="box">
                <LoadingWave />
                <p>LoadingWave</p>
              </div>
              <div className="box">
                <LoadingCircle />
                <p>LoadingCircle</p>
              </div>
            </div>
            <div>
              <h3>DarkMode</h3>
              <div className="box">
                <DarkModeSwitch />
                <p>DarkModeSwitch</p>
              </div>
            </div>
            <div>
              <h3>Feedback</h3>
              <div className="box">
                <Button feedback="shake">shake</Button>
                <br />
                <Button feedback="touch">touch</Button>
              </div>
            </div>
            <div>
              <h3>Spreadable Stack List</h3>
              <Stacks
                data={[
                  <p>stack1</p>,
                  <p>stack2</p>,
                  <p>stack3</p>,
                  <p>stack4</p>,
                  <p>stack5</p>,
                ]}
              />
            </div>
          </>
        ) : (
          <>
            <div className="box">
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
      <footer>
        <p className="copy"></p>
      </footer>
    </div>
  );
};

export default App;
