import { useContext, createContext } from "react";
import reducer from "../reducer";

export const ReactReduxContext = createContext(null);

export const useStore = () => {
  const contextValue = useContext(ReactReduxContext); //store

  return { ...contextValue };
};

export const useSelector = () => {
  const store = useStore();

  // TODO: 상태가 이전 값과 다르면, 갱신된 값을 반환한다.

  return store.getState();
};

export const useDispatch = () => {
  const store = useStore();
  // TODO: dispatch가 작동되면, 상태변화를 구독자한테 알린다.
  return store.dispatch;
};
