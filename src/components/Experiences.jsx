import { StyleSheet, css } from "aphrodite";
import Prex from "./Prex";

const experiences = [
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


const Experiences = () => {
    return (
        <div className={css(styles.experiences)}>
            <div className={css(styles.experiences__title)}>
                Experiences
            </div>
            {/* <div className={css(styles.experiences__list)}>
              
            </div> */}
            <marquee
                id="marquee"
                onMouseOver={() => {
                    document.getElementById("marquee").stop()
                }}

                onMouseOut={() => {
                    document.getElementById("marquee").start()
                }}
                behavior="scroll" direction="left" >
                {experiences.map((experience, index) => (
                    <div key={index} className={css(styles.experiences__list__item)}>
                        <Prex
                            title={experience.title}
                            company={experience.company}
                            date={experience.date}
                            points={experience.points}
                            link={experience.link}
                        />
                    </div>
                ))}
            </marquee>
        </div>

    );
};


export default Experiences;

const styles = StyleSheet.create({
    experiences: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "25px",
        paddingLeft: "31px",
        borderBottom: "1px solid #183A58",
    },
    experiences__title: {
        fontFamily: "DM Sans",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "50px",
        lineHeight: "65px",
        color: "#FFFFFF",
    },
    experiences__list: {
        display: "flex",
        flexDirection: "row",
        gap: "25px",
    },
    experiences__list__item: {
        // width: "100%",
    },
});
