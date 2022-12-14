import { FC, useEffect } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Divider, Result, Space, Spin } from 'antd';
import { Modal } from 'components/modals/Modal';
import { commonMessages } from 'constants/errors';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { Contact, ContactsBase } from 'interfaces/api/contacts.interface';
import { createContact, deleteContact, fetchContacts, updateContact } from 'store/contacts/actions';
import { contactsFormScheme } from 'utils/validations';

import { ModalForm } from '../ModalForm';

interface ContactsModalModalProps {
  isOpen: boolean;
  id: number | null;
  onClose: () => void;
  initial: Contact | null;
  page: number;
}

export const ContactsModal: FC<ContactsModalModalProps> = ({ isOpen, id, onClose, initial, page }) => {
  const dispatch = useDispatch();

  const { isLoading, error } = useTypedSelector((state) => state.contacts);

  const isEditModal = id !== null;

  const form = useForm<ContactsBase>({
    resolver: yupResolver(contactsFormScheme),
  });
  const { handleSubmit, setValue } = form;

  const onSuccess = () => {
    dispatch(fetchContacts({ _page: page }));
    onClose();
  };

  const onConfirm: SubmitHandler<ContactsBase> = (data) => {
    if (isEditModal && id) {
      dispatch(updateContact({ id, data, onSuccess }));
    } else {
      dispatch(createContact({ data, onSuccess }));
    }
  };

  const loadContacts = () => {
    if (isEditModal) {
      dispatch(fetchContacts({}));
    }
  };

  useEffect(() => {
    if (initial !== null) {
      setValue('firstName', initial.firstName);
      setValue('lastName', initial.lastName);
      setValue('patronymic', initial.patronymic);
      setValue('age', initial.age);
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
            title={commonMessages.SomethingGoesWrong}
          />
        ) : (
          <FormProvider {...form}>
            <ModalForm />

            <Divider />

            <Space size="large">
              <Button onClick={handleSubmit(onConfirm)} size="large" type="primary">
                {isEditModal ? 'Сохранить' : 'Создать'}
              </Button>

              {isEditModal && id && (
                <Button
                  onClick={() => dispatch(deleteContact({ id, onSuccess }))}
                  size="large"
                  style={{ width: '100%' }}
                >
                  Удалить
                </Button>
              )}
            </Space>
          </FormProvider>
        )}
      </Spin>
    </Modal>
  );
};
