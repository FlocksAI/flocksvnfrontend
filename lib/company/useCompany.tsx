import { useEffect, useState } from "react";
import CompanyRepositories from "../../repositories/company";

const useCompany = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getCategory();
  }, []);
  const addInfoCompany = async (data: any) => {
    try {
      const resp = await CompanyRepositories.addInfoCompany(data);
      console.log(resp);
    } catch (error) {
      console.log(error);
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
      const resp = await CompanyRepositories.createProject(data);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };
  return { addInfoCompany, createCompany, category };
};

export default useCompany;
