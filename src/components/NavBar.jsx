// create a NavBar component , will have "About Me" , "Experience" , "Projects" , "Contact" links

import React from "react";
import { StyleSheet, css } from "aphrodite"

const NavBar = () => {
    return (
        <div className={css(styles.navbar)}>
            <div className={css(styles.navbarItem)}>Home</div>
            <div className={css(styles.navbarItem)}>About me</div>
            <div className={css(styles.navbarItem)}>Resume</div>
            {/* <div className={css(styles.navbarItem)}> Projects</div> */}
            <div className={css(styles.navbarItem)}>Contact</div>
        </div>
    );
}

const styles = StyleSheet.create({
    navbar: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: "50px",
        // zIndex: "1",
        // make it sticky


    },
    navbarItem: {
        fontFamily: "DM Sans",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "16px",
        lineHeight: "21px",
        color: '#FFFFFF',
        mixBlendMode: "overlay",
        letterSpacing: "0.04em",
        // minWidth: "80px",
        // add hover effect
        ":hover": {
            cursor: "pointer",
            mixBlendMode: "normal",
        }
    }
})

export default NavBar;