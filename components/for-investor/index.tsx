/* eslint-disable react/no-unescaped-entities */
import { Button } from "antd";
import { useRouter } from "next/router";
import React from "react";
import useTranslation from "../../hook/useTranslation";
import { SForInvestor } from "./styled";

const ForInvestor = () => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <SForInvestor>
      <div className="wrap-for-investor">
        <div className="head-for-investor">
          <span className="title-head">For investor</span>
          <span className="content">Simple, transparent, and accessible</span>
        </div>
        <div className="find-companies">
          <span className="title-for-investor">Find companies</span>
          <span className="content">
            Search and filter and more to seek for our vetted companies in many
            industries
          </span>
        </div>
        <div className="invest-easily">
          <span className="title-for-investor">Invest easily</span>
          <span className="content">
            Do your own research on our companies' pitch deck.
          </span>
          <span className="content">
            Review financials, valuation and interview the founders.
          </span>
          <span className="content">
            Become an owner for as little as 1,000,000 VNĐ.
          </span>
        </div>
        <div className="build-diversify">
          <span className="title-for-investor">
            Build and diversify your portfolio
          </span>
          <span className="content">
            View your investments on the web and track your diversification.
          </span>
          <span className="content">
            Get live updates about your investments from founders too.
          </span>
        </div>
        <div className="btn-for-investor">
          <Button
            className="color-private"
            onClick={() => router.push("/investor")}
          >
            {t.investor_banner}
          </Button>
        </div>
      </div>
    </SForInvestor>
  );
};

export default ForInvestor;
