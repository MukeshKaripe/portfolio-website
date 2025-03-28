import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClipLoader from "react-spinners/ClipLoader"; // Install: npm install react-spinners
import { Link } from "react-router-dom";
import watchlist from "../assets/watchlist.png";
import thapala from "../assets/thapala.png";
import engageto from "../assets/engageto.png";
import { LuExternalLink } from "react-icons/lu";


const CarouselCard: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const updateIsMobile = () => setIsMobile(window.innerWidth < 640);
        updateIsMobile(); // Set initial value
        window.addEventListener("resize", updateIsMobile);
        return () => window.removeEventListener("resize", updateIsMobile);
    }, []);
    const carouselData = [
        // {
        //     heading: "Title: WhatsApp Clone - Real Time Messaging App with Modern Features",
        //     description: `This WhatsApp Clone is a feature-rich messaging application designed with 
        //     a modern technology stack. It mirrors WhatsApp's core functionalities, offering secure user
        //     authentication, real-time chat, and media-sharing capabilities.`,
        //     bulletPoints: [
        //         "Full-stack implementation with modern tech stack like React, Nodejs, Express, MongoDB.",
        //         "Secure user authentication using OTP.",
        //         "Real-time chat functionality with Sockets using socket.io.",
        //         "One-on-one video calls with WebRTC.",
        //         "Responsive design using Tailwind CSS.",
        //         "Chat functionalities including user profile, group chats, individual chats, media sharing (photos, voice recordings), message replies, editing, and deletion.",
        //     ],
        //     link: "https://github.com/venu123143/whatsapp/",
        //     url: "https://whatsapp-mongo.onrender.com/",
        //     image: whatsapp,
        //     className: "object-cover"
        // },
        {
            heading: "Title: Engageto – Crafting conversations",
            description: `Engageto is The Game-Changing WhatsApp CRM Supercharge Your Conversations for Unstoppable Growth!`,
            bulletPoints: [
                "Individual Messaging: Connect with other traders directly through private one-on-one messages to exchange ideas and insights.",
                "Group Messaging: Join or create group chats for collective discussions, sharing updates, and brainstorming strategies.",
                "Clubs: Central hubs for sharing thoughts and ideas. Admins can post updates, share data, and communicate effectively with members.",
                "Linked Clubs: Unique feature allowing admins to create sub-clubs within a club for specialized discussions.",
                "Mentorship Programs: Integrated with clubs to enable experienced traders to guide others with videos, educational resources, and strategies.",
                "Interactive Sessions: Initiate one-on-one video calls or go live to engage followers and other users in real-time discussions.",
                "Advanced Notifications: Stay updated with real-time alerts for group activities, mentorship updates, and messages.",
                "Enhanced Search and Filters: Quickly find groups, messages, or posts tailored to your trading interests.",
                "User Customization: Personalize your experience with dark mode, light mode, and custom notification settings.",
                "Secure Communication: Built with privacy in mind, ensuring all chats and data are encrypted.",
            ],
            url: "https://engageto.com/",
            image: engageto,
            className: ""
        },
        {
            heading: "Title: Movie Watchlist App",
            description: `This Movie Watchlist  is a frontend development application that replicates 
            API integration, Search functionality, Create Movie watchlist functionalities. Designed with React, TypeScript, this Movie Watchlist were user can make 
            his own watch list.`,
            bulletPoints: [
                "Frontend development implementation with modern tech stack like React, Tailwind and Web responsive.",
                "User-friendly UI with advanced filtering and sorting.",
                "User authentication with options for login, register.",
                "Search for movies with an intuitive search functionality.",
                "Filter movies based on various criteria for a personalized movie experience.",
                "Ensure a responsive design that works seamlessly on all devices.",
                "Engage with insightful blogs to stay updated on the latest trends and movie information.",
                // Google login, and OTP login      "Secure payment integration.",
                // "Add items to your shopping cart.",
            ],
            link: "https://github.com/MukeshKaripe/movie-watchlist-app",
            url: "https://movie-watchlist-website.netlify.app/#/",
            image: watchlist,
            className: "object-contain"
        },
        {
            heading: "Title: Thapala - Your Internal Email Communication Solution",
            description: `Thapala is a streamlined email application designed for internal communication. 
            It allows users to send, receive, and draft emails seamlessly within the application using a unique 
            10-digit tCode as the email address. Built on a robust Node.js backend with MySQL database support.`,
            bulletPoints: [
                "Frontend Application for reliability and scalability.",
                "Used the sockets to send the email in real time.",
                "User authentication with options for login, register using tCode.",
                "Save images and files in the secure vault for easy access and management.",
                "Create labels like Gmail to organize emails into categories such as study, office, and personal.",
                "Design and use templates to draft or send emails efficiently.",
                "Customizable user settings, including dark mode, light mode, and system default themes.",
                "Advanced search and filtering for finding specific emails quickly.",
                "Real-time notifications for new emails and updates.",
            ],
            link: "https://github.com/shivam-ahex/Thapala_backend/tree/development",
            url: "https://tapp.ahexlab.com/#/",
            image: thapala,
            className: "object-fit"
        }

    ];

    const PrevArrow = (props: any) => {
        const { onClick } = props;
        return (
            <div
                style={{
                    color: "var(--text-primary)",
                }}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--accent-color)";
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                }}
                className="absolute top-1/2 left-6 z-10 transform rounded-full p-1 -translate-y-1/2 cursor-pointer"
                onClick={onClick}
            >
                <FaArrowLeft size={30} />
            </div>
        );
    };

    const NextArrow = (props: any) => {
        const { onClick } = props;
        return (
            <div
                style={{
                    color: "var(--text-primary)",
                }}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--accent-color)";
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                }}
                className="absolute top-1/2 right-6 z-10 p-1 transform -translate-y-1/2 cursor-pointer"
                onClick={onClick}
            >
                <FaArrowRight size={30} />
            </div>
        );
    };


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !isMobile,
        autoplay: true,
        autoplaySpeed: 300000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    // Simulate loading completion after assets are "loaded"
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500); // Simulate loading time
        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{ backgroundColor: "var(--background-color)" }} id="projects" className="w-full flex flex-col justify-center items-center font-inter container mx-auto px-4">
            <h2 className="page_title" style={{ color: "var(--text-primary)" }}>My Projects</h2>
            {loading ? (
                <div className="flex items-center justify-center">
                    <ClipLoader size={50} color="#4A90E2" />
                </div>
            ) : (
                <div className="w-full border-t-2 sm:border-l-2 shadow-retro rounded-lg">
                    <Slider {...settings}>
                        {carouselData.map((item, index) => (
                            <ProjectCard
                                key={index}
                                heading={item.heading}
                                description={item.description}
                                link={item.link}
                                image={item.image}
                                url={item.url}
                                bulletPoints={item.bulletPoints}
                                className={`${item.className} p-4`}
                            />
                        ))}
                    </Slider>
                </div>
            )}
        </div>
    );
};

