import { Radio } from "antd";
import React from "react";

const CreateInvestorStep5 = () => {
  const onChange = (e: any) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <>
      <div>
        <span>Mục tiêu chính của bạn cho khoản đầu tư này là gì?</span>
      </div>
      <div>
        <Radio.Group
          style={{ display: "flex", flexDirection: "column" }}
          onChange={onChange}
          value={"value"}
        >
          <Radio>Để duy trì giá trị đầu tư ban đầu của bạn</Radio>
          <Radio>Tạo dòng tiền thường xuyên</Radio>
          <Radio>
            Phát triển tài khoản của bạn và thu nhập thường xuyên từ tài khoản
          </Radio>
          <Radio>Phát triển tài khoản của bạn</Radio>
          <Radio>Tích cực phát triển tài khoản của bạn</Radio>
        </Radio.Group>
      </div>
      <div>
        <span>Khi nào bạn mong đợi rút tiền của bạn?</span>
      </div>
      <div>
        <Radio.Group
          style={{ display: "flex", flexDirection: "column" }}
          onChange={onChange}
          value={"value"}
        >
          <Radio>Trong vòng 3 năm</Radio>
          <Radio>Trong 3 đến 5 năm</Radio>
          <Radio>Trong 5 đến 10 năm</Radio>
          <Radio>Trong 10 đến 15 năm</Radio>
          <Radio>Trong hơn 15 năm</Radio>
        </Radio.Group>
      </div>
    </>
  );
};

export default CreateInvestorStep5;
