import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const platforms = [
  {
    name: "LeetCode",
    username: "c_coder07",
    description: "Algorithmic problem solving and interview preparation",
    color: "from-[#FFA116] to-[#FFB84D]",
    url: "https://leetcode.com/u/C_coder07/",
    icon: "LC",
  },
  {
    name: "CodeChef",
    username: "c_coder_07",
    description: "Competitive programming contests and practice",
    color: "from-[#5B4638] to-[#8B7355]",
    url: "https://www.codechef.com/users/c_coder_07",
    icon: "CC",
  },
  {
    name: "Codeforces",
    username: "c_bansal",
    description: "Competitive programming and algorithmic challenges",
    color: "from-[#1F8ACB] to-[#5CB3E8]",
    url: "https://codeforces.com/profile/c_bansal",
    icon: "CF",
  },
];

const PlatformsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="platforms" className="py-32 px-6 bg-secondary/30" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Coding <span className="gradient-text">Platforms</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out my profiles on competitive programming platforms where I
            practice problem-solving and participate in contests.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-card rounded-2xl p-8 border border-border overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                {/* Platform icon */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center mb-6 text-primary-foreground font-bold text-xl`}
                >
                  {platform.icon}
                </div>

                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  {platform.name}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                <p className="text-primary font-mono text-sm mb-3">
                  @{platform.username}
                </p>

                <p className="text-muted-foreground text-sm">
                  {platform.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl group-hover:scale-150 transition-transform duration-500" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
