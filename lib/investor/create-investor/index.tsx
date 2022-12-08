import { Form } from "antd";
import React from "react";
import { SForm } from "../styled";
import CreateInvestorStep1 from "./create-investor-step1";
import CreateInvestorStep2 from "./create-investor-step2";
import CreateInvestorStep3 from "./create-investor-step3";
import CreateInvestorStep4 from "./create-investor-step4";
import CreateInvestorStep5 from "./create-investor-step5";
import CreateInvestorStep6 from "./create-investor-step6";

const CreateInvestorIndex = () => {
  const [form] = Form.useForm();
  return (
    <SForm>
      <Form form={form} layout="vertical">
        {/* <CreateInvestorStep1 /> */}
        {/* <CreateInvestorStep2 /> */}
        {/* <CreateInvestorStep3 /> */}
        {/* <CreateInvestorStep4 /> */}
        {/* <CreateInvestorStep5 /> */}
        <CreateInvestorStep6 />
      </Form>
    </SForm>
  );
};

export default CreateInvestorIndex;
