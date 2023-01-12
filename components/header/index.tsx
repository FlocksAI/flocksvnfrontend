import { Avatar, Col, Popover, Row } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { SHeader } from "./styled";
import { useRouter } from "next/router";
import useWindowResize from "../../hook/useResize";
import useProfile from "./useProfile";
import { getAuthToken } from "../../utils/helper";
import { URL_IMAGE } from "../../constant/api-constant";
import NavigationIndex from "../navigation";

const Header = () => {
  const router = useRouter();
  const size = useWindowResize();
  const accessToken = getAuthToken();
  const [open, setOpen] = useState(false);
  const { dataMe } = useProfile();
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  return (
    <>
      <SHeader>
        <Row>
          <Col xl={12}>
            <div className="head-left">
              <Image
                alt="logo"
                src="/image/home/logo-new.png"
                width={121}
                height={48}
                className="logo-image pointed"
                onClick={() => router.push("/")}
              />
              {size.width > 414 && (
                <div className="wrap-left-head">
                  <div className="content pointed">
                    <span onClick={() => router.push("/")}>Trang chủ</span>
                  </div>
                  <div className="content pointed">
                    <span onClick={() => router.push("/project")}>Dự án</span>
                  </div>
                  <div className="content pointed">
                    <span onClick={() => router.push("/blog")}>Kiến Thức</span>
                  </div>
                  <div className="content pointed">
                    <span onClick={() => router.push("/event")}>Sự kiện</span>
                  </div>
                  <div className="content pointed">
                    <span onClick={() => router.push("/faq")}>FAQ</span>
                  </div>
                </div>
              )}
            </div>
          </Col>
          {size.width > 414 && (
            <Col xl={12} className="wrap-login">
              {accessToken && dataMe ? (
                <Popover
                  trigger="click"
                  onOpenChange={handleOpenChange}
                  content={content}
                  open={open}
                  className="pointed"
                >
                  <Avatar
                    src={
                      <Image
                        alt="avatar"
                        src={
                          `${URL_IMAGE}${dataMe?.avatar?.url}` ||
                          "https://joeschmoe.io/api/v1/random"
                        }
                        width={32}
                        height={32}
                      />
                    }
                  />
                  <span className="name-me">Ton Viet Nguyen</span>
                </Popover>
              ) : (
                <div className="wrap-right-head">
                  <button
                    className="btn btn-sign-up pointed"
                    onClick={() => router.push("/sign-up")}
                  >
                    Đăng Ký
                  </button>
                  <button
                    className="btn btn-sign-in pointed"
                    onClick={() => router.push("/sign-in")}
                  >
                    Đăng Nhập
                  </button>
                </div>
              )}
            </Col>
          )}
        </Row>
        {size.width <= 414 && (
          <div style={{ position: "relative", marginTop: "-38px" }}>
            <NavigationIndex
              content1="Trang chủ"
              content2="Dự án"
              content3="Blog"
              content4="Sự kiện"
              content5="FAQ"
            />
          </div>
        )}
      </SHeader>
    </>
  );
};

const content = (
  <div>
    <p className="pointed">Hồ sơ nhà đầu tư</p>
    <p className="pointed">Hồ sơ công ty</p>
    <p style={{ marginBottom: "unset" }} className="pointed">
      Thoát
    </p>
  </div>
);
export default Header;
