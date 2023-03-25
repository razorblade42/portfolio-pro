import { StyleSheet, css } from "aphrodite"
import './Globals.css'
const Hero = () => {
    return (
        <div className={css(styles.hero)}>
            <div className={css(styles.hero__image_container)}>
                HI
            </div>
            <div className="wrapper">
                <div className="static-txt" >
                    Himanshu Here, I am a
                    <ul className="dynamic-txts">
                        <li><span>Full Stack Developer</span></li>
                        <li><span>Frontend Developer</span></li>
                        <li><span>Backend Developer</span></li>
                        <li><span>App Developer</span></li>
                        <li><span>UI/UX Designer</span></li>
                    </ul>
                    {/* <span className={css(styles.hero__text_highlight)}>Full Stack Developer</span> */}
                </div>
                <div className={css(styles.hero__text2)}>

                </div>
            </div>

            <div className={css(styles.hero__list)}>
                <div className={css(styles.hero__list_element)}>
                    Frontend Development
                </div>
                <div className={css(styles.hero__list_element)}>
                    Backend Development
                </div>
                <div className={css(styles.hero__list_element)}>
                    App Development
                </div>
                <div className={css(styles.hero__list_element)}>
                    UI/UX Design
                </div>
            </div>
        </div>
    );
};

export default Hero;

const styles = StyleSheet.create({
    hero: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "20px",
        width: "100%",
    },
    hero__image_container: {

        width: "485px",

        fontFamily: "DM Sans",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "369px",
        // lineHeight: "651px",
        color: "#FFFFFF",
        mixBlendMode: "overlay",
    },
    hero__text: {
        position: "absolute",
        // left: '80px',
        top: '551px',
        fontFamily: "DM Sans",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "50px",
        lineHeight: "55px",
        color: "#FFFFFF",
        width: '565px',
        // every line should start from beginning
        textAlign: "left",
        // letterSpacing: "0.04em",
    },
    hero__list: {
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: "27px",
        // left: '80px',
        top: '730px'
    },
    hero__list_element: {
        fontFamily: "DM Sans",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "16px",
        lineHeight: "21px",
        color: "#FFFFFF",
        letterSpacing: "0.04em",
        // mixBlendMode: "overlay",
        // width: "59px",
        height: "42px",
        borderBottom: "7px solid #F6683C",

    },
    hero__text_highlight: {
        fontSize: "57px",
        color: "#FFFFFF",
        mixBlendMode: "overlay",
    },
    hero__text2: {

        position: "absolute",
        width: "287px",
        height: "21.12px",
        // left: "402px",
        top: "650px",
        border: "10px solid #F6683C",
    }
});