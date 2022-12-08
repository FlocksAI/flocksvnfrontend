import { Form } from "antd";
import React from "react";
import CreateInvestorStep1 from "./create-investor-step1";
import CreateInvestorStep2 from "./create-investor-step2";
import CreateInvestorStep3 from "./create-investor-step3";
import CreateInvestorStep4 from "./create-investor-step4";

const CreateInvestorIndex = () => {
  const [form] = Form.useForm();
  return (
    <>
      <Form form={form} layout="vertical">
        {/* <CreateInvestorStep1 /> */}
        {/* <CreateInvestorStep2 /> */}
        {/* <CreateInvestorStep3 /> */}
        <CreateInvestorStep4 />
      </Form>
    </>
  );
};

export default CreateInvestorIndex;
