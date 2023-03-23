import { StyleSheet, css } from "aphrodite"
import Crystal_two from "../assets/Crystal_two.png"
const AboutMe = () => {
    return (
        <div className={css(styles.aboutMe)}>
            <div className={css(styles.aboutMe__title)}>
                About Me
            </div>
            <div className={css(styles.aboutMe__content)}>
                <div className={css(styles.aboutMe__content__text)}>
                    Hi there! My name is Shallom, and I am a highly creative and driven product designer with a passion for designing innovative and user-friendly products. With over 5 years of experience in the industry, I have developed a unique skill set that allows me to turn complex concepts into intuitive and beautiful designs that people love to use.
                    <br /> <br />
                    I have a strong background in Graphics design, and I always stay up to date with the latest design trends and technology. My design philosophy is centered around empathy and understanding the needs of the end-user, and I take a user-centered approach to all my projects to ensure that every design solves real-world problems and meets the needs of the target audience.
                    <br /> <br />
                    Throughout my career, I have worked with a diverse range of clients, from startups to Tech companies, and I have consistently delivered high-quality designs that have exceeded their expectations. I have a knack for communicating complex ideas to stakeholders, and I am skilled at managing the design process from start to finish, including conducting user research, prototyping, and testing.
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
        paddingLeft: "31px",
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
