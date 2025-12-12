import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import TypewriterText from "./TypewriterText";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-6"
    >
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-muted-foreground text-lg mb-4 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm
          </motion.p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Your Name</span>
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-8">
            <TypewriterText
              texts={["Student", "Coder", "Web Developer", "Problem Solver"]}
            />
          </div>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Passionate about building elegant solutions and solving complex problems
            through code. Currently focused on web development and competitive programming.
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 gradient-bg text-primary-foreground rounded-lg font-medium"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px hsl(var(--primary) / 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
