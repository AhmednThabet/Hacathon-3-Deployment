import type { FC, HTMLProps } from "react";
import type { Children } from "types";

export interface MainLayoutProps extends HTMLProps<HTMLDivElement> {
  children: Children;
  title: string;
  pageDescription?: string;
  withoutNavbar?: boolean;
  contentClassName?: string;
  footerClassName?: string;
}
export type MainLayoutType = FC<MainLayoutProps>;

export interface CreateInvoiceLayoutProps extends HTMLProps<HTMLDivElement> {
  children: Children;
}
export type CreateInvoiceLayoutType = FC<CreateInvoiceLayoutProps>;
