const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer-container">
			<p style={{ color: "red", fontWeight: "bold", textAlign: "center", fontSize: "16px", marginBottom: "-2px" }}>
				This app is in active development and is approximately 60% finished. Many features, styles, and
				functionality will be added, changed or removed. Currently compatible
				with larger screen sizes only.
			</p>
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
