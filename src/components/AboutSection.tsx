import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Terminal, Zap } from "lucide-react";

const skills = [
  { name: "JavaScript", icon: Code2 },
  { name: "TypeScript", icon: Code2 },
  { name: "React", icon: Zap },
  { name: "Node.js", icon: Terminal },
  { name: "Python", icon: Terminal },
  { name: "C++", icon: Terminal },
  { name: "HTML/CSS", icon: Palette },
  { name: "Git", icon: Code2 },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              A Passionate Student Developer
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a student with a deep passion for coding and web development. 
              My journey in programming started with curiosity and has evolved into 
              a commitment to building clean, efficient, and user-friendly applications.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I actively participate in competitive programming platforms to sharpen 
              my problem-solving skills. I believe in continuous learning and staying 
              updated with the latest technologies and best practices.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or solving algorithmic challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-6">Technologies & Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors cursor-default"
                >
                  <skill.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
