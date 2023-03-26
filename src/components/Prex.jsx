import Box from "./Box";
import { css, StyleSheet } from "aphrodite";

const Prex = (description) => (
    console.log(description),
    <Box className={css(styles.prex__box)}>
        <div className={css(styles.prex)}>
            <div className={css(styles.prex__heading)}>
                <div className={css(styles.prex__title)}>
                    {description.title}
                </div>
                <div className={css(styles.prex__date)}>
                    {description.date}
                </div>
            </div>
            <div className={css(styles.prex__company)}>
                {description.company}
            </div>
            <div className={css(styles.prex__description)}>
                {/* iterate over list elements */}
                {description.points.map((item, index) => (
                    <div key={index} className={css(styles.prex__description__item)}>
                        {item}
                    </div>
                ))}
            </div>
            {
                description.link &&

                <a href={description.link} target="_blank" rel="noopener noreferrer">
                    <img className={css(styles.prex__link)} src="https://img.icons8.com/color/512/github--v1.png" alt="github" />
                </a>

            }
        </div>
    </Box>
);

export default Prex;
const styles = StyleSheet.create({

    prex: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "flex-start",
        gap: "10px",
        padding: "20px",
        maxWidth: "580px",
        height: "auto",
        color: "#FFFFFF",
        minHeight: "360px",

    },
    prex__heading: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
        width: "100%",
        height: "auto",
    },
    prex__title: {
        fontSize: "1.2rem",
        fontWeight: "bold",

    },
    prex__link: {
        marginTop: "10px",
        width: "35px",
        height: "35px",
    },
    prex__description: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: "10px",
        maxWidth: "95%",
        height: "auto",
        padding: "19px",
        // border: "5px solid rgb(246, 104, 60)",
        // borderRadius: "10px",
        fontStyle: "italic",

    },
    prex__description__item: {
        fontSize: "1rem",
        textAlign: "left",
        whiteSpace: "pre-wrap",
    },
    prex__company: {
        color: "rgb(246, 104, 60)",
        fontSize: "1.3rem",
    },
    prex__date: {
        color: "rgb(246, 104, 60)",
        fontSize: "1.2rem",
        fontWeight: "bold",
    },
});


