import { Radio } from "antd";
import React from "react";

const CreateInvestorStep4 = () => {
  const onChange = (e: any) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <>
      <div>
        <span>Bạn bao nhiêu tuổi?</span>
      </div>
      <div>
        <Radio.Group
          style={{ display: "flex", flexDirection: "column" }}
          onChange={onChange}
          value={"value"}
        >
          <Radio>30 trở xuống</Radio>
          <Radio>31-40.</Radio>
          <Radio>41-55.</Radio>
          <Radio>56 - 65.</Radio>
          <Radio>Hơn 65.</Radio>
        </Radio.Group>
      </div>
      <div>
        <span>
          Tổng thu nhập hàng năm của bạn là bao nhiêu (I.E. Việc làm, lương hưu,
          tài sản cho thuê, đầu tư, v.v.)?
        </span>
      </div>
      <div>
        <Radio.Group
          style={{ display: "flex", flexDirection: "column" }}
          onChange={onChange}
          value={"value"}
        >
          <Radio>Dưới 50.000 đô la</Radio>
          <Radio>$ 50,001 - $ 100.000</Radio>
          <Radio>$ 100,001 - $ 300.000</Radio>
          <Radio>Hơn 300.000 đô la</Radio>
        </Radio.Group>
      </div>
      <div>
        <span>
          Bao nhiêu kiểm tra lương hàng tháng của bạn, bạn đặt sang một bên để
          tiết kiệm và / hoặc đầu tư?
        </span>
      </div>
      <div>
        <Radio.Group
          style={{ display: "flex", flexDirection: "column" }}
          onChange={onChange}
          value={"value"}
        >
          <Radio>Lớn hơn 12%</Radio>
          <Radio>6 - 12%</Radio>
          <Radio>1 - 5%</Radio>
          <Radio>Tôi không cứu</Radio>
        </Radio.Group>
      </div>
      <div>
        <span>
          Làm thế nào bạn sẽ mô tả bảo mật của thu nhập hàng năm của bạn, cho dù
          đó là từ việc làm hoặc các nguồn khác?
        </span>
      </div>
      <div>
        <Radio.Group
          style={{ display: "flex", flexDirection: "column" }}
          onChange={onChange}
          value={"value"}
        >
          <Radio>rất an toàn và ổn định</Radio>
          <Radio>An toàn và ổn định</Radio>
          <Radio>An toàn vừa phải và ổn định</Radio>
          <Radio>Hơi bất an và không ổn định</Radio>
        </Radio.Group>
      </div>
    </>
  );
};

export default CreateInvestorStep4;
