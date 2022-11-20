import React from "react";
import { Controller } from "react-hook-form";
import styled from "styled-components";
import { ICustomForm } from "./interface";
import classNames from "classnames";

const StyledCustomFormWrapper = styled.div`
  .label {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #1e1e1e;
    svg {
      margin-left: 12px;
    }
  }
  .form-custom {
    margin-top: 8px;
  }
  .error {
    color: #f13f3f;
  }
`;
function CustomForm({
  control,
  defaultValue,
  render,
  onChange,
  name,
  error,
  label,
  icon,
  classNameForm,
  classNameWrap,
}: ICustomForm) {
  const cls = classNames("form-custom", classNameForm || "");
  const clsWrap = classNames("input-msg-group", classNameWrap || "");
  return (
    <StyledCustomFormWrapper>
      <div className={clsWrap}>
        {label && (
          <span className="label">
            {label}
            {icon}
          </span>
        )}
        <div className={cls}>
          {render && (
            <Controller
              control={control}
              name={name}
              defaultValue={defaultValue}
              render={render}
            />
          )}
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </StyledCustomFormWrapper>
  );
}

export default CustomForm;
