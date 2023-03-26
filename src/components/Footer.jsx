import { StyleSheet, css } from "aphrodite";
import footer from "../assets/footer.png";
import { MapPin, Phone, FacebookLogo, InstagramLogo, EnvelopeSimple, LinkedinLogo } from "phosphor-react";

const links = {
    facebook: "https://www.facebook.com/crystal.lee.581",
    instagram: "https://www.instagram.com/crystal_lee_581/",
    email: "mailto:araj00990@gmail.com",
    linkedin: "https://www.linkedin.com/in/crystal-lee-581/",
}

const Footer = ({ footerRef }) => {
    return (
        <div ref={footerRef} className={css(styles.footer__main)}>
            <div className={css(styles.footer)}>
                <div className={css(styles.footer__content__title)}>
                    Contact Me
                </div>
                <div className={css(styles.footer__content__image)}>
                    <img src={footer} alt="Crystal" />
                </div>
            </div>
            <div className={css(styles.footer__content__description)}>
                Lets connect and talk about building
                your project together.
            </div>
            <div className={css(styles.footer__end)}>
                <div className={css(styles.footer__end_text)}>
                    <MapPin size={30} weight="bold" color="#F6683C" />
                    <div className={css(styles.footer__end_text__address)}>
                        1234 Street Name, City Name, United States
                    </div>
                </div>
                <div className={css(styles.footer__end_text)}>
                    <Phone size={30} weight="bold" color="#F6683C" />
                    <div className={css(styles.footer__end_text__address)}>
                        +1 234 567 890
                    </div>
                </div>
                <div className={css(styles.footer__end__social)}>
                    <a href={links.facebook} target="_blank" rel="noopener noreferrer">
                        <FacebookLogo size={30} weight="bold" color="#F6683C" />
                    </a>
                    <a href={links.instagram} target="_blank" rel="noopener noreferrer">
                        <InstagramLogo size={30} weight="bold" color="#F6683C" />
                    </a>
                    <a href={links.email} target="_blank" rel="noopener noreferrer">
                        <EnvelopeSimple size={30} weight="bold" color="#F6683C" />
                    </a>
                    <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                        <LinkedinLogo size={30} weight="bold" color="#F6683C" />
                    </a>

                </div>
                <div className={css(styles.footer__end_text__copyright)}>
                    Copyright © 2023 • Himanshu • All Rights Reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;

const styles = StyleSheet.create({
    footer__main: {
        display: "flex",
        flexDirection: "row",
        paddingTop: "25px",
    },
    footer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start"

    },
    footer__content__image: {
    },
    footer__content__title: {
        position: "absolute",
        width: "188px",

        color: "#FFFFFF",
        fontFamily: "DM Sans",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "50px",
        lineHeight: "65px",
        paddingLeft: "61px",
    },
    footer__content__description: {
        width: "270px",
        height: "42px",
        fontFamily: "DM Sans",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "16px",
        lineHeight: "21px",
        color: "#FFFFFF",
        paddingTop: "165px",
        position: "absolute",
        left: "276px",
    },
    footer__end: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingLeft: "40%",
        paddingTop: "50px",
        color: "#FFFFFF",
        gap: "15px",
    },
    footer__end_text: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "10px",
        // paddingBottom: "20px",
    },
    footer__end__social: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "20px",

    },
    footer__end_text__copyright: {
        fontFamily: "DM Sans",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "16px",
        lineHeight: "21px",
        color: "#FFFFFF",
        paddingTop: "60px",
        mixBlendMode: "overlay",
    },

});