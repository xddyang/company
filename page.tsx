'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Code, Cpu, Database, Globe, Lightbulb, Smartphone, Zap } from 'lucide-react'

const navItems = ['首页', '服务', '产品', '技术', '关于我们', '联系我们']

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
  { name: '张明', role: 'CEO', avatar: '/placeholder.svg?text=张明&width=100&height=100', description: '拥有15年科技行业经验，曾在多家知名科技公司担任高管职位。' },
  { name: '李华', role: 'CTO', avatar: '/placeholder.svg?text=李华&width=100&height=100', description: '人工智能专家，在机器学习和深度学习领域有多项专利。' },
  { name: '王芳', role: '首席数据科学家', avatar: '/placeholder.svg?text=王芳&width=100&height=100', description: '数据分析专家，曾领导多个大型数据项目，对数据洞察有独到见解。' },
  { name: '赵强', role: '产品总监', avatar: '/placeholder.svg?text=赵强&width=100&height=100', description: '资深产品经理，擅长用户体验设计，曾成功推出多款畅销产品。' },
]

export default function Home() {
  const [activeSection, setActiveSection] = useState('首页')

  const handleSetActive = (section: string) => {
    setActiveSection(section)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100 text-gray-800">
      <header className="fixed w-full z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-teal-600"
            >
              创源科技
            </motion.div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href={`#${item}`}
                    className={`text-lg font-medium ${
                      activeSection === item ? 'text-teal-600' : 'text-gray-600 hover:text-teal-600'
                    }`}
                    onClick={() => handleSetActive(item)}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
            <Button className="md:hidden" variant="outline" size="icon">
              <Smartphone className="h-4 w-4" />
            </Button>
          </div>
        </nav>
      </header>

      <main>
        <section id="首页" className="min-h-screen flex items-center justify-center pt-16">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-bold mb-4 text-teal-800"
            >
              创源科技有限公司
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-8 text-gray-600"
            >
              创新源于此，科技改变未来
            </motion.p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full text-lg font-medium">
                了解更多 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        <section id="服务" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center text-teal-800">我们的服务</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-teal-600">
                        <service.icon className="mr-2 h-6 w-6" />
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="产品" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center text-teal-800">我们的产品</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded-md" />
                      <CardDescription>{product.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline">了解更多</Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="技术" className="py-20 bg-teal-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center text-teal-800">技术栈</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white w-24 h-24 rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-lg font-medium text-teal-600">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="关于我们" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center text-teal-800">关于我们</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <img src={member.avatar} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                      <CardTitle className="text-center text-teal-600">{member.name}</CardTitle>
                      <CardDescription className="text-center">{member.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{member.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="联系我们" className="py-20 bg-teal-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center text-teal-800">联系我们</h2>
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>给我们留言</CardTitle>
                  <CardDescription>我们会尽快回复您的询问</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="message" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="message">留言</TabsTrigger>
                      <TabsTrigger value="info">联系方式</TabsTrigger>
                    </TabsList>
                    <TabsContent value="message">
                      <form className="space-y-4">
                        <div>
                          <Label htmlFor="name">姓名</Label>
                          <Input id="name" placeholder="请输入您的姓名" />
                        </div>
                        <div>
                          <Label htmlFor="email">邮箱</Label>
                          <Input id="email" type="email" placeholder="请输入您的邮箱" />
                        </div>
                        <div>
                          <Label htmlFor="message">消息</Label>
                          <Textarea id="message" placeholder="请输入您的消息" />
                        </div>
                        <Button type="submit" className="w-full">发送消息</Button>
                      </form>
                    </TabsContent>
                    <TabsContent value="info">
                      <div className="space-y-4">
                        <p><strong>地址：</strong> 中国上海市浦东新区张江高科技园区</p>
                        <p><strong>电话：</strong> +86 21 5555 5555</p>
                        <p><strong>邮箱：</strong> info@chuangyuantech.com</p>
                        <div>
                          <h4 className="font-semibold mb-2">关注我们</h4>
                          <div className="flex space-x-4">
                            {['微博', '微信', 'LinkedIn', 'GitHub'].map((platform) => (
                              <a key={platform} href="#" className="text-teal-600 hover:text-teal-800 transition-colors">
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

      <footer className="bg-teal-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-2xl font-bold">创源科技有限公司</h3>
              <p className="mt-2">创新源于此，科技改变未来</p>
            </div>
            <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">快速链接</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} className="hover:text-teal-300 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/3 text-center md:text-right">
              <h4 className="text-lg font-semibold mb-2">联系我们</h4>
              <p>电话: +86 21 5555 5555</p>
              <p>邮箱: info@chuangyuantech.com</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 创源科技有限公司. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

