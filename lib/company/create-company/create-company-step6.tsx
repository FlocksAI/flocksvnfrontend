import { Form, Input } from "antd";
import React from "react";

const CreateCompanyStep6 = () => {
  return (
    <>
      <Form.Item label="Hồ sơ tài chính nếu có.">
        <Input placeholder="" />
      </Form.Item>
      <Form.Item label="Bạn có doanh thu?">
        <Input placeholder="" />
      </Form.Item>
      <Form.Item label="Tốc độ tăng trưởng hàng tháng của bạn là bao nhiêu?">
        <Input placeholder="" />
      </Form.Item>
      <Form.Item label="Làm thế nào để hoặc bạn sẽ kiếm tiền?(Mô hình SaaS, Cấp phép, Tư vấn & Đào tạo, v.v.).">
        <Input placeholder="" />
      </Form.Item>
      <Form.Item label="Bạn có thể làm bao nhiêu?(Chúng tôi nhận ra bạn không thể biết chính xác, nhưng đưa ra ước tính tốt nhất của bạn)">
        <Input placeholder="" />
      </Form.Item>
      <Form.Item label="Chi phí hàng tháng của bạn trong 12 tháng tới là gì?">
        <Input placeholder="" />
      </Form.Item>
      <Form.Item label="Bạn đã quyên góp tiền thành công trước đây?Nếu có, bao nhiêu?">
        <Input placeholder="" />
      </Form.Item>
    </>
  );
};

export default CreateCompanyStep6;
