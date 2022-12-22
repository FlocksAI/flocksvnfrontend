import { Button, Checkbox, Input } from "antd";
import React from "react";
import CustomForm from "../../../components/custom-form";
import { STEP_2_CHECKBOX } from "../constant";
import { CreateInvestInput } from "../interface";

const CreateInvestorStep2: React.FC<CreateInvestInput> = ({
  control,
  errors,
}) => {
  return (
    <>
      <CustomForm
        name="1"
        defaultValue="1"
        label="Những gì bạn sẽ đầu tư vào?"
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="" />}
      />
      <div className="head-title-step">
        <span>Những gì bạn muốn thấy nhiều hơn ở Việt Nam?</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <CustomForm
          name="2"
          label=""
          defaultValue="Công nghệ"
          classNameWrap="ds-mt-5"
          control={control}
          render={({ field }: any) => (
            <Checkbox.Group {...field} options={STEP_2_CHECKBOX} />
          )}
        />
      </div>
    </>
  );
};

export default CreateInvestorStep2;
