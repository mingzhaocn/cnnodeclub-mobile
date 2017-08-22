import { TopicsParam } from "../api";
export { TopicsParam };
export type OnRequestTopics = boolean;
export type Topics = Array<Object>;

export interface TopicsState {
  topicsParam: TopicsParam
  onRequestTopics: OnRequestTopics,
  topics: Topics,
}

