
import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import * as actions from '../../actions';
import { Topics, TopicsParam, OnRequestTopics, StoreState } from '../../types';
import TopicItem from '../../components/TopicItem';
import Scroller from '../../components/common/Scroller'
const bottomIndicatorSvg = require('../../assets/load_gray.svg')

interface Props {
  fetchTopicsIfNeeded: (topicsParam: TopicsParam) => any;
  lastTopicParam: TopicsParam;
  onRequestTopics: OnRequestTopics;
  topics: Topics;
}
class Home extends React.Component<Props, {}> {

  loadMore = () => {
    return this.props.fetchTopicsIfNeeded(
      {
        ...this.props.lastTopicParam,
        page: this.props.lastTopicParam.page + 1
      }
    )
  }
  render() {
    return (
      <div
        style={{
          height: '100%'
        }}
      >
        <Scroller
          onScrollToBottom={this.loadMore}
          bottomIndicator={(
            <div
              style={{
                textAlign: 'center'
              }}
            >
              <img
                style={{
                  width: '0.44rem', height: '0.44rem'
                }}
                src={bottomIndicatorSvg}
                alt="loading..."
              />
            </div>
          )}
        >
          {
            this.props.topics.map((item: any) => (
              <TopicItem topic={item} key={item.id} />
            ))
          }
        </Scroller>
      </div>
    );
  }
  componentDidMount() {
    // this.props.fetchTopicsIfNeeded(this.props.lastTopicParam);
  }
}

function mapStateToProps(state: StoreState) {
  return {
    lastTopicParam: state.topics.topicsParam,
    onRequestTopics: state.topics.onRequestTopics,
    topics: state.topics.topics,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.TopicsAction>) {
  return {
    fetchTopicsIfNeeded: (topicsParam: TopicsParam): {} => dispatch(actions.fetchTopicsIfNeeded(topicsParam))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);