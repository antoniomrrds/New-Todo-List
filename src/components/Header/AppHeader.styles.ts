import styled, { css } from 'styled-components';
import { Drawer as DrawerAntd, Menu, Button } from 'antd';
import { size } from '@/styles/breakpoints';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CloseOutlined } from '@ant-design/icons';
import { generateSpacingCss } from '@/styles/Theme';

const boxShadow = css`
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

const colorStyles = {
  successGreen600: css`${({ theme }) => theme.colors.success.successGreen600}`,
  successGreen200: css`${({ theme }) => theme.colors.success.successGreen200}`,
  neutral200: css`${({ theme }) => theme.colors.neutral.neutral200}`,
  neutral800: css`${({ theme }) => theme.colors.neutral.neutral800}`,
};

export const Header = styled.header`
    background: ${({ theme }) => theme.colors.neutral.neutral800};
    border-bottom: ${generateSpacingCss(2)} solid ${colorStyles.neutral200};
    box-sizing: border-box;
    height: ${generateSpacingCss(55)};

    &:hover {
      color: ${colorStyles.neutral800};
      border-bottom: ${generateSpacingCss(2)} solid ${colorStyles.successGreen600};
     }
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    padding: ${generateSpacingCss(7)} ${generateSpacingCss(10)};
    justify-content: space-between;
    max-width: ${({ theme }) => theme.container.maxWidth};
    margin: ${({ theme }) => theme.container.marginCenter};
    width: ${({ theme }) => theme.container.fullWidthPercentage};
    font-family: ${({ theme }) => theme.typography.fontFamily.poppins};
`;

export const NavDrawer = styled.nav`
    display: flex;
    align-items: center;
    padding: ${generateSpacingCss(7)} ${generateSpacingCss(10)};
    justify-content: space-between;
    width: ${({ theme }) => theme.container.fullWidthPercentage};
    font-family: ${({ theme }) => theme.typography.fontFamily.poppins};

    > span {
      background-color: ${colorStyles.successGreen600} !important;
      color: ${({ theme }) => theme.colors.neutral.neutral800}!important;
      }

      > span:hover {
        background-color: ${colorStyles.neutral800} !important;
        color: ${colorStyles.neutral200}!important;
      }
`;
export const CloseCircleFilledStyled = styled(CloseOutlined)`
      background-color: ${colorStyles.neutral800} !important;
      border: 1px solid ${colorStyles.successGreen600} !important;
      font-size: ${generateSpacingCss(24)}!important;
      border-radius: ${generateSpacingCss(5)} !important;
      padding: ${generateSpacingCss(5)} !important;
      display: block;

`;

const logo = css`
  height: ${generateSpacingCss(40)};
  ${boxShadow}

`;

export const Logo = styled.img`
    ${logo}
      @media (max-width: ${size.tabletXS}) {
        display: none;
        opacity: 0;
        pointer-events: none;

    }
  `;

export const logoDrawer = styled.img`

  ${logo}
`;

export const NavUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${generateSpacingCss(10)};
  list-style: none;
  order: 2;

  @media (max-width: ${size.tabletXS}) {
    display: none;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, visibility 0s, transform 0.3s ease;

  }
`;

export const NavUlDrawer = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${generateSpacingCss(10)};
    list-style: none;
    flex-direction: column;
    margin-top: ${generateSpacingCss(20)};

`;
export const NavLiDrawer = styled.li`
   min-width: ${({ theme }) => theme.container.fullWidthPercentage};
`;

export const NavLinkDrawerStyled = styled(NavLink)`
  text-transform: capitalize;
  padding: ${generateSpacingCss(7)} ${generateSpacingCss(10)};
  display: flex;
  align-items: first baseline;
  gap: ${generateSpacingCss(5)};
  color: ${colorStyles.neutral200};
  span {
    color: ${colorStyles.successGreen600};
  }

  &.active {
  ${boxShadow}
    background-color: ${colorStyles.successGreen600};
    font-weight: ${({ theme }) => theme.typography.fontWeight[600]};
    span {
      color: ${colorStyles.neutral800};
    }
  }

