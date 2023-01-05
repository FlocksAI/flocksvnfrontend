import { Col, Pagination, Row } from "antd";
import React, { useEffect } from "react";
import ButtonWitchBlog from "../../components/button/Button-Witch-Blog";
import CardBlogIndex from "../../components/card/Card-Blog";
import SubHeadIndex from "../../components/sub-header";
import useGetListBlog from "../../hook/blog/useGetListBlog";
import SBlogIndex from "./styled";

const BlogIndex = () => {
  const { dataBlog, count, setPage, getListBlog } = useGetListBlog();
  useEffect(() => {
    getListBlog(10);
  }, []);
  return (
    <>
      <SBlogIndex>
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
            {dataBlog.map((el, index) => {
              return (
                <Col key={index} xs={24} xl={9} className="col-card">
                  <CardBlogIndex
                    date={el?.createdAt}
                    headerImage={el?.headerImage}
                    rawContent={el?.rawContent}
                    title={el?.title}
                    author={el?.author}
                    slug={el?.slug}
                  />
                </Col>
              );
            })}
          </Row>
          <div className="card-pagination">
            <Pagination
              defaultCurrent={1}
              total={count}
              onChange={(e) => setPage(e)}
            />
          </div>
        </div>
      </SBlogIndex>
    </>
  );
};

export default BlogIndex;
