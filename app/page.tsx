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
import { ArrowRight, Code, Cpu, Database, Globe, Lightbulb, Smartphone, Zap, Menu, X } from 'lucide-react'

const navItems = ['首页', '服务', '产品', '技术', '案例', '关于我们', '联系我们']

const services = [
  { title: 'AI 解决方案', icon: Cpu, description: '定制化的人工智能解决方案，助力企业智能化转型。' },
  { title: '云服务', icon: Database, description: '安全可靠的云计算服务，为您的业务提供强大后盾。' },
  { title: '数据分析', icon: Zap, description: '深度数据挖掘与分析，助您洞察商业先机。' },
  { title: 'IoT 平台', icon: Globe, description: '全方位物联网平台，连接智能设备，优化运营效率。' },
  { title: '移动应用开发', icon: Smartphone, description: '专业的移动应用开发，让您的业务触手可及。' },
  { title: '区块链技术', icon: Code, description: '安全透明的区块链解决方案，为您的业务保驾护航。' },
]

const products = [
  { name: 'AI助手', description: '智能对话系统，提高客户服务效率', image: '/placeholder.svg?text=AI助手&width=300&height=200' },
  { name: '数据可视化平台', description: '直观展示复杂数据，辅助决策', image: '/placeholder.svg?text=数据可视化&width=300&height=200' },
  { name: '智能工厂系统', description: '优化生产流程，提高生产效率', image: '/placeholder.svg?text=智能工厂&width=300&height=200' },
]

const techStack = ['React', 'Node.js', 'Python', 'TensorFlow', 'AWS', 'Docker', 'Kubernetes', 'GraphQL', 'MongoDB', 'Redis']

const teamMembers = [
  { name: '杨晓东', role: 'CEO', avatar: '/placeholder.svg?text=杨晓东&width=100&height=100', description: '拥有15年科技行业经验，曾在多家知名科技公司担任高管职位。' },
  { name: '杨晓东', role: 'CTO', avatar: '/placeholder.svg?text=杨晓东&width=100&height=100', description: '人工智能专家，在机器学习和深度学习领域有多项专利。' },
  { name: '杨晓东', role: '首席数据科学家', avatar: '/placeholder.svg?text=杨晓东&width=100&height=100', description: '数据分析专家，曾领导多个大型数据项目，对数据洞察有独到见解。' },
  { name: '杨晓东', role: '产品总监', avatar: '/placeholder.svg?text=杨晓东&width=100&height=100', description: '资深产品经理，擅长用户体验设计，曾成功推出多款畅销产品。' },
]

const caseStudies = [
  { name: 'H5营销活动', type: 'H5', description: '为某品牌设计的互动营销页面，提升用户参与度', image: '/placeholder.svg?text=H5案例&width=300&height=200' },
  { name: '企业微信小程序', type: '小程序', description: '为中小企业开发的办公协作小程序，提高工作效率', image: '/placeholder.svg?text=小程序案例&width=300&height=200' },
  { name: '电商平台', type: 'PC', description: '全功能电子商务平台，支持多商户入驻和智能推荐', image: '/placeholder.svg?text=PC案例&width=300&height=200' },
  { name: '健康监测App', type: '移动端', description: '结合可穿戴设备的健康数据分析和管理应用', image: '/placeholder.svg?text=移动端案例&width=300&height=200' },
]

