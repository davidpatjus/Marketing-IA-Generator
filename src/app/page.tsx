'use client'

// import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Lightbulb, Rocket, Zap, ChevronDown } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  // const [scrollY, setScrollY] = useState(0)

  // useEffect(() => {
  //   const handleScroll = () => setScrollY(window.scrollY)
  //   window.addEventListener("scroll", handleScroll)
  //   return () => window.removeEventListener("scroll", handleScroll)
  // }, [])

  return (
    <div className="flex flex-col min-h-screen overflow-auto">
      {/* Header */}
      <header className="px-6 lg:px-12 h-16 flex items-center fixed w-full bg-white/90 backdrop-blur-lg shadow-md z-50 transition-all duration-300 ease-in-out">
        <Link className="flex items-center justify-center" href="/">
          <Brain className="h-6 w-6 text-primary" />
          <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            AIMarketer
          </span>
        </Link>
        <nav className="ml-auto flex gap-6 sm:gap-8">
          <Link className="text-sm font-medium hover:text-primary transition-all" href="#features">
            Características
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-all" href="#how-it-works">
            Cómo Funciona
          </Link>
        </nav>
      </header>

      {/* Main */}
      <main className="flex-1 mt-16">
        {/* Hero Section */}
        <section className="w-full py-24 md:py-32 lg:py-40 xl:py-48 bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 relative h-max">
          <div className="container mx-auto px-4 md:px-6 relative">
            <motion.div 
              className="flex flex-col items-center space-y-6 text-center text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Revoluciona tu Marketing con IA
                </h1>
                <p className="mx-auto max-w-[700px] text-lg sm:text-xl md:text-2xl">
                  Genera contenido de marketing impactante en segundos con el poder de la Inteligencia Artificial
                </p>
              </motion.div>
              <motion.div 
                className="space-x-4 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Button size="lg" variant="outline" onClick={() => window.location.href = '/dashboard'} className="text-black text-lg hover:text-white border-white hover:bg-white/20">
                  Comenzar
                </Button>
              </motion.div>
            </motion.div>

          </div>
            {/* Flecha hacia abajo */}
            <motion.div 
              className="mx-auto absolute bottom-8 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown className="w-8 h-8 text-white" />
            </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-extrabold text-center mb-12">Características Principales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white/50 backdrop-blur-md hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <Lightbulb className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Generación de Ideas</h3>
                  <p>Obtén ideas creativas para tus campañas de marketing con solo un clic.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/50 backdrop-blur-md hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <Zap className="w-12 h-12 text-pink-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Creación Rápida</h3>
                  <p>Genera contenido de alta calidad en cuestión de segundos, no de horas.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/50 backdrop-blur-md hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <Rocket className="w-12 h-12 text-orange-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Optimización SEO</h3>
                  <p>Contenido optimizado automáticamente para mejorar tu posicionamiento en buscadores.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-extrabold text-center mb-12">Cómo Funciona AIMarketer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <motion.div className="text-center" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                <div className="bg-purple-100 rounded-full p-6 inline-block mb-4">
                  <Brain className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Ingresa tu Idea</h3>
                <p>Describe brevemente tu producto o servicio.</p>
              </motion.div>
              <motion.div className="text-center" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
                <div className="bg-pink-100 rounded-full p-6 inline-block mb-4">
                  <Zap className="w-12 h-12 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. IA en Acción</h3>
                <p>Nuestra IA analiza y genera contenido optimizado.</p>
              </motion.div>
              <motion.div className="text-center" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>
                <div className="bg-orange-100 rounded-full p-6 inline-block mb-4">
                  <Rocket className="w-12 h-12 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Resultados Instantáneos</h3>
                <p>Recibe contenido listo para usar en segundos.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500">
          <div className="container mx-auto px-4 md:px-6 text-center text-white">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-extrabold mb-4">Únete a la Revolución del Marketing</h2>
              <p className="mb-8">Descubre cómo AIMarketer puede transformar tu estrategia de marketing.</p>
              <Button onClick={() => window.location.href = '/dashboard'} size="lg" className="bg-white text-purple-700 hover:bg-gray-200 transition-all">
                Comenzar
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-900 text-white text-center">
        <p>&copy; Desarrollado por David Patiño.</p>
      </footer>
    </div>
  )
}
