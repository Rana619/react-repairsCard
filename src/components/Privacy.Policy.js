import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopBar from "./commonComponents/Top.bar";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "50px 50px 80px",
        "& h3": {
            fontSize: "26px",
            color: "#575252",
            fontWeight: "500",
            marginTop: "45px"
        },
        "& p": {
            fontSize: "18px",
            fontWeight: "450",
            marginTop: "20px"
        },
        "& h4": {
            fontSize: "18px",
            fontWeight: "450",
            marginTop: "10px"
        },
        "& ul": {
            marginLeft: "40px",
            marginTop: "20px"
        },
        "& li": {
            fontSize: "18px",
            fontWeight: "450",
            marginTop: "10px"
        }
    }
}));

const PrivacyPolicy = (props) => {
    const classes = useStyles();
    return (
        <div>
            <TopBar />
            <div className={classes.root}>
                <h2
                    style={{
                        fontSize: "29px",
                        fontWeight: "490",
                        marginBottom: "30px"
                    }}
                >Privacy Policy</h2>
                <p>
                    This Privacy Policy is prepared by [COMPANY NAME] and whose registered address is [COMPANY ADDRESS] (“We”) are committed to protecting and preserving the privacy of our visitors when visiting our site or communicating electronically with us.
                </p>
                <p>
                    This policy sets out how we process any personal data we collect from you or that you provide to us through our website and social media sites. We confirm that we will keep your information secure and comply fully with all applicable [ORIGIN COUNTRY] Data Protection legislation and regulations. Please read the following carefully to understand what happens to personal data that you choose to provide to us, or that we collect from you when you visit our sites. By submitting information you are accepting and consenting to the practices described in this policy.
                </p>


                <h3>
                    Types of information we may collect from you
                </h3>
                <p>
                    We may collect, store and use the following kinds of personal information about individuals who visit and use our website and social media sites:
                </p>
                <p>
                    <b>Information you supply to us.</b> You may supply us with information about you by filling in forms on our website or social media. This includes information you provide when you submit a contact/inquiry form. The information you give us may include but is not limited to, your name, address, e-mail address, and phone number.
                </p>

                <h3>
                    How we may use the information we collect
                </h3>
                <h4>
                    We use the information in the following ways:
                </h4>
                <h4>
                    <b>Information you supply to us.</b> We will use this information:
                </h4>
                <ul>
                    <li>to provide you with information and/or services that you request from us;</li>
                    <li>To contact you to provide the information requested.</li>
                </ul>



                <h3>
                    Disclosure of your information
                </h3>
                <p>
                    Any information you provide to us will either be emailed directly to us or may be stored on a secure server.
                </p>
                <p>
                    We do not rent, sell or share personal information about you with other people or non-affiliated companies.
                </p>
                <p>
                    We will use all reasonable efforts to ensure that your personal data is not disclosed to regional/national institutions and authorities unless required by law or other regulations.
                </p>
                <p>
                    Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted to our site; any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorized access.
                </p>


                <h3>
                    Your rights – access to your personal data
                </h3>
                <p>
                    You have the right to ensure that your personal data is being processed lawfully (“Subject Access Right”). Your subject access right can be exercised in accordance with data protection laws and regulations. Any subject access request must be made in writing to [insert contact details]. We will provide your personal data to you within the statutory time frames. To enable us to trace any of your personal data that we may be holding, we may need to request further information from you. If you complain about how we have used your information, you have the right to complain to the Information Commissioner’s Office (ICO).
                </p>


                <h3>
                    Changes to our privacy policy
                </h3>
                <p>
                    Any changes we may make to our privacy policy in the future will be posted on this page and, where appropriate, notified to you by e-mail. Please check back frequently to see any updates or changes to our privacy policy.
                </p>


                <h3>
                    Contact
                </h3>
                <p>
                    Questions, comments, and requests regarding this privacy policy are welcomed and should be addressed to [name and address or e-mail address].
                </p>
            </div>
        </div>
    );
};
export default PrivacyPolicy;