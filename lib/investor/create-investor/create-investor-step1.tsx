import { Form, Input } from "antd";
import React from "react";

const CreateInvestorStep1 = () => {
  return (
    <>
      <Form.Item label="Tên nhà đầu tư">
        <Input placeholder="Tên nhà đầu tư" />
      </Form.Item>
      <Form.Item label="Email">
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item label="Số điện thoại">
        <Input placeholder="Số điện thoại" />
      </Form.Item>
      <Form.Item label="Địa chỉ">
        <Input placeholder="Địa chỉ" />
      </Form.Item>
      <Form.Item label="Số CMND">
        <Input placeholder="Số CMND" />
      </Form.Item>
    </>
  );
};

export default CreateInvestorStep1;
