import { Form, Input } from "antd";
import React from "react";

const CreateCompanyStep3 = () => {
  return (
    <>
      <Form.Item label="Khách hàng của bạn và / hoặc người dùng chi tiết hơn là ai?">
        <Input placeholder="" />
      </Form.Item>
      <Form.Item label="Giải thích về cách đề xuất của bạn sẽ làm giảm điểm đau của khách hàng cụ thể.">
        <Input placeholder="" />
      </Form.Item>
      <Form.Item label="Làm thế nào bạn sẽ có được khách hàng / người dùng?">
        <Input placeholder="" />
      </Form.Item>
      <Form.Item label="Đối thủ của bạn là ai, và ai có thể trở thành đối thủ cạnh tranh?">
        <Input placeholder="" />
      </Form.Item>
      <Form.Item label="Bạn sợ ai nhất?">
        <Input placeholder="" />
      </Form.Item>
    </>
  );
};

export default CreateCompanyStep3;
