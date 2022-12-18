import { Button, Form, Input } from "antd";
import React from "react";
import CustomForm from "../../../components/custom-form";
import { CreateCompanyInput } from "../interface";

const CreateCompanyStep4: React.FC<CreateCompanyInput> = ({ control }) => {
  return (
    <>
      <CustomForm
        name="30"
        label="Làm thế nào để bạn biết mọi người cần những gì bạn đang làm?"
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="31"
        label="Có gì mới về những gì bạn đang làm?"
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="32"
        label="Những gì thay thế làm mục tiêu của bạn personas khu nghỉ dưỡng vì nó chưa tồn tại?"
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="33"
        label="Đây có phải là ý tưởng về việc phái sinh của một cái gì đó đã tồn tại hoặc đó là một ý tưởng triệt để / gây rối?"
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="34"
        label="Nếu ý tưởng của bạn là loại đối mặt với một vấn đề gà và trứng theo nghĩa là sẽ không hấp dẫn người dùng cho đến khi nó có rất nhiều người dùng (ví dụ: một thị trường), bạn sẽ vượt qua nó như thế nào?"
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
    </>
  );
};

export default CreateCompanyStep4;
