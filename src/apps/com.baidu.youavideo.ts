import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.youavideo',
  name: '一刻相册',
  groups: [
    {
      key: 1,
      name: '相册-新人优惠弹窗',
      desc: '关闭新人专享优惠弹窗',
      activityIds: ['com.baidu.youavideo.vip.ui.VipPayWebDialogActivity'],
      rules: [
        {
          key: 1,
          name: '原生广告容器-关闭按钮',
          matches: '@Image <11 View < WebView < WebView < [vid="fl_web_view"]',
          snapshotUrls: ['https://i.gkd.li/i/25673408'],
        },
      ],
    },
    {
      key: 2,
      name: '首页-弹窗广告',
      desc: '关闭首页广告弹窗',
      activityIds: ['com.baidu.youavideo.home.view.HomeActivity'],
      rules: [
        {
          key: 1,
          name: '关闭按钮-ID后缀',
          matches: '[vid$="_close"]',
          snapshotUrls: ['https://i.gkd.li/i/25673402'],
        },
      ],
    },
  ],
});
