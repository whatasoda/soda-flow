import { GeneralProfile, Resolver } from './general';
import state from '../state';

export interface FuncProfile extends GeneralProfile {
  roles: {
    func: {
      isArrow: boolean;
    };
  }
}

export type FuncValue = (...args: any[]) => Promise<any>;

const funcResolver: Resolver<FuncProfile, FuncValue> = (profile, func) =>
  state.flow({
    profile,
    evaluate: () => (...args: any[]): Promise<any> => state.flow({
      profile,
      evaluate: () => state.subFlow(() => func(...args))
    }),
  });

export default funcResolver;
