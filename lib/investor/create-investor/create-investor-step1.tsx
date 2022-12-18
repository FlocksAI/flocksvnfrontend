import { Input } from "antd";
import React from "react";
import CustomForm from "../../../components/custom-form";
import { CreateInvestInput } from "../interface";

const CreateInvestorStep1: React.FC<CreateInvestInput> = ({
  control,
  errors,
}) => {
  return (
    <>
      <CustomForm
        name="investorName"
        label="Tên nhà đầu tư"
        control={control}
        error={errors?.investorName?.message}
        render={({ field }: any) => (
          <Input {...field} placeholder="Tên nhà đầu tư" />
        )}
      />

      <CustomForm
        name="investorEmail"
        label="Email"
        error={errors?.investorEmail?.message}
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="Email" />}
      />
      <CustomForm
        name="investorPhone"
        label="Số điện thoại"
        control={control}
        error={errors?.investorPhone?.message}
        render={({ field }: any) => (
          <Input {...field} placeholder="Số điện thoại" />
        )}
      />
      <CustomForm
        name="investorAddress"
        label="Địa chỉ"
        control={control}
        error={errors?.investorAddress?.message}
        render={({ field }: any) => <Input {...field} placeholder="Địa chỉ" />}
      />
      <CustomForm
        name="investorIdNumber"
        label="Số CMND"
        control={control}
        error={errors?.investorIdNumber?.message}
        render={({ field }: any) => <Input {...field} placeholder="Địa chỉ" />}
      />
    </>
  );
};

export default CreateInvestorStep1;
