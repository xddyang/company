<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useDark } from '@vueuse/core'
import {
  ArrowRight, Code, Shield, Zap, Layers,
  Activity, ShoppingBag, Sparkles, Scissors, UtensilsCrossed,
  Menu, X, CheckCircle, Sun, Moon, LifeBuoy, Cloud
} from 'lucide-vue-next'

const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light'
})
const toggleDark = () => {
  isDark.value = !isDark.value
}

const navItems = ['首页', '核心优势', '产品矩阵', '合作方式', '服务流程', '技术架构', '联系我们']

const coreAdvantages = [
  { title: '全场景解决方案', icon: Layers, description: '覆盖体育、零售、美业、餐饮等多行业成熟小程序矩阵，快速匹配企业业务场景。' },
  { title: '弹性定制能力', icon: Code, description: '基于标准产品灵活定制，同时支持从0到1的全新系统开发，满足企业专属需求。' },
  { title: '全流程技术服务', icon: Shield, description: 'UI设计、开发、部署、运维一站式服务，让企业专注核心业务增长。' },
  { title: '快速交付上线', icon: Zap, description: '成熟技术中台与标准化组件库，显著缩短开发周期，助力快速抢占市场。' },
]

const products = [
  { name: '体育上门小程序', type: '体育', icon: Activity, description: '上门运动陪练预约、教练匹配、场地预约管理一站式解决方案', benefits: ['教练资源智能匹配', '在线预约与排期', '场地资源管理', '会员卡与课程包'] },
  { name: '商城小程序', type: '商城', icon: ShoppingBag, description: '全渠道电商购物系统，支持多种营销工具与会员体系', benefits: ['多规格商品管理', '拼团/秒杀/优惠券', '会员积分体系', '多渠道支付对接'] },
  { name: '美容小程序', type: '美容', icon: Sparkles, description: '美容院预约管理、会员储值、耗材库存一体化管理', benefits: ['在线预约与排班', '会员卡储值管理', '耗材库存跟踪', '客户档案管理'] },
  { name: '美发小程序', type: '美发', icon: Scissors, description: '理发店到店预约、设计师排班与会员管理系统', benefits: ['设计师在线预约', '排班与业绩统计', '会员等级体系', '营销活动配置'] },
  { name: '餐饮小程序', type: '餐饮', icon: UtensilsCrossed, description: '扫码点餐、外卖配送、会员营销全流程餐饮数字化方案', benefits: ['扫码自助点餐', '外卖配送对接', '会员营销活动', '多门店统一管理'] },
]

const cooperationModes = [
  { name: '标品小程序', icon: Layers, description: '基于5大成熟小程序产品模板，快速搭建部署，支持品牌化定制', benefits: ['1-3个工作日部署上线', '品牌视觉定制', '持续版本更新', '按需增购功能模块'] },
  { name: '全新定制开发', icon: Code, description: '针对企业专属业务场景，从0到1提供全流程定制化软件开发服务', benefits: ['需求深度调研', 'UI/UX专属设计', '全栈技术实现', '源码交付'] },
  { name: 'SaaS订阅服务', icon: Cloud, description: '按月/按年订阅使用，无需自建服务器和运维团队，弹性扩容', benefits: ['零运维成本', '弹性资源扩容', '按需付费更省钱', '数据安全保障'] },
  { name: '技术咨询运维', icon: LifeBuoy, description: '为已上线系统提供长期技术支持、功能迭代与运维保障服务', benefits: ['7x24技术支持', '定期功能迭代', '系统安全巡检', '性能持续优化'] },
]

const techStack = ['微信小程序', 'uni-app', 'Vue3', 'Node.js', 'Spring Cloud', 'MySQL', 'Redis', 'Docker', 'Kubernetes', '阿里云']

const stats = [
  { value: '50+', label: '已交付项目' },
  { value: '5大', label: '行业解决方案' },
  { value: '98%', label: '客户满意度' },
  { value: '7x24', label: '技术支持' },
]

const processList = [
  { title: '需求梳理与方案设计', desc: '深入了解业务场景，制定最优技术方案与产品原型' },
  { title: 'UI/UX专业设计', desc: '打造符合品牌调性的界面设计，提升用户体验' },
  { title: '敏捷开发与测试', desc: '采用敏捷开发模式，快速迭代，严格测试保证质量' },
  { title: '上线部署与培训', desc: '协助小程序发布上线，提供操作培训与文档支持' },
  { title: '持续运维与迭代', desc: '上线后持续技术支持，根据业务发展迭代新功能' },
]

