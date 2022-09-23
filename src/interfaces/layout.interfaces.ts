import React from 'react';

export interface MenuItem {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  path: string;
  children?: MenuItem[];
}

export interface Sort {
  up: string;
  down: string;
}
