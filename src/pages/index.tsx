import React, { FC } from 'react';
import { BackTop, Input, Alert, Divider, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { connect } from 'umi';
import './index.css';

const { Search } = Input;
const namespace = 'main';

const page: FC<any> = ({ main: { dir }, dispatch, loading }) => {
  const search = (url: string) => {
    if (url) {
      let format = /https:\/\/.+?\/.+?\//;
      let realUrl = url.match(format);

      dispatch({
        type: `${namespace}/fetch`,
        payload: { url: realUrl },
      });
    }
  };

  return (
    <div>
      <p className="title">彼岸花 - 抖音去水印 😁</p>

      <Alert
        message="抖音分享链接形如：“一只小松鼠  https://v.douyin.com/JSCVjxs/ 复制此链接，打开【抖音短视频】，直接观看视频！”"
        type="warning"
        showIcon
        closable
        style={{ marginBottom: '20px' }}
      />

      <Search
        placeholder="复制抖音分享链接到这里"
        enterButton="开始解析"
        size="large"
        loading={loading}
        onSearch={search}
      />

      {dir && (
        <>
          <video src={`http://sanqii.cn/${dir}`} controls>
            您的浏览器暂不支持播放视频。
          </video>
          <Button
            icon={<DownloadOutlined />}
            download
            href={`http://api.sanqi.us/video/douyindown?url=${dir}`}
            type="primary"
            danger
            block
            size="large"
            style={{ marginTop: '20px' }}
          >
            保存视频
          </Button>
        </>
      )}

      <p className="footer">
        © {new Date().getFullYear()}
        <span onClick={() => window.open('http://www.sanqi.us')}>彼岸花网</span>
        <Divider type="vertical" />
        <span onClick={() => window.open('http://blog.sanqii.cn')}>
          作者博客
        </span>
        <br />
        <span onClick={() => window.open('http://pic.sanqi.us')}>5k壁纸</span>
        <Divider type="vertical" />
        <span onClick={() => window.open('http://jx.sanqi.us')}>
          VIP付费视频破解
        </span>
        <Divider type="vertical" />
        <span onClick={() => window.open('http://bt.sanqi.us')}>
          种子搜索神器
        </span>
        <br />
        <span
          style={{ color: 'rgb(236, 86, 88)' }}
          onClick={() => window.open('https://github.com/tuyeye/bian-alipay')}
        >
          个人开发者在线支付即时到账接口
        </span>
      </p>

      <BackTop />
    </div>
  );
};

export default connect(({ main, loading }: any) => ({
  main,
  loading: loading.effects[`${namespace}/fetch`],
}))(page);
