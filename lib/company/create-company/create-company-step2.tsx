import { Button, Input } from "antd";
import React from "react";
import CustomForm from "../../../components/custom-form";
import { CreateCompanyInput } from "../interface";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    ["15"]: yup.string().required("Trường bắt buộc"),
    ["16"]: yup.string().required("Trường bắt buộc"),
    ["17"]: yup.string().required("Trường bắt buộc"),
    ["18"]: yup.string().required("Trường bắt buộc"),
    ["19"]: yup.string().required("Trường bắt buộc"),
    ["20"]: yup.string().required("Trường bắt buộc"),
    ["21"]: yup.string().required("Trường bắt buộc"),
    ["22"]: yup.string().required("Trường bắt buộc"),
    ["23"]: yup.string().required("Trường bắt buộc"),
    ["24"]: yup.string().required("Trường bắt buộc"),
  })
  .required();
const CreateCompanyStep2: React.FC<CreateCompanyInput> = ({
  handleContinue,
  setData,
  setStep,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = async (data: any) => {
    setData(data);
    setStep();
  };
  console.log(errors);
  return (
    <>
      <CustomForm
        name="15"
        label="Tại sao bạn bắt đầu công ty này?Điều gì làm bạn phấn khích về nó?"
        control={control}
        error={errors["15"]?.message}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="16"
        label="Nếu đồng sáng lập, bạn đã gặp nhau như thế nào?"
        control={control}
        error={errors["16"]?.message}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="17"
        label="Có bao nhiêu nhân viên toàn thời gian trong đội?Nhà phát triển / kỹ sư là bao nhiêu?Họ đang ở đâu?Văn phòng dựa trên văn phòng hoặc làm việc tại nhà?"
        control={control}
        error={errors["17"]?.message}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="18"
        label="Chuyên môn tên miền của đội là gì?"
        control={control}
        error={errors["18"]?.message}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="19"
        label="Sơ đồ tổ chức."
        error={errors["19"]?.message}
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="20"
        label="Công ty hiện tại Chủ sở hữu có lợi trên 10% KYC (chúng tôi cần nhóm siêng năng)."
        control={control}
        error={errors["20"]?.message}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="21"
        label="Hãy cho chúng tôi biết về kinh nghiệm khởi nghiệp và doanh nghiệp trước đó của bạn."
        control={control}
        error={errors["21"]?.message}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="22"
        label="Bạn có đủ điều kiện để làm việc tại Việt Nam?Bạn có giữ hộ chiếu Việt Nam hoặc giấy phép làm việc Việt Nam không?"
        control={control}
        error={errors["22"]?.message}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="23"
        label="Hãy cho chúng tôi biết về một thời gian bạn đã hack thành công nhất một số hệ thống (không phải máy tính) với lợi thế của bạn."
        control={control}
        error={errors["23"]?.message}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="24"
        label="Hãy cho chúng tôi biết về một dự án thú vị, tốt nhất là bên ngoài lớp học hoặc công việc, hai hoặc nhiều hơn bạn đã tạo ra cùng nhau."
        control={control}
        error={errors["24"]?.message}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <Button onClick={handleSubmit(onSubmit)} type="primary">
        Tiếp tục
      </Button>
      <Button className="back" onClick={handleContinue}>
        Quay lại
      </Button>
    </>
  );
};

export default CreateCompanyStep2;
