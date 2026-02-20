import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer
            id="contact"
            className="border-t py-10 text-center text-gray-500"
        >
            <div className="flex justify-center gap-6 mb-4 text-xl">
                <FaGithub />
                <FaTwitter />
                <FaLinkedin />
            </div>
            <p>© 2026 Landing Page.</p>
        </footer>
    );
};

export default Footer;
