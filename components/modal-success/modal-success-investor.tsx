import { Button } from "antd";
import React from "react";
import { useRouter } from "next/router";
import { CongratulationsIcon } from "../../public/icons";
import { SModalSuccessInvestor } from "./styled";

const ModalSuccessInvestor = () => {
  const router = useRouter();
  return (
    <>
      <SModalSuccessInvestor>
        <CongratulationsIcon />
        <div className="congratulations">
          <span>Hồ sơ đầu tư đã hoàn tất!</span>
        </div>
        <div className="content">
          <span>
            Bạn đã hoàn thành hồ sơ đầu tư. Bây giờ bạn có thể khám phá và lựa
            chọn những dự án yêu thích và bắt đầu hành trình đầu tư
          </span>
        </div>
        <div className="btn-investor">
          <Button type="primary" onClick={() => router.push("/")}>
            Quay trở lại trang chủ
          </Button>
          <Button onClick={() => router.push("/project")}>
            Khám phá dự án
          </Button>
        </div>
      </SModalSuccessInvestor>
    </>
  );
};

export default ModalSuccessInvestor;
