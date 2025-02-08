import { Breakpoint, Tag } from 'antd';
import styled from 'styled-components';
export const CardMain = styled.article`
background: ${({ theme }) => theme.colors.neutral.neutral100};
border: ${({ theme }) => theme.borders.small} solid ${({ theme }) => theme.colors.success.successGreen600};
position: relative;
padding: ${({ theme }) => theme.spacing.small}!important;

`;
export const HeaderMain = styled.h1<{
  $screens: Partial<Record<Breakpoint, boolean>>;
}>`
font-size: ${({ $screens }) => ($screens.lg ? 21 : 17)}px !important;
font-weight: ${({ theme }) => theme.typography.fontWeight[700]}  !important;
font-family: 'Poppins', sans-serif;
color: ${({ theme }) => theme.colors.neutral.neutral800};
margin: ${({ theme }) => theme.spacing.zero} !important;
text-transform: capitalize;
color: ${({ theme }) => theme.colors.success.successGreen600}!important;
word-wrap: break-word; /* Permite quebra de linha */
overflow: visible; /* Evita o transbordamento */
word-break: break-word; /* Isso também ajuda com a quebra de palavras longas */
white-space: normal; /* Garante que o texto seja normal em termos de quebra */
`;

export const TagStyled = styled(Tag)`
  white-space: nowrap; /* Impede a quebra de linha */
  overflow: hidden; /* Oculta o conteúdo que ultrapassa */
  text-overflow: ellipsis; /* Aplica "..." quando o texto ultrapassa a largura */
  max-width: ${({ theme }) => theme.container.fullWidthPercentage} ; /* Garante que a tag ocupe toda a largura disponível */
  font-size: ${({ theme }) => theme.typography.fontSizeXSmall} ; /* Ajuste de fonte */
  font-family: 'Poppins', sans-serif; /* Fonte */
  padding: 4px 10px; /* Padding */
  width: ${({ theme }) => theme.container.fullWidthPercentage}  !important;
  text-align: center;
  margin-inline-end : ${({ theme }) => theme.spacing.zero}!important;
`;

export const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
  justify-content: start;
  margin: ${({ theme }) => theme.container.marginCenter} !important;
  width:${({ theme }) => theme.container.fullWidthPercentage} ;
`;
export const HeaderSubtitle = styled.h2`
font-size: ${({ theme }) => theme.typography.fontSizeMediumSmall}!important;
font-family: ${({ theme }) => theme.typography.fontFamily.poppins}!important;
line-height: ${({ theme }) => theme.typography.lineHeightDefault} !important; /* Garante que o texto não fique maior que o necessário */
font-weight: ${({ theme }) => theme.typography.fontWeight[500]}  !important;
margin-top: ${({ theme }) => theme.spacing.medium}!important;
`;
