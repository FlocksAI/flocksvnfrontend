import AnswerQuestion from "../components/answer-question";
import Banner from "../components/banner";
import Footer from "../components/footer";
import FounderTeam from "../components/founder-team";
import Header from "../components/header";
import Invesment from "../components/invesment";
import MutilField from "../components/mutil-field";
import SHomePage from "./styled";
import { GetStaticProps } from "next";
import useWindowResize from "../hook/useResize";
import { Col, Row } from "antd";

export default function Home() {
  const size = useWindowResize();
  return (
    <>
      <SHomePage
        className="container"
        isScroll={size.width <= 414 ? true : false}
      >
        <Row justify="center">
          <Col span={24}>
            <Header />
          </Col>
        </Row>
        <Banner />
      </SHomePage>
      <Invesment />
      <MutilField />
      <AnswerQuestion />
      <FounderTeam />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
  };
};
