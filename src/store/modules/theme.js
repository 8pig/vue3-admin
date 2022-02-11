import storage from '@/utils/storage';
import { MAIN_COLOR, DEFAULT_COLOR } from '@/constant';
import variables from '@/styles/variables.scss';
export default {
  namespace: true,
  state: () => ({
    mainColor: storage.get(MAIN_COLOR) || DEFAULT_COLOR,
    variables
  }),
  mutations: {
    setMainColor (state, color) {
      state.mainColor = color;
      state.variables.menuBg = color;
      storage.set(MAIN_COLOR, color);
    }

  }
};
