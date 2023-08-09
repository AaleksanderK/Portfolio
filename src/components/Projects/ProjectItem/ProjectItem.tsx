import { FC } from "react";
import "./projectItem.scss";
import { projectType } from "./constants";

const ProjectItem: FC<projectType> = ({
	image,
	description,
	link_code,
	link_project,
	title
}) => {
	return (
		<div className="container">
			<div className="project-container">
			<h2 className="title ">{title}</h2>

				<img src={image} alt="" className="project-img" />
				<div className="project-buttons">
					<a className="button-48" href={link_project} target="_blank">
						View project
					</a>
					<a className="button-48" href={link_code} target="_blank">
						View code
					</a>
				</div>
				<p className="title project-title">{description}</p>
			</div>
		</div>
	);
};

export default ProjectItem;
