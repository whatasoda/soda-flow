import { createFlow } from './flow';
import { scope } from './scope';

export type State = typeof state;
const state = {
  flow: createFlow(),
  scope,
  code: '',
  
  async subFlow<T>(evaluate: () => T | Promise<T>): Promise<T> {
    const parent = this.flow;
    this.flow = createFlow();
    const result = await evaluate();
    this.flow = parent;
    return result;
  },
  
};

export default state;
