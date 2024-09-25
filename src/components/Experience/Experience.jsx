import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  // Split the skills into categories
  const frontendSkills = skills.filter(skill => skill.category === "frontend");
  const backendSkills = skills.filter(skill => skill.category === "backend");
  const toolsSkills = skills.filter(skill => skill.category === "tools");

  return (
    <section className={styles.container} id="experience">
      <div className={styles.content}>
        <div className={styles.section}>
          <h3 className={styles.subtitle}>Frontend</h3>
          <div className={styles.skills}>
            {frontendSkills.map((skill, id) => (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.subtitle}>Backend</h3>
          <div className={styles.skills}>
            {backendSkills.map((skill, id) => (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.subtitle}>Tools & Languages</h3>
          <div className={styles.skills}>
            {toolsSkills.map((skill, id) => (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
