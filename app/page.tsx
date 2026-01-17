'use client';

import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  BarChart3, 
  Rocket, 
  Award,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Briefcase,
  Calendar,
  MapPin,
  Trophy,
  GraduationCap,
  TrendingUp,
  Download,
  FileText
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const skills = [
    { icon: Code2, name: 'AI & Machine Learning', desc: 'Building intelligent systems with TensorFlow, RAG, and LLMs for real-world applications' },
    { icon: Rocket, name: 'Backend Development', desc: 'Designing scalable systems with Python, Flask, Django, and cloud technologies' },
    { icon: Award, name: 'Computer Vision', desc: 'Developing real-time detection systems using YOLOv8, OpenCV, and advanced algorithms' },
    { icon: BarChart3, name: 'Data Analytics', desc: 'Extracting insights from complex datasets using statistical modeling and visualization' }
  ];

  const experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'Cantos Inc',
      location: 'Manhattan, NY',
      period: 'Dec 2025 - Jan 2026',
      date: 'Winter 2025-2026',
      description: 'Engineered a TypeScript POI filtering system for NavVis IVION that streamlined management of 500+ construction site markers through an intuitive sidebar interface',
      highlights: ['TypeScript POI filtering', 'NavVis IVION integration', 'Real-time filters', 'CSV import workflows'],
      impact: 'Presented at ACE Winter 2026 Conference, generated industry interest and pilot adoption'
    },
    {
      title: 'Research Assistant',
      company: 'UMass Amherst CICS Lab',
      location: 'Amherst, MA',
      period: 'Oct 2025 - Present',
      date: 'Present',
      description: 'Developing autonomous drone control systems using PX4 Autopilot with sub-10ms latency for defense applications',
      highlights: ['MAVLink communication', 'Real-time telemetry', 'Waypoint navigation'],
      impact: 'Building next-gen autonomous UAV systems'
    },
    {
      title: 'Data Analytics Extern',
      company: 'TruBridge Healthcare',
      location: 'Remote',
      period: 'Aug 2025 - Sep 2025',
      date: 'Fall 2025',
      description: 'Analyzed large healthcare datasets using Python for statistical modeling and data-driven insights',
      highlights: ['Interactive dashboards', 'LLM-powered analysis', 'Healthcare data visualization'],
      impact: 'Delivered actionable insights for healthcare teams'
    },
    {
      title: 'AI Workflow Automation Extern',
      company: 'Outamation',
      location: 'Remote',
      period: 'Jun 2025 - Aug 2025',
      date: 'Summer 2025',
      description: 'Built modular AI pipelines processing 200+ page documents using OCR, RAG, and LLMs',
      highlights: ['15s processing improvement', 'LlamaIndex integration', 'Mistral & Phi-2 LLMs'],
      impact: 'Reduced document processing time by 15 seconds'
    }
  ];

  const achievements = [
    { icon: Trophy, label: 'GPA', value: '3.94/4.0', emoji: '🏆' },
    { icon: Award, label: 'AWS Certified', value: 'Cloud Practitioner', emoji: '☁️' },
    { icon: GraduationCap, label: 'Dean\'s List', value: 'UMass Amherst', emoji: '📚' },
    { icon: TrendingUp, label: 'Projects', value: '10+ Completed', emoji: '🚀' }
  ];

  const projects = [
    {
      title: 'IoT Rack Monitoring & Cooling Optimization',
      description: 'Real-time IoT dashboard monitoring 100+ server racks with KMeans clustering for anomaly detection and cooling optimization',
      tech: ['React', 'Flask', 'KMeans', 'IoT Sensors', 'Data Visualization'],
      link: 'https://github.com/Sahilgulati2006/Energy-Usage-Clustering-for-Cooling-Optimization'
    },
    {
      title: 'Stock Analysis & Portfolio System',
      description: 'Real-time stock analysis platform with sentiment analysis processing 1K+ posts daily, boosting prediction accuracy by 25%',
      tech: ['Python', 'DistilBERT', 'Polygon.io', 'NLP', 'Yahoo Finance'],
      link: 'https://github.com/Sahilgulati2006/Stock-Analysis-and-Portfolio-Management-System'
    },
    {
      title: 'Code Intelligence Search Engine',
      description: 'Self-hosted semantic code search platform using AI embeddings for natural language and code-to-code search across indexed repositories',
      tech: ['FastAPI', 'React', 'TypeScript', 'Qdrant', 'CodeBERT', 'Docker', 'Python'],
      link: 'https://github.com/Sahilgulati2006/Code-Intelligence-Search-Engine'
    },
    {
      title: 'WildFire Detection System',
      description: 'AI-powered wildfire detection using YOLOv8 with automatic emergency alerts, reducing false positives by 40%',
      tech: ['YOLOv8', 'Flask', 'OpenCV', 'Twilio API', 'Computer Vision'],
      link: 'https://github.com/chaudharycoding/Lume'
    },
    {
      title: 'Autonomous UAV Control System',
      description: 'Drone control system using PX4 Autopilot with sub-10ms latency for high-speed defense applications',
      tech: ['Python', 'PX4 Autopilot', 'MAVLink', 'Real-time Systems'],
      link: '#'
    }
  ];

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-blue-950 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      </div>

      {/* Animated Mesh Gradient Orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-[float_8s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-[float_7s_ease-in-out_infinite]" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-indigo-500/25 rounded-full mix-blend-multiply filter blur-3xl animate-[float_9s_ease-in-out_infinite]" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Fun Floating Emoji */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] text-4xl opacity-20 animate-[float_8s_ease-in-out_infinite]">💻</div>
        <div className="absolute top-[20%] right-[10%] text-3xl opacity-20 animate-[float_10s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}>🚀</div>
        <div className="absolute bottom-[30%] left-[8%] text-3xl opacity-20 animate-[float_12s_ease-in-out_infinite]" style={{ animationDelay: '4s' }}>⚡</div>
        <div className="absolute top-[60%] right-[15%] text-4xl opacity-20 animate-[float_9s_ease-in-out_infinite]" style={{ animationDelay: '1s' }}>🎯</div>
        <div className="absolute bottom-[20%] right-[20%] text-3xl opacity-20 animate-[float_11s_ease-in-out_infinite]" style={{ animationDelay: '3s' }}>🧠</div>
        <div className="absolute top-[40%] left-[12%] text-3xl opacity-20 animate-[float_7s_ease-in-out_infinite]" style={{ animationDelay: '5s' }}>✨</div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 -z-10 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative">

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6 hover:scale-110 transition-transform duration-300 hover:bg-purple-500/20 cursor-default">
              <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
              <span className="text-purple-300 text-sm font-medium">✨ Open to Summer 2026 Internships ✨</span>
            </div>
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-default"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            Sahil Gulati
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl text-purple-200 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Computer Engineering @ UMass Amherst
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Passionate about building intelligent systems that make a real impact. From autonomous drones to AI-powered analytics,
            I transform complex problems into elegant solutions using cutting-edge technology.
          </motion.p>

          {/* Profile Image - Square, Natural Look */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12 flex justify-center"
          >
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-300 animate-[pulse_3s_ease-in-out_infinite]"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/profile.png"
                  alt="Sahil Gulati"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full group-hover:brightness-110 transition-all duration-300"
                  priority
                />
              </div>
              {/* Fun emoji badges */}
              <div className="absolute -top-4 -right-4 text-4xl animate-bounce">🎓</div>
              <div className="absolute -bottom-4 -left-4 text-4xl animate-[bounce_2s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }}>💼</div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span>Amherst, MA</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-purple-400" />
              <span>Class of 2027</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-purple-400" />
              <span>Chancellor&apos;s Award Recipient</span>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a 
              href="/Sahil-Gulati-Resume.pdf" 
              download
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-white hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-110 hover:-translate-y-1"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume 📄
            </a>
            <a 
              href="#projects" 
              className="group px-8 py-4 border-2 border-purple-400/50 rounded-full font-semibold text-white hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-2 hover:scale-110 hover:border-purple-400"
            >
              View My Work 🚀
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border-2 border-purple-400/50 rounded-full font-semibold text-white hover:bg-purple-500/10 transition-all duration-300 hover:scale-110 hover:border-purple-400"
            >
              Get In Touch 💬
            </a>
          </motion.div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Core Expertise
            </h2>
            <p className="text-xl text-gray-300">
              Specialized skills in AI/ML, autonomous systems, and full-stack development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08, rotate: 1 }}
                className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer hover:bg-white/5 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <skill.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{skill.name}</h3>
                <p className="text-gray-300">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Achievements Section */}
      <section className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="glass-effect rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer group hover:bg-white/10"
              >
                <div className="text-4xl mb-2 group-hover:animate-bounce">{achievement.emoji}</div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{achievement.value}</div>
                <div className="text-sm text-gray-400">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" className="py-24 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Professional Journey
            </h2>
            <p className="text-xl text-gray-300">
              Building real-world AI solutions and autonomous systems
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                } md:w-1/2`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-auto md:right-[-1.6rem] top-6 w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full border-4 border-slate-950 z-10 flex items-center justify-center md:translate-x-1/2">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>

                {/* Content Card */}
                <div className="ml-20 md:ml-0 md:mr-16">
                  <div className="glass-effect rounded-2xl p-6 hover:scale-105 hover:rotate-1 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer hover:bg-white/5">
                    {/* Date Badge */}
                    <div className="inline-block px-4 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold mb-4">
                      {exp.date}
                    </div>

                    <div className="flex items-start gap-3 mb-3">
                      <Briefcase className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-lg text-purple-300 mb-2">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                      <span className="mx-2">•</span>
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                    {/* Impact Statement */}
                    <div className="bg-blue-500/10 border-l-4 border-blue-500 rounded-r px-4 py-3 mb-4">
                      <p className="text-blue-200 text-sm font-medium">
                        💡 {exp.impact}
                      </p>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span 
                          key={highlight}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300">
              A selection of work that showcases my capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:justify-items-center gap-6">
            {projects.map((project, index) => {
              const hasLink = project.link && project.link !== '#';
              const Component = hasLink ? motion.a : motion.div;
              const linkProps = hasLink ? {
                href: project.link,
                target: "_blank",
                rel: "noopener noreferrer"
              } : {};

              return (
                <Component
                  key={project.title}
                  {...linkProps}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`glass-effect rounded-2xl p-6 hover:scale-110 hover:-translate-y-2 transition-all duration-300 group hover:shadow-2xl hover:shadow-purple-500/30 hover:bg-white/5 block ${hasLink ? 'cursor-pointer' : ''}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    {hasLink && <ExternalLink className="w-5 h-5 text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Component>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Skills Section - Compact */}
      <section id="skills" className="py-16 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Technical Skills
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Languages */}
              <div>
                <h3 className="text-lg font-bold text-purple-300 mb-3 flex items-center gap-2">
                  <span>💻</span> Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'C/C++', 'SQL', 'JavaScript', 'TypeScript', 'HTML/CSS'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-lg text-sm hover:bg-purple-500/30 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* AI/ML */}
              <div>
                <h3 className="text-lg font-bold text-pink-300 mb-3 flex items-center gap-2">
                  <span>🤖</span> AI & ML
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['TensorFlow', 'PyTorch', 'OpenCV', 'YOLOv8', 'scikit-learn', 'Hugging Face', 'RAG', 'LlamaIndex'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-pink-500/20 text-pink-200 rounded-lg text-sm hover:bg-pink-500/30 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frameworks */}
              <div>
                <h3 className="text-lg font-bold text-blue-300 mb-3 flex items-center gap-2">
                  <span>⚙️</span> Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Flask', 'Django', 'Next.js', 'React', 'FastAPI', 'Docker'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-lg text-sm hover:bg-blue-500/30 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h3 className="text-lg font-bold text-orange-300 mb-3 flex items-center gap-2">
                  <span>🔧</span> Tools & Cloud
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'AWS', 'Linux', 'PostgreSQL', 'pandas', 'NumPy', 'Jupyter'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-orange-500/20 text-orange-200 rounded-lg text-sm hover:bg-orange-500/30 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s Create Something Amazing
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Open to research opportunities, internships, and collaborative projects in AI/ML, autonomous systems, and software engineering.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <a 
                href="mailto:sahilgulati241@gmail.com" 
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-white hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <a 
                href="https://github.com/Sahilgulati2006" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 border-2 border-purple-400/50 rounded-full font-semibold text-white hover:bg-purple-500/10 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/sahil-gulati-b991a62a2/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 border-2 border-purple-400/50 rounded-full font-semibold text-white hover:bg-purple-500/10 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>

            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center mb-16"
            >
              <a 
                href="/Sahil-Gulati-Resume.pdf" 
                download
                className="group flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-white hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 text-lg border-2 border-white/20"
              >
                <FileText className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Download Full Resume
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Sahil Gulati. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

