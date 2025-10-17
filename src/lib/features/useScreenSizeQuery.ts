'use client'

import { useMediaQuery, useTheme } from "@mui/material";

export type ScreenSize = 'mobile' | 'tablet' | 'desktop'

export const useScreenSizeQuery = (defaultSize: ScreenSize = 'mobile'): ScreenSize => {
    const theme = useTheme();
    // Call hooks at the top level
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
    const isTablet = useMediaQuery(theme.breakpoints.up('md'));
    const isMobile = useMediaQuery(theme.breakpoints.up('xs'));
    // Use the results of the hooks in conditionals
    if (isDesktop) {
        return 'desktop' 
    }
    if (isTablet) {
        return 'tablet'
    }
    if (isMobile) {
        return 'mobile'
    }

    return defaultSize;
}