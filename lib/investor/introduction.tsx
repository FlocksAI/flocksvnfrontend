import { Button, Checkbox } from "antd";
import React, { useEffect, useState } from "react";
import { IntroductionInput } from "./interface";
import { SIntroduction } from "./styled";

const IntroductionInvestor: React.FC<IntroductionInput> = ({ setIsShow }) => {
  const [approve, setApprove] = useState(0);
  const handleClick = (event: any) => {
    if (event.target.checked) {
      setApprove((pre) => pre + 1);
    } else {
      setApprove((pre) => pre - 1);
    }
  };
  const startInvestor = () => {
    if (approve === 4) {
      setIsShow(true);
    }
  };
  return (
    <SIntroduction>
      <div className="title">
        <span>Chấp thuận rủi ro đầu tư</span>
      </div>
      <div className="wrap-accept">
        <span className="sub-title">1. Rủi ro</span>
        <span className="content">
          Đầu tư vào những công ty khởi nghiệp là rất rủi ro. Bạn chỉ nên đầu tư
          một khoản mà dù có mất toàn bộ khoản này thi cũng không hề thay đổi
          lối sống của bạn.
        </span>
        <Checkbox className="check-approve" onChange={handleClick}>
          Tôi hiểu rằng tôi có thể mất số tiền tôi đang đầu tư
        </Checkbox>
      </div>
      <div className="wrap-accept">
        <span className="sub-title">2. Chuyển tiền có giới hạn</span>
        <span className="content">
          Đầu tư vào những công ty khởi nghiệp là rất rủi ro. Bạn chỉ nên đầu tư
          một khoản mà dù có mất toàn bộ khoản này thi cũng không hề thay đổi
          lối sống của bạn.
        </span>
        <Checkbox className="check-approve" onChange={handleClick}>
          Tôi hiểu rằng tôi có thể mất số tiền tôi đang đầu tư
        </Checkbox>
      </div>
      <div className="wrap-accept">
        <span className="sub-title">3. Rủi ro</span>
        <span className="content">
          Đầu tư vào những công ty khởi nghiệp là rất rủi ro. Bạn chỉ nên đầu tư
          một khoản mà dù có mất toàn bộ khoản này thi cũng không hề thay đổi
          lối sống của bạn.
        </span>
        <Checkbox className="check-approve" onChange={handleClick}>
          Tôi hiểu rằng tôi có thể mất số tiền tôi đang đầu tư
        </Checkbox>
      </div>
      <div className="wrap-accept">
        <span className="sub-title">4. Chuyển tiền có giới hạn</span>
        <span className="content">
          Đầu tư vào những công ty khởi nghiệp là rất rủi ro. Bạn chỉ nên đầu tư
          một khoản mà dù có mất toàn bộ khoản này thi cũng không hề thay đổi
          lối sống của bạn.
        </span>
        <Checkbox className="check-approve" onChange={handleClick}>
          Tôi hiểu rằng tôi có thể mất số tiền tôi đang đầu tư
        </Checkbox>
      </div>
      <div className="btn">
        <Button
          type="primary"
          disabled={approve === 4 ? false : true}
          onClick={startInvestor}
        >
          Bắt Đầu Đầu tư
        </Button>
      </div>
    </SIntroduction>
  );
};
export default IntroductionInvestor;