export default function Home() {
  const [activeSection, setActiveSection] = useState('首页')
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

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
              <span className="text-2xl font-bold text-primary">创源科技</span>
            </motion.div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href={`#${item}`}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      activeSection === item ? 'text-primary' : 'text-muted-foreground'
                    }`}
                    onClick={() => handleSetActive(item)}
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
                  onClick={() => handleSetActive(item)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-16">
        <section id="首页" className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-extrabold tracking-tight lg:text-5xl"
              >
                创源科技有限公司
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-xl text-muted-foreground"
              >
                创新源于此，科技改变未来
              </motion.p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-10">
                <Button className="bg-primary hover:bg-primary/90 rounded-full">
                  了解更多 <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="服务" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">我们的服务</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="rounded-2xl overflow-hidden border border-border bg-card">
                    <CardHeader>
                      <CardTitle className="flex items-center text-primary">
                        <service.icon className="mr-2 h-5 w-5" />
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="产品" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">我们的产品</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="rounded-2xl overflow-hidden border border-border bg-card">
                    <CardHeader>
                      <CardTitle>{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded-xl" />
                      <CardDescription>{product.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="rounded-full">了解更多</Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="技术" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">技术栈</h2>
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

        <section id="案例" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">产品案例展示</h2>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-5 rounded-full">
                <TabsTrigger value="all" className="rounded-full">全部</TabsTrigger>
                <TabsTrigger value="H5" className="rounded-full">H5</TabsTrigger>
                <TabsTrigger value="小程序" className="rounded-full">小程序</TabsTrigger>
                <TabsTrigger value="PC" className="rounded-full">PC</TabsTrigger>
                <TabsTrigger value="移动端" className="rounded-full">移动端</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                  {caseStudies.map((study, index) => (
                    <motion.div
                      key={study.name}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="rounded-2xl overflow-hidden border border-border bg-card">
                        <CardHeader>
                          <CardTitle className="text-lg">{study.name}</CardTitle>
                          <CardDescription>{study.type}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <img src={study.image} alt={study.name} className="w-full h-40 object-cover mb-4 rounded-xl" />
                          <p className="text-sm text-muted-foreground">{study.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="rounded-full w-full">查看详情</Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              {['H5', '小程序', 'PC', '移动端'].map((type) => (
                <TabsContent key={type} value={type}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                    {caseStudies.filter(study => study.type === type).map((study, index) => (
                      <motion.div
                        key={study.name}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="rounded-2xl overflow-hidden border border-border bg-card">
                          <CardHeader>
                            <CardTitle className="text-lg">{study.name}</CardTitle>
                            <CardDescription>{study.type}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <img src={study.image} alt={study.name} className="w-full h-40 object-cover mb-4 rounded-xl" />
                            <p className="text-sm text-muted-foreground">{study.description}</p>
                          </CardContent>
                          <CardFooter>
                            <Button variant="outline" className="rounded-full w-full">查看详情</Button>
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

        <section id="关于我们" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">关于我们</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="rounded-2xl overflow-hidden border border-border bg-card">
                    <CardHeader>
                      <img src={member.avatar} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                      <CardTitle className="text-center text-primary">{member.name}</CardTitle>
                      <CardDescription className="text-center">{member.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{member.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="联系我们" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">联系我们</h2>
            <div className="max-w-2xl mx-auto">
              <Card className="rounded-2xl overflow-hidden border border-border bg-card">
                <CardHeader>
                  <CardTitle>给我们留言</CardTitle>
                  <CardDescription>我们会尽快回复您的询问</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="message" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="message" className="rounded-full">留言</TabsTrigger>
                      <TabsTrigger value="info" className="rounded-full">联系方式</TabsTrigger>
                    </TabsList>
                    <TabsContent value="message">
                      <form className="space-y-4">
                        <div>
                          <Label htmlFor="name">姓名</Label>
                          <Input id="name" placeholder="请输入您的姓名" className="rounded-xl" />
                        </div>
                        <div>
                          <Label htmlFor="email">邮箱</Label>
                          <Input id="email" type="email" placeholder="请输入您的邮箱" className="rounded-xl" />
                        </div>
                        <div>
                          <Label htmlFor="message">消息</Label>
                          <Textarea id="message" placeholder="请输入您的消息" className="rounded-xl" />
                        </div>
                        <Button type="submit" className="w-full rounded-full">发送消息</Button>
                      </form>
                    </TabsContent>
                    <TabsContent value="info">
                      <div className="space-y-4">
                        <p><strong>地址：</strong> 中国上海市浦东新区张江高科技园区</p>
                        <p><strong>电话：</strong> 17866836465</p>
                        <p><strong>邮箱：</strong> 1552614119@qq.com</p>
                        <div>
                          <h4 className="font-semibold mb-2">关注我们</h4>
                          <div className="flex space-x-4">
                            {['微博', '微信', 'LinkedIn', 'GitHub'].map((platform) => (
                              <a key={platform} href="#" className="text-primary hover:text-primary/80 transition-colors">
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
              <h3 className="text-2xl font-bold text-primary">创源科技有限公司</h3>
              <p className="mt-2 text-sm text-muted-foreground">创新源于此，科技改变未来</p>
            </div>
            <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">快速链接</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/3 text-center md:text-right">
              <h4 className="text-lg font-semibold mb-2">联系我们</h4>
              <p className="text-sm text-muted-foreground">电话: 17866836465</p>
              <p className="text-sm text-muted-foreground">邮箱: 1552614119@qq.com</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">&copy; 2024 创源科技有限公司. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

