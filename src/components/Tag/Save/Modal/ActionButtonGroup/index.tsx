import { FC } from 'react';
import { Col, Row } from 'antd';
import { useBreakpoint } from '@ant-design/pro-components';
import {
  CancelButton,
  SubmitButton,
} from '@/components/Tag/Save/Modal/ActionButtonGroup/Buttons';

type ActionButtonGroupProps = {
  onCancel: () => void;
  isLoading: boolean;
  idTag?: number;
};

export const TagActionButtons: FC<ActionButtonGroupProps> = ({
  onCancel,
  isLoading,
  idTag,
}) => {
  const screens = useBreakpoint();
  const isMobile = screens === 'xs';

  return (
    <Row justify="end" gutter={[8, 8]} style={{ marginTop: 26, width: '100%' }}>
      <Col xs={24} sm={{ flex: 'none' }}>
        <CancelButton onCancel={onCancel} block={isMobile} />
      </Col>
      <Col xs={24} sm={{ flex: 'none' }}>
        <SubmitButton isLoading={isLoading} block={isMobile} idTag={idTag} />
      </Col>
    </Row>
  );
};
