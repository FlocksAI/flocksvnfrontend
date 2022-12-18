import { Button, Radio } from "antd";
import React from "react";
import CustomForm from "../../../components/custom-form";
import { CreateInvestInput } from "../interface";

const CreateInvestorStep4: React.FC<CreateInvestInput> = ({ control }) => {
  const onChange = (e: any) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <>
      <div className="title-step">
        <span>Bạn bao nhiêu tuổi?</span>
      </div>
      <div className="mb-4">
        <CustomForm
          name="7"
          label=""
          classNameWrap="ds-mt-5"
          control={control}
          render={({ field: { onChange, value } }: any) => (
            <Radio.Group
              value={value}
              onChange={(e) => onChange(e.target.value)}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Radio value="30">30 trở xuống</Radio>
              <Radio value="30-40">31-40.</Radio>
              <Radio value="41-55">41-55.</Radio>
              <Radio value="56-65">56 - 65.</Radio>
              <Radio value="65">Hơn 65.</Radio>
            </Radio.Group>
          )}
        />
      </div>
      <div className="title-step">
        <span>
          Tổng thu nhập hàng năm của bạn là bao nhiêu (I.E. Việc làm, lương hưu,
          tài sản cho thuê, đầu tư, v.v.)?
        </span>
      </div>
      <div className="mb-4">
        <CustomForm
          name="8"
          label=""
          classNameWrap="ds-mt-5"
          control={control}
          render={({ field: { onChange, value } }: any) => (
            <Radio.Group
              value={value}
              onChange={(e) => onChange(e.target.value)}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Radio value="50000">Dưới 50.000 đô la</Radio>
              <Radio value="50000-100000">$ 50,001 - $ 100.000</Radio>
              <Radio value="100001-300000">$ 100,001 - $ 300.000</Radio>
              <Radio value="300000">Hơn 300.000 đô la</Radio>
            </Radio.Group>
          )}
        />
      </div>
      <div className="title-step">
        <span>
          Bao nhiêu kiểm tra lương hàng tháng của bạn, bạn đặt sang một bên để
          tiết kiệm và / hoặc đầu tư?
        </span>
      </div>
      <div className="mb-4">
        <CustomForm
          name="9"
          label=""
          classNameWrap="ds-mt-5"
          control={control}
          render={({ field: { onChange, value } }: any) => (
            <Radio.Group
              value={value}
              onChange={(e) => onChange(e.target.value)}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Radio value="12">Lớn hơn 12%</Radio>
              <Radio value="6-12">6 - 12%</Radio>
              <Radio value="1-5">1 - 5%</Radio>
              <Radio value="1">Tôi không cứu</Radio>
            </Radio.Group>
          )}
        />
      </div>
      <div className="title-step">
        <span>
          Làm thế nào bạn sẽ mô tả bảo mật của thu nhập hàng năm của bạn, cho dù
          đó là từ việc làm hoặc các nguồn khác?
        </span>
      </div>
      <div className="mb-4">
        <CustomForm
          name="10"
          label=""
          classNameWrap="ds-mt-5"
          control={control}
          render={({ field: { onChange, value } }: any) => (
            <Radio.Group
              value={value}
              onChange={(e) => onChange(e.target.value)}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Radio value="an-toan">rất an toàn và ổn định</Radio>
              <Radio value="on-dinh">An toàn và ổn định</Radio>
              <Radio value="vua-on-dinh">An toàn vừa phải và ổn định</Radio>
              <Radio value="bat-an">Hơi bất an và không ổn định</Radio>
            </Radio.Group>
          )}
        />
      </div>
    </>
  );
};

export default CreateInvestorStep4;
