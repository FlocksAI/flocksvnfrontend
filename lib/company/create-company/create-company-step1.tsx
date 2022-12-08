import { Form, Input, Upload } from "antd";
import React from "react";

const CreateCompanyStep1 = () => {
  return (
    <>
      <Form.Item label="Tên công ty">
        <Input placeholder="Tên công ty" />
      </Form.Item>
      <Form.Item label="Tách các tên Chủ doanh nghiệp bằng thẻ tab hoặc enter">
        <Input placeholder="" />
      </Form.Item>
      <Form.Item label="Website">
        <Input placeholder="Website" />
      </Form.Item>
      <Form.Item label="Email">
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item label="Địa chỉ">
        <Input placeholder="Địa chỉ" />
      </Form.Item>
      <Form.Item label="Số điện thoại">
        <Input placeholder="Số điện thoại" />
      </Form.Item>
      <Form.Item label="Github">
        <Input placeholder="Github" />
      </Form.Item>
      <Form.Item valuePropName="fileList">
        <div className="mb-2">Tải Giấy Phép Đăng Ký Kinh Doanh</div>
        <Upload action="/upload.do" listType="picture-card">
          <div style={{ marginTop: 8 }}>Upload</div>
        </Upload>
      </Form.Item>
      <Form.Item valuePropName="fileList">
        <div className="mb-2">Tải Biên Lai thuế</div>
        <Upload action="/upload.do" listType="picture-card">
          <div style={{ marginTop: 8 }}>Upload</div>
        </Upload>
      </Form.Item>
      <Form.Item valuePropName="fileList">
        <div className="mb-2">Tải video giới thiệu</div>
        <Upload action="/upload.do" listType="picture-card">
          <div style={{ marginTop: 8 }}>Upload</div>
        </Upload>
      </Form.Item>
    </>
  );
};

export default CreateCompanyStep1;
