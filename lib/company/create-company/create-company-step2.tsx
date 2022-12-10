import { Button, Input } from "antd";
import React from "react";
import CustomForm from "../../../components/custom-form";
import { CreateCompanyInput } from "../interface";

const CreateCompanyStep2: React.FC<CreateCompanyInput> = ({ control }) => {
  return (
    <>
      <CustomForm
        name="github"
        label="Tại sao bạn bắt đầu công ty này?Điều gì làm bạn phấn khích về nó?"
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="github"
        label="Nếu đồng sáng lập, bạn đã gặp nhau như thế nào?"
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="github"
        label="Có bao nhiêu nhân viên toàn thời gian trong đội?Nhà phát triển / kỹ sư là bao nhiêu?Họ đang ở đâu?Văn phòng dựa trên văn phòng hoặc làm việc tại nhà?"
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="github"
        label="Chuyên môn tên miền của đội là gì?"
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="github"
        label="Sơ đồ tổ chức."
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="github"
        label="Công ty hiện tại Chủ sở hữu có lợi trên 10% KYC (chúng tôi cần nhóm siêng năng)."
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="github"
        label="Hãy cho chúng tôi biết về kinh nghiệm khởi nghiệp và doanh nghiệp trước đó của bạn."
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="github"
        label="Bạn có đủ điều kiện để làm việc tại Việt Nam?Bạn có giữ hộ chiếu Việt Nam hoặc giấy phép làm việc Việt Nam không?"
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="github"
        label="Hãy cho chúng tôi biết về một thời gian bạn đã hack thành công nhất một số hệ thống (không phải máy tính) với lợi thế của bạn."
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="github"
        label="Hãy cho chúng tôi biết về một dự án thú vị, tốt nhất là bên ngoài lớp học hoặc công việc, hai hoặc nhiều hơn bạn đã tạo ra cùng nhau."
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
    </>
  );
};

export default CreateCompanyStep2;
