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
import SwitchTranslate from "../translate";
import useTranslation from "../../hook/useTranslation";

const Header = () => {
  const { t } = useTranslation()
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
              {size.width < 414 && <SwitchTranslate />}
              {size.width > 414 && (
                <div className="wrap-left-head">
                  <div className="content pointed">
                    <span onClick={() => router.push("/")}>{t.home}</span>
                  </div>
                  <div className="content pointed">
                    <span onClick={() => router.push("/project")}>{t.projects}</span>
                  </div>
                  <div className="content pointed">
                    <span onClick={() => router.push("/blog")}>{t.knowledge}</span>
                  </div>
                  <div className="content pointed">
                    <span onClick={() => router.push("/event")}>{t.events}</span>
                  </div>
                  <div className="content pointed">
                    <span onClick={() => router.push("/faq")}>{t.faq}</span>
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
                  <span className="name-me">{dataMe?.firstName} {dataMe?.lastName}</span>
                </Popover>
              ) : (
                <div className="wrap-right-head">
                  <button
                    className="btn btn-sign-up pointed"
                    onClick={() => router.push("/sign-up")}
                  >
                    {t.sign_up}
                  </button>
                  <button
                    className="btn btn-sign-in pointed"
                    onClick={() => router.push("/sign-in")}
                  >
                    {t.sign_in}
                  </button>
                </div>
              )}
              <SwitchTranslate />
            </Col>
          )}
        </Row>
        {size.width <= 414 && (
          <>
            {/* <div style={{ position: "relative", marginTop: "-38px" }}>
              <SwitchTranslate />
            </div> */}
            <div style={{ position: "relative", marginTop: "-38px" }}>
              <NavigationIndex
                content1={t.home}
                content2={t.projects}
                content3={t.blog}
                content4={t.events}
                content5={t.faq}
              />
            </div>
          </>
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
