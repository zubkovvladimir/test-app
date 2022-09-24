import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOutlet } from 'react-router-dom';

import { useDebounceFn, useTitle } from 'ahooks';
import { Button } from 'antd';
// import { PageHeader } from 'components/PageHeader';
import { PageHeader } from 'components/shared/PageHeader';
import { PageTitle } from 'components/shared/PageTitle';
// import { selectShopItemsIsLoading } from 'store/loads/selectors';
// import { closeShopItemModal, openShopItemModal } from 'store/modals/actions';
// import { selectCreateShopItemModalIsOpen } from 'store/modals/selectors';
// import {
//   fetchShopItems,
//   resetShopPageMeta,
//   resetShopPageSearchQuery,
//   setShopPageSearchQuery,
//   setSingleShopItem,
// } from 'store/shop/actions';
// import { selectShopItems, selectShopPageMeta } from 'store/shop/selectors';
// import { fetchShopAvatars } from 'store/shopAvatars/actions';

// import { SHOP_ITEM_MODAL_DEFAULT_ID, ShopItemModal } from './ShopItemModal';
// import { Table } from './Table';
import { appName } from 'constants/app';
import { fetchContacts } from 'store/contacts/actions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useModal } from 'hooks/useModal';
import { Contact } from 'interfaces/api/contacts.interface';
import { ContactsModal } from 'components/features/Contacts/ContactsModal';
import { Table } from 'components/features/Contacts/Table';
import { defaultPageMeta } from 'constants/other';
import { useQueryParams } from 'hooks/useQueryParams';

const ContactsPage: React.FC = () => {
  // const [id, setId] = React.useState<number>(SHOP_ITEM_MODAL_DEFAULT_ID);
  const [id, setId] = useState<number | null>(null);
  const dispatch = useDispatch();
  const outlet = useOutlet();
  const [isOpen, onOpen, onClose, contact] = useModal<Contact>({});
  // const isLoading = useSelector(selectShopItemsIsLoading);
  // const shopItems = useSelector(selectShopItems);
  // const pageMeta = useSelector(selectShopPageMeta);
  // const open = useSelector(selectCreateShopItemModalIsOpen);

  const { isLoading, items } = useTypedSelector((state) => state.contacts);

  const onCloseModal = () => {
    setId(null);
    onClose();
  };

  // const onCloseModal = () => {
  //   setId(SHOP_ITEM_MODAL_DEFAULT_ID);
  //   dispatch(closeShopItemModal());
  //   dispatch(setSingleShopItem(null));
  // };

  const setParam = useQueryParams({
    onChange: (params) => dispatch(fetchContacts(params)),
  });

  const onEditModalOpen = (id: number, contact: Contact) => {
    setId(id);
    onOpen(contact);
  };

  useEffect(() => {
    dispatch(fetchContacts({}));

    return () => {
      // debouncedSearch.cancel();
      // dispatch(resetShopPageMeta());
      // dispatch(resetShopPageSearchQuery());
    };
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
        onSearch={(value) => setParam({ search: value })}
        renderButton={
          <Button onClick={() => dispatch(onOpen())} type="primary">
            Добавить
          </Button>
        }
      />

      <Table
        data={items}
        isLoading={isLoading}
        meta={defaultPageMeta}
        onChange={({ current, pageSize }) => setParam({ page: current, pageSize })}
        onEditModalOpen={onEditModalOpen}
      />

      {isOpen && <ContactsModal id={id} initial={contact} isOpen={isOpen} onClose={onCloseModal} />}
    </div>
  );
};

export default ContactsPage;
