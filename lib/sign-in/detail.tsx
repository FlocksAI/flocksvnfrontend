import { Checkbox, Col, Input, message, Row } from "antd";
import React, { useEffect } from "react";
import { SSignInDetail } from "./styled";
import { useForm } from "react-hook-form";
import { SigninInput } from "./interface";
import CustomForm from "../../components/custom-form";
import { gapi } from "gapi-script";
import { GoogleLogin } from "react-google-login";
import { CLIENT_ID } from "../../constant/api-constant";
import useLogin from "./useLogin";

const SigninDetail: React.FC<SigninInput> = (props) => {
  const { size } = props;
  const { control, handleSubmit } = useForm();
  const { loginEmailPassword, loginGoogle } = useLogin();

  useEffect(() => {
    if (window !== undefined) {
      gapi.load("client:auth2", () => {
        gapi.auth2.init({ clientId: CLIENT_ID });
      });
    }
  }, []);
  const onFailLogin = (res: any) => {
    console.log(res);
    message.warning("login Fail", res);
  };
  const responseGoogle = (response: any) => {
    console.log(response);
    loginGoogle("google");
  };
  const login = (data: any) => {
    loginEmailPassword(data);
  };
  return (
    <>
      <SSignInDetail size={size <= 414 ? true : false}>
        <div className="wrap-sign-in">
          <div className="wrap-content">
            <div className="hello">
              <span>Xin chào !👋</span>
            </div>
            <div className="hello-content">
              <div className="welcome">Chào mừng bạn đến với Flocks AI!</div>
              <br />
              <span className="no-account">
                Chưa có tài khoản?
                <span className="sign-up-here"> Đăng ký tại đây!</span>
              </span>
            </div>
            <Row>
              <Col xl={12} xs={24}>
                <CustomForm
                  name="email"
                  label="Email đăng nhập"
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
              <button className="sign-up pointed" onClick={handleSubmit(login)}>
                Đăng nhập
              </button>
              <GoogleLogin
                clientId={CLIENT_ID}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={onFailLogin}
                cookiePolicy={"single_host_origin"}
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    className="google pointed"
                    disabled={renderProps.disabled}
                  >
                    Google
                  </button>
                )}
              />
              <button className="facebook">Facebook</button>
              <button className="apple">Apple</button>
            </div>
          </div>
        </div>
      </SSignInDetail>
    </>
  );
};

export default SigninDetail;
