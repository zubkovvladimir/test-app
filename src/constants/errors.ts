export enum ValidationErrors {
  Required = 'Поле обязательно для заполнения',
  NotNumber = 'Должно быть числом',
}

export enum ApiErrors {
  NotFound = 'Удаленный ресурс не найден',
  UnexpectedEntity = 'Проверьте правильность передаваемых значений',
  SomethingGoesWrong = 'Что-то пошло не так',
}

export const errorsDicts: Record<string, string> = {
  'The user credentials were incorrect.': 'Логин, почта или пароль были введены неверно',
  'The login has already been taken.': 'Этот логин уже занят',
};
