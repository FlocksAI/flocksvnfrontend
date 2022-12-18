import { Button, Checkbox, Radio, Slider } from "antd";
import React from "react";
import CustomForm from "../../../components/custom-form";
import { STEP_3_CHECKBOX } from "../constant";
import { CreateInvestInput } from "../interface";

const CreateInvestorStep3: React.FC<CreateInvestInput> = ({ control }) => {
  const onChange = (e: any) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const formatter = (value: number) => `$${value}`;
  return (
    <>
      <div style={{ marginBottom: 54 }}>
        <span>Chọn khung thu nhập hàng tháng của bạn?</span>
      </div>
      <CustomForm
        name="3"
        label=""
        defaultValue={[3000, 5000]}
        classNameWrap="ds-mt-5"
        control={control}
        render={({ field }: any) => (
          <Slider
            {...field}
            range
            step={1000}
            min={0}
            max={10000}
            tooltip={{ open: true, formatter }}
          />
        )}
      />
      <div style={{ marginBottom: 54, marginTop: 30 }}>
        <span>Chọn bao nhiêu bạn đầu tư bây giờ ?</span>
      </div>
      <CustomForm
        name="4"
        label=""
        classNameWrap="ds-mt-5"
        control={control}
        defaultValue={[3000, 5000]}
        render={({ field }: any) => (
          <Slider
            {...field}
            range
            step={1000}
            min={0}
            max={10000}
            tooltip={{ open: true, formatter }}
          />
        )}
      />
      <div>
        <span>
          Nền tảng truyền thông xã hội ưa thích để tìm hiểu về tin tức đầu tư
          mới?
        </span>
      </div>
      <div className="radio-media">
        <CustomForm
          name="5"
          label=""
          classNameWrap="ds-mt-5"
          control={control}
          render={({ field }: any) => (
            <Checkbox.Group {...field} options={STEP_3_CHECKBOX} />
          )}
        />
      </div>
      <div>
        <span>
          Bạn có muốn làm thu nhập thụ động có được một liên kết giới thiệu và
          trở thành một chi nhánh?
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <CustomForm
          name="6"
          label=""
          classNameWrap="ds-mt-5"
          control={control}
          render={({ field: { onChange, value } }: any) => (
            <Radio.Group
              value={value}
              onChange={(e) => onChange(e.target.value)}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Radio value="yes">Vâng</Radio>
              <Radio value="no">Không</Radio>
            </Radio.Group>
          )}
        />
      </div>
    </>
  );
};

export default CreateInvestorStep3;
