/* eslint-disable @next/next/no-img-element */
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useState } from "react";
import { getAuthToken } from "../../utils/helper";
import { SUpload } from "./styled";

const UploadIndex = ({
  registrationDocs,
  setRegistrationDocs,
  widthTrue,
}: any) => {
  const [loading, setLoading] = useState(false);
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
        "https://api.flocks.vn/api/v1/media/upload_media_file/",
        formData,
        config
      );
      console.log(resp.data);
      if (resp.data) {
        setRegistrationDocs(`https://uploads.flocks.vn/${resp.data?.url}`);
      }
      console.log(resp);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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
        <input type="file" title="" onChange={handleUpload} />
        {registrationDocs ? (
          <img
            src={registrationDocs}
            alt="avatar"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        ) : (
          uploadButton
        )}
      </label>
    </SUpload>
  );
};

export default UploadIndex;
