import React from "react";
import Footer from "../../components/footer";
import HeaderSub from "../../components/header/head-sub";
import AmountPayment from "./amount-payment";

const PaymentIndex = () => {
  return (
    <>
      <HeaderSub />
      <AmountPayment />
      <Footer />
    </>
  );
};

export default PaymentIndex;
