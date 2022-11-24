import { Col, Row } from "antd";
import React, { useState } from "react";
import ButtonWitchBlog from "../../components/button/Button-Witch-Blog";
import CardBlogIndex from "../../components/card/Card-Blog";
import SubHeadIndex from "../../components/sub-header";
import SBlogPage from "./styled";

const BlogPage = () => {
  const [card] = useState(new Array(8).fill(0));
  return (
    <>
      <SBlogPage>
        <SubHeadIndex
          title="Our Blogs"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed."
          image="/image/home/Rectangle.png"
        />
        <Row justify="center">
          <Col xs={24} xl={14}>
            <ButtonWitchBlog />
          </Col>
        </Row>
        <div className="list-project">
          <Row justify="center">
            {card.map((el) => {
              return (
                <Col key={el} xs={24} xl={9} className="col-card">
                  <CardBlogIndex />
                </Col>
              );
            })}
          </Row>
        </div>
      </SBlogPage>
    </>
  );
};

export default BlogPage;