const activeSection = ref('首页')
const mobileNavOpen = ref(false)
const activeTab = ref('all')

const scrollToSection = (section: string) => {
  activeSection.value = section
  mobileNavOpen.value = false
  const el = document.getElementById(section)
  if (el) {
    const offset = 64
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

const handleScroll = () => {
  const sections = navItems.map(item => document.getElementById(item))
  const scrollPosition = window.scrollY + 100

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i]
    if (section && section.offsetTop <= scrollPosition) {
      activeSection.value = navItems[i]
      break
    }
  }
}

const filteredProducts = (type: string) => {
  if (type === 'all') return products
  return products.filter(product => product.type === type)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const formData = ref({
  company: '',
  name: '',
  phone: '',
  cooperation: ''
})

const contactTab = ref('message')
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <!-- Header -->
    <header class="fixed w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 500 } }"
            class="flex items-center"
          >
            <span class="text-2xl font-bold text-primary">广州智能科技</span>
          </div>
          <ul class="hidden md:flex space-x-8">
            <li
              v-for="item in navItems"
              :key="item"
              class="hover:scale-110 active:scale-95 transition-transform"
            >
              <a
                :href="`#${item}`"
                :class="[
                  'text-sm font-medium transition-colors hover:text-primary',
                  activeSection === item ? 'text-primary' : 'text-muted-foreground'
                ]"
                @click.prevent="scrollToSection(item)"
              >
                {{ item }}
              </a>
            </li>
          </ul>
          <div class="flex items-center">
            <button
              @click="toggleDark()"
              class="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
            >
              <Sun v-if="isDark" class="h-4 w-4" />
              <Moon v-else class="h-4 w-4" />
            </button>
            <button
              class="ml-4 md:hidden inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
              @click="mobileNavOpen = !mobileNavOpen"
            >
              <X v-if="mobileNavOpen" class="h-4 w-4" />
              <Menu v-else class="h-4 w-4" />
            </button>
          </div>
        </div>
      </nav>
    </header>

    <!-- Mobile Nav -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-5"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-5"
    >
      <div
        v-if="mobileNavOpen"
        class="fixed inset-x-0 top-16 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-40 md:hidden"
      >
        <nav class="container mx-auto px-4 py-4">
          <a
            v-for="item in navItems"
            :key="item"
            :href="`#${item}`"
            :class="[
              'block py-2 text-sm font-medium transition-colors hover:text-primary',
              activeSection === item ? 'text-primary' : 'text-muted-foreground'
            ]"
            @click.prevent="scrollToSection(item)"
          >
            {{ item }}
          </a>
        </nav>
      </div>
    </Transition>

    <main class="pt-16">
      <!-- Hero Section -->
      <section id="首页" class="py-20 md:py-32">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h1
              v-motion
              :initial="{ opacity: 0, y: -50 }"
              :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
              class="text-4xl font-extrabold tracking-tight lg:text-5xl"
            >
              广州智能科技
            </h1>
            <p
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
              class="mt-6 text-xl text-muted-foreground"
            >
              智造软件，赋能百业
            </p>
            <p
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 300 } }"
              class="mt-4 text-base text-muted-foreground max-w-2xl mx-auto"
            >
              专注SaaS软件开发与个性化软件定制，覆盖体育、零售、美业、餐饮等多行业场景，助力企业高效实现数字化转型
            </p>
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400 } }"
              class="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-6 rounded-full hover:scale-105 active:scale-95"
                @click="scrollToSection('联系我们')"
              >
                立即咨询 <ArrowRight class="ml-2 h-4 w-4" />
              </button>
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-6 rounded-full hover:scale-105 active:scale-95"
                @click="scrollToSection('产品矩阵')"
              >
                查看产品演示
              </button>
            </div>
          </div>

          <!-- Stats Section -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 500 } }"
            class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div
              v-for="(stat, index) in stats"
              :key="stat.label"
              v-motion
              :initial="{ opacity: 0, scale: 0.5 }"
              :visible="{ opacity: 1, scale: 1, transition: { duration: 500, delay: index * 100 } }"
              class="text-center"
            >
              <p class="text-3xl md:text-4xl font-bold text-primary">{{ stat.value }}</p>
              <p class="mt-2 text-sm text-muted-foreground">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Core Advantages Section -->
      <section id="核心优势" class="py-20 bg-muted/50">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold tracking-tight text-center mb-4">核心优势</h2>
          <p class="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            依托成熟产品矩阵与专业技术团队，构建高效的软件定制服务能力
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              v-for="(advantage, index) in coreAdvantages"
              :key="advantage.title"
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
              class="rounded-2xl overflow-hidden border border-border bg-card h-full p-6"
            >
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <component :is="advantage.icon" class="h-6 w-6 text-primary" />
              </div>
              <h3 class="text-lg font-semibold text-primary mb-2">{{ advantage.title }}</h3>
              <p class="text-sm text-muted-foreground">{{ advantage.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Products Section -->
      <section id="产品矩阵" class="py-20">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold tracking-tight text-center mb-4">产品矩阵</h2>
          <p class="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            5大成熟小程序产品，覆盖多行业业务场景，均支持在线演示
          </p>

          <!-- Tabs -->
          <div class="flex justify-center mb-8">
            <div class="inline-flex flex-wrap items-center justify-center rounded-full bg-muted p-1 text-muted-foreground gap-1">
              <button
                v-for="tab in ['all', '体育', '商城', '美容', '美发', '餐饮']"
                :key="tab"
                :class="[
                  'inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                  activeTab === tab ? 'bg-background text-foreground shadow-sm' : ''
                ]"
                @click="activeTab = tab"
              >
                {{ tab === 'all' ? '全部' : tab }}
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(product, index) in filteredProducts(activeTab)"
              :key="product.name"
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
              class="rounded-2xl overflow-hidden border border-border bg-card h-full flex flex-col"
            >
              <div class="p-6 flex-1">
                <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <component :is="product.icon" class="h-6 w-6 text-primary" />
                </div>
                <h3 class="text-lg font-semibold mb-1">{{ product.name }}</h3>
                <p class="text-xs text-muted-foreground mb-4">{{ product.type }}</p>
                <p class="text-sm text-muted-foreground mb-4">{{ product.description }}</p>
                <ul class="space-y-2">
                  <li v-for="benefit in product.benefits" :key="benefit" class="flex items-center text-sm">
                    <CheckCircle class="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    {{ benefit }}
                  </li>
                </ul>
              </div>
              <div class="p-6 pt-0">
                <button
                  class="w-full inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 rounded-full"
                  @click="scrollToSection('联系我们')"
                >
                  预约演示
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Cooperation Modes Section -->
      <section id="合作方式" class="py-20 bg-muted/50">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold tracking-tight text-center mb-4">合作方式</h2>
          <p class="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            灵活多样的合作模式，满足不同规模企业的软件需求
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              v-for="(mode, index) in cooperationModes"
              :key="mode.name"
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
              class="rounded-2xl overflow-hidden border border-border bg-card h-full p-6"
            >
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <component :is="mode.icon" class="h-6 w-6 text-primary" />
              </div>
              <h3 class="text-lg font-semibold mb-2">{{ mode.name }}</h3>
              <p class="text-sm text-muted-foreground mb-4">{{ mode.description }}</p>
              <ul class="space-y-2">
                <li v-for="benefit in mode.benefits" :key="benefit" class="flex items-center text-sm">
                  <CheckCircle class="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  {{ benefit }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Process Section -->
      <section id="服务流程" class="py-20">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold tracking-tight text-center mb-4">服务流程</h2>
          <p class="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            标准化交付流程，确保项目高效、透明、可控地推进
          </p>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              v-motion
              :initial="{ opacity: 0, x: -50 }"
              :visible="{ opacity: 1, x: 0, transition: { duration: 500 } }"
              class="space-y-6"
            >
              <div v-for="item in processList" :key="item.title" class="flex items-start gap-4">
                <CheckCircle class="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 class="font-semibold text-lg">{{ item.title }}</h3>
                  <p class="text-muted-foreground text-sm mt-1">{{ item.desc }}</p>
                </div>
              </div>
            </div>
            <div
              v-motion
              :initial="{ opacity: 0, x: 50 }"
              :visible="{ opacity: 1, x: 0, transition: { duration: 500 } }"
              class="relative"
            >
              <div class="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 aspect-square flex items-center justify-center">
                <div class="text-center">
                  <Code class="h-24 w-24 text-primary mx-auto mb-4" />
                  <p class="text-lg font-semibold">全流程数字化交付能力</p>
                  <p class="text-sm text-muted-foreground mt-2">标准化 + 定制化，双轨并行</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Tech Stack Section -->
      <section id="技术架构" class="py-20 bg-muted/50">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold tracking-tight text-center mb-4">技术架构</h2>
          <p class="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            采用成熟稳定的技术架构，确保系统性能、安全性与可扩展性
          </p>
          <div class="flex flex-wrap justify-center gap-6">
            <div
              v-for="(tech, index) in techStack"
              :key="tech"
              v-motion
              :initial="{ opacity: 0, scale: 0.5 }"
              :visible="{ opacity: 1, scale: 1, transition: { duration: 500, delay: index * 100 } }"
              class="bg-card w-28 h-28 rounded-3xl flex items-center justify-center shadow-lg border border-border"
            >
              <span class="text-sm font-medium text-primary">{{ tech }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="联系我们" class="py-20">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold tracking-tight text-center mb-12">联系我们</h2>
          <div class="max-w-2xl mx-auto">
            <div class="rounded-2xl overflow-hidden border border-border bg-card">
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">商务合作咨询</h3>
                <p class="text-sm text-muted-foreground mb-6">我们期待与您的合作，请留下您的信息，我们会尽快与您联系</p>

                <!-- Contact Tabs -->
                <div class="flex mb-6">
                  <div class="inline-flex items-center justify-center rounded-full bg-muted p-1 text-muted-foreground w-full">
                    <button
                      :class="[
                        'flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all',
                        contactTab === 'message' ? 'bg-background text-foreground shadow-sm' : ''
                      ]"
                      @click="contactTab = 'message'"
                    >
                      留言咨询
                    </button>
                    <button
                      :class="[
                        'flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all',
                        contactTab === 'info' ? 'bg-background text-foreground shadow-sm' : ''
                      ]"
                      @click="contactTab = 'info'"
                    >
                      联系方式
                    </button>
                  </div>
                </div>

                <!-- Message Form -->
                <div v-if="contactTab === 'message'">
                  <form class="space-y-4" @submit.prevent>
                    <div>
                      <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="company">公司名称</label>
                      <input
                        id="company"
                        v-model="formData.company"
                        class="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-2"
                        placeholder="请输入您的公司名称"
                      />
                    </div>
                    <div>
                      <label class="text-sm font-medium leading-none" for="name">联系人</label>
                      <input
                        id="name"
                        v-model="formData.name"
                        class="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-2"
                        placeholder="请输入您的姓名"
                      />
                    </div>
                    <div>
                      <label class="text-sm font-medium leading-none" for="phone">联系电话</label>
                      <input
                        id="phone"
                        v-model="formData.phone"
                        type="tel"
                        class="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-2"
                        placeholder="请输入您的联系电话"
                      />
                    </div>
                    <div>
                      <label class="text-sm font-medium leading-none" for="cooperation">合作意向</label>
                      <textarea
                        id="cooperation"
                        v-model="formData.cooperation"
                        class="flex min-h-[100px] w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-2"
                        placeholder="请描述您的合作需求（标品小程序/定制开发/SaaS订阅/技术运维）"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      class="w-full inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 rounded-full"
                    >
                      提交咨询
                    </button>
                  </form>
                </div>

                <!-- Contact Info -->
                <div v-else class="space-y-4">
                  <p><strong>公司：</strong> 广州智能科技有限公司</p>
                  <p><strong>地址：</strong> 中国广东省广州市</p>
                  <p><strong>商务合作：</strong> contact@gz-zhineng.com</p>
                  <p><strong>技术支持：</strong> support@gz-zhineng.com</p>
                  <div>
                    <h4 class="font-semibold mb-2">关注我们</h4>
                    <div class="flex space-x-4">
                      <a
                        v-for="platform in ['微信公众号', '微博', '知乎', 'LinkedIn']"
                        :key="platform"
                        href="#"
                        class="text-primary hover:text-primary/80 transition-colors text-sm"
                      >
                        {{ platform }}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-muted py-8">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-between items-center">
          <div class="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
            <h3 class="text-2xl font-bold text-primary">广州智能科技</h3>
            <p class="mt-2 text-sm text-muted-foreground">智造软件，赋能百业</p>
          </div>
          <div class="w-full md:w-1/3 text-center mb-6 md:mb-0">
            <h4 class="text-lg font-semibold mb-2">快速链接</h4>
            <ul class="space-y-2">
              <li v-for="item in navItems" :key="item">
                <a
                  :href="`#${item}`"
                  class="text-sm text-muted-foreground hover:text-primary transition-colors"
                  @click.prevent="scrollToSection(item)"
                >
                  {{ item }}
                </a>
              </li>
            </ul>
          </div>
          <div class="w-full md:w-1/3 text-center md:text-right">
            <h4 class="text-lg font-semibold mb-2">联系我们</h4>
            <p class="text-sm text-muted-foreground">contact@gz-zhineng.com</p>
            <p class="text-sm text-muted-foreground">中国广东省广州市</p>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-border text-center">
          <p class="text-sm text-muted-foreground">
            &copy; 2024 广州智能科技有限公司 版权所有
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
