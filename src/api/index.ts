/**
 * fetch data from server (https://cnodejs.org/api)
 */

import { checkStatus, parseJSON } from './tool';
import * as qs from 'qs';

const prefix = 'https://cnodejs.org/api/v1/';

export interface TopicsParam {
  page: number; // 页数
  tab: string; // 主题分类。目前有 ask share job good
  limit: number; // 每一页的主题数量
  mdrender: boolean; // 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
}
export function fetchTopics(param: TopicsParam) {
  return window
    .fetch(prefix + 'topics?' + qs.stringify(param))
    .then(res => checkStatus(res))
    .then(res => parseJSON(res));
}