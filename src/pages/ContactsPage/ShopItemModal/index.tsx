// import React from 'react';
// import { Controller, useForm } from 'react-hook-form';
// import { useDispatch, useSelector } from 'react-redux';

// import { Avatar, Button, Input, Modal, Result, Select, Spin } from 'antd';
// import { FormItem } from 'components/FormItem';
// import { ImageUploader } from 'components/ImageUploader';
// import { commonMessages, validationMessages } from 'constants/messages';
// import { ShopAddItem, ShopItemType } from 'interface/Shop.interface';
// import { selectShopAvatarsIsLoading, selectShopItemErrorMessage, selectShopItemIsLoading } from 'store/loads/selectors';
// import { fetchCreateShopItem, fetchShopItem, fetchUpdateShopItem, fetchUploadShopItemImage } from 'store/shop/actions';
// import { selectSingleShopItem } from 'store/shop/selectors';
// import { selectShopAvatars } from 'store/shopAvatars/selectors';
// import { getFileCompleteUrl } from 'utils/helpers';

// import classes from './ShopItemModal.module.less';

// export const SHOP_ITEM_MODAL_DEFAULT_ID = -1 as const;

// interface TypeOption {
//   label: string;
//   value: ShopItemType;
// }

// const typeOptions: TypeOption[] = [
//   { label: 'Физический', value: 'physical' },
//   { label: 'Аватар', value: 'avatar' },
// ];

// interface ShopItemModalProps {
//   open: boolean;
//   id: number;
//   onClose: () => void;
// }

// export const ShopItemModal: React.FC<ShopItemModalProps> = ({ open, id, onClose }) => {
//   const [coverUrl, setCoverUrl] = React.useState<string>('');
//   const [storageImage, setStorageImage] = React.useState('');

//   const dispatch = useDispatch();
//   const { control, handleSubmit, setValue, watch } = useForm<ShopAddItem>();
//   const initial = useSelector(selectSingleShopItem);
//   const isLoading = useSelector(selectShopItemIsLoading);
//   const avatarsIsLoading = useSelector(selectShopAvatarsIsLoading);
//   const errorMessage = useSelector(selectShopItemErrorMessage);
//   const avatars = useSelector(selectShopAvatars);
//   const watchShopItemType = watch('type');

//   const onConfirm = (data: ShopAddItem) => {
//     const imgCompleteUrl = getFileCompleteUrl(data.image);
//     if (id !== SHOP_ITEM_MODAL_DEFAULT_ID) {
//       dispatch(fetchUpdateShopItem({ id, data: { ...data, image: imgCompleteUrl }, onSuccess: onClose }));
//     } else {
//       dispatch(fetchCreateShopItem({ data: { ...data, image: imgCompleteUrl }, onSuccess: onClose }));
//     }
//   };

//   const onCoverUpload = (file: File, onUploadProgress: (progressEvent: ProgressEvent) => void) => {
//     setStorageImage(file.name);
//     dispatch(
//       fetchUploadShopItemImage({
//         file,
//         onUploadProgress,
//         onSuccess: (path: string) => {
//           const completeUrl = getFileCompleteUrl(path);
//           setValue('image', path);
//           setCoverUrl(completeUrl);
//         },
//       }),
//     );
//   };

//   const loadShopItem = () => {
//     if (id === SHOP_ITEM_MODAL_DEFAULT_ID) {
//       return;
//     }
//     dispatch(fetchShopItem(id));
//   };

//   React.useEffect(() => {
//     loadShopItem();
//   }, [id]);

//   React.useEffect(() => {
//     if (initial !== null) {
//       setCoverUrl(initial.image);
//       setValue('image', initial.image);
//       setValue('name', initial.name);
//       setValue('price', initial.price);
//       setValue('type', initial.type);
//       if (initial.subtype !== null) {
//         setValue('subtypeId', initial.subtype.id);
//       }
//     }
//   }, [initial]);

//   return (
//     <Modal
//       destroyOnClose
//       okText="Сохранить"
//       onCancel={onClose}
//       onOk={handleSubmit(onConfirm)}
//       title={id !== SHOP_ITEM_MODAL_DEFAULT_ID ? 'Редактировать' : 'Создать'}
//       visible={open}
//     >
//       <Spin spinning={isLoading}>
//         {errorMessage ? (
//           <Result
//             extra={
//               <Button key="console" onClick={loadShopItem} type="primary">
//                 Попробовать еще раз
//               </Button>
//             }
//             status="warning"
//             subTitle={errorMessage}
//             title={commonMessages.somethingGoesWrong}
//           />
//         ) : (
//           <>
//             <Controller
//               control={control}
//               name="image"
//               render={({ field: { value }, fieldState: { error } }) => (
//                 <FormItem error={error} name="Обложка">
//                   <Input
//                     disabled
//                     placeholder="Ссылка на изображение (загрузите файл для автозаполнения)"
//                     value={value ? storageImage : ''}
//                   />
//                 </FormItem>
//               )}
//               rules={{ required: validationMessages.required }}
//             />
//             <ImageUploader imageUrl={coverUrl} onUpload={onCoverUpload} wrapperClassName={classes['image-uploader']} />

//             <Controller
//               control={control}
//               name="name"
//               render={({ field, fieldState: { error } }) => (
//                 <FormItem error={error} name="Название">
//                   <Input {...field} />
//                 </FormItem>
//               )}
//               rules={{ required: validationMessages.required }}
//             />

//             <Controller
//               control={control}
//               name="price"
//               render={({ field, fieldState: { error } }) => (
//                 <FormItem error={error} name="Цена">
//                   <Input addonAfter="QA" {...field} />
//                 </FormItem>
//               )}
//               rules={{
//                 required: validationMessages.required,
//                 pattern: { value: /^\d+$/, message: validationMessages.invalidValue },
//               }}
//             />

//             <Controller
//               control={control}
//               name="type"
//               render={({ field, fieldState: { error } }) => (
//                 <FormItem error={error} name="Тип">
//                   <Select options={typeOptions} {...field} />
//                 </FormItem>
//               )}
//               rules={{ required: validationMessages.required }}
//             />

//             {watchShopItemType === 'avatar' && (
//               <Controller
//                 control={control}
//                 name="subtypeId"
//                 render={({ field, fieldState: { error } }) => (
//                   <FormItem error={error} name="Выберите аватар">
//                     <Select loading={avatarsIsLoading} optionLabelProp="label" showSearch {...field}>
//                       {avatars.map(({ id, image }) => (
//                         <Select.Option key={id} label={id} value={id}>
//                           <div className={classes['avatar-option-wrapper']}>
//                             <Avatar size="small" src={image} />
//                             <span>{id}</span>
//                           </div>
//                         </Select.Option>
//                       ))}
//                     </Select>
//                   </FormItem>
//                 )}
//                 rules={{ required: validationMessages.required }}
//               />
//             )}
//           </>
//         )}
//       </Spin>
//     </Modal>
//   );
// };
