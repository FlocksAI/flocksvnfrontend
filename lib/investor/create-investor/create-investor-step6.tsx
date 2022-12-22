import { Button, Radio } from "antd";
import React from "react";
import CustomForm from "../../../components/custom-form";
import { CreateInvestInput } from "../interface";

const CreateInvestorStep6: React.FC<CreateInvestInput> = ({ control }) => {
  const onChange = (e: any) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <>
      <div className="title-step">
        <span>
          Nếu khoản đầu tư của bạn giảm 25% về giá trị, phù hợp với thị trường,
          bạn sẽ phản hồi như thế nào?
        </span>
      </div>
      <div className="mb-4">
        <CustomForm
          name="13"
          label=""
          defaultValue="Cut your losses, sell your investments and hold cash with your entire account balance"
          classNameWrap="ds-mt-5"
          control={control}
          render={({ field: { onChange, value } }: any) => (
            <Radio.Group
              value={value}
              onChange={(e) => onChange(e.target.value)}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Radio value="cat-lo">
                Cắt lỗ của bạn, bán đầu tư của bạn và giữ tiền mặt với toàn bộ
                số dư tài khoản của bạn
              </Radio>
              <Radio value="ban-1-nua">
                Bán một nửa số đầu tư của bạn và giữ tiền mặt;giữ phần còn lại
                đầu tư như là
              </Radio>
              <Radio value="cat-lo-sub">
                Cắt lỗ của bạn, bán đầu tư của bạn và giữ tiền mặt với toàn bộ
                số dư tài khoản của bạn
              </Radio>
              <Radio value="giu">Giữ danh mục đầu tư và không thay đổi</Radio>
              <Radio value="tan-dung">
                Tận dụng mức giá thấp hơn và đầu tư nhiều tiền hơn
              </Radio>
            </Radio.Group>
          )}
        />
      </div>
      <div className="title-step">
        <span>
          Phát biểu nào mô tả đúng nhất về sự khoan dung của sự biến động của
          thị trường của bạn?
        </span>
      </div>
      <div className="mb-4">
        <CustomForm
          name="14"
          label=""
          defaultValue="Minor fluctuations are tolerable knowing you will likely get a lower return"
          classNameWrap="ds-mt-5"
          control={control}
          render={({ field: { onChange, value } }: any) => (
            <Radio.Group
              value={value}
              onChange={(e) => onChange(e.target.value)}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Radio value="bien-dong">
                Biến động nhỏ có thể chịu được biết rằng bạn có thể sẽ có được
                lợi nhuận thấp hơn
              </Radio>
              <Radio value="bien-dong-sub">
                Một số biến động trong giá trị tài khoản của bạn có thể chấp
                nhận được ưu tiên cho lợi nhuận khiêm tốn
              </Radio>
              <Radio value="bien-dong-thang">
                Biến động hàng tháng về giá trị của tài khoản của bạn có thể
                chịu được khả năng kiếm được lợi nhuận cao hơn
              </Radio>
              <Radio value="bien-dong-ngay">
                Bạn có thể chịu đựng các biến động hàng ngày trong giá trị tài
                khoản của bạn với khả năng lợi nhuận thậm chí cao hơn
              </Radio>
            </Radio.Group>
          )}
        />
      </div>
    </>
  );
};

export default CreateInvestorStep6;
