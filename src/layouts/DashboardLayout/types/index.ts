import type { FC, HTMLProps } from "react";
import type { Children } from "types";

export interface DashboardLayoutProps extends HTMLProps<HTMLDivElement> {
    children: Children;
    contentClassName?: string;
    withoutBalance?: boolean;
    // responsiveSidebarToggle: boolean;
    // handleResponsiveSidebarToggle: any;

}
export type DashboardLayoutType = FC<DashboardLayoutProps>;
