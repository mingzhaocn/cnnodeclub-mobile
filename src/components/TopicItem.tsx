import * as React from 'react';

interface Props {
  topic: any;
}
export default class TopicItem extends React.Component<Props, {}> {
  render() {
    return (
      <div style={{ height: '2rem' }}>
        <img
          style={{ width: '1rem', height: '1rem', borderRadius: '50%' }}
          src={this.props.topic.author.avatar_url}
          alt="😄"
        />
      </div>
    )
  }
}