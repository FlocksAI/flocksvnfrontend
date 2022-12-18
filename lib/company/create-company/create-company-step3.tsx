import { Button, Form, Input } from "antd";
import React from "react";
import CustomForm from "../../../components/custom-form";
import { CreateCompanyInput } from "../interface";

const CreateCompanyStep3: React.FC<CreateCompanyInput> = ({ control }) => {
  return (
    <>
      <CustomForm
        name="25"
        label="Khách hàng của bạn và / hoặc người dùng chi tiết hơn là ai?"
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="26"
        label="Giải thích về cách đề xuất của bạn sẽ làm giảm điểm đau của khách hàng cụ thể."
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="27"
        label="Làm thế nào bạn sẽ có được khách hàng / người dùng?"
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="28"
        label="Đối thủ của bạn là ai, và ai có thể trở thành đối thủ cạnh tranh?"
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="29"
        label="Bạn sợ ai nhất?"
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
    </>
  );
};

export default CreateCompanyStep3;
