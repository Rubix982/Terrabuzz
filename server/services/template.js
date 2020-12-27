const HTMLResetPasswordForm = (__hashedLink, __title, __content, __description, __route, __buttonText) => (`
<head>
    <title>Rating Reminder</title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
    <meta content="width=device-width" name="viewport">
    <style type="text/css">
        @font-face {
            font-family: 'Postmates Std';
            font-weight: 600;
            font-style: normal;
            src: local('Postmates Std Bold'), url(https://s3-us-west-1.amazonaws.com/buyer-static.postmates.com/assets/email/postmates-std-bold.woff) format('woff');
        }

        @font-face {
            font-family: 'Postmates Std';
            font-weight: 500;
            font-style: normal;
            src: local('Postmates Std Medium'), url(https://s3-us-west-1.amazonaws.com/buyer-static.postmates.com/assets/email/postmates-std-medium.woff) format('woff');
        }

        @font-face {
            font-family: 'Postmates Std';
            font-weight: 400;
            font-style: normal;
            src: local('Postmates Std Regular'), url(https://s3-us-west-1.amazonaws.com/buyer-static.postmates.com/assets/email/postmates-std-regular.woff) format('woff');
        }
    </style>
    <style media="screen and (max-width: 680px)">
        @media screen and (max-width: 680px) {
            .page-center {
                padding-left: 0 !important;
                padding-right: 0 !important;
            }

            .footer-center {
                padding-left: 20px !important;
                padding-right: 20px !important;
            }
        }
    </style>
</head>

<body style="background-color: #f4f4f5;">
    <table cellpadding="0" cellspacing="0"
        style="width: 100%; 
        height: 100%; 
        background-color: #f4f4f5; 
        text-align: center;">
        <tbody>
            <tr>
                <td style="text-align: center;">
                    <table align="center" cellpadding="0" cellspacing="0" id="body"
                        style="background-color: #fff; 
                        width: 100%; 
                        max-width: 680px; 
                        height: 100%;">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" cellpadding="0" cellspacing="0" class="page-center"
                                        style="text-align: left;
                                        padding-bottom: 88px;
                                        width: 100%;
                                        padding-left: 120px;
                                        padding-right: 120px;
                                        ">
                                        <tbody>
                                            <tr>
                                                <td style="padding-top: 24px;">
                                                    <img src="https://res.cloudinary.com/fast-nuces/image/upload/v1608151739/terrabuzz_vjjjyw.png"
                                                        style="width: 144px; height: 144px;">
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2"
                                                    style="padding-top: 72px; 
                                                    -ms-text-size-adjust: 100%; 
                                                    -webkit-font-smoothing: 
                                                    antialiased; 
                                                    -webkit-text-size-adjust: 100%; 
                                                    color: #000000; 
                                                    font-family: 'Postmates Std', 'Helvetica', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; 
                                                    font-size: 48px; 
                                                    font-smoothing: always; 
                                                    font-style: normal; 
                                                    font-weight: 600; 
                                                    letter-spacing: -2.6px; 
                                                    line-height: 52px;
                                                    mso-line-height-rule: exactly; 
                                                    text-decoration: none;">
                                                    ${__title}</td>
                                            </tr>
                                            <tr>
                                                <td style="padding-top: 48px; padding-bottom: 48px;">
                                                    <table cellpadding="0" cellspacing="0" style="width: 100%">
                                                        <tbody>
                                                            <tr>
                                                                <td
                                                                    style="width: 100%;
                                                                    height: 1px;
                                                                    max-height: 1px;
                                                                    background-color: #d9dbe0;
                                                                    opacity: 0.81">
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="-ms-text-size-adjust: 100%;
                                                    -ms-text-size-adjust: 100%;
                                                    -webkit-font-smoothing: antialiased;
                                                    -webkit-text-size-adjust: 100%;
                                                    color: #9095a2;
                                                    font-family: 'Postmates Std', 'Helvetica', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
                                                    font-size: 16px;
                                                    font-smoothing: always;
                                                    font-style: normal;
                                                    font-weight: 400;
                                                    letter-spacing: -0.18px;
                                                    line-height: 24px;
                                                    mso-line-height-rule: exactly;
                                                    text-decoration: none;
                                                    vertical-align: top;
                                                    width: 100%;
                                                    ">
                                                    ${__content}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="padding-top: 24px;
                                                    -ms-text-size-adjust: 100%;
                                                    -ms-text-size-adjust: 100%;
                                                    -webkit-font-smoothing: antialiased;
                                                    -webkit-text-size-adjust: 100%;
                                                    color: #9095a2;
                                                    font-family: 'Postmates Std', 'Helvetica', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
                                                    font-size: 16px;
                                                    font-smoothing: always;
                                                    font-style: normal;
                                                    font-weight: 400;
                                                    letter-spacing: -0.18px;
                                                    line-height: 24px;
                                                    mso-line-height-rule: exactly;
                                                    text-decoration: none;
                                                    vertical-align: top;
                                                    width: 100%;
                                                    ">
                                                    ${__description}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a data-click-track-id="37" href="${process.env.CLIENT_URL}/${__route}/${__hashedLink}"
                                                        style="margin-top: 36px; 
                                                        -ms-text-size-adjust: 100%; 
                                                        -ms-text-size-adjust: 100%; 
                                                        -webkit-font-smoothing: antialiased; 
                                                        -webkit-text-size-adjust: 100%; 
                                                        color: #ffffff; 
                                                        font-family: 'Postmates Std', 'Helvetica', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; 
                                                        font-size: 12px; 
                                                        font-smoothing: always; 
                                                        font-style: normal; 
                                                        font-weight: 600; 
                                                        letter-spacing: 0.7px; 
                                                        line-height: 48px; 
                                                        mso-line-height-rule: exactly; 
                                                        text-decoration: none; 
                                                        vertical-align: top; 
                                                        width: 220px; 
                                                        background-color: #00cc99; 
                                                        border-radius: 28px; 
                                                        display: block; 
                                                        text-align: center; 
                                                        text-transform: uppercase"
                                                        target="_blank">
                                                        ${__buttonText}
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" cellpadding="0" cellspacing="0" id="footer"
                        style="background-color: #000; width: 100%; max-width: 680px; height: 100%;">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" cellpadding="0" cellspacing="0" class="footer-center"
                                        style="text-align: left;
                                        width: 100%;
                                        padding-left: 120px;
                                        padding-right: 120px;
                                        ">
                                        <tbody>
                                            <tr>
                                                <td colspan="2"
                                                    style="padding-top: 72px; padding-bottom: 24px; width: 100%;">
                                                    <h1 style="width: 124px; height: 20px; color: white;">Terrabuzz</h1>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" 
                                                style="
                                                padding-top: 24px; 
                                                padding-bottom: 48px;">
                                                    <table cellpadding="0" cellspacing="0" style="width: 100%">
                                                        <tbody>
                                                            <tr>
                                                                <td
                                                                    style="width: 100%; 
                                                                    height: 1px; 
                                                                    max-height: 1px; 
                                                                    background-color: #EAECF2; 
                                                                    opacity: 0.19">
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="-ms-text-size-adjust: 100%; 
                                                    -ms-text-size-adjust: 100%; 
                                                    -webkit-font-smoothing: antialiased; 
                                                    -webkit-text-size-adjust: 100%; 
                                                    color: #9095A2; 
                                                    font-family: 'Postmates Std', 'Helvetica', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; 
                                                    font-size: 15px; 
                                                    font-smoothing: always; 
                                                    font-style: normal; 
                                                    font-weight: 400; 
                                                    letter-spacing: 0; 
                                                    line-height: 24px; 
                                                    mso-line-height-rule: exactly; 
                                                    text-decoration: none; 
                                                    vertical-align: top; 
                                                    width: 100%;">
                                                    If you have any questions or concerns, we're here to help. Contact
                                                    us via our <a data-click-track-id="1053" href="#"
                                                        style="font-weight: 500; color: #ffffff" target="_blank">Help
                                                        Center</a>.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="height: 72px;"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</body>
`);

module.exports.HTMLResetPasswordForm = HTMLResetPasswordForm;
