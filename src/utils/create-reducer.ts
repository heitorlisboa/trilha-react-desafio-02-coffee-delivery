import type { Dispatch } from 'react';

/**
 * Gets the values for an object type
 * @example
 * ```ts
 * type MyObject = { name: 'Heitor'; age: 18 };
 * type MyObjectValues = ValuesOfObject<MyObject>;
 * // This is equivalent to:
 * type MyObjectValues = MyObject[keyof MyObject];
 * // And also equivalent to:
 * type MyObjectValues = 'Heitor' | 18;
 * ```
 */
type ValuesOfObject<T extends Record<string | number | symbol, unknown>> =
  T[keyof T];

/**
 * A function that executes an action for a reducer
 * @param state The previous reducer state
 * @param payload Data that will be used to execute the action
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ReducerActionFunction<State> = (state: State, payload?: any) => State;

/**
 * An object containing only reducer action functions
 */
type ObjectWithReducerActionFunctions<State> = Record<
  string,
  ReducerActionFunction<State>
>;

/**
 * Maps the actions from a type of an object with reducer action functions
 * @example
 * ```ts
 * const reducerActionFunctions = {
 *   increment(state: number) {
 *     return state + 1;
 *   },
 *   setValue(_state: number, payload: number) {
 *     return payload;
 *   },
 * };
 * type MyActionsMap = ActionsMap<typeof reducerActionFunctions>;
 * // This is equivalent to:
 * type MyActionsMap =
 *   | { type: 'increment' }
 *   | { type: 'setValue'; payload: number };
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ActionsMap<ReducerActions extends ObjectWithReducerActionFunctions<any>> =
  ValuesOfObject<{
    [FunctionName in keyof ReducerActions]: Parameters<
      ReducerActions[FunctionName]
    >[1] extends undefined
      ? {
          type: FunctionName;
        }
      : {
          type: FunctionName;
          payload: Parameters<ReducerActions[FunctionName]>[1];
        };
  }>;

/**
 * Gets the dispatch function type based on its reducer function type
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ReducerDispatch<Reducer extends (...args: any) => any> = Dispatch<
  Parameters<Reducer>[1]
>;

/**
 * Creates a React reducer based on functions for each action you want it to
 * have. It uses the function name as the action type and the function's second
 * parameter as the action payload.
 *
 * The first argument of the action function is the previous reducer state, and
 * the second argument is the payload (which may or not be included, as you can
 * have an action function that doesn't need any payload).
 *
 * @example
 * ```tsx
 * const reducer = createReducer({
 *   increment(prevState: number) {
 *     return prevState + 1;
 *   },
 *   decrement(prevState: number) {
 *     return prevState - 1;
 *   },
 * });
 *
 * export function App() {
 *   const [state, dispatch] = useReducer(reducer, 0);
 *   return (
 *     <>
 *       <h1>Count: {state}</h1>
 *       <button onClick={() => dispatch({ type: 'increment' })}>
 *         Increment count
 *       </button>
 *       <button onClick={() => dispatch({ type: 'decrement' })}>
 *         Decrement count
 *       </button>
 *     </>
 *   );
 * }
 * ```
 */
export function createReducer<
  State,
  ReducerActions extends ObjectWithReducerActionFunctions<State>
>(
  reducerActions: ReducerActions
): (state: State, action: ActionsMap<ReducerActions>) => State {
  return (state: State, action: ActionsMap<ReducerActions>) => {
    const reducerAction = reducerActions[action.type];

    if ('payload' in action) {
      return reducerAction(state, action.payload);
    }

    return reducerAction(state);
  };
}
