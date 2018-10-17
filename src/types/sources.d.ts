declare module '*.src.js' {
  export = Source;
  
  const Source: Source;
  interface Source {
    code: (resolver: Resolver<GeneralProfile, any>) => any;
    src: string;
  }
  
  interface GeneralProfile {
    id: number;
    start: number;
    end: number;
    roles: {
      [type: string]: any;
    };
  }
  type Resolver<TProfile, TValue> = (profile: TProfile, value: TValue) => Promise<TValue>;
  
}
