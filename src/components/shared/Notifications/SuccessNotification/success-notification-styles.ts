import * as S from '@/components/shared/Notifications/notification-styles';
import styled from 'styled-components';
export const CloseCircleFilledStylednew = styled(S.CloseCircleFilledStyled)`
    color: ${({ theme }) => theme.colors.success.successGreen600}!important;
      background-color: ${({ theme }) => theme.colors.neutral.neutral800} !important;
      border: 1px solid ${({ theme }) => theme.colors.success.successGreen600};
      font-size: ${({ theme }) => theme.typography.fontSizeSmall}!important;
      border-radius: ${({ theme }) => theme.spacing.xsmall} !important;
      padding: ${({ theme }) => theme.spacing.xsmall} !important;
      :hover{
        background-color: ${({ theme }) => theme.colors.success.successGreen600} !important;
        color: ${({ theme }) => theme.colors.neutral.neutral800}!important;
      }
`;
