import * as actionTypes from '../constants/actionTypes';
import { TopicsParam, Topics, OnRequestTopics } from '../types';
import { Dispatch } from 'redux';
import * as api from '../api';

export interface RequestTopics {
  type: actionTypes.REQUEST_TOPICS;
  onRequestTopics: OnRequestTopics;
}

export interface ReceiveTopics {
  type: actionTypes.RECEIVE_TOPICS;
  onRequestTopics: OnRequestTopics;
  topics: Topics;
  topicsParam: TopicsParam;
}

export type TopicsAction = RequestTopics | ReceiveTopics;

export const requestTopics = (): RequestTopics => ({
  type: actionTypes.REQUEST_TOPICS,
  onRequestTopics: true
});

export const receiveTopics = (topics: Topics, topicsParam: TopicsParam): ReceiveTopics => ({
  type: actionTypes.RECEIVE_TOPICS,
  onRequestTopics: false,
  topics: topics,
  topicsParam: topicsParam,
});

export const fetchTopics = (topicsParam: TopicsParam) => (dispatch: Dispatch<TopicsAction>) => {
  dispatch(requestTopics());
  return api.fetchTopics(topicsParam)
    .then(data => dispatch(receiveTopics(data.data, topicsParam)));
  // TODO catch
};

export const fetchTopicsIfNeeded =
  (topicsParam: TopicsParam) => (dispatch: Dispatch<TopicsAction>, getState: Function): any => {
    if ((!getState().topics.onRequestTopics)) {
      return dispatch(fetchTopics(topicsParam));
    }
  };