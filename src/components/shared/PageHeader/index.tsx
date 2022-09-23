import React from 'react';

import { FilterOutlined } from '@ant-design/icons';
import { Button, Input, Space, Tooltip } from 'antd';

const { Search } = Input;

interface FilterProps {
  title: string;
  element: React.ReactNode;
}

export interface PageFilters extends Array<FilterProps> {}

interface PageHeaderProps {
  isLoading: boolean;
  onSearch?: (value: string) => void;
  renderButton?: React.ReactNode;
  filters?: PageFilters;
  onResetFilter?: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ isLoading, onSearch, renderButton, filters }) => {
  const [filterOpen, setFilterOpen] = React.useState<boolean>(false);

  return (
    <>
      <Space className="page-header">
        {onSearch && (
          <Space>
            <Search disabled={isLoading} enterButton loading={isLoading} onSearch={onSearch} placeholder="Поиск" />
            {filters && (
              <Tooltip title="Фильтры">
                <Button
                  onClick={() => setFilterOpen(!filterOpen)}
                  shape="round"
                  type={filterOpen ? 'primary' : 'default'}
                >
                  <FilterOutlined />
                </Button>
              </Tooltip>
            )}
          </Space>
        )}
        {renderButton}
      </Space>
    </>
  );
};
