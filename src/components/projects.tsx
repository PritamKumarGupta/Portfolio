"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, BotIcon as Robot, Home, Music, Wifi } from "lucide-react"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const projects = [
    {
      title: "Multifunctional Robot",
      description:
        "Designed and constructed a robot capable of object detection, path planning, and carrying and transporting weight efficiently. Integrated hardware components with software algorithms for seamless functionality.",
      icon: <Robot className="h-6 w-6" />,
      tags: ["Arduino", "Robotics", "Object Detection", "Path Planning"],
    },
    {
      title: "Home Automation with IoT",
      description:
        "Formulated a smart system to remotely control home appliances using a smartphone via IoT protocols. Implemented seamless device connectivity and real-time monitoring to enhance convenience and energy efficiency.",
      icon: <Home className="h-6 w-6" />,
      tags: ["IoT", "Smart Home", "Remote Control", "Energy Efficiency"],
    },
    {
      title: "Line-following Robot Car",
      description:
        "Developed and implemented a line-following robot car using an Arduino Uno microcontroller, DC motors, and IR sensors to detect and follow a predefined path. The system uses sensor inputs to detect lines on the ground and adjusts the movement of the car accordingly.",
      icon: <Robot className="h-6 w-6" />,
      tags: ["Arduino", "IR Sensors", "DC Motors", "Robotics"],
    },
    {
      title: "Wireless Notice Board",
      description:
        "Implemented a wireless system to display messages remotely using a Bluetooth-enabled microcontroller. Integrated user-friendly controls for seamless message updates via a smartphone.",
      icon: <Wifi className="h-6 w-6" />,
      tags: ["Bluetooth", "Arduino", "Wireless Communication"],
    },
    {
      title: "Music Rhythm LED Flashlight",
      description:
        "Designed an LED system that synchronizes with music beats using sound sensors and Arduino. Designed and programmed the circuit for real-time beat detection and LED response.",
      icon: <Music className="h-6 w-6" />,
      tags: ["Arduino", "Sound Sensors", "LED", "Real-time Processing"],
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on, showcasing my skills in electronics, IoT, and embedded
            systems.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full">{project.icon}</div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <div className="flex gap-2 w-full">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
