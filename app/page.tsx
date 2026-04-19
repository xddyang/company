"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Brain, Database, Shield, Smartphone, MessageSquare, BarChart3, FileText, Activity, Menu, X, CheckCircle, Zap, Globe, Code } from 'lucide-react'

const navItems = ['首页', '核心优势', '产品服务', '功能特性', '合作方式', '技术架构', '联系我们']

const coreAdvantages = [
  { 
    title: '权威医疗数据', 
    icon: Database, 
    description: '与国内知名三甲医院深度合作，拥有海量真实皮肤病例数据，覆盖数百种皮肤疾病类型。' 
  },
  { 
    title: '专业医生标注', 
    icon: Shield, 
    description: '由皮肤科专家团队进行专业标注，确保数据质量和模型训练的准确性。' 
  },
  { 
    title: 'AI精准识别', 
    icon: Brain, 
    description: '基于深度学习算法，AI识别准确率行业领先，为用户提供可靠的皮肤健康分析。' 
  },
  { 
    title: '持续迭代优化', 
    icon: Zap, 
    description: '持续积累新数据，不断优化模型，确保AI识别能力与时俱进。' 
  },
]

const features = [
  { 
    name: 'AI皮肤助手咨询', 
    icon: MessageSquare,
    description: '智能对话系统，实时解答用户皮肤相关问题，提供专业建议' 
  },
  { 
    name: 'AI皮肤检测', 
    icon: Brain,
    description: '上传皮肤照片，AI快速分析识别，精准判断皮肤状况' 
  },
  { 
    name: 'AI识别皮肤报告', 
    icon: FileText,
    description: '生成详细的皮肤分析报告，包含问题诊断、护理建议等' 
  },
  { 
    name: '皮肤状态监测', 
    icon: Activity,
    description: '长期追踪用户皮肤变化趋势，建立个人皮肤健康档案' 
  },
  { 
    name: '数据可视化分析', 
    icon: BarChart3,
    description: '直观展示皮肤健康数据，帮助用户了解皮肤状态变化' 
  },
  { 
    name: '智能护肤推荐', 
    icon: Zap,
    description: '基于AI分析结果，智能推荐适合的护肤方案和产品' 
  },
]

const cooperationModes = [
  { 
    name: 'APP开发', 
    type: 'APP',
    icon: Smartphone,
    description: '提供完整的皮肤检测APP解决方案，支持iOS和Android双平台',
    benefits: ['完整功能定制', '独立品牌打造', '专属技术支持', '持续版本迭代']
  },
  { 
    name: 'H5应用', 
    type: 'H5',
    icon: Globe,
    description: '轻量级H5解决方案，无需下载即可使用，便于推广传播',
    benefits: ['快速上线部署', '跨平台兼容', '便于社交分享', '低成本运营']
  },
  { 
    name: '小程序开发', 
    type: '小程序',
    icon: MessageSquare,
    description: '微信、支付宝等平台小程序开发，触达海量用户',
    benefits: ['流量入口便捷', '用户习惯友好', '开发周期短', '推广成本低']
  },
  { 
    name: 'API接入', 
    type: 'API',
    icon: Code,
    description: '提供标准化API接口，可快速集成到您现有的系统中',
    benefits: ['灵活集成', '按量计费', '技术文档完善', '7x24技术支持']
  },
]

const techStack = ['PyTorch', 'TensorFlow', 'YOLO', 'Transformer', 'CNN', 'ResNet', 'AWS', 'Docker', 'Kubernetes', 'FastAPI']

const stats = [
  { value: '500万+', label: '皮肤数据样本' },
  { value: '98.6%', label: 'AI识别准确率' },
  { value: '200+', label: '合作医院' },
  { value: '50+', label: '皮肤科专家' },
]

