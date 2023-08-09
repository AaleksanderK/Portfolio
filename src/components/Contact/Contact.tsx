import emailjs from "@emailjs/browser";
import "./contact.scss";
import { useRef } from "react";
import { motion } from "framer-motion";
import { buttonAnimation, titleAnimation } from "../../types/animation";

 



const Contact = () => {
	const form = useRef<any>();

	const sendEmail = (e: any) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_dxb3sov",
				"template_tt0yhub",
				form.current,
				"f53xFfkNjrSU6rpdQ"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<div className="container">
			<motion.div
				viewport={{ amount: 0.2 }}
				initial="hidden"
				whileInView="visible"
				className="contact-container">
				<motion.h2 variants={titleAnimation}  className="section__title title">Contact</motion.h2>

				<motion.form variants={buttonAnimation} custom={2} ref={form} onSubmit={sendEmail} className="form-container">
				 
					<input type="text" name="user_name" className="form_input" placeholder="Name"/>
					
					<input type="email" name="user_email" className="form_input" placeholder="Email"/>
 
                    <textarea name="message" placeholder="Message" className="form_input form_testarea" />
                    <motion.div variants={buttonAnimation} custom={2} viewport={{ amount: 1 }}>
					<button type="submit" value="Send" className="button-86 form_button">Send Message</button>
                    </motion.div>
				</motion.form>
			</motion.div>
		</div>
	);
};

export default Contact;
