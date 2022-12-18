import { Button, Form, Input } from "antd";
import React from "react";
import CustomForm from "../../../components/custom-form";
import { CreateCompanyInput } from "../interface";

const CreateCompanyStep5: React.FC<CreateCompanyInput> = ({ control }) => {
  return (
    <>
      <CustomForm
        name="35"
        label="Những bước bạn đã thực hiện để xác nhận thị trường?"
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="36"
        label="Có bao nhiêu khách hàng tích cực / người dùng có bạn?"
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="37"
        label="Hãy cho chúng tôi biết thêm về những khách hàng / người dùng này.Họ là khách hàng B2C / B2B?Doanh thu tạo ra?"
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="38"
        label="Nếu bạn đã tham gia hoặc cam kết tham gia vào chương trình ấp trứng, máy gia tốc hoặc bộ tăng tốc trước, hãy cho chúng tôi biết về nó."
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
    </>
  );
};

export default CreateCompanyStep5;
