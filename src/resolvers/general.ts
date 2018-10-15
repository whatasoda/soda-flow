import state from '../state';
import { getThisArgCode } from '../util/identifier';

export interface GeneralProfile {
  id: number;
  start: number;
  end: number;
  roles: {
    [type: string]: any;
  };
}

export type Resolver<TProfile, TValue> = (profile: TProfile, value: TValue) => Promise<TValue>;

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
