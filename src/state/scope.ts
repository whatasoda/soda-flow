import { isIdentifier } from '../util/identifier';

interface Container {
  [code: string]: any;
}

const values: Container = {};
const identifiers: Container[] = [{}];

export type Scope = typeof scope;
export const scope = {
  
  setValue(code: string, value: any, isDeclaration: boolean = false) {
    getContainer(code, isDeclaration)[code] = value;
  },
  
  getValue(code: string) {
    return getContainer(code, false)[code];
  },
  
};


const getContainer = (code: string, isDeclaration: boolean = false) => {
  if (isIdentifier(code)) {
    if (isDeclaration) {
      return identifiers[identifiers.length - 1];
    } else {
      for (let i=identifiers.length-1; i>=0; i--) {
        if (Reflect.has(identifiers[i], code)) {
          return identifiers[i];
        }
      }
    }
  }
  return values;
};
