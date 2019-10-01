/* eslint-disable import/no-mutable-exports, prefer-const */

import { message } from 'antd';
import theme from './themes';

export const CFG = {
  BASE_URL: 'http://10.122.123.125:8086/' || process.env.REACT_APP_API_URL,
  MOCK_ACTIVE: process.env.REACT_APP_MOCK_ACTIVE === 'true',
  THEME: 2,
  GRAPH_MODE: 'RDF',
  HISTORY_LENGTH: 10,
  TOKEN:
    process.env.REACT_APP_TOKEN ||
    (process.env.NODE_ENV === 'dev' ? 'HuaweiCrystalClearDevelopment' : null),
  TIMELINE_DATE_FORMAT: 'YYYY-MM-DD',
};

export let conf = {
  LOADING_TEXT: 'Action in progress...',
  RULE_SUCCESS_TEXT: 'Rule is succesfully submitted',
  RULE_FAILED_TEXT: 'Something went wrong while rule is submitting',
  MAP_CENTER: [41.028446, 29.117653],
  MAP_ZOOM: 3,
  MAP_MIN_ZOOM: 3,
  MAP_MAX_ZOOM: 16,
  MAP_NIGHT_MODE: false,
};

message.config({
  top: 75,
  duration: 2,
  maxCount: 1,
});

export const THEME = { ...theme[`theme${CFG.THEME}`] };
