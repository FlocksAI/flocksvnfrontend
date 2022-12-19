import dynamic from "next/dynamic";
import React from "react";
import "suneditor/dist/css/suneditor.min.css";
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const EdittorIndex = ({ defaultValue, title }: any) => {
  const onChange = () => {};
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ height: 56, display: "flex", alignItems: "center" }}>
        <span>{title || "Overview"}</span>
      </div>
      <SunEditor
        height="350"
        onChange={onChange}
        name="edit"
        defaultValue={defaultValue}
        setOptions={{
          buttonList: [
            ["undo", "redo"],
            ["font", "fontSize", "formatBlock"],
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript",
            ],
            ["fontColor", "hiliteColor", "textStyle"],
            ["removeFormat"],
            ["outdent", "indent"],
            ["align", "horizontalRule", "list", "lineHeight"],
            ["table", "link", "image", "video"],
            ["fullScreen"],
            ["preview"],
          ],
        }}
      />
    </div>
  );
};

export default EdittorIndex;
