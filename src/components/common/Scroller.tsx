import * as React from 'react';
import { findDOMNode } from 'react-dom'

interface Props {
  bottomIndicator: {};
  onScrollToBottom: any;
}
export default class Scroller extends React.Component<Props, any> {
  ScrollerDiv: any;
  childrenSlot: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      indicatorAlive: true,
    }
    if (!this.props.children
      || (Array.isArray(this.props.children) && this.props.children.length === 0)
    ) {
      this.props.onScrollToBottom();
    }
  }

  componentDidMount() {
    const childrenSlotDiv = findDOMNode(this.childrenSlot) as HTMLDivElement;
    childrenSlotDiv.onscroll = (e: Event) => {
      // TODO 去抖
      const scrollTop = childrenSlotDiv.scrollTop;
      const clientHeight = childrenSlotDiv.clientHeight;
      const scrollHeight = childrenSlotDiv.scrollHeight;
      // window.console.log({
      //   scrollTop, clientHeight, scrollHeight
      // })
      if (scrollTop === 0) {
        window.console.log('scrollTop')
        return;
      }
      if (scrollHeight - clientHeight === scrollTop) {
        window.console.log('scrollBottom');
        this.props.onScrollToBottom()
          .catch((err: any) => {
            window.console.error('scrollBottom ' + err)
          })
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
          {/* TODO Top Indicator */}
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
          {this.props.bottomIndicator}
        </div>
      </div>
    )
  }
}