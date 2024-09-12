import { Form, Modal, Input, Select, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import type { GetProp, UploadProps } from 'antd';
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];
import { message } from '@/utils/AntdGlobal.tsx';

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('只能上传PNG或JPG格式的图片!');
    return false;
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('图片必须小于 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const CreatUser = () => {
  const [form] = Form.useForm();
  const submitHandler = async () => {
    const valid = await form.validateFields();
    console.log(valid);
  };
  const cancelHandler = () => {};
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps['onChange'] = info => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      setLoading(false);
      const { code, data, msg } = info.file.response;
      if (code == 0) {
        setImageUrl(data);
      } else {
        message.error(msg);
      }
    } else if (info.file.status === 'error') {
      message.error('服务器异常，请稍后重试');
    }
  };

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 5 }}>上传</div>
    </button>
  );
  return (
    <Modal title="新增用户" width={800} open onOk={submitHandler} onCancel={cancelHandler} okText="确认" cancelText="取消">
      <Form labelCol={{ span: 4 }} labelAlign="right" form={form}>
        <Form.Item label="用户名称" name="userName" rules={[{ required: true, message: '请输入用户名称' }]}>
          <Input type="text" placeholder="请输入用户名称" />
        </Form.Item>
        <Form.Item label="邮箱" name="userEmail" rules={[{ required: true, message: '请输入邮箱' }]}>
          <Input type="text" placeholder="请输入邮箱" />
        </Form.Item>
        <Form.Item label="手机号" name="mobile">
          <Input type="number" placeholder="请输入手机号" />
        </Form.Item>
        <Form.Item label="部门" name="deptId" rules={[{ required: true, message: '请选择部门' }]}>
          <Input type="text" placeholder="请选择部门" />
        </Form.Item>
        <Form.Item label="岗位" name="job">
          <Input type="text" placeholder="请输入岗位" />
        </Form.Item>
        <Form.Item label="状态" name="state">
          <Select placeholder="请选择状态">
            <Select.Option value={0}>所有</Select.Option>
            <Select.Option value={1}>在职</Select.Option>
            <Select.Option value={2}>试用期</Select.Option>
            <Select.Option value={3}>离职</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="系统角色" name="roleList">
          <Select placeholder="请选择系统角色">
            <Select.Option value={0}>产品</Select.Option>
            <Select.Option value={1}>技术</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="用户头像" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload
            listType="picture-circle"
            showUploadList={false}
            action="http://127.0.0.1:4523/m1/5098174-0-default/api/users/upload"
            beforeUpload={beforeUpload}
            onChange={handleChange}>
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreatUser;
