import styled, { css } from "styled-components";
import { Link } from "../../Link";

export const Container = styled.header(
  ({ theme }) => css`
    z-index: 8000;
    position: fixed;
    top: 0;
    grid-row: header;
    display: flex;
    width: 100%;
    padding: 0;
    background-color: ${theme.colors.neutral[900]};
  `
);

export const Navigation = styled.nav(
  () => css`
    position: relative;
    display: grid;
    grid-template-columns:
      [siteinfo-start]
      max-content
      [siteinfo-end nav-start]
      minmax(0, 1fr)
      [nav-end];
    align-items: center;
    width: 100%;
    padding: 2.4rem 3.6rem;
  `
);

export const Links = styled.ul(
  () => css`
    grid-area: nav;
    display: flex;
    justify-self: flex-end;
    align-items: center;
    padding: 0;
    margin: 0;
    gap: 2ch;
    list-style: none;
  `
);

export const NavItem = styled.li(() => css``);

export const NavLink = styled(Link)(
  ({ theme }) => css`
    padding: ${theme.spacing[8]} ${theme.spacing[16]};
    border: none;
    color: ${theme.colors.neutral[200]};
    font-size: 1.4rem;
    font-weight: ${theme.weights.semibold};
    text-decoration: none;

    &:hover,
    &:focus {
      color: ${theme.colors.accent.highlight};
    }

    &:focus {
      outline: none;
    }
    h1,
    h2 {
      transition: color 0.3s ease-in-out;
    }
  `
);
