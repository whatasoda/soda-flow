import { GeneralProfile } from '../resolvers/general';

export interface ViewProfileGeneral {
  
}

export type ViewProfile = ViewProfileGeneral | GeneralProfile;

export const dispatchViewProfile = async (profile: ViewProfile) => {
  profile
}
