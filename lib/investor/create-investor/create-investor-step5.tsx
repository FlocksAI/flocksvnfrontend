import { Button, Radio } from "antd";
import React from "react";
import CustomForm from "../../../components/custom-form";
import { CreateInvestInput } from "../interface";

const CreateInvestorStep5: React.FC<CreateInvestInput> = ({ control }) => {
  const onChange = (e: any) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <>
      <div className="title-step">
        <span>Mục tiêu chính của bạn cho khoản đầu tư này là gì?</span>
      </div>
      <div className="mb-4">
        <CustomForm
          name="11"
          label=""
          defaultValue="To maintain the value of your original investment"
          classNameWrap="ds-mt-5"
          control={control}
          render={({ field: { onChange, value } }: any) => (
            <Radio.Group
              value={value}
              onChange={(e) => onChange(e.target.value)}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Radio value="duy-tri">
                Để duy trì giá trị đầu tư ban đầu của bạn
              </Radio>
              <Radio value="dong-tien">Tạo dòng tiền thường xuyên</Radio>
              <Radio value="phat-trien-tai-khoan-thuong-xuyen">
                Phát triển tài khoản của bạn và thu nhập thường xuyên từ tài
                khoản
              </Radio>
              <Radio value="phat-trien-tai-khoan">
                Phát triển tài khoản của bạn
              </Radio>
              <Radio value="tich-cuc">
                Tích cực phát triển tài khoản của bạn
              </Radio>
            </Radio.Group>
          )}
        />
      </div>
      <div className="title-step">
        <span>Khi nào bạn mong đợi rút tiền của bạn?</span>
      </div>
      <div className="mb-4">
        <CustomForm
          name="12"
          defaultValue="Within 3 years"
          label=""
          classNameWrap="ds-mt-5"
          control={control}
          render={({ field: { onChange, value } }: any) => (
            <Radio.Group
              value={value}
              onChange={(e) => onChange(e.target.value)}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Radio value="3">Trong vòng 3 năm</Radio>
              <Radio value="3-5">Trong 3 đến 5 năm</Radio>
              <Radio value="5-10">Trong 5 đến 10 năm</Radio>
              <Radio value="10-15">Trong 10 đến 15 năm</Radio>
              <Radio value="15">Trong hơn 15 năm</Radio>
            </Radio.Group>
          )}
        />
      </div>
    </>
  );
};

export default CreateInvestorStep5;
