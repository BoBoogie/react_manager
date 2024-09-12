import { Form, Modal, Input, Select, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useImperativeHandle, useState } from 'react';
import type { GetProp, UploadProps } from 'antd';
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];
import { message } from '@/utils/AntdGlobal.tsx';
import { IAction, IModelProp } from '@/types/modal.ts';
import { User } from '@/types/api.ts';
import api from '@/api';

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const CreatUser = (props: IModelProp) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const [visible, setVisible] = useState(false);
  const [action, setAction] = useState<IAction>('create');
  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 5 }}>上传</div>
    </button>
  );
  // 暴露子组件open方法
  useImperativeHandle(props.modalRef, () => {
    return {
      open
    };
  });
  // 调用弹框显示方法
  const open = (type: IAction, data?: User.UserItem) => {
    setAction(type);
    setVisible(true);
    if (type === 'edit' && data) {
      form.setFieldsValue(data);
      setImageUrl(data.userImg);
    }
  };
  // 提交
  const submitHandler = async () => {
    const valid = await form.validateFields();
    console.log(valid);
    if (valid) {
      const params: User.CreateParams = {
        ...form.getFieldsValue(),
        userImg: imageUrl
      };
      if (action === 'create') {
        await api.userCreate(params);
        message.success('创建成功！');
      } else {
        await api.userEdit(params);
        message.success('编辑成功！');
      }
      cancelHandler();
      setImageUrl('');
      props.update();
    }
  };
  // 取消
  const cancelHandler = () => {
    setVisible(false);
    form.resetFields();
  };

  //上传之前接口处理
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
  // 上传之后
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

  return (
    <Modal title="新增用户" width={800} open={visible} onOk={submitHandler} onCancel={cancelHandler} okText="确认" cancelText="取消">
      <Form labelCol={{ span: 4 }} labelAlign="right" form={form}>
        {/*隐藏域*/}
        <Form.Item name="userId" hidden>
          <Input />
        </Form.Item>
        <Form.Item label="用户名称" name="userName" rules={[{ required: true, message: '请输入用户名称' }]}>
          <Input type="text" placeholder="请输入用户名称" disabled={action === 'edit'} />
        </Form.Item>
        <Form.Item label="邮箱" name="userEmail" rules={[{ required: true, message: '请输入邮箱' }]}>
          <Input type="text" placeholder="请输入邮箱" disabled={action === 'edit'} />
        </Form.Item>
        <Form.Item label="手机号" name="mobile">
          <Input type="number" placeholder="请输入手机号" />
        </Form.Item>
        <Form.Item label="部门" name="deptId">
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
            onChange={handleChange}
          >
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%', borderRadius: '100%' }} /> : uploadButton}
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreatUser;
