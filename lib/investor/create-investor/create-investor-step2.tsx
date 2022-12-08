import { Checkbox, Form, Input } from "antd";
import React from "react";

const CreateInvestorStep2 = () => {
  const onChange = (e: any) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <>
      <Form.Item label="Những gì bạn sẽ đầu tư vào?">
        <Input placeholder="" />
      </Form.Item>
      <div className="head-title-step">
        <span>Những gì bạn muốn thấy nhiều hơn ở Việt Nam?</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Checkbox onChange={onChange}>Công nghệ</Checkbox>
        <Checkbox onChange={onChange}>Sắc đẹp</Checkbox>
        <Checkbox onChange={onChange}>Thực phẩm và đồ uống</Checkbox>
        <Checkbox onChange={onChange}>Giáo dục Nông nghiệp.</Checkbox>
        <Checkbox onChange={onChange}>Chơi game.</Checkbox>
        <Checkbox onChange={onChange}>Quản lý eo.</Checkbox>
        <Checkbox onChange={onChange}>Năng lượng tái tạo</Checkbox>
        <Checkbox onChange={onChange}>Sức khỏe & Sức khỏe</Checkbox>
        <Checkbox onChange={onChange}>Địa ốc</Checkbox>
        <Checkbox onChange={onChange}>Tài chính</Checkbox>
        <Checkbox onChange={onChange}>Lòng hiếu khách</Checkbox>
        <Checkbox onChange={onChange}>Vận tải</Checkbox>
        <Checkbox onChange={onChange}>Phương tiện truyền thông</Checkbox>
      </div>
    </>
  );
};

export default CreateInvestorStep2;
