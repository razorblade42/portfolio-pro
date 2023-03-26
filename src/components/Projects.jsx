import { StyleSheet, css } from "aphrodite";
import Prex from "./Prex";

const projects = [
    {
        title: "Software Engineer Intern",
        company: "Cognizant",
        date: "May 2021 - Present",
        link: "https://www.youtube.com/watch?v=hBqxCILVLxQ&list=RDgH_RYRwVrVM&index=5&ab_channel=ZeeMusicCompany",
        points: [
            "Developed a web application for a client using React, Node.js, and MongoDB.",
            "Implemented a REST API using Node.js and Express.js.",
            "Designed and implemented a MongoDB database using Mongoose.",
            "Implemented a user authentication system using JSON Web Tokens.",
            "Implemented a user interface using React and Material-UI.",
            "Implemented a user interface using React and Material-UI.",
        ],

    },
    {
        title: "Software Engineer Intern",
        company: "Cognizant",
        date: "May 2021 - Present",
        link: "https://www.youtube.com/watch?v=hBqxCILVLxQ&list=RDgH_RYRwVrVM&index=5&ab_channel=ZeeMusicCompany",
        points: [
            "Developed a web application for a client using React, Node.js, and MongoDB.",
            "Implemented a REST API using Node.js and Express.js.",
            "Designed and implemented a MongoDB database using Mongoose.",
            "Implemented a user authentication system using JSON Web Tokens.",
            "Implemented a user interface using React and Material-UI.",
            "Implemented a user interface using React and Material-UI.",
        ],

    },
    {
        title: "Software Engineer Intern",
        company: "Cognizant",
        date: "May 2021 - Present",
        link: "https://www.youtube.com/watch?v=hBqxCILVLxQ&list=RDgH_RYRwVrVM&index=5&ab_channel=ZeeMusicCompany",
        points: [
            "Developed a web application for a client using React, Node.js, and MongoDB.",
            "Implemented a REST API using Node.js and Express.js.",
            "Designed and implemented a MongoDB database using Mongoose.",
            "Implemented a user authentication system using JSON Web Tokens.",
            "Implemented a user interface using React and Material-UI.",
            "Implemented a user interface using React and Material-UI.",
        ],

    },
    {
        title: "Software Engineer Intern",
        company: "Cognizant",
        date: "May 2021 - Present",
        link: "https://www.youtube.com/watch?v=hBqxCILVLxQ&list=RDgH_RYRwVrVM&index=5&ab_channel=ZeeMusicCompany",
        points: [
            "Developed a web application for a client using React, Node.js, and MongoDB.",
            "Implemented a REST API using Node.js and Express.js.",
            "Designed and implemented a MongoDB database using Mongoose.",
            "Implemented a user authentication system using JSON Web Tokens.",
            "Implemented a user interface using React and Material-UI.",
            "Implemented a user interface using React and Material-UI.",
        ],

    },

];

const Projects = ({ projectsRef }) => {
    return (
        <div ref={projectsRef} className={css(styles.projects)}>
            <div className={css(styles.projects__title)}>
                Projects
            </div>
            <div className={css(styles.projects__list)}>
                {projects.map((experience, index) => (
                    <div key={index} className={css(styles.projects__list__item)}>
                        <Prex
                            title={experience.title}
                            company={experience.company}
                            date={experience.date}
                            points={experience.points}
                            link={experience.link}
                        />
                    </div>
                ))}
            </div>

        </div>

    );
};


export default Projects;

const styles = StyleSheet.create({
    projects: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "25px",
        paddingLeft: "61px",
        borderBottom: "1px solid #183A58",
        marginTop: "25px",
        paddingBottom: "50px",
    },
    projects__title: {
        fontFamily: "DM Sans",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "50px",
        lineHeight: "65px",
        color: "#FFFFFF",
    },
    projects__list: {
        display: "flex",
        flexDirection: "row",
        gap: "25px",
        flexWrap: "wrap",

    },
    projects__list__item: {
        width: "auto",
        borderLeft: "2px solid rgb(246, 104, 60)",
        borderBottom: "2px solid rgb(246, 104, 60)",
        borderRight: "2px solid rgb(246, 104, 60)",
        borderRadius: "45px",
        // put some shadow here
        ":hover": {
            // cursor: "pointer",
            scale: "1.05",
            // make transition smooth
            transition: "all 0.5s ease-in-out",
        }
    },
});
