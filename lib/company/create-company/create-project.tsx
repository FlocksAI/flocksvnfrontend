import React, { useState } from "react";
import { SCreateProject } from "../styled";
import CustomForm from "../../../components/custom-form";
import { useForm } from "react-hook-form";
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
  Select,
} from "antd";
import useCompany from "../useCompany";
import moment from "moment";
import UploadIndex from "../../../components/upload";
import EdittorIndex from "../../../components/edit-tor";

const CreateProject = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createCompany, category } = useCompany();
  const [logoImage, setLogoImage] = useState<string>();
  const [coverImage, setCoverImage] = useState<string>();
  const [edittorView] = useState([
    {
      title: "Overviews",
    },
    {
      title: "Problem",
    },
    {
      title: "Solution",
    },
  ]);
  const onSubmit = async (data: any) => {
    console.log(data);
    const formatData = {
      ...data,
      closingDate: moment(data.closingDate).format("YYYY-MM-DD"),
      founded: moment(data.founded).format("YYYY-MM-DD"),
      presentDocument: [],
      presentTeamMember: [],
      presentDetails: [],
    };
    createCompany(formatData);
  };
  return (
    <>
      <SCreateProject>
        <div className="title-create-project">
          <span>Tạo Dự án</span>
        </div>
        <div className="sub-title">
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
          name="companySubTitle"
          label="Phụ đề dự án"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Phụ đề dự án" />
          )}
        />
        <CustomForm
          name="abstract"
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
              <UploadIndex
                setRegistrationDocs={setLogoImage}
                registrationDocs={logoImage}
              />
            </Col>
            <Col span={2} />
            <Col span={16}>
              <div className="mb-2">Ảnh bìa</div>
              <UploadIndex
                setRegistrationDocs={setCoverImage}
                registrationDocs={coverImage}
                widthTrue={true}
              />
            </Col>
          </Row>
        </Form.Item>
        <Divider />
        <div className="sub-title">
          <span>Thông tin Công ty</span>
        </div>
        <CustomForm
          name="founded"
          label="Sáng lập"
          control={control}
          render={({ field }: any) => <DatePicker {...field} />}
        />
        <CustomForm
          name="employees"
          label="Nhân viên"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Nhân viên" />
          )}
        />
        <CustomForm
          name="website"
          label="Website"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Website" />
          )}
        />
        <CustomForm
          name="email"
          label="Email"
          control={control}
          render={({ field }: any) => <Input {...field} placeholder="Email" />}
        />
        <CustomForm
          name="phoneNumber"
          label="Số điện thoại"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Số điện thoại" />
          )}
        />
        <CustomForm
          name="location"
          label="Vị trí"
          control={control}
          render={({ field }: any) => <Input {...field} placeholder="Vị trí" />}
        />
        <CustomForm
          name="facebook"
          label="Facebook"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Facebook" />
          )}
        />
        <CustomForm
          name="twitter"
          label="Twitter"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Twitter" />
          )}
        />
        <CustomForm
          name="linkedin"
          label="LinkedIn"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="LinkedIn" />
          )}
        />
        <CustomForm
          name="instagram"
          label="Istagram"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Istagram" />
          )}
        />
        <CustomForm
          name="youtube"
          label="Youtube"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Youtube" />
          )}
        />
        <Divider />
        <div className="sub-title">
          <span>Thông tin dự án đầu tư</span>
        </div>
        <CustomForm
          name="category"
          label="Phân loại"
          control={control}
          render={({ field }: any) => (
            <Select
              {...field}
              style={{ width: "100%" }}
              allowClear
              options={category}
            />
          )}
        />
        <CustomForm
          name="investmentTarget"
          label="Khoản đầu tư mục tiêu"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Khoản đầu tư mục tiêu" />
          )}
        />
        <CustomForm
          name="investmentMin"
          label="Đầu tư Tối thiểu"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Đầu tư Tối thiểu" />
          )}
        />
        <CustomForm
          name="pricePerShare"
          label="Gía Một Cổ Phần"
          control={control}
          render={({ field }: any) => (
            <Input {...field} placeholder="Gía Một Cổ Phần" />
          )}
        />
        <CustomForm
          name="closingDate"
          label="Ngày Kết thúc"
          control={control}
          render={({ field }: any) => <DatePicker {...field} />}
        />
        <Divider />
        <div className="sub-title">
          <span>Tài liệu dự án</span>
        </div>
        <UploadIndex
          setRegistrationDocs={setLogoImage}
          registrationDocs={logoImage}
          types="doc"
        />
        {edittorView.map((el, index) => (
          <EdittorIndex key={index} title={el.title} />
        ))}
        <Button onClick={handleSubmit(onSubmit)} type="primary">
          Nộp
        </Button>
      </SCreateProject>
    </>
  );
};

export default CreateProject;
