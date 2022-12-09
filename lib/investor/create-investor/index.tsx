import { Button, Form } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { SForm } from "../styled";
import CreateInvestorStep1 from "./create-investor-step1";
import CreateInvestorStep2 from "./create-investor-step2";
import CreateInvestorStep3 from "./create-investor-step3";
import CreateInvestorStep4 from "./create-investor-step4";
import CreateInvestorStep5 from "./create-investor-step5";
import CreateInvestorStep6 from "./create-investor-step6";

const CreateInvestorIndex = () => {
  const { control, handleSubmit } = useForm();
  const [step, setStep] = useState(0);
  const onSubmit = (data: any) => console.log(data);
  const handleContinue = (view: boolean) => {
    if (view) {
      setStep((pve) => pve + 1);
    }
  };
  return (
    <SForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 0 && (
          <CreateInvestorStep1
            control={control}
            handleContinue={handleContinue}
          />
        )}
        {step === 1 && (
          <CreateInvestorStep2
            control={control}
            handleContinue={handleContinue}
          />
        )}
        {step === 2 && (
          <CreateInvestorStep3
            control={control}
            handleContinue={handleContinue}
          />
        )}
        {step === 3 && <CreateInvestorStep4 control={control} />}
        {step === 4 && <CreateInvestorStep5 control={control} />}
        {step === 5 && <CreateInvestorStep6 control={control} />}
        <Button onClick={handleSubmit(onSubmit)}>Nộp</Button>
      </form>
    </SForm>
  );
};

export default CreateInvestorIndex;
