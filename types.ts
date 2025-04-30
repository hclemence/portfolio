import React from 'react';

export interface NavLinkType {
  title: string;
  path: string;
  icon?: React.ReactNode;
  desktopIconSize?: string;
  mobileIconSize?: string;
}