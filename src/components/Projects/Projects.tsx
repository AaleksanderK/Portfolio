import { titleAnimation } from "../../types/animation";
import ProjectItem from "./ProjectItem/ProjectItem";
import "./projects.scss";
import { motion } from "framer-motion";
// import pinterest from '../../assets/projects/pinterest.jpg'
import { projectType } from "./ProjectItem/constants";
import { FC } from "react";

interface IprojectProps {
	data: projectType[];
}

const Projects: FC<IprojectProps> = ({ data }) => {
	return (
		<div className="container">
			<motion.div
				viewport={{ amount: 0.2 }}
				initial="hidden"
				whileInView="visible"
				className="projects-container">
				<motion.h2 variants={titleAnimation} className="section__title title">
					My Projects
				</motion.h2>
				<div className="project-items">
					{/* <ProjectItem image={pinterest} />
            <ProjectItem image={pinterest} />
            <ProjectItem image={pinterest} /> */}
					{data.map((el) => (
						<ProjectItem
							image={el.image}
							description={el.description}
							link_code={el.link_code}
                            link_project={el.link_project}
                            title={el.title}
						/>
					))}
				</div>
			</motion.div>
		</div>
	);
};

export default Projects;
