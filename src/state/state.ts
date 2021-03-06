import { createFlow } from './flow';
import { scope } from './scope';

export type State = typeof state;
const state = {
  flow: createFlow(),
  scope,
  code: '',
  curr: { start: 0, end: 0 },
  currState: (curr: { start: number; end: number }) => void curr,
  async subFlow<T>(evaluate: () => T | Promise<T>): Promise<T> {
    const parent = this.flow;
    this.flow = createFlow();
    const result = await evaluate();
    this.flow = parent;
    return result;
  },
  
};

export default state;
