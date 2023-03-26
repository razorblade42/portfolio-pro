// create a NavBar component , will have "About Me" , "Experience" , "Projects" , "Contact" links

import React from "react";
import { StyleSheet, css } from "aphrodite"

const NavBar = ({ onClickAboutMe, onClickFooter, onClickExperiences, onClickProjects }) => {
    return (
        <div className={css(styles.navbar)}>
            <div
                onClick={onClickAboutMe}
                className={css(styles.navbarItem)}>About me</div>
            <div
                onClick={onClickExperiences}
                className={css(styles.navbarItem)}>Experiences</div>
            <div
                onClick={onClickProjects}
                className={css(styles.navbarItem)}>Projects</div>
            <div
                onClick={(e) => {
                    e.preventDefault();
                    // open a new tab with the resume
                    window.open
                        (
                            "https://drive.google.com/file/d/1iJpwRJTziQSgtqx5-yV6Sq0m_mUUswg-/view", "_blank"
                        )
                }}
                className={css(styles.navbarItem)}>Resume</div>
            {/* <div className={css(styles.navbarItem)}> Projects</div> */}
            <div
                onClick={onClickFooter}
                className={css(styles.navbarItem)}>Contact</div>
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