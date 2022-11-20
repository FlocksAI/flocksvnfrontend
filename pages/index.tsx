import AnswerQuestion from "../components/answer-question";
import Banner from "../components/banner";
import Footer from "../components/footer";
import FounderTeam from "../components/founder-team";
import Header from "../components/header";
import Invesment from "../components/invesment";
import MutilField from "../components/mutil-field";
import SHomePage from "./styled";
import { GetStaticProps } from "next";

export default function Home() {
  return (
    <>
      <SHomePage className="container">
        <Header />
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
