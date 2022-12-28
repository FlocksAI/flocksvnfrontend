import { yupResolver } from "@hookform/resolvers/yup";
import { Button, message } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { INVESTOR_PROFILE } from "../constant";
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
    investorEmail: yup
      .string()
      .email("Định dạng Email không chính xác")
      .required("Trường bắt buộc"),
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
    try {
      if (step < 5) {
        setStep((pve) => pve + 1);
        return;
      }
      const investment_profile = {} as any;
      const investment_details = [] as any;
      for (const [key, value] of Object.entries(data) as any) {
        if (INVESTOR_PROFILE.indexOf(key) !== -1) {
          investment_profile[`${key}`] = value;
        } else {
          let tx;
          if (Array.isArray(value)) {
            console.log(value);
            tx = {
              answer_text: value,
              question: key,
            };
          } else {
            tx = {
              answer_text: [value],
              question: key,
            };
          }
          investment_details.push(tx);
        }
      }
      const formatData = {
        investment_profile: {
          ...investment_profile,
        },
        investment_details: [...investment_details],
      };
      await addInfoInvestor(formatData);
    } catch (error: any) {
      console.log(error);
      message.error(error?.response?.data?.detail);
    }
  };
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
