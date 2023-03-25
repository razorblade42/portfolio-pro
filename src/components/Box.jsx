import { css, StyleSheet } from "aphrodite";

const Box = ({ children }) => (
    <div className={css(styles.box)}>
        {children}
    </div>
);

export default Box;

const styles = StyleSheet.create({
    box: {
        backgroundColor: "#183A58",
        borderRadius: "45px",
        // boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.1)",
        padding: "20px",
        // margin: "20px",
        marginBottom: "50px",
    },
});