import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// 站点部署在根路径（仓库 ttyl11.github.io），本地 dev/preview 与线上路径一致
export default withMermaid(defineConfig({
  title: 'Seer Wiki',
  description: '杀戮尖塔2 Seer Mod 中文资料站',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,

  head: [
    ['meta', { name: 'theme-color', content: '#3aa675' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Seer Wiki - 杀戮尖塔2 Mod' }],
    ['meta', { property: 'og:description', content: 'Seer Mod 卡牌/遗物/能力/机制中文资料站' }]
  ],

  themeConfig: {
    siteTitle: 'Seer Wiki',

    nav: [
      { text: '首页', link: '/' },
      {
        text: '图鉴',
        items: [
          { text: '卡牌', link: '/cards/' },
          { text: '遗物', link: '/relics/' },
          { text: '能力', link: '/powers/' },
          { text: '附魔', link: '/enchantments/' },
          { text: '充能球', link: '/orbs/' },
          { text: '药水', link: '/potions/' },
          { text: '怪物', link: '/monsters/' },
          { text: '事件', link: '/events/' },
          { text: '角色', link: '/characters/' }
        ]
      },
      {
        text: '机制',
        items: [
          { text: 'PP 系统', link: '/mechanics/pp-system' },
          { text: '异常状态', link: '/mechanics/abnormal-status' },
          { text: '元素克制', link: '/mechanics/element-affinity' },
          { text: '关键词', link: '/mechanics/keywords' },
          { text: '铸造系统', link: '/mechanics/forge' },
          { text: '复活机制', link: '/mechanics/revive' }
        ]
      },
      {
        text: '杂项',
        items: [
          { text: '版本更新', link: '/changelog/' },
          { text: '支持作者', link: '/support/' },
          { text: '公共评论区', link: '/comments/' }
        ]
      }
    ],

    sidebar: {
      '/cards/': [
        {
          text: '卡牌图鉴',
          items: [
            { text: '全部卡牌', link: '/cards/' }
          ]
        },
        {
          text: '按分类浏览',
          items: [
            { text: '角色（圣灵谱尼）牌', link: '/cards/character/' },
            { text: '先古牌', link: '/cards/ancient/' },
            { text: '诅咒牌', link: '/cards/curse/' },
            { text: '状态牌', link: '/cards/status/' },
            { text: '无色牌', link: '/cards/colorless/' },
            { text: '事件牌', link: '/cards/event/' },
            { text: '衍生牌', link: '/cards/token/' },
            { text: '任务牌', link: '/cards/quest/' }
          ]
        }
      ],
      '/relics/': [
        {
          text: '遗物图鉴',
          items: [
            { text: '总览', link: '/relics/' },
            { text: '全部遗物', link: '/relics/all' }
          ]
        },
        {
          text: '按稀有度浏览',
          items: [
            { text: '初始遗物', link: '/relics/starter/' },
            { text: '普通遗物', link: '/relics/common/' },
            { text: '罕见遗物', link: '/relics/uncommon/' },
            { text: '稀有遗物', link: '/relics/rare/' },
            { text: '商店遗物', link: '/relics/shop/' },
            { text: '事件遗物', link: '/relics/event/' },
            { text: '先古遗物', link: '/relics/ancient/' },
            { text: '史诗遗物', link: '/relics/epic/' },
            { text: '传说遗物', link: '/relics/legendary/' }
          ]
        }
      ],
      '/powers/': [
        {
          text: '能力图鉴',
          items: [
            { text: '全部能力', link: '/powers/' }
          ]
        }
      ],
      '/enchantments/': [
        {
          text: '附魔图鉴',
          items: [
            { text: '总览', link: '/enchantments/' }
          ]
        }
      ],
      '/orbs/': [
        {
          text: '充能球图鉴',
          items: [
            { text: '总览', link: '/orbs/' },
            { text: '全部充能球', link: '/orbs/all' }
          ]
        }
      ],
      '/potions/': [
        {
          text: '药水图鉴',
          items: [
            { text: '全部药水', link: '/potions/' }
          ]
        }
      ],
      '/monsters/': [
        {
          text: '怪物图鉴',
          items: [
            { text: '总览', link: '/monsters/' },
            { text: '全部怪物', link: '/monsters/all' }
          ]
        },
        {
          text: '按类型浏览',
          items: [
            { text: '普通怪物', link: '/monsters/normal/' },
            { text: '精英怪物', link: '/monsters/elite/' },
            { text: 'Boss 怪物', link: '/monsters/boss/' },
            { text: '特殊怪物', link: '/monsters/special/' }
          ]
        }
      ],
      '/characters/': [
        {
          text: '角色介绍',
          items: [
            { text: '总览', link: '/characters/' }
          ]
        }
      ],
      '/mechanics/': [
        {
          text: '总览',
          items: [
            { text: '核心机制总览', link: '/mechanics/' }
          ]
        },
        {
          text: '一、Mod 独有核心系统',
          items: [
            { text: 'PP 系统', link: '/mechanics/pp-system' },
            { text: '固定伤害', link: '/mechanics/fixed-damage' },
            { text: '元素克制', link: '/mechanics/element-affinity' },
            { text: '异常状态', link: '/mechanics/abnormal-status' },
            { text: '永久属性', link: '/mechanics/permanent-bonus' },
            { text: '全属性', link: '/mechanics/all_attributes' },
            { text: '赛尔豆与泰坦之灵', link: '/mechanics/currency' },
            { text: '唱词系统', link: '/mechanics/chant' },
            { text: '暴击', link: '/mechanics/critical-strike' },
            { text: '诅咒卡系统', link: '/mechanics/curse-system' },
            { text: 'Mod 配置系统', link: '/mechanics/mod-settings' }
          ]
        },
        {
          text: '二、Mod 改造的原版系统',
          items: [
            { text: '关键词', link: '/mechanics/keywords' },
            { text: '充能球', link: '/mechanics/orb' },
            { text: '附魔', link: '/mechanics/enchantment' },
            { text: '意图', link: '/mechanics/intent' },
            { text: '角色卡牌标签', link: '/mechanics/card-tags' }
          ]
        },
        {
          text: '三、关键词衍生子系统',
          items: [
            { text: '真神牌堆', link: '/mechanics/true-god-pile' },
            { text: '销毁牌堆', link: '/mechanics/destroyed_pile' },
            { text: '湮灭', link: '/mechanics/annihilation' },
            { text: '空元之诗', link: '/mechanics/void-poem' },
            { text: '薇尔诗', link: '/mechanics/vier-poem' },
            { text: '预见', link: '/mechanics/scry' }
          ]
        },
        {
          text: '四、独有战斗机制',
          items: [
            { text: '消逝', link: '/mechanics/vanish' },
            { text: '混沌化身', link: '/mechanics/chaos-incarnation' },
            { text: '手牌快照', link: '/mechanics/hand-snapshot' },
            { text: '龙威', link: '/mechanics/dragon-majesty' }
          ]
        },
        {
          text: '五、UI 与交互机制',
          items: [
            { text: '遗物右键点击', link: '/mechanics/relic-right-click' },
            { text: '自定义遗物稀有度', link: '/mechanics/custom-rarity' }
          ]
        },
        {
          text: '六、地图与进度系统',
          items: [
            { text: '游戏流程改造', link: '/mechanics/game-flow' },
            { text: '卡牌池扩展', link: '/mechanics/card-pool-extension' },
            { text: '先古之民', link: '/mechanics/ancients' }
          ]
        },
        {
          text: 'Mod 关键词',
          items: [
            { text: '异变', link: '/mechanics/aberration' },
            { text: '毁灭', link: '/mechanics/destruction' },
            { text: '回响', link: '/mechanics/echo' },
            { text: '邪恶', link: '/mechanics/evil' },
            { text: '陨', link: '/mechanics/fallen' },
            { text: '缢形', link: '/mechanics/hanged_form' },
            { text: '悼', link: '/mechanics/mourning' },
            { text: '寂灭', link: '/mechanics/nirvana' },
            { text: '炼狱', link: '/mechanics/purgatory' },
            { text: '化墟', link: '/mechanics/ruination' },
            { text: '碎心', link: '/mechanics/shattered_heart' },
            { text: '戏法', link: '/mechanics/trick' },
            { text: '真神', link: '/mechanics/true_god' },
            { text: '饮血', link: '/mechanics/vampiric' },
            { text: '薇', link: '/mechanics/vigil' },
            { text: '芜生', link: '/mechanics/void_birth' }
          ]
        },
        {
          text: '特殊附魔详情',
          items: [
            { text: '永耀', link: '/mechanics/eternal_radiance' },
            { text: '星皇之怒', link: '/mechanics/star_emperor_wrath' }
          ]
        },
        {
          text: '原版机制',
          items: [
            { text: '格挡', link: '/mechanics/block' },
            { text: '能量', link: '/mechanics/energy' },
            { text: '手牌', link: '/mechanics/hand' },
            { text: '抽牌堆', link: '/mechanics/draw_pile' },
            { text: '弃牌堆', link: '/mechanics/discard_pile' },
            { text: '消耗堆', link: '/mechanics/exhaust_pile' },
            { text: '消耗', link: '/mechanics/exhaust' },
            { text: '虚无', link: '/mechanics/ethereal' },
            { text: '保留', link: '/mechanics/retain' },
            { text: '固有', link: '/mechanics/innate' },
            { text: '不能被打出', link: '/mechanics/unplayable' },
            { text: '永恒', link: '/mechanics/eternal' },
            { text: '奇巧', link: '/mechanics/sly' },
            { text: '铸造', link: '/mechanics/forge' },
            { text: '召唤', link: '/mechanics/summon' },
            { text: '辉星', link: '/mechanics/star' },
            { text: '激发', link: '/mechanics/evoke' },
            { text: '生成', link: '/mechanics/channeling' },
            { text: '击晕', link: '/mechanics/stun' },
            { text: '斩杀', link: '/mechanics/fatal' },
            { text: '转化', link: '/mechanics/transform' },
            { text: '回放', link: '/mechanics/replay' },
            { text: '复活机制', link: '/mechanics/revive' },
            { text: '燃料', link: '/mechanics/fuel' },
            { text: '魂缚', link: '/mechanics/bound' },
            { text: '金币', link: '/mechanics/money_pouch' }
          ]
        }
      ],
      '/changelog/': [{ text: '版本更新', items: [{ text: '更新历史', link: '/changelog/' }] }],
      '/support/': [{ text: '支持作者', items: [{ text: '支持作者', link: '/support/' }] }],
      '/comments/': [{ text: '公共评论区', items: [{ text: '公共评论区', link: '/comments/' }] }]
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '清除',
            backButtonTitle: '返回',
            noResultsText: '没有结果',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    footer: {
      message: '非官方玩家维护资料站，内容基于 Seer Mod 源码',
      copyright: 'MIT Licensed'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '本页目录',
      level: [2, 3]
    },

    lastUpdated: {
      text: '最后更新'
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题'
  }
}))
