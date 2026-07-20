import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { SectionWrapper } from '../hoc';
import { industrialProjects } from '../constants';
import { styles } from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';

const IndustrialProjectCard = ({
  title,
  company,
  summary,
  contributions,
  techStack,
  index,
}) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.18, 0.75)}
      className="group relative flex h-full min-h-[520px] flex-col overflow-hidden rounded-[28px]
      border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]
      p-6 shadow-[0_20px_60px_rgba(0,0,0,0.32)] transition-transform duration-300
      hover:-translate-y-1 sm:p-7"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(197,183,168,0.2),transparent_35%),linear-gradient(180deg,rgba(16,16,18,0.96),rgba(8,8,10,0.98))]" />
      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-french/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[3px] w-12 rounded-full bg-french" />
            <p className="font-poppins text-[11px] uppercase tracking-[4px] text-[#cfbeb0] sm:text-[12px]">
              {company}
            </p>
          </div>
          <h3 className="font-beckman text-[24px] font-bold uppercase leading-[1.05] text-timberWolf sm:text-[30px]">
            {title}
          </h3>
        </div>

        <p
          className="mt-5 text-[14px] leading-[25px] tracking-[0.2px] text-silver
          font-poppins sm:text-[15px]"
        >
          {summary}
        </p>

        <div className="mt-6 flex-1 rounded-[22px] border border-white/8 bg-black/20 p-5">
          <h4 className="text-[12px] font-semibold uppercase tracking-[3px] text-french">
            Key Contributions
          </h4>
          <ul className="mt-4 flex flex-col gap-3 text-[13px] leading-[23px] text-silver font-poppins sm:text-[14px] sm:leading-[24px]">
            {contributions.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-[8px] h-2 w-2 shrink-0 rounded-full bg-timberWolf" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {techStack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#6d6d74] bg-night/80 px-3 py-2
              text-[11px] font-semibold uppercase tracking-[2px] text-timberWolf"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

IndustrialProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  contributions: PropTypes.arrayOf(PropTypes.string).isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

const IndustrialProjects = () => {
  return (
    <div className="mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>Professional Work</p>
        <h2 className={styles.sectionHeadTextLight}>Industrial Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
        >
          Production work delivered across my professional roles, including
          e-commerce platforms, internal business systems, and learning
          management solutions built for real business use cases.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="mx-auto mt-[50px] grid w-full max-w-[1450px] grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
          {industrialProjects.map((project, index) => (
            <IndustrialProjectCard key={project.id} index={index} {...project} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(IndustrialProjects, 'industrial-projects');
