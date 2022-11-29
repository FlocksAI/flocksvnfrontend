import { Checkbox, Col, Input, Row } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import CustomForm from "../../components/custom-form";
import { SignupInput } from "./interface";
import { SSignUpDetail } from "./styled";

const SignUpDetail: React.FC<SignupInput> = (props) => {
  const { size } = props;
  const { control, handleSubmit } = useForm();
  return (
    <>
      <SSignUpDetail size={size <= 414 ? true : false}>
        <div className="wrap-sign-up">
          <div className="wrap-content">
            <div className="sign-up">
              <span>Đăng ký</span>
            </div>
          </div>
          <div className="title-content">
            <div className="welcome">Chào mừng bạn đến với Flocks AI!</div>
            <div className="sign-up-email">---- Đăng ký bằng Email ---</div>
          </div>
          <Row>
            <Col xl={12} xs={24}>
              <CustomForm
                name="name"
                label="Họ & Tên"
                classNameWrap="custom-sign-in-group"
                classNameForm="custom-sign-in-item"
                control={control}
                render={({ field }: any) => (
                  <Input
                    placeholder="Nhập tên của bạn"
                    {...field}
                    autoComplete="false"
                  />
                )}
              />
              <CustomForm
                name="email"
                label="Email đăng ký"
                classNameWrap="custom-sign-in-group"
                classNameForm="custom-sign-in-item"
                control={control}
                render={({ field }: any) => (
                  <Input
                    placeholder="Email của bạn"
                    {...field}
                    autoComplete="false"
                  />
                )}
              />
              <CustomForm
                name="password"
                label="Mật khẩu"
                classNameWrap="custom-sign-in-group"
                classNameForm="custom-sign-in-item"
                control={control}
                render={({ field }: any) => (
                  <Input.Password
                    placeholder="Mật khẩu"
                    {...field}
                    autoComplete="false"
                  />
                )}
              />
            </Col>
          </Row>
          <div className="rules">
            <Checkbox>
              <div>
                <span>Bằng cách đăng nhập, bạn đã đồng ý với </span>
                <span className="link-rule">Điều khoản</span>
                <br />
                <span>và </span>
                <span className="link-rule">Bảo mật </span>
                <span>tại Flocks AI.</span>
              </div>
            </Checkbox>
          </div>
          <div className="wrap-btn-login">
            <button className="sign-up">Đăng nhập</button>
            <button className="google">Google</button>
            <button className="facebook">Facebook</button>
            <button className="apple">Apple</button>
          </div>
        </div>
      </SSignUpDetail>
    </>
  );
};

export default SignUpDetail;
