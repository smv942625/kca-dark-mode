// ==UserScript==
// @name         KCA Dark Mode
// @namespace    http://tampermonkey.net/
// @version      1.1.0
// @description  Dark mode for Kansas Connections Academy
// @match        *://*.connexus.com/*
// @author       Sebadeee
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    const style = document.createElement('style');
    style.textContent = `
        body, body.-body {
            background: #1a1a1a !important;
            color: #fff !important;
        }
        .contentWrapper {
            background: #1a1a1a !important;
        }
        .css-dppzni {
            background-color: rgb(20, 70, 90) !important;
        }
        .css-1yez4jb {
            color: #fff !important;
        }
        .homepage-tabs li a,
        .homepage-tabs li a:visited {
            color: #ccc !important;
        }
        .pvs-footer-wrapper {
            background-color: #1a1a1a !important;
            color: #e0e0e0 !important;
        }
        .css-8uyvoz {
            background-color: #1a1a1a !important;
            color: #e0e0e0 !important;
        }
        p, .p {
            background: transparent !important;
            color: #fff !important;
        }
        .welcomeMessage,
        .welcomeMessage span {
            color: #fff !important;
        }
        .pvs-footer-wrapper a {
            color: #e0d5e8 !important;
        }
        .cxForm h2, h2.cxHeader {
            color: #DDD !important;
        }
        .career-portal.homepage-tabs li a:hover,
        .career-portal.homepage-tabs li a:visited:hover {
            border-bottom: solid 1px #555 !important;
        }
        #loginLogoImage {
            filter: brightness(0) invert(1);
        }
        .cxForm h1, h1.cxHeader {
            color: #fff !important;
        }
        :root {
            --eswButtonColor: #3a1230 !important;
            --eswButtonHoverColor: #3a1230 !important;
        }
        div.loginPage div.loginWrapper div.loginContent div.loginMain {
            background: #2a2a2a !important;
        }
        div.loginSupport {
            background: #242424 !important;
        }
        .cxLoginBtn:hover, .cxLoginBtn:focus {
            background-color: #2a2a2a !important;
            box-shadow: 0 0 2px #2a2a2a !important;
            border: 2px solid #2a2a2a !important;
        }
        .subNav {
            background: #1a1a1a !important;
            border-bottom: 1px dotted #555 !important;
        }
        h1 {
            color: #4d7fff !important;
        }
        #pageTitleHeaderText {
            background: #1a1a1a !important;
        }
        .cxForm h3, h3.cxHeader {
            color: #fff !important;
        }
        div {
            color: #fff !important;
        }
        .subNav > ul > li > a {
            color: #fff !important;
        }
        .student-homepage .st-today-table th {
            border-top: 1px solid #444 !important;
            border-bottom: 1px solid #444 !important;
        }
        .MuiTypography-h2 {
            color: #fff !important;
        }
        .st-today-table th {
            background-color: #1a1a1a !important;
            color: #e0e0e0 !important;
        }
        h3 {
            color: #fff !important;
        }
        .css-1ispbt3 {
            color: #fff !important;
        }
    `;
    document.head.appendChild(style);
})();
