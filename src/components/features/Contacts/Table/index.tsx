import { FC, memo } from 'react';

import { DeleteOutlined, EditOutlined, MoreOutlined } from '@ant-design/icons';
import { Table as AntTable, Popconfirm, Space, TablePaginationConfig, Tooltip } from 'antd';
import { Contact } from 'interfaces/api/contacts.interface';
import { PageMeta } from 'interfaces/api/response.interfaces';
import { deleteContact, fetchContacts } from 'store/contacts/actions';
import { useDispatch } from 'react-redux';

const { Column } = AntTable;

interface TableProps {
  isLoading: boolean;
  data: Contact[];
  meta: PageMeta;
  onEditModalOpen: (id: number, product: Contact) => void;
  onChange: (params: TablePaginationConfig) => void;
}

export const Table: FC<TableProps> = memo(({ isLoading, data, meta, onEditModalOpen, onChange }) => {
  const dispatch = useDispatch();

  const pagination: TablePaginationConfig = {
    size: 'default',
    showSizeChanger: true,
    pageSizeOptions: ['10', '20', '50', '100'],
    defaultPageSize: 10,
    total: meta.total,
    current: meta._page,
    pageSize: meta._limit,
  };

  return (
    <AntTable<Contact>
      dataSource={data}
      loading={isLoading}
      onChange={onChange}
      pagination={pagination}
      rowKey={(user) => user.id}
      size="middle"
    >
      <Column<Contact> dataIndex="id" key="id" title="Id" />
      <Column<Contact>
        key="name"
        render={({ firstName, lastName, patronymic }) => `${firstName} ${lastName} ${patronymic}`}
        title="ФИО"
      />
      <Column<Contact> dataIndex="age" key="age" title="Возраст" />

      <Column<Contact>
        dataIndex="id"
        key="action"
        render={(id: number, contact: Contact) => (
          <Space className="ant-table-actions" size="middle">
            <Tooltip title="Редактировать">
              <EditOutlined onClick={() => onEditModalOpen(id, contact)} />
            </Tooltip>

            <Popconfirm
              cancelText="Нет"
              okText="Да"
              onConfirm={() => dispatch(deleteContact({ id, onSuccess: () => dispatch(fetchContacts({})) }))}
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
