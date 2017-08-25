import * as React from 'react';
// import { findDOMNode } from 'react-dom'

interface Props {
  topIndicator: {};
  onScrollToTop: Function;
}
export default class Scroller extends React.Component<Props, any> {
  ScrollerDiv: any;
  childrenSlot: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      indicatorAlive: true,
    }
  }
  componentDidMount() {
    this.childrenSlot.onscroll = () => {
      // TODO 去抖
      const scrollTop = this.childrenSlot.scrollTop;
      const clientHeight = this.childrenSlot.clientHeight;
      const scrollHeight = this.childrenSlot.scrollHeight;
      if (scrollTop === 0) {
        window.console.log('scrollTop')
        return;
      }
      if (scrollHeight - clientHeight === scrollTop) {
        window.console.log('scrollBottom')
      }
    }
  }
  render() {
    return (
      <div
        style={{
          height: '100%',
          with: '100%'
        }}
      >
        <div
          style={{
            position: 'fixed',
            width: '100%',
            textAlign: 'center'
          }}
        >
          {this.state.indicatorAlive ? this.props.topIndicator : null}
        </div>
        <div
          style={{
            height: '100%',
            with: '100%',
            overflow: 'scroll',
          }}
          ref={(childrenSlot) => { this.childrenSlot = childrenSlot }}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}