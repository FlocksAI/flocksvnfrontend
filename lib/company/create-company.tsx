import { Form } from "antd";
import React, { useState } from "react";
import { STEPS } from "./constant";
import CreateCompanyStep1 from "./create-company/create-company-step1";
import CreateCompanyStep2 from "./create-company/create-company-step2";
import CreateCompanyStep3 from "./create-company/create-company-step3";

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
    <>
      <Form form={form} layout="vertical">
        {/* <CreateCompanyStep1 /> */}
        {/* <CreateCompanyStep2 />
        <CreateCompanyStep3 /> */}
      </Form>
    </>
  );
};

export default CreateCompany;
