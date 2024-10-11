'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Lightbulb, Rocket, Zap, ChevronDown } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrollY])

  return (
    <div className="flex flex-col min-h-screen overflow-auto">

      {/* Header */}
      <header className={`px-6 lg:px-12 h-16 flex items-center fixed w-full bg-white/90 shadow-md transition-all duration-300 ease-in-out z-50`}>
        
        {/* Header Logo */}
        <Link className="flex items-center justify-center" href="/">
          <Brain className="h-6 w-6 xl:h-8 xl:w-8 text-primary" />
          <span className="ml-2 text-base sm:text-lg md:text-2xl xl:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            AIMarketer
          </span>
        </Link>
        
        {/* Header Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: scrollY > 750 ? 0 : 1, y: scrollY > 750 ? 0 : -20 }}
          transition={{ duration: 0.3 }}
          className="ml-3 sm:ml-auto flex gap-4 sm:gap-8 pt-9"
        >
            <Link className="text-xs md:text-sm xl:text-lg font-medium hover:text-primary transition-all" href="#features">
              Características
            </Link>
            <Link className="text-xs md:text-sm xl:text-lg font-medium hover:text-primary transition-all" href="#how-it-works">
              Cómo Funciona
            </Link>
        </motion.nav>  

      </header>

      {/* Main */}
      <main className="flex-1 mt-16">

        {/* Hero Section */}
        <section className="overflow-auto w-full h-[calc(100vh-4rem)] py-24 md:py-32 lg:py-40 xl:py-48 bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 relative">

          {/* Overlay */}
          <div className="container mx-auto px-4 md:px-6 relative flex flex-col items-center text-center">

            {/* Hero Content */}
            <motion.div 
              className=" text-white space-y-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >

              {/* Hero Text */}
                <motion.div 
                className="space-y-4 mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                >
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mt-[calc(50%-4rem)] sm:mt-[calc(40%-4rem)] md:mt-[calc(30%-4rem)] lg:mt-[calc(20%-6rem)]">
                  Revoluciona tu Marketing con IA
                </h1>
                <p className="mx-auto max-w-[700px] text-lg sm:text-xl md:text-2xl">
                  Genera contenido de marketing impactante en segundos con el poder de la Inteligencia Artificial
                </p>
                </motion.div>
              
              {/* Hero CTA */}
              <motion.div 
                className="space-x-4"
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

          {/* Hero Arrow Bottom */}
          <motion.div 
            className="w-full mx-auto absolute bottom-8 left-0 right-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.div 
              animate={{ y: [0, 10, 0], opacity: scrollY > 650 ? 0 : 1 }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown className="w-8 h-8 text-white mx-auto" />
            </motion.div>
          </motion.div>

        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-extrabold text-center mb-12">Características Principales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-white/50 backdrop-blur-md hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8">
                    <Lightbulb className="w-12 h-12 text-purple-600 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Generación de Ideas</h3>
                    <p>Obtén ideas creativas para tus campañas de marketing con solo un clic.</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-white/50 backdrop-blur-md hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8">
                    <Zap className="w-12 h-12 text-pink-600 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Creación Rápida</h3>
                    <p>Genera contenido de alta calidad en cuestión de segundos, no de horas.</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-white/50 backdrop-blur-md hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8">
                    <Rocket className="w-12 h-12 text-orange-600 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Optimización SEO</h3>
                    <p>Contenido optimizado automáticamente para mejorar tu posicionamiento en buscadores.</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-16 md:py-20">

          {/* Overlay */}
          <div className="container mx-auto px-4 md:px-6">

            {/* Title */}
            <h2 className="text-3xl font-extrabold text-center mb-12">Cómo Funciona AIMarketer</h2>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

              {/* Step 1 */}
              <motion.div className="text-center" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                <div className="bg-purple-100 rounded-full p-6 inline-block mb-4">
                  <Brain className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Ingresa tu Idea</h3>
                <p>Describe brevemente tu producto o servicio.</p>
              </motion.div>

              {/* Step 2 */}
              <motion.div className="text-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
                <div className="bg-pink-100 rounded-full p-6 inline-block mb-4">
                  <Zap className="w-12 h-12 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. IA en Acción</h3>
                <p>Nuestra IA analiza y genera contenido optimizado.</p>
              </motion.div>

              {/* Step 3 */}
              <motion.div className="text-center" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>
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

          {/* Overlay */}
          <div className="container mx-auto px-4 md:px-6 text-center text-white">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

              {/* Title */}
              <h2 className="text-3xl font-extrabold mb-6">Comienza a Crear Contenido con IA Hoy Mismo</h2>

              {/* Text */}
              <p className="text-lg mb-8">Optimiza tu estrategia de marketing con la ayuda de la Inteligencia Artificial.</p>

              {/* Button */}
              <Button size="lg" onClick={() => window.location.href = '/dashboard'} variant="outline" className="text-black text-lg hover:text-white border-white hover:bg-white/20">
                Comienza Gratis
              </Button>
              
            </motion.div>
          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="w-full py-4 bg-gray-900 text-white text-center">
        <p >© Desarrollado con ❤️ por David Patiño.</p>
      </footer>

    </div>
  )
}
