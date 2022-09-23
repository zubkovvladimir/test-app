export type NoParamEndpointConstructor = () => string;
export type SingleParamEndpointConstructor<T> = (param1: T) => string;
