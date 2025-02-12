import styled, { css } from 'styled-components';

const colorStyles = {
  errorRed600: css`${({ theme }) => theme.colors.error.errorRed600}`,
};

export const TodoLabel = styled.label<{
  $tooltipActive?: boolean;
}>`
  font-size: ${({ theme }) => theme.typography.fontSizeSmall}!important;
  font-family: ${({ theme }) => theme.typography.fontFamily.poppins}!important;
  line-height: ${({ theme }) => theme.typography.lineHeightDefault}!important;
  font-weight: ${({ theme }) => theme.typography.fontWeight[400]}!important;
  /* margin-top: ${({ theme }) => theme.spacing.medium}!important; */
 display: flex;
 flex-grow: 1;
  .required-tooltip {
    margin-left: ${({ theme }) => theme.spacingFn(2)};

    display: ${({ $tooltipActive }) => ($tooltipActive ? 'inline-block' : 'none')};
  }

  &.required .required-tooltip {
    display: inline-block;
    color: ${({ $tooltipActive }) => ($tooltipActive ? 'inherit' : colorStyles.errorRed600)};

  }

  &.required::before {
    content: '*';
    color: ${colorStyles.errorRed600};
    margin-inline-start: ${({ theme }) => theme.spacingFn(5)};
  }

  `;