interface CardProps {
    heading: string;
    description: string;
    link?: string;
    image: any | null;
    url: string | null;
    bulletPoints?: string[];
    className: string;
}


const ProjectCard: React.FC<CardProps> = ({ heading, description, link, image, url, bulletPoints, className }) => {
    return (
        <motion.div
            style={{ backgroundColor: "var(--card-bg)" }}
            className={"relative  rounded-lg  shadow-lg hover:shadow-2xl overflow-hidden transform transition duration-300 min-h-[976px] max-h-[976px] overflow-auto flex items-center"}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} >
            <div className="flex flex-col md:flex-row md:h-full items-center p-8">
                {/* Left Side: Image */}
                <div className="hidden md:flex md:w-2/5 p-4 h-full flex-shrink-0 justify-center items-center">
                    <img
                        src={image}
                        alt="Project Image"
                        className={`${className} h-full object-contain`}
                    />
                </div>

                {/* Right Side: Content */}
                <div className="p-2 lg:px-16 lg:py-12 h-full">
                    <div className="h-[90%] max-h-[800px] lg:max-h-unset overflow-y-auto pr-2">
                        <h2 style={{ color: "var(--accent-color)" }} className="text-xl font-bold mb-3 font-rubik">
                            {heading}
                        </h2>
                        <p style={{ color: "var(--text-primary)" }} className=" mb-4 font-rubik text-justify">
                            {description}
                        </p>
                        {bulletPoints && bulletPoints.length > 0 && (
                            <ul style={{ color: "var(--text-primary)" }} className="list-disc pl-6 mb-4 space-y-2 font-rubik">
                                {bulletPoints.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="flex mt-6">
                        {link && (
                            <Link
                                to={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="self-start ml-5 mt-auto w-fit space-x-4 flex items-center justify-center bg-gray-900 text-white px-6 py-3 rounded-lg cursor-pointer font-ubuntu hover:bg-zinc-950"
                            >
                                <FaGithub size={25} className="inline" />
                                <span> GitHub</span>
                            </Link>
                        )}
                        {url && (
                            <Link
                                to={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="self-start ml-5 mt-auto w-fit space-x-3 flex items-center justify-center bg-zinc-900 hover:bg-gray-900 text-white px-6 py-3 rounded-lg cursor-pointer font-ubuntu"
                            >
                                <LuExternalLink size={22} className="inline" />
                                <span>Url </span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CarouselCard;
