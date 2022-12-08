import { Radio } from "antd";
import React from "react";

const CreateInvestorStep6 = () => {
  const onChange = (e: any) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <>
      <div>
        <span>
          Nếu khoản đầu tư của bạn giảm 25% về giá trị, phù hợp với thị trường,
          bạn sẽ phản hồi như thế nào?
        </span>
      </div>
      <div>
        <Radio.Group
          style={{ display: "flex", flexDirection: "column" }}
          onChange={onChange}
          value={"value"}
        >
          <Radio>
            Cắt lỗ của bạn, bán đầu tư của bạn và giữ tiền mặt với toàn bộ số dư
            tài khoản của bạn
          </Radio>
          <Radio>
            Bán một nửa số đầu tư của bạn và giữ tiền mặt;giữ phần còn lại đầu
            tư như là
          </Radio>
          <Radio>
            Cắt lỗ của bạn, bán đầu tư của bạn và giữ tiền mặt với toàn bộ số dư
            tài khoản của bạn
          </Radio>
          <Radio>Giữ danh mục đầu tư và không thay đổi</Radio>
          <Radio>Tận dụng mức giá thấp hơn và đầu tư nhiều tiền hơn</Radio>
        </Radio.Group>
      </div>
      <div>
        <span>
          Phát biểu nào mô tả đúng nhất về sự khoan dung của sự biến động của
          thị trường của bạn?
        </span>
      </div>
      <div>
        <Radio.Group
          style={{ display: "flex", flexDirection: "column" }}
          onChange={onChange}
          value={"value"}
        >
          <Radio>
            Biến động nhỏ có thể chịu được biết rằng bạn có thể sẽ có được lợi
            nhuận thấp hơn
          </Radio>
          <Radio>
            Một số biến động trong giá trị tài khoản của bạn có thể chấp nhận
            được ưu tiên cho lợi nhuận khiêm tốn
          </Radio>
          <Radio>
            Biến động hàng tháng về giá trị của tài khoản của bạn có thể chịu
            được khả năng kiếm được lợi nhuận cao hơn
          </Radio>
          <Radio>
            Bạn có thể chịu đựng các biến động hàng ngày trong giá trị tài khoản
            của bạn với khả năng lợi nhuận thậm chí cao hơn
          </Radio>
        </Radio.Group>
      </div>
    </>
  );
};

export default CreateInvestorStep6;
