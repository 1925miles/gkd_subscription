import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: 1,
      name: '会员中心-经验领取',
      desc: '会员中心领取等级加速包经验',
      activityIds: ['tv.danmaku.bili.MainActivityV2'],
      rules: [
        {
          key: 1,
          name: '领取按钮-文本',
          matches: 'TextView[text="领取"]',
          snapshotUrls: ['https://i.gkd.li/i/25591683'],
        },
      ],
    },
  ],
});
