import { Col, Input, Modal, Row } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import CustomForm from "../../../components/custom-form";
import { IModalCreateTeamMember } from "../interface";
import { STeamMember } from "../styled";

const CreateTeamMember: React.FC<IModalCreateTeamMember> = ({
  handleCancel,
  handleOk,
  isModalOpen,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <Modal
      title="Thêm Thành viên nhóm"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      width={900}
    >
      <STeamMember>
        <Row>
          <Col span={11}>
            <CustomForm
              name="pricePerShare"
              label="Tên"
              control={control}
              render={({ field }: any) => (
                <Input className="custom-input-modal" {...field} />
              )}
            />
          </Col>
          <Col span={1} />
          <Col span={12}>
            <CustomForm
              name="pricePerShare"
              label="Về chúng tôi"
              control={control}
              render={({ field }: any) => (
                <Input.TextArea rows={3} {...field} />
              )}
            />
          </Col>
        </Row>
      </STeamMember>
    </Modal>
  );
};

export default CreateTeamMember;
