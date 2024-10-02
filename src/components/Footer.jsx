//import footer from "../assets/img/footer.svg";
import twitter from "../assets/img/twitter-footer.svg";
import instagram from "../assets/img/instagram-footer.svg";
import facebook from "../assets/img/facebook-footer.svg";


const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<div className="max-w-full bg-[#08072D] pt-24 pb-12">
			<div className="max-w-[1440px] px-2 md:px-5 2xl:px-[122px] mx-auto flex flex-col gap-y-[60px] items-center">
				<img
					src=""
					className="mx-auto"
                    alt="logo"
				/>
				<ul className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-2 gap-x-4 items-center flex-wrap text-white text-[15px] font-poppins">
					<li>The Team</li>
					<li>Community</li>
					<li>Contact</li>
				</ul>
				<div className="flex items-center gap-x-4">
					<img src={facebook} />
					<img src={twitter} className="ms-1"/>
					<img src={instagram} />
				</div>
				<p className="text-white text-[12px] font-poppins mt-10">
					Jobly {year}
				</p>
			</div>
		</div>
	);
};

export default Footer;
