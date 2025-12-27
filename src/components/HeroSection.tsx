import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
import TypewriterText from "./TypewriterText";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        {/* Photo Placeholder */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border-4 border-primary/30 bg-secondary/50 flex items-center justify-center overflow-hidden relative group">
            <img src="/mypic.jpg" alt="Chunit Bansal" className="w-full h-full object-cover" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-muted-foreground text-base sm:text-lg mb-2 sm:mb-4 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
              <span className="gradient-text">Chunit Bansal</span>
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 h-8">
              <TypewriterText
                texts={["Student", "Coder", "Web Developer", "Problem Solver"]}
              />
            </div>
            <motion.p
              className="text-muted-foreground max-w-xl mx-auto md:mx-0 mb-8 sm:mb-12 leading-relaxed text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Passionate about building elegant solutions and solving complex problems
              through code. Currently focused on web development and competitive programming.
            </motion.p>

            <motion.div
              className="flex gap-3 sm:gap-4 justify-center md:justify-start flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="#projects"
                className="px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base gradient-bg text-primary-foreground rounded-lg font-medium"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px hsl(var(--primary) / 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base border border-border rounded-lg font-medium hover:bg-secondary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
              <motion.a
                href="/assets/mycv_tex.pdf"
                download
                className="px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base border border-primary/50 rounded-lg font-medium hover:bg-primary/10 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} className="sm:w-5 sm:h-5" />
                Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-7 w-7 sm:h-8 sm:w-8" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
