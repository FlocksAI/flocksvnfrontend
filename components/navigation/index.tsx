import React from "react";
import { INavigation } from "./interface";
import SNavigation from "./styled";
import { useRouter } from "next/router";

const NavigationIndex: React.FC<INavigation> = (props) => {
  const router = useRouter();
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
        <div className="nav-links">
          <span onClick={() => router.push("/")}>{content1}</span>
          <span onClick={() => router.push("/project")}>{content2}</span>
          <span onClick={() => router.push("/blog")}>{content3}</span>
          <span onClick={() => router.push("/event")}>{content4}</span>
          <span onClick={() => router.push("/faq")}>{content5}</span>
        </div>
      </div>
    </SNavigation>
  );
};

export default NavigationIndex;
