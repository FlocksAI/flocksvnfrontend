import { Form, Input } from "antd";
import React from "react";

const CreateCompanyStep7 = () => {
  return (
    <>
      <Form.Item label="Có bất kỳ người sáng lập nào được bảo vệ bởi các thỏa thuận sở hữu phi cạnh tranh hoặc trí tuệ trùng lặp với dự án của bạn?Nếu vậy, hãy giải thích.">
        <Input placeholder="" />
      </Form.Item>
      <Form.Item label="Có bất kỳ mã nào của bạn được viết bởi một người không phải là một trong những người sáng lập của bạn?Nếu vậy, hãy mô tả làm thế nào bạn có thể sử dụng hợp pháp nó.(Tất nhiên là nguồn mở là OK).">
        <Input placeholder="" />
      </Form.Item>
      <Form.Item label="Có bất cứ điều gì khác chúng ta nên biết về công ty của bạn?(những người đồng sáng lập đã rời đi, v.v.)">
        <Input placeholder="" />
      </Form.Item>
      <Form.Item label="Mô tả sở hữu vốn chủ sở hữu (cổ phiếu phổ thông, cổ phiếu ưu đãi) của công ty bạn giữa người sáng lập, nhân viên, nhà đầu tư, v.v.">
        <Input placeholder="" />
      </Form.Item>
    </>
  );
};

export default CreateCompanyStep7;
