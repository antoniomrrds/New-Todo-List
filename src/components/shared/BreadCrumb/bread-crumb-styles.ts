import { ThemeConfig } from 'antd';
import styled from 'styled-components';
import { theme as themeAntd, generateSpacingCss } from '@/styles/Theme';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  border-bottom: ${generateSpacingCss(3)} solid ${({ theme }) => theme.colors.success.successGreen600};
  padding: ${({ theme }) => theme.spacing.small};
  background-color: ${({ theme }) => theme.colors.neutral.neutral100};
  border-radius: ${({ theme }) => theme.spacing.small};
`;

export const themeAntdConfigBreadCrumb: ThemeConfig = {
  components: {
    Breadcrumb: {
      fontSize: +`${themeAntd.typography.fontSizeMedium}`,
      colorText: themeAntd.colors.success.successGreen600,
      colorBgBase: themeAntd.colors.neutral.neutral800,
      itemColor: themeAntd.colors.success.successGreen600,
      separatorColor: themeAntd.colors.success.successGreen600,
    },
  },
};
