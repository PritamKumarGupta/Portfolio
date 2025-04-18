"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, Code, Award, BookOpen } from "lucide-react"

export default function About() {
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

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I&apos;m an Electronics and Communication Engineering student with a passion for IoT, embedded systems, and
            full-stack web development.
          </p>
        </motion.div>

        <Tabs defaultValue="education" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="education" className="flex flex-col items-center gap-2 py-3">
              <GraduationCap className="h-5 w-5" />
              <span>Education</span>
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex flex-col items-center gap-2 py-3">
              <Code className="h-5 w-5" />
              <span>Skills</span>
            </TabsTrigger>
            <TabsTrigger value="certifications" className="flex flex-col items-center gap-2 py-3">
              <Award className="h-5 w-5" />
              <span>Certifications</span>
            </TabsTrigger>
            <TabsTrigger value="interests" className="flex flex-col items-center gap-2 py-3">
              <BookOpen className="h-5 w-5" />
              <span>Interests</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="education">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-6"
            >
              <motion.div variants={itemVariants}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full">
                        <GraduationCap className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          B.Tech in Electronics and Communication Engineering
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          I.T.S Engineering College, Greater Noida (Oct 2022 - Present)
                        </p>
                        <div className="mt-2">
                          <p className="text-gray-700 dark:text-gray-300">
                            <span className="font-medium">Academic Performance:</span>
                          </p>
                          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 ml-4 mt-1">
                            <li>4th Semester SGPA - 7.52</li>
                            <li>3rd Semester SGPA - 8.24</li>
                            <li>2nd Semester SGPA - 7.77</li>
                            <li>1st Semester SGPA - 8.23</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full">
                        <GraduationCap className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Higher Secondary Education
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">Gyan Peethika Sr. Sec. School (2020)</p>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">
                          <span className="font-medium">Percentage:</span> 63.60
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full">
                        <GraduationCap className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Secondary Education</h3>
                        <p className="text-gray-600 dark:text-gray-400">Green Valley Public School (2018)</p>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">
                          <span className="font-medium">Percentage:</span> 69.20
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          <TabsContent value="skills">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <motion.div variants={itemVariants}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Programming Languages</h3>
                    <div className="space-y-4">
                      {["Python", "Java"].map((skill) => (
                        <div key={skill} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                          </div>
                          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "80%" }}
                              transition={{ duration: 1, delay: 0.5 }}
                              className="h-full bg-gray-900 dark:bg-gray-300 rounded-full"
                            ></motion.div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technical Expertise</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "Arduino Development",
                        "Internet of Things (IoT)",
                        "PCB Design",
                        "Verilog",
                        "Embedded Systems",
                        "Full Stack Web Development",
                      ].map((skill) => (
                        <div
                          key={skill}
                          className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 text-sm"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants} className="md:col-span-2">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Software Tools</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                      {["MS Office", "Proteus", "Tinkercad", "MATLAB"].map((tool) => (
                        <div
                          key={tool}
                          className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-md text-center text-gray-700 dark:text-gray-300 text-sm"
                        >
                          {tool}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          <TabsContent value="certifications">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-6"
            >
              {[
                "Tech Vision Competition Certification",
                "Architecting Smart IoT Devices (Coursera)",
                "HTML Certification",
              ].map((cert, index) => (
                <motion.div key={cert} variants={itemVariants}>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full">
                          <Award className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{cert}</h3>
                          <p className="text-gray-600 dark:text-gray-400 mt-1">
                            {index === 0 && "Recognized for innovative technical solutions"}
                            {index === 1 && "Completed comprehensive IoT device architecture course"}
                            {index === 2 && "Proficiency in HTML web development"}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="interests">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-6"
            >
              <motion.div variants={itemVariants}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Sports</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {["Badminton", "Table Tennis", "Chess"].map((sport) => (
                        <div key={sport} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
                          <p className="text-gray-700 dark:text-gray-300 font-medium">{sport}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Extra-Curricular Activities
                    </h3>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 mt-1">•</div>
                        <p>Member of IEEE and Internal Complaints Committee (ICC)</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 mt-1">•</div>
                        <p>Served as Student Coordinator for ICACITES-24 (International Conference)</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 mt-1">•</div>
                        <p>Coordinator in the Cultural Fest</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  )
}
