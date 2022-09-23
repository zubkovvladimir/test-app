import React from 'react';

import { Typography } from 'antd';

const { Title } = Typography;

export const PageTitle: React.FC = ({ children }) => <Title level={2}>{children}</Title>;
