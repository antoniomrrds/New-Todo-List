import { Form } from "antd";
import { FormItemProps } from "antd/lib";
import styled from "styled-components";

export const FormItem = styled(Form.Item)<FormItemProps>`
     margin-bottom: 5px;
     color: ${({ theme }) => theme.colors.success.successGreen700}!important;
    .ant-form-item-label {
        padding: 0px !important;
    }
`;