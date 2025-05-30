import { useState } from "react";
import css from "./DarkModeSwitch.module.scss";
const DarkModeSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <label
      className={`${css.label} ${isChecked ? css.dark : css.light}`}
      title={`${isChecked ? "라이트" : "다크"} 모드로 전환하기`}
    >
      <div className={css.handle}>
        <span className={css.hole}></span>
      </div>
      <input
        className={css.input}
        type="checkbox"
        name="darkmode"
        checked={isChecked}
        onChange={(e) => {
          setIsChecked(e.target.checked);
        }}
      />
    </label>
  );
};

export default DarkModeSwitch;
