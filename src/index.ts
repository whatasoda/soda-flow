import { funcResolver, generalResolver } from './resolvers';
import code = require('../sources/target.src.js');
import state from './state';
import init from './view/component';

state.code = code.src;

init();

code.code((profile, value) => {
  if (profile.roles.func) {
    value = funcResolver(profile as any, value);
  }
  value = generalResolver(profile as any, value);
  return value;
});
