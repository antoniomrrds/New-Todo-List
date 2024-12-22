import { Form } from "antd";
import styled from "styled-components";

export const FormItem = styled(Form.Item)`
     margin-bottom: 5px;
     color: ${({ theme }) => theme.colors.success.successGreen700}!important;
    .ant-form-item-label {
        padding: 0px !important;
    }
`;