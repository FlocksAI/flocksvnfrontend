import { message } from "antd";
import { useEffect, useState } from "react";
import CompanyRepositories from "../../repositories/company";
import { useRouter } from "next/router";

const useCompany = () => {
  const [category, setCategory] = useState([]);
  const router = useRouter();
  useEffect(() => {
    getCategory();
  }, []);
  const addInfoCompany = async (data: any) => {
    try {
      return await CompanyRepositories.addInfoCompany(data);
    } catch (error: any) {
      console.log(error);
      message.error(
        error?.response?.data?.companyProfile?.companyName[0] ||
          error?.response?.data?.companyDetails
      );
    }
  };
  const clone = (obj: any) => Object.assign({}, obj);
  const renameKey = (
    object: any,
    key: string,
    newKey: string,
    value: string,
    newValue: string
  ) => {
    const clonedObj = clone(object);
    const targetKey = clonedObj[key];
    const targetKey1 = clonedObj[value];
    delete clonedObj[key];
    delete clonedObj[value];
    clonedObj[newKey] = targetKey;
    clonedObj[newValue] = targetKey1;
    return clonedObj;
  };
  const getCategory = async () => {
    try {
      const resp = await CompanyRepositories.getCategory();
      if (!resp.data) return;
      const newData = [] as any;
      resp.data.map((el: any) => {
        const res = renameKey(el, "id", "value", "name", "label");
        newData.push(res);
      });
      setCategory(newData);
    } catch (error) {
      console.log(error);
    }
  };
  const createCompany = async (data: any) => {
    try {
      const res = await CompanyRepositories.createProject(data);
      if (res.data) {
        message.success("Tạo dự án thành công");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { addInfoCompany, createCompany, category };
};

export default useCompany;
