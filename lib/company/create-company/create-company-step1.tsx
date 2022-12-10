import { Button, Form, Input, Upload } from "antd";
import React from "react";
import CustomForm from "../../../components/custom-form";
import { CreateCompanyInput } from "../interface";

const CreateCompanyStep1: React.FC<CreateCompanyInput> = ({
  control,
  errors,
}) => {
  return (
    <>
      <CustomForm
        name="companyName"
        label="Tên nhà đầu tư"
        control={control}
        error={errors?.companyName?.message}
        render={({ field }: any) => (
          <Input {...field} placeholder="Tên nhà đầu tư" />
        )}
      />
      <CustomForm
        name="entrepreneurName"
        label="Tách các tên Chủ doanh nghiệp bằng thẻ tab hoặc enter"
        control={control}
        render={({ field }: any) => (
          <Input
            {...field}
            placeholder="Tách các tên Chủ doanh nghiệp bằng thẻ tab hoặc enter"
          />
        )}
      />
      <CustomForm
        name="website"
        label="Website"
        error={errors?.website?.message}
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="Website" />}
      />
      <CustomForm
        name="email"
        label="Email"
        error={errors?.email?.message}
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="Email" />}
      />
      <CustomForm
        name="address"
        label="Địa chỉ"
        error={errors?.address?.message}
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="Địa chỉ" />}
      />
      <CustomForm
        name="phoneNumber"
        label="Số điện thoại"
        error={errors?.phoneNumber?.message}
        control={control}
        render={({ field }: any) => (
          <Input {...field} placeholder="Số điện thoại" />
        )}
      />
      <CustomForm
        name="github"
        label="Github"
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="Github" />}
      />
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
