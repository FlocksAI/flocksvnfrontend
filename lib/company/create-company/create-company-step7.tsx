import { Button, Form, Input } from "antd";
import React from "react";
import CustomForm from "../../../components/custom-form";
import { CreateCompanyInput } from "../interface";

const CreateCompanyStep7: React.FC<CreateCompanyInput> = ({ control }) => {
  return (
    <>
      <CustomForm
        name="46"
        label="Có bất kỳ người sáng lập nào được bảo vệ bởi các thỏa thuận sở hữu phi cạnh tranh hoặc trí tuệ trùng lặp với dự án của bạn?Nếu vậy, hãy giải thích."
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="47"
        label="Có bất kỳ mã nào của bạn được viết bởi một người không phải là một trong những người sáng lập của bạn?Nếu vậy, hãy mô tả làm thế nào bạn có thể sử dụng hợp pháp nó.(Tất nhiên là nguồn mở là OK)."
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="48"
        label="Có bất cứ điều gì khác chúng ta nên biết về công ty của bạn?(những người đồng sáng lập đã rời đi, v.v.)"
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <CustomForm
        name="49"
        label="Mô tả sở hữu vốn chủ sở hữu (cổ phiếu phổ thông, cổ phiếu ưu đãi) của công ty bạn giữa người sáng lập, nhân viên, nhà đầu tư, v.v."
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
    </>
  );
};

export default CreateCompanyStep7;
