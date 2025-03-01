import { FC } from 'react';
import { Col, Row } from 'antd';
import { useBreakpoint } from '@ant-design/pro-components';
import {
  CancelButton,
  SubmitButton,
} from '@/components/Category/Save/Modal/ActionButtonGroup/Buttons';

type ActionButtonGroupProps = {
  onCancel: () => void;
  isLoading: boolean;
  idCategory?: number;
};

export const CategoryActionButtons: FC<ActionButtonGroupProps> = ({
  onCancel,
  isLoading,
  idCategory,
}) => {
  const screens = useBreakpoint();
  const isMobile = screens === 'xs';

  return (
    <Row justify="end" gutter={[8, 8]} style={{ marginTop: 26, width: '100%' }}>
      <Col xs={24} sm={{ flex: 'none' }}>
        <CancelButton onCancel={onCancel} block={isMobile} />
      </Col>
      <Col xs={24} sm={{ flex: 'none' }}>
        <SubmitButton
          isLoading={isLoading}
          block={isMobile}
          idCategory={idCategory}
        />
      </Col>
    </Row>
  );
};
