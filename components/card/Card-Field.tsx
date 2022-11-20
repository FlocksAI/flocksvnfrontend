import React from "react";
import { ICardField } from "./interface";
import { SCardField } from "./styled";

const CardField: React.FC<ICardField> = (props) => {
  const { content, title, subContent } = props;
  return (
    <>
      <SCardField>
        <div className="circle" />
        <div className="wrap-content-field">
          <span className="title-field">{title}</span>
          <div className="content">
            <span>{content}</span>
            <span>{subContent}</span>
          </div>
        </div>
      </SCardField>
    </>
  );
};

export default CardField;
