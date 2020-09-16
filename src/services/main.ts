import request from 'umi-request';

export async function getUrl(params: { url: string }) {
  return request('http://api.sanqi.us/video/douyin', { params });
}

export async function downUrl(params: { url: string }) {
  return request('http://api.sanqi.us/video/douyindown', { params });
}
