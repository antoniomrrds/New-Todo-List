import { boxShadow, generateSpacingCss } from '@/styles/Theme';
import styled, { css } from 'styled-components';
import * as I from '@/components/shared/Icons';

const colorStyles = {
  successGreen600: css`${({ theme }) => theme.colors.success.successGreen600}`,
  neutral800: css`${({ theme }) => theme.colors.neutral.neutral800}`,
  neutral100: css`${({ theme }) => theme.colors.neutral.neutral100}`,
  neutral200: css`${({ theme }) => theme.colors.neutral.neutral200}`,
  neutral300: css`${({ theme }) => theme.colors.neutral.neutral300}`,
  errorRed500: css`${({ theme }) => theme.colors.error.errorRed500}`,
  errorRed600: css`${({ theme }) => theme.colors.error.errorRed600}`,
};

export const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${generateSpacingCss(250)}, 1fr));
  grid-gap:  ${generateSpacingCss(10)};
  justify-content: flex-start;
  margin: ${({ theme }) => theme.container.marginCenter};
  width: ${({ theme }) => theme.container.fullWidthPercentage};
  height: max-content;
`;
/* CardTaskMain */
export const CardTaskMain = styled.article`
  background-color: ${colorStyles.neutral200};
  border: ${({ theme }) => theme.borders.small} solid ${colorStyles.successGreen600};

  max-width: ${({ theme }) => theme.container.fullWidthPercentage};
  overflow: hidden;
  height: fit-content;
  padding: ${generateSpacingCss(16)} ${generateSpacingCss(24)};
  border-radius: ${generateSpacingCss(12)};
`;

export const CardTaskFlex = styled.div`
 display: grid;
  grid-template-columns: ${generateSpacingCss(90)} 1fr;
  gap: ${generateSpacingCss(10)};
  position: relative !important;
 overflow: hidden;
 margin-bottom: ${generateSpacingCss(10)};
`;

export const ImageWrapper = styled.div`
  width: ${generateSpacingCss(90)};
  height: ${generateSpacingCss(90)};
  overflow: hidden;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: ${colorStyles.neutral300}; /* Mostra fundo */
   ${boxShadow}

`;

export const ImageStyled = styled.img`

  width: ${({ theme }) => theme.container.fullWidthPercentage};
  height: ${({ theme }) => theme.container.fullHeightPercentage};
  object-fit: cover;
`;
export const CreatorTaskFlex = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily.poppins};
  padding: ${generateSpacingCss(8)};
  text-transform: capitalize;
  color: ${colorStyles.neutral800}!important;
  font-style: italic;
  font-weight: ${({ theme }) => theme.typography.fontWeight[600]};
  /* background-color: antiquewhite;*/
  display: block;
  display: -webkit-box;
  height: ${generateSpacingCss(50)};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow:hidden;
  text-overflow: ellipsis;
  padding: ${generateSpacingCss(8)};

  `;

export const ActionsContainer = styled.div`
position: absolute;
right: 0;
top: 0;
display: flex;
gap: ${generateSpacingCss(10)};
`;

export const FaTrashAltStyled = styled(I.FaTrashAltStyled)`
   color: ${colorStyles.neutral100};
   width: ${({ theme }) => theme.container.fullWidthPercentage};
  height: ${({ theme }) => theme.container.fullHeightPercentage};
  object-fit: cover;

`;
export const SpanStyled = styled.span`
  width: ${generateSpacingCss(32)};
  height: ${generateSpacingCss(32)};
  padding: ${generateSpacingCss(8)};
  background: ${colorStyles.errorRed500};
  border-radius: 50%;
  overflow: hidden;
 &:hover {
    background: ${colorStyles.errorRed600};
  }
`;

export const CreatorTaskName = styled.p<{
  $color?: string;
}>`
    font-family: ${({ theme }) => theme.typography.fontFamily.poppins};
    color: ${({ $color }) => $color || colorStyles.neutral800};
    white-space: nowrap;
    font-weight: ${({ theme }) => theme.typography.fontWeight[600]};
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: capitalize;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left:  ${({ theme }) => theme.spacing.small};
`;
