import { GeneralProfile } from '../types/resolver';
import state from '../state';

export interface ViewProfileGeneral extends GeneralProfile {
  
}

export type ViewProfile = ViewProfileGeneral | GeneralProfile;

export const dispatchViewProfile = async ({ start, end }: ViewProfile, result: any) => {
  const displayResult = typeof result !== 'function' ? result : 'Func';
  console.log(state.code.slice(start, end), displayResult);
  state.currState({ start, end });
  if (typeof window !== 'undefined') {
    const val = document.getElementById('value');
    if (val) {
      val.innerHTML = displayResult;
    }
  }
}
