<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useDark } from '@vueuse/core'
import {
  ArrowRight, Brain, Database, Shield, Smartphone,
  MessageSquare, BarChart3, FileText, Activity,
  Menu, X, CheckCircle, Zap, Globe, Code, Sun, Moon
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

const navItems = ['首页', '核心优势', '产品服务', '功能特性', '合作方式', '技术架构', '联系我们']

const coreAdvantages = [
  { title: '权威医疗数据', icon: Database, description: '与国内知名三甲医院深度合作，拥有海量真实皮肤病例数据，覆盖数百种皮肤疾病类型。' },
  { title: '专业医生标注', icon: Shield, description: '由皮肤科专家团队进行专业标注，确保数据质量和模型训练的准确性。' },
  { title: 'AI精准识别', icon: Brain, description: '基于深度学习算法，AI识别准确率行业领先，为用户提供可靠的皮肤健康分析。' },
  { title: '持续迭代优化', icon: Zap, description: '持续积累新数据，不断优化模型，确保AI识别能力与时俱进。' },
]

const features = [
  { name: 'AI皮肤助手咨询', icon: MessageSquare, description: '智能对话系统，实时解答用户皮肤相关问题，提供专业建议' },
  { name: 'AI皮肤检测', icon: Brain, description: '上传皮肤照片，AI快速分析识别，精准判断皮肤状况' },
  { name: 'AI识别皮肤报告', icon: FileText, description: '生成详细的皮肤分析报告，包含问题诊断、护理建议等' },
  { name: '皮肤状态监测', icon: Activity, description: '长期追踪用户皮肤变化趋势，建立个人皮肤健康档案' },
  { name: '数据可视化分析', icon: BarChart3, description: '直观展示皮肤健康数据，帮助用户了解皮肤状态变化' },
  { name: '智能护肤推荐', icon: Zap, description: '基于AI分析结果，智能推荐适合的护肤方案和产品' },
]

const cooperationModes = [
  { name: 'APP开发', type: 'APP', icon: Smartphone, description: '提供完整的皮肤检测APP解决方案，支持iOS和Android双平台', benefits: ['完整功能定制', '独立品牌打造', '专属技术支持', '持续版本迭代'] },
  { name: 'H5应用', type: 'H5', icon: Globe, description: '轻量级H5解决方案，无需下载即可使用，便于推广传播', benefits: ['快速上线部署', '跨平台兼容', '便于社交分享', '低成本运营'] },
  { name: '小程序开发', type: '小程序', icon: MessageSquare, description: '微信、支付宝等平台小程序开发，触达海量用户', benefits: ['流量入口便捷', '用户习惯友好', '开发周期短', '推广成本低'] },
  { name: 'API接入', type: 'API', icon: Code, description: '提供标准化API接口，可快速集成到您现有的系统中', benefits: ['灵活集成', '按量计费', '技术文档完善', '7x24技术支持'] },
]

const techStack = ['PyTorch', 'TensorFlow', 'YOLO', 'Transformer', 'CNN', 'ResNet', 'AWS', 'Docker', 'Kubernetes', 'FastAPI']

const stats = [
  { value: '500万+', label: '皮肤数据样本' },
  { value: '98.6%', label: 'AI识别准确率' },
  { value: '200+', label: '合作医院' },
  { value: '50+', label: '皮肤科专家' },
]

const featureList = [
  { title: '智能图像识别', desc: '基于深度学习的图像识别技术，快速准确分析皮肤状况' },
  { title: '实时AI问答', desc: '24小时在线AI助手，随时解答皮肤健康问题' },
  { title: '个性化报告', desc: '生成详细的皮肤分析报告，提供针对性护理建议' },
  { title: '长期健康追踪', desc: '建立个人皮肤档案，持续追踪皮肤状态变化' },
  { title: '隐私安全保障', desc: '严格的数据加密和隐私保护机制，确保用户信息安全' },
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

const filteredModes = (type: string) => {
  if (type === 'all') return cooperationModes
  return cooperationModes.filter(mode => mode.type === type)
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
            <span class="text-2xl font-bold text-primary">睿肤云图</span>
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
              睿肤云图
            </h1>
            <p
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
              class="mt-6 text-xl text-muted-foreground"
            >
              智汇睿肤，数绘云图
            </p>
            <p
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 300 } }"
              class="mt-4 text-base text-muted-foreground max-w-2xl mx-auto"
            >
              基于国内知名医院皮肤数据与专业医生标注，打造行业领先的AI皮肤检测与分析平台
            </p>
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400 } }"
              class="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-6 rounded-full hover:scale-105 active:scale-95">
                立即咨询 <ArrowRight class="ml-2 h-4 w-4" />
              </button>
              <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-6 rounded-full hover:scale-105 active:scale-95">
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
            依托权威医疗资源与专业技术团队，构建行业领先的AI皮肤分析能力
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

      <!-- Features Section -->
      <section id="产品服务" class="py-20">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold tracking-tight text-center mb-4">产品服务</h2>
          <p class="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            全方位AI皮肤健康管理解决方案，满足用户多样化需求
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(feature, index) in features"
              :key="feature.name"
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
              class="rounded-2xl overflow-hidden border border-border bg-card h-full p-6"
            >
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <component :is="feature.icon" class="h-6 w-6 text-primary" />
              </div>
              <h3 class="text-lg font-semibold mb-2">{{ feature.name }}</h3>
              <p class="text-sm text-muted-foreground">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- App Features Showcase -->
      <section id="功能特性" class="py-20 bg-muted/50">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold tracking-tight text-center mb-4">功能特性</h2>
          <p class="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            采用前沿AI技术，为用户提供专业、便捷的皮肤健康服务
          </p>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              v-motion
              :initial="{ opacity: 0, x: -50 }"
              :visible="{ opacity: 1, x: 0, transition: { duration: 500 } }"
              class="space-y-6"
            >
              <div v-for="item in featureList" :key="item.title" class="flex items-start gap-4">
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
                  <Brain class="h-24 w-24 text-primary mx-auto mb-4" />
                  <p class="text-lg font-semibold">AI驱动的皮肤分析引擎</p>
                  <p class="text-sm text-muted-foreground mt-2">毫秒级响应，精准识别</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Cooperation Modes Section -->
      <section id="合作方式" class="py-20">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold tracking-tight text-center mb-4">合作方式</h2>
          <p class="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            灵活多样的合作模式，满足不同业务场景需求
          </p>
          
          <!-- Tabs -->
          <div class="flex justify-center mb-8">
            <div class="inline-flex items-center justify-center rounded-full bg-muted p-1 text-muted-foreground">
              <button
                v-for="tab in ['all', 'APP', 'H5', '小程序', 'API']"
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

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              v-for="(mode, index) in filteredModes(activeTab)"
              :key="mode.name"
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
              class="rounded-2xl overflow-hidden border border-border bg-card h-full flex flex-col"
            >
              <div class="p-6 flex-1">
                <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <component :is="mode.icon" class="h-6 w-6 text-primary" />
                </div>
                <h3 class="text-lg font-semibold mb-1">{{ mode.name }}</h3>
                <p class="text-xs text-muted-foreground mb-4">{{ mode.type }}</p>
                <p class="text-sm text-muted-foreground mb-4">{{ mode.description }}</p>
                <ul class="space-y-2">
                  <li v-for="benefit in mode.benefits" :key="benefit" class="flex items-center text-sm">
                    <CheckCircle class="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    {{ benefit }}
                  </li>
                </ul>
              </div>
              <div class="p-6 pt-0">
                <button class="w-full inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 rounded-full">
                  了解详情
                </button>
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
            采用世界前沿技术架构，确保系统稳定性和可扩展性
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
                        placeholder="请描述您的合作需求（APP/H5/小程序/API接入）"
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
                  <p><strong>公司：</strong> 睿肤云图科技有限公司</p>
                  <p><strong>地址：</strong> 中国天津市河北区中山路</p>
                  <p><strong>商务合作：</strong> 1552614119@qq.com</p>
                  <p><strong>技术支持：</strong> 1552614119@qq.com</p>
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
            <h3 class="text-2xl font-bold text-primary">睿肤云图</h3>
            <p class="mt-2 text-sm text-muted-foreground">智汇睿肤，数绘云图</p>
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
            <p class="text-sm text-muted-foreground">1552614119@qq.com</p>
            <p class="text-sm text-muted-foreground">中国天津市河北区中山路</p>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-border text-center">
          <p class="text-sm text-muted-foreground">
            &copy; 2024 睿肤云图科技有限公司 版权所有
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
