import { StyleSheet, css } from "aphrodite";
import Prex from "./Prex";

const projects = [
    {
        title: "LearnSpac-Learning Platform",
        company: "IIT Goa",
        date: "Jan 2023 - Present",
        // link: "https://www.youtube.com/watch?v=hBqxCILVLxQ&list=RDgH_RYRwVrVM&index=5&ab_channel=ZeeMusicCompany",
        points: [
            "Project under School of Mathematics and Computer Science IIT GOA.",
            "Creating a web application where institutes can register and create courses for their students.",
            "Provide an integrated editor to write and test code for coding exercises.",
            "Using MERN Stack for Developing Platform.",
        ],

    },
    {
        title: "Zilla-Management Tool",
        company: "IIT Goa",
        date: "Jan 2022 - Feb 2022",
        link: "https://github.com/razorblade42/zilla-management-tool",
        points: [
            "Project Management cum Planning Tool where users can make, organize and edit notes.",
            "Made using React.js Frontend Framework, HTML, CSS, MaterialUI",
            "Implemented interactive and intuitive UX elements from beautiful color-coded stickies to features like Drag n Drop, Sorting, Selecting, Bookmark etc",
            "Users can also arrange their notes into relevant groups.",
        ],

    },
    {
        title: "COVID-19 SEIR Model",
        company: "IIT Goa",
        date: "May 2019 - July 2019",
        link: "https://github.com/razorblade42/SEIR-model-for-COVID19",
        points: [
            "Designing a SEIR model of epidemic spread for COVID-19 by using real-time data to analyze and predict the spread.",
            "The MATLAB project uses the data from John Hopkins University database and retrieves data for infected, dead, and removed.",
            "The fit SEIR model can be used to predict the further spread of disease and its consequences given other parameters remain almost constant",
        ],

    },
    {
        title: "Unsupervised Chunking for Hindi",
        company: "IIT Goa",
        date: "Feb 2021 - April 2021",
        link: "https://github.com/razorblade42/unsupervised-chunking",
        points: [
            "Designing an unsupervised algorithm for chunking (identification of similar syntactic units) sentences in Hindi.",
            "Exploring Phrase-based unsupervised chunking algorithms from the n-gram Frequency model to K-means Clustering.",
            "Creating language chunks in Hindi using an unannotated trained dataset.",
            "Aims to reduce dependencies on hand annotation of data (as done with English), which is expensive and time-consuming.",
        ],

    },
    {
        title: "Group Chat Application",
        company: "IIT Goa",
        date: "Feb 2021 - March 2021",
        link: "https://github.com/razorblade42/Group-Chat-application",
        points: [
            "Implemented both Client and Server TCP logic using Python Socket Library.",
            "Made a user-friendly GUI using the Tkinter library present in Python for the Client side.",
            "Used the concept of multithreading to handle multiple clients at the same time.",
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
