import React from "react";
import SFounderTeam from "./styled";
import Image from "next/image";

const FounderTeam = () => {
  return (
    <>
      <SFounderTeam>
        <div className="title">
          <span className="founder">Đội Ngũ Sáng Lập</span>
          <span className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ultricies tempus euismod.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </span>
        </div>
        <div className="team">
          <Image
            alt="team"
            src="/image/home/StellaSo.png"
            width={212}
            height={324}
          />
          <Image
            alt="team"
            src="/image/home/MatthewArnett.png"
            width={212}
            height={324}
          />
          <Image
            alt="team"
            src="/image/home/SusanneSun.png"
            width={212}
            height={324}
          />
          <Image
            alt="team"
            src="/image/home/Thomas-Doan.png"
            width={212}
            height={324}
          />
        </div>
        <div className="team">
          <Image
            alt="team"
            src="/image/home/TracyNguyen.png"
            width={212}
            height={324}
          />
          <Image
            alt="team"
            src="/image/home/StellaSoCo-founder.png"
            width={212}
            height={324}
          />
          <Image
            alt="team"
            src="/image/home/Liz-Pham.png"
            width={212}
            height={324}
          />
          <Image
            alt="team"
            src="/image/home/Son-Pham.png"
            width={212}
            height={324}
          />
        </div>
      </SFounderTeam>
    </>
  );
};

export default FounderTeam;
