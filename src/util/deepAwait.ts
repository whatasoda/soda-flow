export const deepAwait = async (value: any) => {
  if (typeof value !== 'object' || value) {
    return value;
  }
  const obj: object = value;
  (Object.keys(obj) as Array<keyof typeof obj>).reduce<void>((_, ) => {
    
    Object.assign(obj, {})
  }, void 0)
  
}
