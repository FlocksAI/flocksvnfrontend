import { Checkbox, Radio, Slider } from "antd";
import React from "react";

const CreateInvestorStep3 = () => {
  const onChange = (e: any) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const formatter = (value: number) => `$${value}`;
  return (
    <>
      <div style={{ marginBottom: 54 }}>
        <span>Chọn khung thu nhập hàng tháng của bạn?</span>
      </div>
      <Slider
        range
        defaultValue={[3000, 5000]}
        step={1000}
        min={0}
        max={10000}
        tooltip={{ open: true, formatter }}
      />
      <div style={{ marginBottom: 54, marginTop: 30 }}>
        <span>Chọn bao nhiêu bạn đầu tư bây giờ ?</span>
      </div>
      <Slider
        range
        defaultValue={[3000, 5000]}
        step={1000}
        min={0}
        max={10000}
        tooltip={{ open: true, formatter }}
      />
      <div>
        <span>
          Nền tảng truyền thông xã hội ưa thích để tìm hiểu về tin tức đầu tư
          mới?
        </span>
      </div>
      <div>
        <Radio.Group
          style={{ display: "flex", flexDirection: "column" }}
          onChange={onChange}
          value={"value"}
        >
          <Checkbox style={{ marginLeft: 8 }} onChange={onChange}>
            Facebook
          </Checkbox>
          <Checkbox onChange={onChange}>Twitter</Checkbox>
          <Checkbox onChange={onChange}>Instagram</Checkbox>
        </Radio.Group>
      </div>
      <div>
        <span>
          Bạn có muốn làm thu nhập thụ động có được một liên kết giới thiệu và
          trở thành một chi nhánh?
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Radio.Group
          style={{ display: "flex", flexDirection: "column" }}
          onChange={onChange}
          value={"value"}
        >
          <Radio>Vâng</Radio>
          <Radio>Không</Radio>
        </Radio.Group>
      </div>
    </>
  );
};

export default CreateInvestorStep3;
