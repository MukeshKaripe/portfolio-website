import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CiLocationArrow1, CiGps } from "react-icons/ci";
import { useTheme } from "../contexts/ThemeContext";

// Define the type for an experience object
interface Experience {
    date: string;
    title: string;
    company_name: string;
    icon?: React.ReactNode;
    iconBg?: string; // Optional, background color for the icon
    points: string[]; // List of points describing the experience
}

// Define the type for props of the component
interface ExperienceCardProps {
    experience: Experience;
    theme?: "light" | "dark"; // Theme can be 'light' or 'dark'
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
    experience,
    theme = "light",
}) => {
    const isLightMode = theme === "light";

    return (
        <VerticalTimelineElement
            contentStyle={{
                background: isLightMode ? "#fff" : "#232631", // Updated to match the background color from the header
                color: isLightMode ? "#333" : "#fff",
            }}
            contentArrowStyle={{
                borderRight: `7px solid ${isLightMode ? "#F8F7F3" : "#232631"}`, // Arrow color adjusted to match background
            }}
            date={experience.date}
            iconStyle={{
                background: isLightMode ? "#FDC435" : experience.iconBg || "#232631", // Button color matches header color
            }}
            icon={
                experience.icon ? (
                    experience.icon
                ) : (
                    <CiLocationArrow1 />
                )}>
            <div>
                <h3
                    className={`${isLightMode ? "text-gray-800" : "text-white"
                        } text-[24px] font-rubik font-[700]`}
                >
                    {experience.title}
                </h3>
                <p
                    className={`${isLightMode ? "text-gray-600" : "text-textPrimary"
                        } text-[16px] font-noto font-semibold`}
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>

            <ul className="mt-5 list-disc text-justify ml-5 space-y-2">
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className={`${isLightMode ? "text-gray-700" : "text-white-100"
                            } text-[14px] pl-1 tracking-wider font-noto`}
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};


const Experience = () => {
    const { state } = useTheme();

    const experiences = [
        {
            date: "Feb 2023 - Present",
            title: "Associate Software Engineer",
            company_name: "Ahex Technologies.",
            icon: <CiLocationArrow1 />,
            iconBg: "#FDC435",
            points: [
                "Expertise in React.js and UI development. Worked with REST APIs, GraphQL , Sockets etc.",
                "Optimized application performance by refactoring code and improving algorithms.",
                "Worked with multiple Frame Works like MUI, Shadcn, Bootstrap, PrimeNG and Ant Design.",
                "Worked with UI Development in Angular projects.",
                "Used TypeScript in every project.",
            ],
        },
        {
            date: "Sep 2022 - Jan 2023",
            title: "Naresh IT Training",
            company_name: "Naresh IT Hyderabad",
            icon: <CiGps />,
            iconBg: "#4CAF50",
            points: [
                "Took comprehensive training in React.js, JavaScript, Core JAVA, HTML5, and CSS3.",
                "Focused on mastering foundational and advanced concepts over 5 months.",
            ],
        },
    ];

    return (
        <>
            <VerticalTimeline lineColor="green">

                {experiences.map((experience, index) => (
                    <ExperienceCard
                        key={`experience-${index}`}
                        experience={experience}
                        theme={state.theme}

                    />
                ))}
            </VerticalTimeline>
        </>
    );
};
export default Experience;
