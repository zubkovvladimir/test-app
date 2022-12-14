export enum ValidationErrors {
  Required = 'Поле обязательно для заполнения',
  NotNumber = 'Должно быть числом',
}

export const errorsDicts: Record<string, string> = {
  'Incorrect email or password': 'Логин, почта или пароль были введены неверно',
  'The login has already been taken.': 'Этот логин уже занят',
};

export const commonMessages = {
  SomethingGoesWrong: 'Логин, почта или пароль были введены неверно',
};

export const ErrorsCode: Record<number, string> = {
  404: 'Удаленный ресурс не найден',
  422: 'Проверьте правильность передаваемых значений',
};
