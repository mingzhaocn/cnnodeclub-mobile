import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import * as actions from '../../actions';
import { TopicsParam, StoreState } from '../../types';

interface Props {
  fetchTopicsIfNeeded: (topicsParam: TopicsParam) => {};
  lastTopicParam: TopicsParam;
}
class Home extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        Home
        <button onClick={this.onClick}>fetchTopicsIfNeeded</button>
      </div>
    );
  }
  onClick = () => {
    this.props.fetchTopicsIfNeeded(this.props.lastTopicParam);
  }
  componentDidMount() {
    this.props.fetchTopicsIfNeeded(this.props.lastTopicParam);
  }
}

function mapStateToProps(state: StoreState) {
  return {
    lastTopicParam: state.topics.topicsParam
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.TopicsAction>) {
  return {
    fetchTopicsIfNeeded: (topicsParam: TopicsParam): {} => dispatch(actions.fetchTopicsIfNeeded(topicsParam))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);