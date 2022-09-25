import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useOutlet } from 'react-router-dom';

import { useTitle } from 'ahooks';
import { Button } from 'antd';
import { ContactsModal } from 'components/features/Contacts/ContactsModal';
import { Table } from 'components/features/Contacts/Table';
import { PageHeader } from 'components/shared/PageHeader';
import { PageTitle } from 'components/shared/PageTitle';
import { appName } from 'constants/app';
import { useModal } from 'hooks/useModal';
import { useQueryParams } from 'hooks/useQueryParams';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { Contact } from 'interfaces/api/contacts.interface';
import { fetchContacts } from 'store/contacts/actions';

const ContactsPage: FC = () => {
  const [id, setId] = useState<number | null>(null);
  const dispatch = useDispatch();
  const outlet = useOutlet();
  const [isOpen, onOpen, onClose, contact] = useModal<Contact>({});

  const { isLoading, items, totalCount } = useTypedSelector((state) => state.contacts);

  const onCloseModal = () => {
    setId(null);
    onClose();
  };
  const [setParam, params] = useQueryParams({
    onChange: (params) => {
      dispatch(fetchContacts(params));
    },
  });

  const onEditModalOpen = (id: number, contact: Contact) => {
    setId(id);
    onOpen(contact);
  };

  useEffect(() => {
    dispatch(fetchContacts({}));
  }, []);

  useTitle(`${appName} | Контакты`);

  if (outlet) {
    return outlet;
  }

  return (
    <div>
      <PageTitle>Контакты</PageTitle>

      <PageHeader
        isLoading={isLoading}
        onResetFilter={() => {}}
        onSearch={(value) => setParam({ q: value })}
        renderButton={
          <Button onClick={() => dispatch(onOpen())} type="primary">
            Добавить
          </Button>
        }
      />

      <Table
        data={items}
        isLoading={isLoading}
        meta={{ _page: params._page, total: totalCount, _limit: params._limit }}
        onChange={({ current, pageSize }) => setParam({ _page: current, _limit: pageSize })}
        onEditModalOpen={onEditModalOpen}
      />

      {isOpen && <ContactsModal id={id} initial={contact} isOpen={isOpen} onClose={onCloseModal} />}
    </div>
  );
};

export default ContactsPage;
