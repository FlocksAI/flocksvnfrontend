import { Checkbox } from "antd";
import React from "react";
import { SIntroduction } from "./styled";

const IntroductionInvestor = () => {
  return (
    <SIntroduction>
      <div>
        <span>Chấp thuận rủi ro đầu tư</span>
      </div>
      <div className="wrap-accept">
        <span>1. Rủi ro</span>
        <span>
          Đầu tư vào những công ty khởi nghiệp là rất rủi ro. Bạn chỉ nên đầu tư
          một khoản mà dù có mất toàn bộ khoản này thi cũng không hề thay đổi
          lối sống của bạn.
        </span>
        <Checkbox>
          Tôi hiểu rằng tôi có thể mất số tiền tôi đang đầu tư
        </Checkbox>
      </div>
      <div className="wrap-accept">
        <span>2. Chuyển tiền có giới hạn</span>
        <span>
          Đầu tư vào những công ty khởi nghiệp là rất rủi ro. Bạn chỉ nên đầu tư
          một khoản mà dù có mất toàn bộ khoản này thi cũng không hề thay đổi
          lối sống của bạn.
        </span>
        <Checkbox>
          Tôi hiểu rằng tôi có thể mất số tiền tôi đang đầu tư
        </Checkbox>
      </div>
      <div className="wrap-accept">
        <span>3. Rủi ro</span>
        <span>
          Đầu tư vào những công ty khởi nghiệp là rất rủi ro. Bạn chỉ nên đầu tư
          một khoản mà dù có mất toàn bộ khoản này thi cũng không hề thay đổi
          lối sống của bạn.
        </span>
        <Checkbox>
          Tôi hiểu rằng tôi có thể mất số tiền tôi đang đầu tư
        </Checkbox>
      </div>
      <div className="wrap-accept">
        <span>4. Chuyển tiền có giới hạn</span>
        <span>
          Đầu tư vào những công ty khởi nghiệp là rất rủi ro. Bạn chỉ nên đầu tư
          một khoản mà dù có mất toàn bộ khoản này thi cũng không hề thay đổi
          lối sống của bạn.
        </span>
        <Checkbox>
          Tôi hiểu rằng tôi có thể mất số tiền tôi đang đầu tư
        </Checkbox>
      </div>
    </SIntroduction>
  );
};
export default IntroductionInvestor;
