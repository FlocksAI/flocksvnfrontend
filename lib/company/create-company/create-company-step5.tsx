import { Form, Input } from "antd";
import React from "react";

const CreateCompanyStep5 = () => {
  return (
    <>
      <Form.Item label="Những bước bạn đã thực hiện để xác nhận thị trường?">
        <Input placeholder="" />
      </Form.Item>
      <Form.Item label="Có bao nhiêu khách hàng tích cực / người dùng có bạn?">
        <Input placeholder="" />
      </Form.Item>
      <Form.Item label="Hãy cho chúng tôi biết thêm về những khách hàng / người dùng này.Họ là khách hàng B2C / B2B?Doanh thu tạo ra?">
        <Input placeholder="" />
      </Form.Item>
      <Form.Item label="Nếu bạn đã tham gia hoặc cam kết tham gia vào chương trình ấp trứng, máy gia tốc hoặc bộ tăng tốc trước, hãy cho chúng tôi biết về nó.">
        <Input placeholder="" />
      </Form.Item>
    </>
  );
};

export default CreateCompanyStep5;
