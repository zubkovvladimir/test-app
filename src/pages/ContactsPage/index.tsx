import React, { useEffect } from 'react';
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

const ContactsPage: React.FC = () => {
  // const [id, setId] = React.useState<number>(SHOP_ITEM_MODAL_DEFAULT_ID);
  const dispatch = useDispatch();
  const outlet = useOutlet();
  // const isLoading = useSelector(selectShopItemsIsLoading);
  // const shopItems = useSelector(selectShopItems);
  // const pageMeta = useSelector(selectShopPageMeta);
  // const open = useSelector(selectCreateShopItemModalIsOpen);

  // const debouncedSearch = useDebounceFn((value: string) => dispatch(setShopPageSearchQuery(value)), { wait: 300 });

  // const onCloseModal = () => {
  //   setId(SHOP_ITEM_MODAL_DEFAULT_ID);
  //   dispatch(closeShopItemModal());
  //   dispatch(setSingleShopItem(null));
  // };

  // const onEdit = (id: number) => {
  //   setId(id);
  //   dispatch(openShopItemModal());
  // };

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

      {/* <PageHeader
        isLoading={isLoading}
        onResetFilter={() => {}}
        onSearch={debouncedSearch.run}
        renderButton={
          <Button onClick={() => dispatch(openShopItemModal())} type="primary">
            Добавить
          </Button>
        }
      /> */}

      {/* <Table data={shopItems} isLoading={isLoading} meta={pageMeta} onEdit={onEdit} />

      {open && <ShopItemModal id={id} onClose={onCloseModal} open={open} />} */}
    </div>
  );
};

export default ContactsPage;
