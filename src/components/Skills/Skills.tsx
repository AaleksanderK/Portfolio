import { motion } from 'framer-motion';
import './skills.scss'
import SkillItem from './Skill/SkillItem';
import js from '../../assets/skills/js.svg'
import ts from '../../assets/skills/ts.svg'
import api from '../../assets/skills/api.svg'
import css from '../../assets/skills/css.svg'
import scss from '../../assets/skills/scss.svg'
import html from '../../assets/skills/html.svg'
import react from '../../assets/skills/react.svg'
import redux from '../../assets/skills/redux.svg'
import webpack from '../../assets/skills/webpack.svg'
// import reduxSaga from '../../assets/skills/redux-saga.svg'


const textAnimation = {
	hidden: {
		y: 0,
		opacity: 0,
	},
	visible:{
		y: 50,
		opacity: 1,
	 
	},
};

const Skills = () => {
    return (<div className='container'>
        <motion.div   viewport={{ amount: 0.2 }}
				initial="hidden"
				whileInView="visible" className="skills-container">

			<motion.h2 variants={textAnimation} className="section__title title">Skills</motion.h2>
			<div className='skills-item-container'>
			<SkillItem title={'JavaScript'} image={js}/>
			<SkillItem title={'TypeScript'} image={ts}/>
			<SkillItem title={'React'} image={react}/>
			<SkillItem title={'Redux'} image={redux}/>
			{/* <SkillItem title={'Redux-Saga'} image={reduxSaga}/> */}
			<SkillItem title={'HTML'} image={html}/>
			<SkillItem title={'CSS'} image={css}/>
			<SkillItem title={'SCSS'} image={scss}/>
			<SkillItem title={'REST API'} image={api}/>
			<SkillItem title={'Webpack'} image={webpack}/>
			</div>
        </motion.div>
    </div> );
}
 
export default Skills;