import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hongjing.avmini',
  name: 'Avmini',
  groups: [
    {
      key: 1,
      name: '首页-弹窗广告',
      desc: '关闭首页各类广告弹窗',
      activityIds: [
        'com.sigmob.sdk.base.common.PortraitTransparentAdActivity',
        'com.zasko.modulemain.mvpdisplay.activity.X35MainActivity',
      ],
      rules: [
        {
          key: 1,
          name: '关闭按钮-ID',
          matches: '[id="close_btn"]',
          snapshotUrls: ['https://i.gkd.li/i/25564192'],
        },
        {
          key: 2,
          name: '关闭按钮-ID后缀',
          matches: '[id$="/native_ad_close_iv"]',
          snapshotUrls: ['https://i.gkd.li/i/25564192'],
        },
        {
          key: 3,
          name: '关闭按钮-文本',
          matches: 'TextView[text="✕"]',
          snapshotUrls: ['https://i.gkd.li/i/25566028'],
        },
        {
          key: 4,
          name: '媒体广告关闭',
          matches: [
            '[vid="sdm_base_media_ad_close"]',
            '[vid="starsad_express_gi_close"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/25591278',
            'https://i.gkd.li/i/25591503',
          ],
        },
        {
          key: 5,
          name: '原生广告容器-关闭按钮',
          matches: [
            // ImageView 类型的关闭按钮
            '@ImageView < FrameLayout <4 FrameLayout <3 LinearLayout < FrameLayout < FrameLayout < FrameLayout < [vid="native_ad_container"]',
            '@ImageView <2 FrameLayout <2 LinearLayout < FrameLayout < LinearLayout < FrameLayout < FrameLayout < [vid="native_ad_container"]',
            '@ImageView < FrameLayout <4 FrameLayout <2 LinearLayout < FrameLayout < FrameLayout < FrameLayout < [vid="native_ad_container"]',
            '@ImageView <3 RelativeLayout <4 RelativeLayout < RelativeLayout < RelativeLayout < FrameLayout < FrameLayout < FrameLayout < [vid="native_ad_container"]',
            '@ImageView <3 FrameLayout < FrameLayout < [vid="native_ad_container"]',
            '@ImageView <2 FrameLayout <6 RelativeLayout < FrameLayout < FrameLayout < [vid="native_ad_container"]',
            '@ImageView <3 RelativeLayout <2 RelativeLayout < RelativeLayout < RelativeLayout < RelativeLayout < FrameLayout < FrameLayout < FrameLayout < [vid="native_ad_container"]',
            '@ImageView < FrameLayout <3 FrameLayout <2 LinearLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [vid="native_ad_container"]',
            // TextView 类型的关闭按钮
            '@TextView <2 FrameLayout < FrameLayout <2 LinearLayout < LinearLayout <2 LinearLayout < LinearLayout <2 FrameLayout < FrameLayout < [vid="native_ad_container"]',
            '@TextView <2 FrameLayout < FrameLayout <2 FrameLayout < LinearLayout <2 FrameLayout < FrameLayout < [vid="native_ad_container"]',
            '@TextView <2 FrameLayout < FrameLayout <2 LinearLayout < LinearLayout <2 LinearLayout < LinearLayout <2 FrameLayout < FrameLayout < [vid="native_ad_container"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/25591573',
            'https://i.gkd.li/i/25591566',
            'https://i.gkd.li/i/25591545',
            'https://i.gkd.li/i/25566876',
            'https://i.gkd.li/i/25566959',
            'https://i.gkd.li/i/25591137',
            'https://i.gkd.li/i/25591165',
            'https://i.gkd.li/i/25591225',
            'https://i.gkd.li/i/25566886',
            'https://i.gkd.li/i/25591209',
            'https://i.gkd.li/i/25591516',
          ],
        },
      ],
    },
  ],
});
