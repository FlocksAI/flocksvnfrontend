import { Button, Form, Input } from "antd";
import React from "react";
import CustomForm from "../../../components/custom-form";
import { CreateCompanyInput } from "../interface";

const CreateCompanyStep6: React.FC<CreateCompanyInput> = ({ control }) => {
  return (
    <>
      <CustomForm
        name="39"
        label="Hồ sơ tài chính nếu có."
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="40"
        label="Bạn có doanh thu?"
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="41"
        label="Tốc độ tăng trưởng hàng tháng của bạn là bao nhiêu?"
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="42"
        label="Làm thế nào để hoặc bạn sẽ kiếm tiền?(Mô hình SaaS, Cấp phép, Tư vấn & Đào tạo, v.v.)."
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="43"
        label="Bạn có thể làm bao nhiêu?(Chúng tôi nhận ra bạn không thể biết chính xác, nhưng đưa ra ước tính tốt nhất của bạn)"
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="44"
        label="Chi phí hàng tháng của bạn trong 12 tháng tới là gì?"
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="45"
        label="Bạn đã quyên góp tiền thành công trước đây?Nếu có, bao nhiêu?"
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
    </>
  );
};

export default CreateCompanyStep6;
