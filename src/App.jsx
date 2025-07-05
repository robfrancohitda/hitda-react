import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Download, CheckCircle, Star, Users, Zap, Brain, Target, Lightbulb, TrendingUp } from 'lucide-react'
import './App.css'

// Importing images
import coverImage from './assets/cover.png'
import heroImage from './assets/Copilot_20250704_145816.png'
import launchImage from './assets/Copilot_20250704_150050.png'
import activateImage from './assets/Copilot_20250704_150049.png'
import mobileImage from './assets/Copilot_20250704_150046.png'
import testimonialImage from './assets/Copilot_20250704_145757.png'
import secureImage from './assets/Copilot_20250704_150043.png'
import downloadImage from './assets/Copilot_20250704_145811.png'
import benefitsImage from './assets/Copilot_20250704_150036.png'
import frameworkImage from './assets/Copilot_20250704_150035.png'
import finalImage from './assets/Copilot_20250704_150033.png'
import activationImage from './assets/Copilot_20250704_150031.png'
import poweredImage from './assets/Copilot_20250704_145814.png'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-pink-500" />
            <span className="text-xl font-bold text-white">Future-Proof AI Framework</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#framework" className="text-slate-300 hover:text-white transition-colors">Framework</a>
            <a href="#benefits" className="text-slate-300 hover:text-white transition-colors">Benefits</a>
            <a href="#testimonials" className="text-slate-300 hover:text-white transition-colors">Testimonials</a>
            <a href="#download" className="text-slate-300 hover:text-white transition-colors">Download</a>
          </nav>
          <Button className="bg-pink-600 hover:bg-pink-700 text-white">
            Get Framework
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-pink-600/20 text-pink-400 border-pink-600/30">
              Revolutionize Your AI Marketing
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Future-Proof
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                {" "}AI Framework
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Activate your own AI marketing specialist. Transform automation into authentic connection and exponential growth by 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 text-lg">
                <Download className="mr-2 h-5 w-5" />
                Download Framework Now
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg">
                View Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Future-Proof AI Framework Interface" 
                className="rounded-lg shadow-2xl mx-auto max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="framework" className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              What You Get
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              A complete system that evolves with you and produces strategic content on demand
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">Complete Framework (PDF)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">The complete Future-Proof AI framework in detailed PDF format</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-purple-400" />
                </div>
                <CardTitle className="text-white">Exclusive Master Prompt</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">Exclusive master prompt to activate your trained AI</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Activation Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">Simple, step-by-step activation guide</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 bg-pink-600/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-pink-400" />
                </div>
                <CardTitle className="text-white">Evolutionary System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">A system that evolves with you and produces results</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src={benefitsImage} 
                alt="Framework Benefits" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Works with Any AI Platform
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-slate-300">No additional software required</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-slate-300">No recurring subscriptions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-slate-300">Just pure strategic application</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-slate-300">Real competitive advantage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src={testimonialImage} 
              alt="Customer Testimonial" 
              className="rounded-lg shadow-2xl mx-auto mb-8"
            />
            <blockquote className="text-2xl text-white font-medium mb-6">
              "My AI responds with clarity, aligned with my goals and tone."
            </blockquote>
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-slate-300">
              <span className="font-semibold">Jane Doe</span> - Certified AI Specialist
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Real Competitive Advantage
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                While others are still buying "yet another list of prompts," you'll be activating a complete intelligent system - a marketing assistant that understands your goals, speaks your language, and applies your playbook.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 bg-pink-600/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-pink-400" />
                  </div>
                  <span className="text-white font-medium">Works with Any AI Platform</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 bg-pink-600/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-pink-400" />
                  </div>
                  <span className="text-white font-medium">Instant Access - No Subscription</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 bg-pink-600/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-pink-400" />
                  </div>
                  <span className="text-white font-medium">System that Evolves with You</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={finalImage} 
                alt="Framework Benefits" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Secure Your AI Marketing Advantage - Starting Today
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Master the Human+AI Synergy. Transform Automation into Authentic Connection and Exponential Growth by 2025.
            </p>
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white px-12 py-6 text-xl mb-8">
              <Download className="mr-3 h-6 w-6" />
              Get the Framework Now and Activate Your Co-Pilot
            </Button>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="h-16 w-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">For AI Professionals</h3>
                <p className="text-slate-300">Available now for AI professionals</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Instant Activation</h3>
                <p className="text-slate-300">Set up your AI assistant in minutes</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Guaranteed Results</h3>
                <p className="text-slate-300">Proven system for growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 border-t border-slate-700">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-6 w-6 text-pink-500" />
                <span className="font-bold text-white">Future-Proof AI</span>
              </div>
              <p className="text-slate-400">
                Transforming the future of marketing with artificial intelligence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Framework</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Activation Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Master Prompt</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Author</h4>
              <p className="text-slate-400 mb-2">Rob Franco</p>
              <p className="text-slate-400">HITDA</p>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Future-Proof AI Framework. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

