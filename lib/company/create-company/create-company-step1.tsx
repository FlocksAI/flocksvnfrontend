/* eslint-disable @next/next/no-img-element */
import { Input, Upload } from "antd";
import React, { useState } from "react";
import CustomForm from "../../../components/custom-form";
import { CreateCompanyInput } from "../interface";
import UploadIndex from "../../../components/upload";

const CreateCompanyStep1: React.FC<CreateCompanyInput> = ({
  control,
  errors,
  introVideo,
  registrationDocs,
  taxReceipt,
  setRegistrationDocs,
  setTaxReceipt,
  setIntroVideo,
}) => {
  return (
    <>
      <CustomForm
        name="company_name"
        label="Tên nhà đầu tư"
        control={control}
        error={errors?.company_name?.message}
        render={({ field }: any) => (
          <Input {...field} placeholder="Tên nhà đầu tư" />
        )}
      />
      <CustomForm
        name="entrepreneurName"
        label="Tách các tên Chủ doanh nghiệp bằng thẻ tab hoặc enter"
        control={control}
        render={({ field }: any) => (
          <Input
            {...field}
            placeholder="Tách các tên Chủ doanh nghiệp bằng thẻ tab hoặc enter"
          />
        )}
      />
      <CustomForm
        name="website"
        label="Website"
        error={errors?.website?.message}
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="Website" />}
      />
      <CustomForm
        name="email"
        label="Email"
        error={errors?.email?.message}
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="Email" />}
      />
      <CustomForm
        name="address"
        label="Địa chỉ"
        error={errors?.address?.message}
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="Địa chỉ" />}
      />
      <CustomForm
        name="phone_number"
        label="Số điện thoại"
        error={errors?.phone_number?.message}
        control={control}
        render={({ field }: any) => (
          <Input {...field} placeholder="Số điện thoại" />
        )}
      />
      <CustomForm
        name="github"
        label="Github"
        control={control}
        render={({ field }: any) => <Input {...field} placeholder="Github" />}
      />
      <div className="mb-2">Tải Giấy Phép Đăng Ký Kinh Doanh</div>
      <UploadIndex
        setRegistrationDocs={setRegistrationDocs}
        registrationDocs={registrationDocs}
      />
      <div className="mb-2">Tải Biên Lai thuế</div>
      <UploadIndex
        setRegistrationDocs={setTaxReceipt}
        registrationDocs={taxReceipt}
      />
      <div className="mb-2">Tải video giới thiệu</div>
      <UploadIndex
        setRegistrationDocs={setIntroVideo}
        registrationDocs={introVideo}
        isVideo
      />
    </>
  );
};

export default CreateCompanyStep1;
