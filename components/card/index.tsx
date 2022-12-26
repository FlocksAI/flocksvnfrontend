/* eslint-disable @next/next/no-img-element */
import { Divider, Progress } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { MEDIA_PUBLIC } from "../../constant/api-constant";
import { formatNumber } from "../../helper";
import { IDataProject } from "./interface";
import SCard from "./styled";

const CardIndex: React.FC<IDataProject> = (props) => {
  const router = useRouter();
  const {
    id,
    abstract,
    companyName,
    numberInvestors,
    collectedBudget,
    investmentTarget,
    coverImage,
  } = props;
  const percent = (collectedBudget * 100) / investmentTarget;
  return (
    <>
      <SCard>
        <div className="wrap-head-card">
          <div className="parent-image">
            <img
              alt="people"
              src={
                `${MEDIA_PUBLIC}${coverImage.url}` || "/image/home/people.png"
              }
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
            <div
              className="title pointed"
              onClick={() => router.push(`project/${id}`)}
            >
              {companyName}
            </div>
            <div className="content">{abstract}</div>
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
            <span className="command-price first-price">
              ${collectedBudget}{" "}
            </span>
            <span className="command-price second-price">
              / ${investmentTarget}{" "}
            </span>
          </div>
          <div className="progress">
            <Progress
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068",
              }}
              percent={Number(formatNumber(percent, 0, 2))}
            />
          </div>
          <div className="item-investor">
            <span>{numberInvestors} Investors</span>
            <span className="present">{formatNumber(percent, 0, 2)}%</span>
          </div>
        </div>
      </SCard>
    </>
  );
};

export default CardIndex;
