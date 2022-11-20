import { Input } from "antd";
import React from "react";
import { SSeachbox } from "./styled";

const SearchBox = () => {
  return (
    <SSeachbox>
      <Input className="search-box-input" placeholder="Search name project" />
    </SSeachbox>
  );
};

export default SearchBox;
