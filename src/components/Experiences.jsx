import { StyleSheet, css } from "aphrodite";
import Prex from "./Prex";

const experiences = [
    {
        title: "Software Engineer Intern",
        company: "Cognam Technologies",
        date: "June 2022 - Nov 2022",
        // link: "https://www.youtube.com/watch?v=hBqxCILVLxQ&list=RDgH_RYRwVrVM&index=5&ab_channel=ZeeMusicCompany",
        points: [
            "Learnt various functions of ANTLR and implemented those for building a Linter for a Web Template Engine.",
            "Worked on various Type systems, Type inference, and scoping algorithms.",
            "Implemented various functions for syntax and semantic validators in Javascript.",
        ],

    },
    {
        title: "SDE Intern",
        company: "Oxytocin",
        date: "April 2022 - May 2022",
        // link: "https://www.youtube.com/watch?v=hBqxCILVLxQ&list=RDgH_RYRwVrVM&index=5&ab_channel=ZeeMusicCompany",
        points: [
            "Worked as a Fullstack Developer for an Ad making software product that is used by major companies like Spotify and Amazon.",
            "Created various APIs for the backend to retrieve data from the data server.",
            "Learned various skills and stacks like Node, Typescript,React, MySQL, and AWS(Amplify, S3), to build and deploy various services of the application.",
            "Took responsibility of the project throughout the whole pipeline and for end-to-end delivery of the product."
        ],

    },
    {
        title: "Wolfram India School Participant",
        company: "Wolfram Research",
        date: "Dec 2021 - Jan 2022",
        link: "https://www.google.com/url?q=https://community.wolfram.com/groups/-/m/t/2444809&sa=D&source=apps-viewer-frontend&ust=1679930176181344&usg=AOvVaw3VRW5aGF4p16f9WEyXX4WW&hl=en",
        points: [
            "It’s a 3-4 week long program where a student is paired with a mentor for a specific Project.",
            "Learned Basics of Wolfram Mathematica Language",
            "Using Wolfram for “Traffic sign recognition using NN” Project using GTSRB data.",
            "Building a CNN multiclass architecture for the above project using Wolfram Language.",
        ],

    },
    {
        title: "Spark AR Program Participant",
        company: "Facebook",
        date: "March 2020 - June 2020",
        points: [
            "Learned various aspects of AR.",
            "Used blender for 3d modeling and animation and JS to add interactive and dynamic features..",
            "Created Interactive AR effects that use touch and face gestures using Spark AR studio.",
        ],

    },

];

const Experiences = ({ experiencesRef }) => {
    return (
        <div ref={experiencesRef} className={css(styles.experiences)}>
            <div className={css(styles.experiences__title)}>
                Experiences
            </div>
            <div className={css(styles.experiences__list)}>
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
            </div>

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
        paddingLeft: "61px",
        borderBottom: "1px solid #183A58",
        marginTop: "25px",
        paddingBottom: "50px",
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
        flexWrap: "wrap",

    },
    experiences__list__item: {
        width: "auto",
        borderLeft: "2px solid rgb(246, 104, 60)",
        borderBottom: "2px solid rgb(246, 104, 60)",
        borderRight: "2px solid rgb(246, 104, 60)",
        borderRadius: "45px",

        ":hover": {
            // cursor: "pointer",
            scale: "1.05",
            // make transition smooth
            transition: "all 0.5s ease-in-out",
        }
        // put some shadow here
    },
});