export default function Home() {
  const [activeSection, setActiveSection] = useState('首页')
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const scrollToSection = (section: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setActiveSection(section)
    setMobileNavOpen(false)
    const el = document.getElementById(section)
    if (el) {
      const offset = 64
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const handleSetActive = (section: string) => {
    setActiveSection(section)
    setMobileNavOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <span className="text-2xl font-bold text-primary">睿肤云图</span>
            </motion.div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href={`#${item}`}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      activeSection === item ? 'text-primary' : 'text-muted-foreground'
                    }`}
                    onClick={(e) => scrollToSection(item, e)}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="flex items-center">
              <ThemeToggle />
              <Button
                className="ml-4 md:hidden rounded-full"
                variant="outline"
                size="icon"
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
              >
                {mobileNavOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-40 md:hidden"
          >
            <nav className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={(e) => scrollToSection(item, e)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="首页" className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-extrabold tracking-tight lg:text-5xl"
              >
                睿肤云图
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-xl text-muted-foreground"
              >
                智汇睿肤，数绘云图
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto"
              >
                基于国内知名医院皮肤数据与专业医生标注，打造行业领先的AI皮肤检测与分析平台
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-primary hover:bg-primary/90 rounded-full">
                    立即咨询 <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="rounded-full">
                    查看产品演示
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Core Advantages Section */}
        <section id="核心优势" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-4">核心优势</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              依托权威医疗资源与专业技术团队，构建行业领先的AI皮肤分析能力
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreAdvantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="rounded-2xl overflow-hidden border border-border bg-card h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <advantage.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-primary">{advantage.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{advantage.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="产品服务" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-4">产品服务</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              全方位AI皮肤健康管理解决方案，满足用户多样化需求
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="rounded-2xl overflow-hidden border border-border bg-card h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{feature.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* App Features Showcase */}
        <section id="功能特性" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-4">功能特性</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              采用前沿AI技术，为用户提供专业、便捷的皮肤健康服务
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">智能图像识别</h3>
                    <p className="text-muted-foreground text-sm mt-1">基于深度学习的图像识别技术，快速准确分析皮肤状况</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">实时AI问答</h3>
                    <p className="text-muted-foreground text-sm mt-1">24小时在线AI助手，随时解答皮肤健康问题</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">个性化报告</h3>
                    <p className="text-muted-foreground text-sm mt-1">生成��细的皮肤分析报告，提供针对性护理建议</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">长期健康追踪</h3>
                    <p className="text-muted-foreground text-sm mt-1">建立个人皮肤档案，持续追踪皮肤状态变化</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">隐私安全保障</h3>
                    <p className="text-muted-foreground text-sm mt-1">严格的数据加密和隐私保护机制，确保用户信息安全</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <Brain className="h-24 w-24 text-primary mx-auto mb-4" />
                    <p className="text-lg font-semibold">AI驱动的皮肤分析引擎</p>
                    <p className="text-sm text-muted-foreground mt-2">毫秒级响应，精准识别</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cooperation Modes Section */}
        <section id="合作方式" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-4">合作方式</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              灵活多样的合作模式，满足不同业务场景需求
            </p>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-5 rounded-full">
                <TabsTrigger value="all" className="rounded-full">全部</TabsTrigger>
                <TabsTrigger value="APP" className="rounded-full">APP</TabsTrigger>
                <TabsTrigger value="H5" className="rounded-full">H5</TabsTrigger>
                <TabsTrigger value="小程序" className="rounded-full">小程序</TabsTrigger>
                <TabsTrigger value="API" className="rounded-full">API</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                  {cooperationModes.map((mode, index) => (
                    <motion.div
                      key={mode.name}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="rounded-2xl overflow-hidden border border-border bg-card h-full">
                        <CardHeader>
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <mode.icon className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-lg">{mode.name}</CardTitle>
                          <CardDescription>{mode.type}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">{mode.description}</p>
                          <ul className="space-y-2">
                            {mode.benefits.map((benefit) => (
                              <li key={benefit} className="flex items-center text-sm">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="rounded-full w-full">了解详情</Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              {['APP', 'H5', '小程序', 'API'].map((type) => (
                <TabsContent key={type} value={type}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                    {cooperationModes.filter(mode => mode.type === type).map((mode, index) => (
                      <motion.div
                        key={mode.name}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="rounded-2xl overflow-hidden border border-border bg-card h-full">
                          <CardHeader>
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                              <mode.icon className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle className="text-lg">{mode.name}</CardTitle>
                            <CardDescription>{mode.type}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">{mode.description}</p>
                            <ul className="space-y-2">
                              {mode.benefits.map((benefit) => (
                                <li key={benefit} className="flex items-center text-sm">
                                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                          <CardFooter>
                            <Button variant="outline" className="rounded-full w-full">了解详情</Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="技术架构" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-4">技术架构</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              采用世界前沿技术架构，确保系统稳定性和可扩展性
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card w-28 h-28 rounded-3xl flex items-center justify-center shadow-lg border border-border"
                >
                  <span className="text-sm font-medium text-primary">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="联系我们" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">联系我们</h2>
            <div className="max-w-2xl mx-auto">
              <Card className="rounded-2xl overflow-hidden border border-border bg-card">
                <CardHeader>
                  <CardTitle>商务合作咨询</CardTitle>
                  <CardDescription>我们期待与您的合作，请留下您的信息，我们会尽快与您联系</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="message" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="message" className="rounded-full">留言咨询</TabsTrigger>
                      <TabsTrigger value="info" className="rounded-full">联系方式</TabsTrigger>
                    </TabsList>
                    <TabsContent value="message">
                      <form className="space-y-4">
                        <div>
                          <Label htmlFor="company">公司名称</Label>
                          <Input id="company" placeholder="请输入您的公司名称" className="rounded-xl" />
                        </div>
                        <div>
                          <Label htmlFor="name">联系人</Label>
                          <Input id="name" placeholder="请输入您的姓名" className="rounded-xl" />
                        </div>
                        <div>
                          <Label htmlFor="phone">联系电话</Label>
                          <Input id="phone" type="tel" placeholder="请输入您的联系电话" className="rounded-xl" />
                        </div>
                        <div>
                          <Label htmlFor="cooperation">合作意向</Label>
                          <Textarea id="cooperation" placeholder="请描述您的合作需求（APP/H5/小程序/API接入）" className="rounded-xl" />
                        </div>
                        <Button type="submit" className="w-full rounded-full">提交咨询</Button>
                      </form>
                    </TabsContent>
                    <TabsContent value="info">
                      <div className="space-y-4">
                        <p><strong>公司：</strong> 睿肤云图科技有限公司</p>
                        <p><strong>地址：</strong> 中国上海市浦东新区张江高科技园区</p>
                        <p><strong>商务合作：</strong> business@ruifuyuntu.com</p>
                        <p><strong>技术支持：</strong> support@ruifuyuntu.com</p>
                        <div>
                          <h4 className="font-semibold mb-2">关注我们</h4>
                          <div className="flex space-x-4">
                            {['微信公众号', '微博', '知乎', 'LinkedIn'].map((platform) => (
                              <a key={platform} href="#" className="text-primary hover:text-primary/80 transition-colors text-sm">
                                {platform}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-primary">睿肤云图</h3>
              <p className="mt-2 text-sm text-muted-foreground">智汇睿肤，数绘云图</p>
            </div>
            <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">快速链接</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={(e) => scrollToSection(item, e)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/3 text-center md:text-right">
              <h4 className="text-lg font-semibold mb-2">联系我们</h4>
              <p className="text-sm text-muted-foreground">business@ruifuyuntu.com</p>
              <p className="text-sm text-muted-foreground">上海市浦东新区张江高科技园区</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              &copy; 2024 睿肤云图科技有限公司 版权所有
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
