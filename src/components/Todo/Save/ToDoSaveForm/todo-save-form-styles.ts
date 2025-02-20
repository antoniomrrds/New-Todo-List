import { generateSpacingCss } from '@/styles/Theme';
import { Form } from 'antd';
import styled from 'styled-components';

export const FormItem = styled(Form.Item)`
  margin-bottom: ${generateSpacingCss(1)} !important;
`;
