import { enableES5, produce } from "immer";
//익스플로어도 가능하게
export default (...args) => {
  enableES5();
  return produce(...args);
};
