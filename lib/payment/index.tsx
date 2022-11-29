import React from "react";
import Footer from "../../components/footer";
import ContentProjectHead from "../../components/header/content-project-head";
import HeaderSub from "../../components/header/head-sub";
import AmountPayment from "./amount-payment";

const PaymentIndex = () => {
  return (
    <>
      <HeaderSub>
        <ContentProjectHead />
      </HeaderSub>
      <AmountPayment />
      <Footer />
    </>
  );
};

export default PaymentIndex;
