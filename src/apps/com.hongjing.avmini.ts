import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hongjing.avmini',
  name: 'avmini',
  groups: [
    {
      key: 1,
      name: '首页-弹窗广告',
      activityIds: [
        'com.sigmob.sdk.base.common.PortraitTransparentAdActivity',
        'com.zasko.modulemain.mvpdisplay.activity.X35MainActivity',
      ],
      rules: [
        {
          matches: '[id="close_btn"]',
          snapshotUrls: ['https://i.gkd.li/i/25564192'],
        },
        {
          matches: '[id$="/native_ad_close_iv"]',
          snapshotUrls: ['https://i.gkd.li/i/25564192'],
        },
        {
          matches: 'TextView[text="✕"]',
          snapshotUrls: ['https://i.gkd.li/i/25566028'],
        },
        {
          matches:
            '@ImageView < FrameLayout <4 FrameLayout <2 LinearLayout < FrameLayout < FrameLayout < FrameLayout < [vid="native_ad_container"]',
          snapshotUrls: ['https://i.gkd.li/i/25566876'],
        },
        {
          matches:
            '@TextView <2 FrameLayout < FrameLayout <2 FrameLayout < LinearLayout <2 FrameLayout < FrameLayout < [vid="native_ad_container"]',
          snapshotUrls: ['https://i.gkd.li/i/25566886'],
        },
        {
          matches:
            '@ImageView <3 RelativeLayout <4 RelativeLayout < RelativeLayout < RelativeLayout < FrameLayout < FrameLayout < FrameLayout < [vid="native_ad_container"]',
          snapshotUrls: ['https://i.gkd.li/i/25566959'],
        },
      ],
    },
  ],
});
