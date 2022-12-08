import { Form } from "antd";
import React, { useState } from "react";
import { STEPS } from "./constant";
import CreateCompanyStep1 from "./create-company/create-company-step1";
import CreateCompanyStep2 from "./create-company/create-company-step2";
import CreateCompanyStep3 from "./create-company/create-company-step3";
import CreateCompanyStep4 from "./create-company/create-company-step4";
import CreateCompanyStep5 from "./create-company/create-company-step5";
import CreateCompanyStep6 from "./create-company/create-company-step6";
import CreateCompanyStep7 from "./create-company/create-company-step7";
import CreateCompanyStep8 from "./create-company/create-company-step8";
import { SForm } from "./styled";

const CreateCompany = () => {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const items = STEPS.map((item) => ({ key: item.title, title: item.title }));
  return (
    <SForm>
      <Form form={form} layout="vertical">
        {/* <CreateCompanyStep1 /> */}
        {/* <CreateCompanyStep2 /> */}
        {/* <CreateCompanyStep3 /> */}
        {/* <CreateCompanyStep4 /> */}
        {/* <CreateCompanyStep5 /> */}
        {/* <CreateCompanyStep6 /> */}
        {/* <CreateCompanyStep7 /> */}
        {/* <CreateCompanyStep8 /> */}
      </Form>
    </SForm>
  );
};

export default CreateCompany;
