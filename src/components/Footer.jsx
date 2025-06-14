const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer-container">
			<h3>Hand-coded and Maintained by MJF - {currentYear}</h3>
			<div className="personal-link-container">
				<a href="https://github.com/mjfru" target="_blank">
					Github
				</a>
				<a href="https://mjfru-webdev-port.vercel.app/" target="_blank">
					Developer Portfolio
				</a>
			</div>
				<p>
					This project is focused on helping users learn and appreciate the
					diversity of Cyrillic alphabets and the cultures that use them. All
					countries, languages, and cultures are approached with respect and
					neutrality.
				</p>
		</footer>
	);
};

export default Footer;
