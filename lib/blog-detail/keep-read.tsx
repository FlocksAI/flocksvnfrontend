import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CardBlogIndex from "../../components/card/Card-Blog";
import useGetListBlog from "../../hook/blog/useGetListBlog";
import { SKeepRead } from "./styled";

const KeepReadIndex = () => {
  const router = useRouter();
  const { dataBlog, getRelatedPosts } = useGetListBlog();
  useEffect(() => {
    if (router?.query?.id) {
      getRelatedPosts(4, router.query?.id);
    }
  }, [router?.query?.id]);
  return (
    <SKeepRead>
      <div className="title-keep-read">
        <span>Keep Reading</span>
      </div>
      <Row justify="center">
        {dataBlog.map((el, index) => (
          <Col key={index} xl={9} className="col-card">
            <CardBlogIndex
              date={el?.createdAt}
              headerImage={el?.headerImage}
              rawContent={el?.rawContent}
              title={el?.title}
              author={el?.author}
            />
          </Col>
        ))}
      </Row>
    </SKeepRead>
  );
};

export default KeepReadIndex;
