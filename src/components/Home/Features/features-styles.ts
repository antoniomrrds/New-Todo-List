import styled, { css } from 'styled-components';
import { CheckCircleFilled } from '@ant-design/icons';
import { size } from '@/styles/breakpoints';

const colorStyles = {
  successGreen600: css`${({ theme }) => theme.colors.success.successGreen600}`,
  successGreen200: css`${({ theme }) => theme.colors.success.successGreen200}`,
  neutral200: css`${({ theme }) => theme.colors.neutral.neutral200}`,
  neutral800: css`${({ theme }) => theme.colors.neutral.neutral800}`,
  neutral100: css`${({ theme }) => theme.colors.neutral.neutral100}`,
};

export const Container = styled.section`
  position: relative;
  max-width: ${({ theme }) => theme.container.maxWidth};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px ;
  background-color: ${colorStyles.neutral200} !important;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 10px;
  transition: all 0.3s ease;
`;
export const Title = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily.inter};
  font-size:  ${({ theme }) => theme.typography.fontSizeXXlarge};
  font-weight: bold;
  color: ${colorStyles.successGreen600};
  line-height: ${({ theme }) => theme.typography.lineHeight};
  letter-spacing: -0.96px;

  &:hover {
    color: ${colorStyles.neutral800};
  }
  @media(max-width: ${size.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizeXlarge};
  }`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 652px;
  object-fit: contain;
  object-position: center;
  grid-row: 1 /2 ;
  grid-column: 2;
  @media(max-width: ${size.tablet}) {
  grid-row: 1 / 2;
  grid-column: 1;
}
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: ${({ theme }) => theme.container.fullWidthPercentage};
  @media(max-width: ${size.tablet}) {
    grid-template-columns: 1fr ;
  }
`;

export const ListContainer = styled.ul`
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const CheckCircleIcon = styled(CheckCircleFilled)`
  padding-right: 10px;
  font-size: ${({ theme }) => theme.typography.fontSizeXlarge};
  color: ${colorStyles.successGreen600} !important;
  `;

export const List = styled.li`
  display: flex;
  width: ${({ theme }) => theme.container.fullWidthPercentage};
  border: ${({ theme }) => theme.borders.default} solid ${colorStyles.successGreen600};
  border-radius: 5px;
  padding: 10px;
  background-color: ${colorStyles.neutral800};
  color: ${colorStyles.successGreen600};
  align-items: center;
  justify-content: flex-start;
  font-size: ${({ theme }) => theme.typography.fontSizeMedium};
  font-family: ${({ theme }) => theme.typography.fontFamily.poppins};
  font-weight: regular;
  &:hover {
    color: ${colorStyles.neutral200};
    background-color: ${colorStyles.successGreen600};
    border: ${({ theme }) => theme.borders.default} solid ${colorStyles.neutral800};
    span > svg {
      color: ${colorStyles.neutral200};
    }
  }

  @media(max-width: ${size.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizeSmall};
  }
  `;
