import { Form } from "antd";
import { FormItemProps } from "antd/lib";
import styled from "styled-components";

export const FormItem = styled(Form.Item)<FormItemProps>`
     margin-bottom: 5px;
    /* .ant-form-item-label {
        padding: 0px !important; 
    } */
`;