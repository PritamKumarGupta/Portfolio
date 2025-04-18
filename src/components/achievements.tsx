"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Award, BadgeIcon as Certificate } from "lucide-react"

export default function Achievements() {
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
    <section id="achievements" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recognition of my skills, knowledge, and contributions in various technical fields.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Award className="h-6 w-6 mr-2" />
                Notable Achievements
              </h3>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full mt-1">
                        <Award className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                      </div>
                      <div>
                        <h4 className="text-xl font-medium text-gray-900 dark:text-white">
                          1st Rank (Gold Medal) in AKTU Zonal Level Junkyard War Competition
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">Greater Noida Zone</p>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">
                          Achieved first place in a competitive engineering challenge that tested problem-solving
                          skills, creativity, and technical knowledge.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full mt-1">
                        <Award className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                      </div>
                      <div>
                        <h4 className="text-xl font-medium text-gray-900 dark:text-white">
                          Participated in State Level Junkyard War Competition
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">Lucknow</p>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">
                          Selected to represent the zone at the state level competition, demonstrating advanced
                          engineering skills and innovative thinking.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Certificate className="h-6 w-6 mr-2" />
                Certifications
              </h3>
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                        Tech Vision Competition Certification
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Recognized for innovative technical solutions and creative problem-solving abilities.
                      </p>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                        Architecting Smart IoT Devices
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Coursera certification for designing and implementing IoT solutions.
                      </p>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">HTML Certification</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Proficiency in HTML web development and structure.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Award className="h-6 w-6 mr-2" />
                Leadership & Involvement
              </h3>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full mt-1">
                        <div className="h-4 w-4 bg-gray-700 dark:bg-gray-300 rounded-full"></div>
                      </div>
                      <div>
                        <p className="font-medium">Member of IEEE and Internal Complaints Committee (ICC)</p>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          Active participation in professional engineering organization and contributing to maintaining
                          a positive academic environment.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full mt-1">
                        <div className="h-4 w-4 bg-gray-700 dark:bg-gray-300 rounded-full"></div>
                      </div>
                      <div>
                        <p className="font-medium">Student Coordinator for ICACITES-24 (International Conference)</p>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          Managed and coordinated aspects of an international academic conference, demonstrating
                          leadership and organizational skills.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full mt-1">
                        <div className="h-4 w-4 bg-gray-700 dark:bg-gray-300 rounded-full"></div>
                      </div>
                      <div>
                        <p className="font-medium">Coordinator in the Cultural Fest</p>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          Helped organize and manage cultural events, showcasing event management and teamwork
                          abilities.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
