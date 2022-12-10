import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { SForm } from "../styled";
import useInvestor from "../useInvestor";
import CreateInvestorStep1 from "./create-investor-step1";
import CreateInvestorStep2 from "./create-investor-step2";
import CreateInvestorStep3 from "./create-investor-step3";
import CreateInvestorStep4 from "./create-investor-step4";
import CreateInvestorStep5 from "./create-investor-step5";
import CreateInvestorStep6 from "./create-investor-step6";

const schema = yup
  .object({
    investorName: yup.string().required("Trường bắt buộc"),
    investorEmail: yup.string().required("Trường bắt buộc"),
    investorPhone: yup.string().required("Trường bắt buộc"),
    investorAddress: yup.string().required("Trường bắt buộc"),
    investorIdNumber: yup.string().required("Trường bắt buộc"),
  })
  .required();

const CreateInvestorIndex = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const { addInfoInvestor } = useInvestor();
  const [step, setStep] = useState(0);
  const onSubmit = async (data: any) => {
    if (step < 5) {
      setStep((pve) => pve + 1);
      return;
    }
    const resp = await addInfoInvestor(data);
    console.log(resp);
    console.log(data);
  };
  console.log(errors);
  const handleContinue = () => {
    setStep((pve) => pve - 1);
  };
  return (
    <SForm>
      <form>
        {step === 0 && (
          <CreateInvestorStep1 control={control} errors={errors} />
        )}
        {step === 1 && <CreateInvestorStep2 control={control} />}
        {step === 2 && <CreateInvestorStep3 control={control} />}
        {step === 3 && <CreateInvestorStep4 control={control} />}
        {step === 4 && <CreateInvestorStep5 control={control} />}
        {step === 5 && <CreateInvestorStep6 control={control} />}
        <Button onClick={handleSubmit(onSubmit)} type="primary">
          {step === 5 ? "Nộp" : "Tiếp theo"}
        </Button>
        {step !== 0 && (
          <Button className="back" onClick={() => handleContinue()}>
            Quay lại
          </Button>
        )}
      </form>
    </SForm>
  );
};

export default CreateInvestorIndex;
