import React, { FC, useEffect } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Result, Space, Spin } from 'antd';
import { Modal } from 'components/modals/Modal';
import { CommonMessages } from 'constants/errors';
import { useTypedSelector } from 'hooks/useTypedSelector';
// import { Product, ProductToServer } from 'interfaces/api/goods.interface';
// import { createProduct, deleteProduct, fetchGoods, updateProduct } from 'store/goods/actions';
// import { goodsCreateFormScheme } from 'utils/validations';

import { ModalForm } from '../ModalForm';
import { Contact } from 'interfaces/api/contacts.interface';
import { fetchContacts } from 'store/contacts/actions';

export const GOODS_MODAL_DEFAULT_ID = -1 as const;

interface ContactsModalModalProps {
  isOpen: boolean;
  id: number | null;
  onClose: () => void;
  initial: Contact | null;
}

export const ContactsModal: FC<ContactsModalModalProps> = ({ isOpen, id, onClose, initial }) => {
  const dispatch = useDispatch();

  const { isLoading, error } = useTypedSelector((state) => state.contacts);

  const isEditModal = id !== null;

  const form = useForm<Contact>({
    // resolver: yupResolver(goodsCreateFormScheme),
  });
  const { handleSubmit, setValue } = form;

  const onSuccess = () => {
    dispatch(fetchContacts({}));
    onClose();
  };

  // const onConfirm: SubmitHandler<ProductToServer> = (data) => {
  //   if (isEditModal && id) {
  //     dispatch(updateProduct({ id, data, onSuccess }));
  //   } else {
  //     dispatch(createProduct({ data, onSuccess }));
  //   }
  // };

  const loadContacts = () => {
    if (isEditModal) {
      // dispatch(fetchContacts({}));
    }
  };

  useEffect(() => {
    if (initial !== null) {
      setValue('name', initial.name);
      // setValue('code', initial.code);
      // setValue('sort', initial.sort);
      // setValue('colorId', initial.color.id);
      // setValue('kindId', initial.kind.id);
      // setValue('boxId', initial.box.id);
      // setValue('gradeId', initial.grade.id);
    }
  }, [initial]);

  return (
    <Modal
      destroyOnClose
      isOpen={isOpen}
      onClose={onClose}
      title={isEditModal ? 'Редактирование контакта' : 'Новый контакт'}
      width={445}
    >
      <Spin spinning={isLoading}>
        {error && isEditModal ? (
          <Result
            extra={
              <Button key="console" onClick={loadContacts} type="primary">
                Попробовать еще раз
              </Button>
            }
            status="warning"
            subTitle={error}
            title={CommonMessages.SomethingGoesWrong}
          />
        ) : (
          <FormProvider {...form}>
            <ModalForm />

            <Space direction="vertical" size="large">
              {isEditModal && id && (
                <Button
                  // onClick={() => dispatch(deleteProduct({ id, onSuccess }))}
                  size="large"
                  style={{ width: '100%' }}
                >
                  Удалить
                </Button>
              )}
              <Button size="large" type="primary">
                {isEditModal ? 'Сохранить' : 'Создать'}
              </Button>
            </Space>
          </FormProvider>
        )}
      </Spin>
    </Modal>
  );
};
