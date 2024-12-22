import { ThemeConfig } from "antd";
import styled from "styled-components";
import { theme as themeAntd } from '@/styles/Theme'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.medium};  
  border-bottom: 3px solid ${({ theme }) => theme.colors.success.successGreen600};
  padding: ${({ theme }) => theme.spacing.small};
`;

export const themeAntdConfigBreadCrumb: ThemeConfig = {
    components: {
        Breadcrumb: {
            fontSize: +`${themeAntd.typography.fontSizeMedium}`,
            colorText: themeAntd.colors.primaryColor,
            itemColor: themeAntd.colors.primaryColor,
            separatorColor: themeAntd.colors.neutral.neutral800,
        }
    }
}
