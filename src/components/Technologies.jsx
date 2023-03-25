import { StyleSheet, css } from "aphrodite";
import Box from "./Box";
// create technologies array
const technologies = {
    "C": `https://img.icons8.com/color/512/c-programming.png`,
    "CPP": `https://img.icons8.com/fluency/512/c-plus-plus-logo.png`,
    "Python": `https://img.icons8.com/color/512/python.png`,
    "Java": `https://img.icons8.com/color/512/java-coffee-cup-logo.png`,
    "Javascript": `https://img.icons8.com/color/512/javascript.png`,
    "React": `https://img.icons8.com/color/512/react-native.png`,
    "Node": `https://img.icons8.com/color/512/nodejs.png`,
    "Express": `https://img.icons8.com/color/512/express-js.png`,
    "MongoDB": `https://img.icons8.com/color/512/mongodb.png`,
    "MySQL": `https://img.icons8.com/color/512/mysql-logo.png`,
    "HTML": `https://img.icons8.com/color/512/html-5.png`,
    "CSS": `https://img.icons8.com/color/512/css3.png`,
    "Typescript": `https://img.icons8.com/color/512/typescript.png`,
    "Git": `https://img.icons8.com/color/512/git.png`,
}

const Technologies = () => {
    return (
        // use marque tag to create a scrolling effect for all the technologies and enclose it in a box
        <div className={css(styles.aboutMe)}>
            <div className={css(styles.aboutMe__title)}>
                Technologies
            </div>
            <Box>
                <marquee
                    id="marquee"
                    onMouseOver={() => {
                        document.getElementById("marquee").stop()
                    }}

                    onMouseOut={() => {
                        document.getElementById("marquee").start()
                    }}
                    behavior="scroll" direction="left" >
                    {Object.keys(technologies).map((technology) => (

                        <img className={css(styles.technologies_icon)}
                            src={technologies[technology]} alt={technology} />
                    ))}
                </marquee>
            </Box>
        </div>

    );
};

export default Technologies;

const styles = StyleSheet.create({

    technologies_icon: {
        width: "90px",
        height: "90px",
        margin: "0px 40px 0px 40px",

        // on hover increase the size of the icon and display the name of the technology
        ":hover": {
            cursor: "pointer",
            width: "100px",
            height: "100px",
            // make transition smooth
            transition: "all 0.5s ease-in-out",
            // display the name of the technology

        }
    },
    aboutMe: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "25px",
        paddingLeft: "31px",
        borderBottom: "1px solid #183A58",
        paddingRight: "31px",
    },
    aboutMe__title: {

        fontFamily: "DM Sans",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "50px",
        lineHeight: "65px",
        color: "#FFFFFF",
        marginTop: "25px",
    },

});
