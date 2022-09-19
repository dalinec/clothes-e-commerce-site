import { AnyAction } from 'redux';

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

export function createAction<T extends string, P>(  //function overloading
  type: T,
  payload: P
): ActionWithPayload<T, P>; //return action with a payload

export function createAction<T extends string>(type: T, payload: void): Action <T> //return only an action

export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
