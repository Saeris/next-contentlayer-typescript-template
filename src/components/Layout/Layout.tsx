import React from "react";
import { Header } from "./Header";
import { Main, PageContent } from "./elements";

export interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Main>
    <Header />
    <PageContent>{children}</PageContent>
  </Main>
);
