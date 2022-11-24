import React from "react";
import { INavigation } from "./interface";
import SNavigation from "./styled";

const NavigationIndex: React.FC<INavigation> = (props) => {
  const { content1, content2, content3, content4, content5 } = props;
  return (
    <SNavigation>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        {/* <div className="nav-links">
          <span>{content1}</span>
          <span>{content2}</span>
          <span>{content3}</span>
          <span>{content4}</span>
          <span>{content5}</span>
        </div> */}
      </div>
    </SNavigation>
  );
};

export default NavigationIndex;
