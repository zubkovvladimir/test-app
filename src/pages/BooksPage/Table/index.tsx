import React from 'react';
import { useDispatch } from 'react-redux';

import { DeleteOutlined, EditOutlined, MoreOutlined } from '@ant-design/icons';
import { Table as AntTable, Popconfirm, Space, TablePaginationConfig, Tooltip } from 'antd';
import { Book } from 'interfaces/api/books.interface';
import { PageMeta } from 'interfaces/api/response.interfaces';
// import { changeShopPageTable, fetchDeleteBookItem } from 'store/shop/actions';

const { Column } = AntTable;

interface TableProps {
  isLoading: boolean;
  data: Book[];
  meta: PageMeta;
  onEdit: (id: number) => void;
}

export const Table: React.FC<TableProps> = React.memo(({ isLoading, data, meta, onEdit }) => {
  const dispatch = useDispatch();

  const onChange = ({ current, pageSize }: TablePaginationConfig) => {
    // dispatch(changeShopPageTable({ currentPage: current, perPage: pageSize }));
  };

  const pagination: TablePaginationConfig = {
    size: 'default',
    showSizeChanger: true,
    pageSizeOptions: ['10', '20', '50', '100'],
    defaultPageSize: 10,
    total: meta.total,
    current: meta.currentPage,
    pageSize: meta.pageSize,
  };

  return (
    <AntTable<Book>
      dataSource={data}
      loading={isLoading}
      onChange={onChange}
      pagination={pagination}
      rowKey={(item) => item.id}
      size="middle"
    >
      <Column<Book> dataIndex="id" key="id" title="ID" />
      <Column<Book> dataIndex="name" key="name" title="Название" />
      <Column<Book> dataIndex="price" key="price" title="Цена (QA)" />
      <Column<Book>
        dataIndex="id"
        key="action"
        render={(id: number) => (
          <Space className="ant-table-actions" size="middle">
            <Tooltip title="Редактировать">
              <EditOutlined onClick={() => onEdit(id)} />
            </Tooltip>
            <Popconfirm
              cancelText="Нет"
              okText="Да"
              // onConfirm={() => dispatch(fetchDeleteBookItem(id))}
              title="Вы действительно хотите удалить?"
            >
              <DeleteOutlined />
            </Popconfirm>
          </Space>
        )}
        title={
          <Tooltip title="Действия">
            <MoreOutlined />
          </Tooltip>
        }
        width={60}
      />
    </AntTable>
  );
});
