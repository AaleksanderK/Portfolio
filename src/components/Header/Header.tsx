import { useState } from "react";
import "./header.scss";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
	return (
		<div className="header">
			<div className="title" >
			<Link
					activeClass="active"
					to="home"
					spy={true}
					smooth={true}
					offset={0}
					duration={600}>
				{"<"}A.Keizerov{"/>"}
				</Link>
			</div>
			<div className="header-nav">

				<Link
					activeClass="active"
					to="skills"
					spy={true}
					smooth={true}
					offset={0}
					duration={600}>
					Skills
			</Link>
			<Link
					activeClass="active"
					to="projects"
					spy={true}
					smooth={true}
					offset={-70}
					duration={600}>
					MyProjects
			</Link>
			<Link
					activeClass="active"
					to="contact"
					spy={true}
					smooth={true}
					offset={-70}
					duration={600}>
					Contact
				</Link>
			</div>

		</div>
	);
};

export default Header;
