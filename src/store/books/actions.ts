import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'api';
import { Book } from 'interfaces/api/books.interface';
import { ParamsFetchAll, ReturnFetchAll } from 'interfaces/api/response.interfaces';
import { ErrorType } from 'interfaces/common.interfaces';

export const fetchBooks = createAsyncThunk<Book[], ParamsFetchAll, { rejectValue: ErrorType }>(
  'FETCH_GOODS',
  async (params, { rejectWithValue }) => {
    const { data, errorMessage } = await api.books.getList(params);

    if (data) {
      return data;
    }

    if (errorMessage) {
      return rejectWithValue(errorMessage);
    }

    throw Error();
  },
);

// export const createProduct = createAsyncThunk<
//   boolean,
//   { data: ProductToServer; onSuccess: () => void },
//   { rejectValue: ErrorType }
// >('CREATE_PRODUCT', async (params, { rejectWithValue }) => {
//   const { data, onSuccess } = params;

//   const { success, errorMessage } = await api.goods.create(data);

//   if (success) {
//     onSuccess();
//     return success;
//   }

//   if (errorMessage) {
//     return rejectWithValue(errorMessage);
//   }

//   throw Error();
// });

// export const updateProduct = createAsyncThunk<
//   boolean,
//   { id: number; data: ProductToServer; onSuccess: () => void },
//   { rejectValue: ErrorType }
// >('UPDATE_PRODUCT', async (params, { rejectWithValue }) => {
//   const { id, data, onSuccess } = params;

//   const { success, errorMessage } = await api.goods.update(id, data);

//   if (success) {
//     onSuccess();
//     return success;
//   }

//   if (errorMessage) {
//     return rejectWithValue(errorMessage);
//   }

//   throw Error();
// });

// export const deleteProduct = createAsyncThunk<
//   boolean,
//   { id: number; onSuccess: () => void },
//   { rejectValue: ErrorType }
// >('DELETE_PRODUCT', async (params, { rejectWithValue }) => {
//   const { id, onSuccess } = params;

//   const { success, errorMessage } = await api.goods.remove(id);

//   if (success) {
//     onSuccess();
//     return success;
//   }

//   if (errorMessage) {
//     return rejectWithValue(errorMessage);
//   }

//   throw Error();
// });
