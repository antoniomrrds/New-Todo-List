import { boxShadow } from '@/styles/Theme';
import { Tabs } from 'antd';
import { Breakpoint } from 'antd/lib';
import styled, { css } from 'styled-components';

const colorStyles = {
  successGreen600: css`${({ theme }) => theme.colors.success.successGreen600}`,
  successGreen200: css`${({ theme }) => theme.colors.success.successGreen200}`,
  neutral200: css`${({ theme }) => theme.colors.neutral.neutral200}`,
  neutral100: css`${({ theme }) => theme.colors.neutral.neutral100}`,
  neutral800: css`${({ theme }) => theme.colors.neutral.neutral800}`,
  white: css`${({ theme }) => theme.shades.light}`,
};

export const CardMain = styled.main`
 ${boxShadow};
  background: ${colorStyles.white};
  border: ${({ theme }) => theme.borders.small} solid ${colorStyles.successGreen600};
  width: ${({ theme }) => theme.container.fullWidthPercentage};
  padding: ${({ theme }) => theme.spacing.large}!important;
  border-radius: ${({ theme }) => theme.borders.large};
`;

export const HeaderMain = styled.h1<{
  $screens: Partial<Record<Breakpoint, boolean>>;
  $isCentered?: boolean;
}>`
  font-size: ${({ $screens }) => ($screens.lg ? 32 : 21)}px !important;
  font-weight: ${({ theme }) => theme.typography.fontWeight[700]} !important;
  font-family: 'Poppins', sans-serif;
  text-align: ${({ $isCentered }) => ($isCentered ? 'center' : 'left')};
  color: ${colorStyles.neutral800};
  margin: ${({ theme }) => theme.spacing.zero} !important;
  text-transform: capitalize;
  color: ${colorStyles.successGreen600}!important;
   word-wrap: break-word;
  word-break: break-word;
  white-space: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const TabStyled = styled(Tabs)`
  margin-top: ${({ theme }) => theme.spacing.large};
 font-family: ${({ theme }) => theme.typography.fontFamily.poppins}!important;
 font-weight: ${({ theme }) => theme.typography.fontWeight[400]} !important;
  .ant-tabs-tab {

    color: ${colorStyles.neutral800};
    transition: background-color 0.3s;
    &:hover {
      color: ${colorStyles.successGreen600};
    }
  }
  .ant-tabs-tab-active {
    color: ${colorStyles.successGreen600};
    background: ${colorStyles.neutral100};
  }
  .ant-tabs-ink-bar {
    background-color: ${colorStyles.successGreen600};
  }

`;
