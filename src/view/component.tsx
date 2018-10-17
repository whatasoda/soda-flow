import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HighLight from 'react-highlight';
import state from '../state';

const Code: React.SFC = () => <HighLight className='js'>{state.code}</HighLight>;

class Curr extends React.Component<{}, { start: number; end: number }> {
  constructor(props: {}) {
    super(props);
    this.state = { start: 0, end: 0 };
    state.currState = this.setState.bind(this);
  }
  
  render() {
    const { start, end } = this.state;
    const pre = state.code.slice(0, start);
    const main = state.code.slice(start, end);
    const post = state.code.slice(end);
    return <pre><code className='hljs' style={{
      position: 'absolute',
      left: 0,
      top: 0,
      whiteSpace: 'pre',
      background: 'none',
      color: 'rgba(0,0,0,0)',
    }}>{pre}<span style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}>{main}</span>{post}</code></pre>;
  }
}

const init = () => {
  if (typeof window !== 'undefined') {
    ReactDOM.render(<React.Fragment> <Code/> <Curr/> </React.Fragment>, document.getElementById('app'));
  }
}

export default init;
