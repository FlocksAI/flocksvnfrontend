import React from "react";
import { CongratulationsIcon } from "../../public/icons";
import { SModalSuccess } from "./styled";

const ModalSuccess = () => {
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
      </SModalSuccess>
    </>
  );
};

export default ModalSuccess;
