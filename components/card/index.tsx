/* eslint-disable @next/next/no-img-element */
import { Divider, Progress } from "antd";
import Image from "next/image";
import React from "react";
import SCard from "./styled";
import useWindowResize from "../../hook/useResize";

const CardIndex = () => {
  const size = useWindowResize();
  return (
    <>
      <SCard>
        <div className="wrap-head-card">
          <div className="parent-image">
            <img
              alt="people"
              src="/image/home/people.png"
              className="main-image"
            />
            <Image
              alt="people"
              src="/image/home/StellaSo.png"
              width={112}
              height={112}
              className="sub-image"
            />
          </div>
          <div className="wrap-content">
            <div className="title">Vinataobao Inc.</div>
            <div className="content">
              Lorem ipsum dolor sit amet, conetur adipis. Lorem ipsum dolo dolor
              sit amet, conetur adipis.
            </div>
            <div className="wrap-btn">
              <button>Travel</button>
              <button>NFTs</button>
              <button>Web3</button>
            </div>
          </div>
        </div>
        <Divider />
        <div className="wrap-price">
          <div className="price">
            <span className="command-price first-price">$90,000 </span>
            <span className="command-price second-price">/ $120.000 </span>
          </div>
          <div className="progress">
            <Progress
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068",
              }}
              percent={99.9}
            />
          </div>
          <div className="item-investor">
            <span>1,512 Investors</span>
            <span className="present">60%</span>
          </div>
        </div>
      </SCard>
    </>
  );
};

export default CardIndex;
