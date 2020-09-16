import { getUrl } from '@/services/main';
import { message } from 'antd';

export default {
  namespace: 'main',
  state: {
    dir: '',
  },
  effects: {
    *fetch({ payload }: any, { call, put }: any) {
      const res = yield call(getUrl, payload);
      if (res.code === -1) {
        message.error(res.message);
      } else {
        yield put({ type: 'save', payload: { dir: res.data } });
      }
    },
  },
  reducers: {
    save: (state: any, { payload }: any) => {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
