import Lottie from "lottie-react";
import LoadingJson from "./assets/lotties/loading.json";

import { useState } from "react";
import LoadingCircle from "./components/LoadingCircle";
import LoadingWave from "./components/LoadingWave";
import DarkModeSwitch from "./components/DarkModeSwitch";
import Button from "./components/Button";
import Stacks from "./components/list/Stacks";
import Coin from "./components/Coin";
import ScrollComponent from "./components/ScrollComponent";

const App = () => {
  const [type, setType] = useState("css");
  return (
    <div className="wrapper">
      <h1>Animation-lab</h1>
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
        <label>
          <input
            type="radio"
            name="animation-types"
            value="scroll"
            onChange={(e) => {
              setType(e.target.checked ? "scroll" : "");
            }}
          />
          scroll
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
            <div>
              <h3>Rotate Coin</h3>
              <Coin
                animation={{
                  count: "infinite", // 애니메이션 횟수
                  duration: 3, // 애니메이션 시간
                  ease: "ease-in-out", // 애니메이션 easing
                }}
              />
            </div>
          </>
        ) : type === "lottie" ? (
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
        ) : (
          <>
            <div className="box">
              <p>Scroll Trigger Components</p>
              <div style={{ height: "500vh" }}>
                <div style={{ height: "300vh" }}></div>
                {/* ↓ 뷰포트 기준 양쪽 100px 떨어진 구간 사이에서 fadeIn/Out 실행 */}
                <ScrollComponent className="sample-box">
                  <p>Both Side</p>
                </ScrollComponent>

                {/* ↓ 뷰포트 기준 위 100px 지점에서 slideIn/Out 실행 */}
                <ScrollComponent
                  transition="start"
                  animation={{
                    name: "slide",
                  }}
                  className="sample-box"
                >
                  <p>Start</p>
                </ScrollComponent>

                {/* ↓ 뷰포트 기준 아래 100px 지점에서 slideIn/Out 실행 */}
                <ScrollComponent
                  transition="end"
                  animation={{
                    name: "slide",
                  }}
                  className="sample-box"
                >
                  <p>End</p>
                </ScrollComponent>
              </div>
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
