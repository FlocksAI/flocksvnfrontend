/* eslint-disable @next/next/no-img-element */
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useState, useRef } from "react";
import { getAuthToken } from "../../utils/helper";
import { SUpload } from "./styled";
import { API, URL_IMAGE } from "../../constant/api-constant";

const UploadDocument = ({
  registrationDocs,
  setRegistrationDocs,
  widthTrue,
  isVideo = false,
}: any) => {
  const [loading, setLoading] = useState(false);
  const [source, setSource] = useState<string>();
  const handleUpload = async (event: any) => {
    try {
      setLoading(true);
      const accessToken = getAuthToken();
      const formData = new FormData();
      formData.append("file", event.target.files[0]);
      formData.append("fileName", event.target.files[0].name);
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const resp = await axios.post(
        `${API.autopay.domain}/media/upload_media_file/`,
        formData,
        config
      );
      if (resp.data) {
        setRegistrationDocs(`${URL_IMAGE}/${resp.data?.url}`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleFileChange = (event: any) => {
    // event.preventdefault();
    console.log(event);
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
  };
  const uploadButton = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <SUpload widthTrue={widthTrue}>
      <label className="custom-file-input">
        <input
          className="VideoInput_input"
          type="file"
          onChange={handleFileChange}
          accept=".mov,.mp4"
        />
        {!source && uploadButton}
      </label>
    </SUpload>
  );
};

export default UploadDocument;
