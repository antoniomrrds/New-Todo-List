import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';

export const ImageUpload: React.FC = () => {
  const uploadButton = (
    <button
      style={{ border: 0, background: 'none', width: '200px', height: '200px' }}
      type="button"
    >
      <PlusOutlined />
    </button>
  );
  return (
    <>
      <Upload maxCount={1} listType="picture-card" showUploadList={false}>
        x
      </Upload>
    </>
  );
};
