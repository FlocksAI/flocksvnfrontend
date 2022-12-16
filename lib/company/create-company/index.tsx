import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import ModalSuccess from "../../../components/modal-success";
import { SForm } from "../styled";
import useCompany from "../useCompany";
import CreateCompanyStep1 from "./create-company-step1";
import CreateCompanyStep2 from "./create-company-step2";
import CreateCompanyStep3 from "./create-company-step3";
import CreateCompanyStep4 from "./create-company-step4";
import CreateCompanyStep5 from "./create-company-step5";
import CreateCompanyStep6 from "./create-company-step6";
import CreateCompanyStep7 from "./create-company-step7";
import CreateCompanyStep8 from "./create-company-step8";
import CreateProject from "./create-project";

const schema = yup
  .object({
    companyName: yup.string().required("Trường bắt buộc"),
    website: yup.string().required("Trường bắt buộc"),
    email: yup.string().required("Trường bắt buộc"),
    address: yup.string().required("Trường bắt buộc"),
    phoneNumber: yup.string().required("Trường bắt buộc"),
  })
  .required();

const CreateCompanyIndex = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const { addInfoCompany } = useCompany();
  const [step, setStep] = useState(0);
  const onSubmit = async (data: any) => {
    if (step < 8) {
      setStep((pve) => pve + 1);
      return;
    }
    const resp = await addInfoCompany(data);
    console.log(resp);
    console.log(data);
  };
  const handleContinue = () => {
    setStep((pve) => pve - 1);
  };
  return (
    <SForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 0 && <CreateCompanyStep1 control={control} errors={errors} />}
        {step === 1 && <CreateCompanyStep2 control={control} />}
        {step === 2 && <CreateCompanyStep3 control={control} />}
        {step === 3 && <CreateCompanyStep4 control={control} />}
        {step === 4 && <CreateCompanyStep5 control={control} />}
        {step === 5 && <CreateCompanyStep6 control={control} />}
        {step === 6 && <CreateCompanyStep7 control={control} />}
        {step === 7 && <CreateCompanyStep8 control={control} />}
        {step === 8 && <ModalSuccess />}
        {step === 9 && <CreateProject />}
        <div className="btn-footer-create">
          {step === 8 && (
            <Button className="mr-2" onClick={() => setStep((pve) => pve + 1)}>
              Tạo dự án
            </Button>
          )}
          <Button onClick={handleSubmit(onSubmit)} type="primary">
            {step === 7 ? "Nộp" : "Tiếp theo"}
          </Button>
        </div>
        {step !== 0 && step !== 8 && (
          <Button className="back" onClick={() => handleContinue()}>
            Quay lại
          </Button>
        )}
      </form>
    </SForm>
  );
};

export default CreateCompanyIndex;
