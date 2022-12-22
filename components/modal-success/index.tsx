import { Button } from "antd";
import React from "react";
import { useRouter } from "next/router";
import { CongratulationsIcon } from "../../public/icons";
import { SModalSuccess } from "./styled";

const ModalSuccess = ({ handleContinue }: any) => {
  const router = useRouter();
  return (
    <>
      <SModalSuccess>
        <CongratulationsIcon />
        <div className="congratulations">
          <span>Chúc mừng</span>
        </div>
        <div className="content">
          <span>
            Bạn đã tạo thành công hồ sơ công ty. Bây giờ bạn có thể thêm thông
            tin chi tiết dự án để nhà đầu tư xem hoặc bạn có thể bỏ qua và thêm
            sau
          </span>
        </div>
        <div className="btn-create-project">
          <Button onClick={() => handleContinue()} type="primary">
            Tạo dự án
          </Button>
          <Button onClick={() => router.push("/")}>Quay về trang chủ</Button>
        </div>
      </SModalSuccess>
    </>
  );
};

export default ModalSuccess;
