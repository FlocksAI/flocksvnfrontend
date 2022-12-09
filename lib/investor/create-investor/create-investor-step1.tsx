import { Button, Form, Input } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import CustomForm from "../../../components/custom-form";
import { CreateInvestInput } from "../interface";

const CreateInvestorStep1: React.FC<CreateInvestInput> = ({
  control,
  handleContinue,
}) => {
  const {
    formState: { errors },
  } = useForm();
  return (
    <>
      <CustomForm
        name="investorName"
        label="Tên nhà đầu tư"
        control={control}
        render={({ field }: any) => (
          <Input {...field} placeholder="Tên nhà đầu tư" />
        )}
      />

      <CustomForm
        name="investorEmail"
        label="Email"
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="Email" />}
      />
      <CustomForm
        name="investorPhone"
        label="Số điện thoại"
        control={control}
        render={({ field }: any) => (
          <Input {...field} placeholder="Số điện thoại" />
        )}
      />
      <CustomForm
        name="investorAddress"
        label="Địa chỉ"
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="Địa chỉ" />}
      />
      <CustomForm
        name="investorIdNumber"
        label="Số CMND"
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="Địa chỉ" />}
      />
      <Button className="btn-continue" onClick={() => handleContinue(true)}>
        Tiếp
      </Button>
    </>
  );
};

export default CreateInvestorStep1;
