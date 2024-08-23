import { defineConfig,type DefaultTheme } from 'vitepress'

const sidebarQuestion:DefaultTheme.SidebarItem[] = [
  {
    text: 'PNPM',
    items: [{ text: '解决pnpm(ERR_INVALID_THIS)异常', link: '/pnpm' },]
  },
  {
    text: '待确认问题',
    items: [{ text: 'Vue mounted生命周期获取元素异常', link: '/todo' }]
  }
]

const sidebarFrontEnd:DefaultTheme.SidebarItem[] = [
  {
    text: 'DOM',
    items: [{ text: 'addEventListener', link: '/dom' },]
  },
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "张同学的学习笔记",
  description: "",
  // head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '问题汇总', link: '/question/pnpm' }
    ],
    sidebar: { '/question' : {base: '/question', items: sidebarQuestion}, '/frontEnd' : {
      base: '/frontEnd', items: sidebarFrontEnd
    }},
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhangyidong92/zhangyidong92.github.io' }
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present ZhangYiDong'
    }
  }
})
