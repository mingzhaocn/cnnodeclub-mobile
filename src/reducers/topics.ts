import { TopicsState } from '../types';
import { TopicsAction } from '../actions';
import * as actionType from '../constants/actionTypes';

const initialState: TopicsState = {
  topicsParam: {
    tab: '',
    limit: 10,
    page: 1,
    mdrender: false
  },
  onRequestTopics: false,
  topics: []
};
export const reducer = (state: TopicsState = initialState, action: TopicsAction): TopicsState => {
  switch (action.type) {
    case actionType.REQUEST_TOPICS:
      return {
        ...state,
        onRequestTopics: action.onRequestTopics
      };
    case actionType.RECEIVE_TOPICS:
      return {
        ...state,
        onRequestTopics: action.onRequestTopics,
        topics: action.topics,
        topicsParam: action.topicsParam
      };
    default:
      return state;
  }
};