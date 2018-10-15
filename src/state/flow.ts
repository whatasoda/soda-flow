import { Resolve } from '../types/promise';
import sleep from '../util/sleep';
import { ViewProfile, dispatchViewProfile } from '../view';

interface NextStepOptions<TValue, TProfile> {
  profile: TProfile,
  evaluate: () => TValue | Promise<TValue>;
  createViewProfile?: (result: TValue, profile: TProfile) => ViewProfile;
}

export type Flow = <TValue, TProfile>(
  options: NextStepOptions<TValue, TProfile>,
  duration?: number,
) => Promise<TValue>;

export const createFlow = (): Flow => {
  const queue: Promise<void>[] = [];
  return (
    { profile, evaluate, createViewProfile },
    duration = 1000,
  ) => new Promise(async dispatchResult => {
    const greenSignal = Promise.all(queue.slice());
    
    const next = await new Promise<Resolve<number>>((resolve) =>
      queue.push(new Promise(resolve).then(sleep))
    );
    
    await greenSignal;
    const result = await evaluate();
    dispatchResult(result);
    
    const viewProfile = createViewProfile ? createViewProfile(result, profile) : profile;
    await dispatchViewProfile(viewProfile);
    
    next(duration);
  });
};
