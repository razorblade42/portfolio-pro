import { StyleSheet, css } from "aphrodite"
import Crystal_two from "../assets/Crystal_two.png"
const AboutMe = ({ aboutMeRef }) => {
    return (
        <div ref={aboutMeRef} className={css(styles.aboutMe)}>
            <div className={css(styles.aboutMe__title)}>
                About Me
            </div>
            <div className={css(styles.aboutMe__content)}>
                <div className={css(styles.aboutMe__content__text)}>
                    Hello! My name is Himanshu, and I am a recent Computer Science graduate from IIT Goa. I have gained valuable experience in various software development roles and worked on several projects that have enhanced my technical skills and problem-solving abilities.
                    <br /> <br />
                    During my six-month internship at Cognam Technologies, I learned about the ANTLR and implemented those functions for building a Linter for a Web Template Engine. In addition, I worked on various Type systems, Type inference, and scoping algorithms, and implemented various functions for syntax and semantic validators in JavaScript. This experience has equipped me with a deep understanding of software development processes, tools, and techniques.
                    <br /> <br />
                    In my previous role as an SDE Intern at Oxytocin, I worked as a Fullstack Developer for an Ad-making software product that is used by major companies like Spotify and Amazon. I created various APIs for the backend to retrieve data from the data server and learned various skills and stacks like Node, Typescript, React, MySQL, and AWS(Amplify, S3) to build and deploy various services of the application. I also took responsibility for the project throughout the whole pipeline and for the end-to-end delivery of the product.
                </div>
                <div className={css(styles.aboutMe__content__image)}>
                    <img src={Crystal_two} alt="Crystal" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;

const styles = StyleSheet.create({
    aboutMe: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "25px",
        paddingLeft: "61px",
        borderBottom: "1px solid #183A58",
    },
    aboutMe__title: {

        fontFamily: "DM Sans",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "50px",
        lineHeight: "65px",
        color: "#FFFFFF",

    },
    aboutMe__content: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: "50px",

    },
    aboutMe__content__image: {
    },
    aboutMe__content__text: {
        fontFamily: "DM Sans",
        fontStyle: "normal",
        // fontWeight: "300",
        fontSize: "20px",
        lineHeight: "30px",
        color: "#FFFFFF",
        textAlign: "start",
    },
});
