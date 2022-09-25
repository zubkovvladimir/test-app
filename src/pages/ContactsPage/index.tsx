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

  const { isLoading, items, totalCount } = useTypedSelector((state) => state.contacts);

  const onCloseModal = () => {
    setId(null);
    onClose();
  };

  // const onCloseModal = () => {
  //   setId(SHOP_ITEM_MODAL_DEFAULT_ID);
  //   dispatch(closeShopItemModal());
  //   dispatch(setSingleShopItem(null));
  // };

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
