
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const educationData = [
  {
    degree: 'B.Tech in Information Technology, IIIT Allahabad',
    period: '2024 – 2028',
    details: 'CGPA: ',
    score: '9.36',
    extra: ' (Top 5% of batch)',
  },
  {
    degree: 'Class XII (CBSE) – BCM Arya Model Sr. Sec. School, Ludhiana',
    period: '2023 – 2024',
    details: 'Score: ',
    score: '93%',
    extra: '',
  },
  {
    degree: 'Class X (CBSE) – BCM Arya Model Sr. Sec. School, Ludhiana',
    period: '2021 – 2022',
    details: 'Score: ',
    score: '98%',
    extra: '',
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-32 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full mb-6" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                className="flex flex-col md:flex-row justify-between"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              >
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                  <p className="text-muted-foreground mt-1">
                    {edu.details}<span className="gradient-text font-bold">{edu.score}</span>{edu.extra}
                  </p>
                </div>
                <div className="md:text-right flex-shrink-0">
                  <p className="font-mono text-sm text-muted-foreground">{edu.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
