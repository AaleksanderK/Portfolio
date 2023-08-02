import { motion } from "framer-motion";
import { Button } from "../Button/Button";
import { GitHubIcon } from "../../assets/IconsSocial/GithubIcon";
import { LinkedInIcon } from "../../assets/IconsSocial/LinkedInIcon";
import { TelegramIcon } from "../../assets/IconsSocial/TelegramIcon";
import "./home.scss";

const textAnimation = {
	hidden: {
		x: -100,
		opacity: 0,
	},
	visible: (custom: any) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
};

// const imageAnimation = {
//     hidden: {
// 		x: 100,
// 		opacity: 0,
// 	},
// 	visible: (custom: any) => ({
// 		x: 0,
// 		opacity: 1,
// 		transition: { delay: custom * 0.2 },
// 	}),
// }


export const Home = () => {
	const photo = require("../../assets/sticker.webp");
	return (
		<div className="container">
            <motion.div
                viewport={{ amount: 0.2 }}
				initial="hidden"
				whileInView="visible"
				className="home"
				id="home">
				<div className="home__block-title">
					<motion.h2 custom={1} variants={textAnimation} className="title">
						Hello{" "}
						<img
							src={require("../../assets/Hello.gif")}
							alt=""
							className="hello"
						/>
						, I'm
					</motion.h2>
					<motion.h1 custom={2} variants={textAnimation} className="title name">
						Aleksandr Keizerov
					</motion.h1>
					<motion.h2 custom={3} variants={textAnimation} className="title">
						FrontEnd Developer
                    </motion.h2>
                    <motion.div custom={4} variants={textAnimation} className="home__social">

					<Button />
					<motion.div custom={4} variants={textAnimation} className="home__social">
						<a
							href="https://github.com/AaleksanderK"
							target="_blank"
							className="home__social-icon">
							<GitHubIcon />
						</a>
						<a
							href="https://t.me/kap994"
							target="_blank"
							className="home__social-icon">
							<TelegramIcon />
						</a>
						<a
							href="https://www.linkedin.com/in/aleksandr-keizerov-575123250/"
							target="_blank"
							className="home__social-icon">
							<LinkedInIcon />
						</a>
					</motion.div>
                                </motion.div>
				</div>
				<div className="photo-container">
					<img src={photo} alt="myPhoto" className="photo" />
				</div>
			</motion.div>
		</div>
	);
};
