import React from "react";
import { SCreateProject } from "../styled";
import CustomForm from "../../../components/custom-form";
import { useForm } from "react-hook-form";
import { Col, Divider, Form, Input, Row, Select, Upload } from "antd";
import { TYPE_PROJECT } from "../constant";

const CreateProject = () => {
  const { control } = useForm();
  return (
    <>
      <SCreateProject>
        <div>
          <span>Tạo Dự án</span>
        </div>
        <div>
          <span>Thông tin cơ bản dự án</span>
        </div>
        <CustomForm
          name="companyName"
          label="Tên nhà đầu tư"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Tên nhà đầu tư" />
          )}
        />
        <CustomForm
          name="companyName"
          label="Phụ đề dự án"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Phụ đề dự án" />
          )}
        />
        <CustomForm
          name="companyName"
          label="Tóm tắt dự án"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Tóm tắt dự án" />
          )}
        />
        <Form.Item valuePropName="fileList">
          <Row>
            <Col span={4}>
              <div className="mb-2">Logo</div>
              <Upload action="/upload.do" listType="picture-card">
                <div style={{ marginTop: 8 }}>Upload</div>
              </Upload>
            </Col>
            <Col span={2} />
            <Col span={16}>
              <div className="mb-2">Ảnh bìa</div>
              <Upload action="/upload.do" listType="picture-card">
                <div style={{ marginTop: 8 }}>Upload</div>
              </Upload>
            </Col>
          </Row>
        </Form.Item>
        <Divider />
        <div>
          <span>Thông tin Công ty</span>
        </div>
        <CustomForm
          name="companyName"
          label="Sáng lập"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Sáng lập" />
          )}
        />
        <CustomForm
          name="companyName"
          label="Nhân viên"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Nhân viên" />
          )}
        />
        <CustomForm
          name="companyName"
          label="Website"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Website" />
          )}
        />
        <CustomForm
          name="companyName"
          label="Email"
          control={control}
          render={({ field }: any) => <Input {...field} placeholder="Email" />}
        />
        <CustomForm
          name="companyName"
          label="Số điện thoại"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Số điện thoại" />
          )}
        />
        <CustomForm
          name="companyName"
          label="Vị trí"
          control={control}
          render={({ field }: any) => <Input {...field} placeholder="Vị trí" />}
        />
        <CustomForm
          name="companyName"
          label="Facebook"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Facebook" />
          )}
        />
        <CustomForm
          name="companyName"
          label="Twitter"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Twitter" />
          )}
        />
        <CustomForm
          name="companyName"
          label="LinkedIn"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="LinkedIn" />
          )}
        />
        <CustomForm
          name="companyName"
          label="Istagram"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Istagram" />
          )}
        />
        <CustomForm
          name="companyName"
          label="Youtube"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Youtube" />
          )}
        />
        <Divider />
        <div>
          <span>Thông tin dự án đầu tư</span>
        </div>
        <CustomForm
          name="companyName"
          label="Phân loại"
          control={control}
          render={({ field }: any) => (
            <Select
              {...field}
              style={{ width: "100%" }}
              allowClear
              options={TYPE_PROJECT}
            />
          )}
        />
        <CustomForm
          name="companyName"
          label="Khoản đầu tư mục tiêu"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Khoản đầu tư mục tiêu" />
          )}
        />
        <CustomForm
          name="companyName"
          label="Đầu tư Tối thiểu"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Đầu tư Tối thiểu" />
          )}
        />
        <CustomForm
          name="companyName"
          label="Gía Một Cổ Phần"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Gía Một Cổ Phần" />
          )}
        />
        <CustomForm
          name="companyName"
          label="Ngày Kết thúc"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Ngày Kết thúc" />
          )}
        />
      </SCreateProject>
    </>
  );
};

export default CreateProject;
