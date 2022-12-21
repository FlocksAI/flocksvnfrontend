import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import ModalSuccess from "../../../components/modal-success";
import { COMPANY_PROFILE } from "../constant";
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
    company_name: yup.string().required("Trường bắt buộc"),
    website: yup.string().required("Trường bắt buộc"),
    email: yup.string().required("Trường bắt buộc"),
    address: yup.string().required("Trường bắt buộc"),
    phone_number: yup.string().required("Trường bắt buộc"),
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
  const [dataStep2, setDataStep2] = useState() as any;
  const [introVideo, setIntroVideo] = useState<string>();
  const [registrationDocs, setRegistrationDocs] = useState<string>();
  const [taxReceipt, setTaxReceipt] = useState<string>();

  const onSubmit = async (data: any) => {
    if (step < 7) {
      setStep((pve) => pve + 1);
      return;
    }
    const newData = {
      ...data,
      ...dataStep2,
    };
    const company_profile = {} as any;
    const company_details = [] as any;
    for (const [key, value] of Object.entries(newData)) {
      if (COMPANY_PROFILE.indexOf(key) !== -1) {
        company_profile[`${key}`] = value;
      } else {
        const tx = {
          answer_text: [value || ""],
          question: key,
        };
        company_details.push(tx);
      }
    }
    const formatData = {
      company_profile: {
        ...company_profile,
      },
      company_details: {
        ...company_details,
      },
    };
    await addInfoCompany(data);
  };
  const handleContinue = () => {
    setStep((pve) => pve - 1);
  };
  return (
    <SForm>
      <form>
        {step === 0 && (
          <CreateCompanyStep1
            control={control}
            errors={errors}
            introVideo={introVideo}
            registrationDocs={registrationDocs}
            taxReceipt={taxReceipt}
            setIntroVideo={(data) => setIntroVideo(data)}
            setRegistrationDocs={(data) => setRegistrationDocs(data)}
            setTaxReceipt={(data) => setTaxReceipt(data)}
          />
        )}
        {step === 1 && (
          <CreateCompanyStep2
            handleContinue={handleContinue}
            setData={(data) => setDataStep2(data)}
            setStep={() => setStep(2)}
          />
        )}
        {step === 2 && <CreateCompanyStep3 control={control} />}
        {step === 3 && <CreateCompanyStep4 control={control} />}
        {step === 4 && <CreateCompanyStep5 control={control} />}
        {step === 5 && <CreateCompanyStep6 control={control} />}
        {step === 6 && <CreateCompanyStep7 control={control} />}
        {step === 7 && <CreateCompanyStep8 control={control} />}
        {step === 8 && <ModalSuccess />}
        {step === 9 && <CreateProject />}
        {step !== 1 && (
          <div className="btn-footer-create" style={{ display: "flex" }}>
            {step === 8 && (
              <Button
                className="mr-2"
                onClick={() => setStep((pve) => pve + 1)}
              >
                Tạo dự án
              </Button>
            )}
            <Button onClick={handleSubmit(onSubmit)} type="primary">
              {step === 7 ? "Nộp" : "Tiếp theo"}
            </Button>
            {step !== 0 && step !== 8 && (
              <Button className="back" onClick={() => handleContinue()}>
                Quay lại
              </Button>
            )}
          </div>
        )}
      </form>
    </SForm>
  );
};

export default CreateCompanyIndex;
