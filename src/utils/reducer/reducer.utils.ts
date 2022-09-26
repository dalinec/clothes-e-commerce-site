import { AnyAction } from 'redux';

type Matchable<AC extends () => AnyAction> = AC & {
  //AC stands for action creator
  type: ReturnType<AC>['type'];
  match(action: AnyAction): action is ReturnType<AC>;
};

export function withMatcher<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC
): Matchable<AC>;

export function withMatcher<
  AC extends (...args: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type;
    },
  });
}

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

export function createAction<T extends string, P>( //function overloading
  type: T,
  payload: P
): ActionWithPayload<T, P>; //return action with a payload

export function createAction<T extends string>(
  type: T,
  payload: void
): Action<T>; //return only an action

export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}

/*  //return type

type Human = {
  name: string
}

type MyFunc = () => Human

type MyReturn = ReturnType<MyFunc>
*/

//-----------------------------

/* //intersection type
type Human = {
  name: string;
};

type Alien = {
  fly: () => void;
};

type Hybrid = Human & Alien; // & is the intersection keyword

const Josh: Hybrid = { // allows both name and fly()
  name: 'josh',
  fly: () => {},
};
*/
