import state from '../state';
import { getThisArgCode } from '../util/identifier';
import { Resolver, GeneralProfile } from '../types/resolver';

const generalResolver: Resolver<GeneralProfile, any> = (profile, value) =>
  state.flow({
    profile,
    evaluate: () => {
      const { start, end } = profile;
      const code = state.code.slice(start, end);
      state.scope.setValue(code, value);
      if (typeof value === 'function') {
        const thisArgCode = getThisArgCode(code);
        if (thisArgCode) {
          const thisArg = state.scope.getValue(thisArgCode);
          return value.bind(thisArg);
        }
      }
      
      
      
      
      return value;
    },
  });

export default generalResolver;
