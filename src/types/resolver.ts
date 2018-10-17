export interface GeneralProfile {
  id: number;
  start: number;
  end: number;
  roles: {
    [type: string]: any;
  };
}

export type Resolver<TProfile, TValue> = (profile: TProfile, value: TValue) => Promise<TValue>;
