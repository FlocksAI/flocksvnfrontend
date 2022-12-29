import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input, message, Modal, Row } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import CustomForm from "../../../components/custom-form";
import UploadIndex from "../../../components/upload";
import { IModalCreateTeamMember } from "../interface";
import { STeamMember } from "../styled";

const schema = yup
  .object({
    name: yup.string().required("Trường bắt buộc"),
    position: yup.string().required("Trường bắt buộc"),
    facebook: yup.string().required("Trường bắt buộc"),
    twitter: yup.string().required("Trường bắt buộc"),
    linkedin: yup.string().required("Trường bắt buộc"),
  })
  .required();

const CreateTeamMember: React.FC<IModalCreateTeamMember> = ({
  handleCancel,
  handleOk,
  isModalOpen,
  record,
}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [logoImage, setLogoImage] = useState(
    record?.imageUrl ? record?.imageUrl : null
  ) as any;
  const onSubmit = (data: any) => {
    if (!logoImage) {
      message.error("Vui lòng đăng ảnh");
      return;
    }
    const formatData = {
      ...data,
      imageUrl: logoImage,
    };
    reset();
    setLogoImage();
    handleOk(formatData);
  };
  return (
    <Modal
      title={record ? "Cập nhật thành viên" : "Thêm Thành viên nhóm"}
      open={isModalOpen}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Hủy
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit(onSubmit)}>
          Lưu lại
        </Button>,
      ]}
    >
      <STeamMember>
        <UploadIndex
          setRegistrationDocs={setLogoImage}
          registrationDocs={logoImage}
        />
        <CustomForm
          name="name"
          label="Tên"
          error={errors?.name?.message}
          defaultValue={record?.name || ""}
          control={control}
          render={({ field }: any) => (
            <Input className="custom-input-modal" {...field} />
          )}
        />
        <CustomForm
          name="about"
          label="Về chúng tôi"
          defaultValue={record?.about || ""}
          control={control}
          render={({ field }: any) => <Input.TextArea rows={3} {...field} />}
        />
        <CustomForm
          name="position"
          label="Vị trí"
          error={errors?.position?.message}
          defaultValue={record?.position || ""}
          control={control}
          render={({ field }: any) => (
            <Input className="custom-input-modal" {...field} />
          )}
        />
        <CustomForm
          name="facebook"
          label="Facebook"
          error={errors?.facebook?.message}
          defaultValue={record?.facebook || ""}
          control={control}
          render={({ field }: any) => (
            <Input className="custom-input-modal" {...field} />
          )}
        />
        <CustomForm
          name="twitter"
          label="Twitter"
          error={errors?.twitter?.message}
          defaultValue={record?.twitter || ""}
          control={control}
          render={({ field }: any) => (
            <Input className="custom-input-modal" {...field} />
          )}
        />
        <CustomForm
          name="linkedin"
          label="LinkedIn"
          error={errors?.linkedin?.message}
          defaultValue={record?.linkedin || ""}
          control={control}
          render={({ field }: any) => (
            <Input className="custom-input-modal" {...field} />
          )}
        />
      </STeamMember>
    </Modal>
  );
};

export default CreateTeamMember;
