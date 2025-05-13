const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer>
			<h3>Hand-coded and Maintained by MJF - {currentYear}</h3>
			<div>
				<a href="https://github.com/mjfru" target="_blank">
					Github
				</a>
				<a href="https://mjfru-webdev-port.vercel.app/" target="_blank">
					Developer Portfolio
				</a>
			</div>
		</footer>
	);
};

export default Footer;