&:hover:not(.active) {
    color: ${colorStyles.successGreen600};
   ${boxShadow};
  }

  &:hover {
    color: ${colorStyles.neutral800};
  }

  &.active:hover {
    background-color: ${({ theme }) => theme.colors.success.successGreen700};

    span {
      color: ${colorStyles.neutral200};
    }
}

`;

export const NavLinkStyled = styled(NavLink)`
  text-transform: capitalize;

  padding: ${generateSpacingCss(7)} ${generateSpacingCss(10)};
  display: flex;
  align-items: first baseline;
  gap: ${({ theme }) => theme.spacingFn(5)};
  color: ${colorStyles.neutral200};
  span {
    color: ${colorStyles.successGreen600};
  }

  &.active {
    background-color:  ${colorStyles.successGreen600};
    ${boxShadow}
    font-weight: ${({ theme }) => theme.typography.fontWeight[600]};
    span {
      color: ${colorStyles.neutral800};
    }
  }

&:hover:not(.active) {
    color: ${colorStyles.successGreen600};
   ${boxShadow};
    span {
        background-color: ${colorStyles.neutral800} !important;
        color: ${colorStyles.neutral200}!important;
        display: block;
      }
  }

  &:hover {
    color: ${colorStyles.neutral800};
  }

  &.active:hover {
    background-color: ${({ theme }) => theme.colors.success.successGreen700};

    span {
      color: ${colorStyles.neutral200};
    }
}
`;

export const ButtonSignInStyled = styled(Button)`
  order: 3;
  background: ${colorStyles.successGreen600};
  border: ${({ theme }) => theme.borders.small} solid ${colorStyles.successGreen600};
  color: ${colorStyles.neutral800};

  &:hover {
    background: ${colorStyles.neutral800} !important;
    color: ${colorStyles.successGreen600} !important;
  }
`;

export const GiHamburgerMenuStyled = styled(GiHamburgerMenu)`
  font-size: ${({ theme }) => theme.typography.fontSizeXlarge};
`;

export const ImageWrapper = styled.div`
  width: ${generateSpacingCss(40)};
  height: ${generateSpacingCss(40)};
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${colorStyles.successGreen600}; /* Mostra fundo */
  border: ${({ theme }) => theme.borders.default} solid ${colorStyles.successGreen600}; /* Mostra borda */
  ${boxShadow}
  order: 3;
`;

export const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledMenu = styled(Menu)`
  background-color: #f0f0f0; /* Cor de fundo personalizada */
  border-radius: 5px;
  padding: 10px 0;
  width: 200px;
`;

export const MenuButton = styled.button`
    border: ${generateSpacingCss(2)} solid ${colorStyles.successGreen600};
    order: 1;
    cursor: pointer;
    border-radius:  ${generateSpacingCss(5)};
    display: flex;
    padding: ${generateSpacingCss(7)} ${generateSpacingCss(10)};
    background:  ${colorStyles.successGreen600};
    border: 1px solid  ${colorStyles.successGreen600};
    color: ${colorStyles.neutral800};
    &:hover {
        background: ${colorStyles.neutral800};
        color: ${colorStyles.successGreen600} ;
    }

    @media (min-width: ${size.tabletXS}) {
        opacity: 0;
        pointer-events: none;
        display: none;
    }
`;
export const Drawer = styled(DrawerAntd)`
  background: ${colorStyles.neutral800}!important;
  border-right: ${generateSpacingCss(2)} solid ${colorStyles.neutral200} !important;

&:hover {
  border-right: ${generateSpacingCss(2)} solid ${colorStyles.successGreen600} !important;
 }
  .ant-drawer-body {
    padding: ${generateSpacingCss(0)}!important;
  }
`;
