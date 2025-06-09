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
import LoadingGauge from "./components/LoadingGauge";

const App = () => {
  const [type, setType] = useState("css");
  return (
    <div className="wrapper">
      <h1>Animation-lab</h1>
      <div className="box row">
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
            <div>
              <div className="box gap-1">
                <h3>LoadingGauge</h3>
                <LoadingGauge current={50} direction="column" />
              </div>
              <div className="box gap-1">
                <h3>LoadingWave</h3>
                <LoadingWave />
              </div>
              <div className="box gap-1">
                <h3>LoadingCircle</h3>
                <LoadingCircle />
              </div>
            </div>
            <div>
              <div className="box gap-1">
                <h3>DarkModeSwitch</h3>
                <DarkModeSwitch />
              </div>
            </div>
            <div>
              <div className="box gap-1">
                <h3>Button feedback="shake"</h3>
                <Button feedback="shake">shake</Button>
              </div>
              <div className="box gap-1">
                <h3>Button feedback="touch"</h3>
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
              <div className="box gap-1">
                <h3>Coin</h3>
                <Coin
                  animation={{
                    count: "infinite", // 애니메이션 횟수
                    duration: 3, // 애니메이션 시간
                    ease: "ease-in-out", // 애니메이션 easing
                  }}
                />
              </div>
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
