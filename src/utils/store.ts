import { CaseReducer } from '@reduxjs/toolkit/src/createReducer';
import { ActionReducerMapBuilder, TypedActionCreator } from '@reduxjs/toolkit/src/mapBuilders';

type ReturnTypeAction<T extends undefined | TypedActionCreator<string>> = T extends undefined
  ? never
  : T extends (...args: any) => infer R
  ? R
  : any;

type Builder<State> = Omit<ActionReducerMapBuilder<State>, 'addCase'> & {
  addCase<ActionCreator extends undefined | TypedActionCreator<string> | (undefined | TypedActionCreator<string>)[]>(
    actions?: ActionCreator,
    reducer?: CaseReducer<
      State,
      ActionCreator extends (undefined | TypedActionCreator<string>)[]
        ? ReturnTypeAction<ActionCreator[0]>
        : ActionCreator extends TypedActionCreator<string>
        ? ReturnTypeAction<ActionCreator>
        : never
    >,
  ): Builder<State>;
};

export function createBuilder<State>(builder: ActionReducerMapBuilder<State>): Builder<State> {
  const newBuilder = builder as Builder<State>;
  const { addCase } = builder;

  newBuilder.addCase = (actions, reducer) => {
    if (!actions || !reducer) {
      return newBuilder;
    }
    let actionsArray;
    if (Array.isArray(actions)) {
      actionsArray = actions;
    } else {
      actionsArray = [actions];
    }
    actionsArray.forEach((action) => {
      if (action) {
        addCase(action, reducer as CaseReducer<State, ReturnType<TypedActionCreator<string>>>);
      }
    });
    return newBuilder;
  };

  return newBuilder;
}
