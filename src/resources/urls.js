import ProjectApi from "./projectapi"

export default {
    /**
     * PenguinMod's normal page
     */
    base: "https://espressoblocks.com",

    /**
     * PenguinMod's editor page
     */
    editor: "https://espressoblocks.com/editor.html",

    /**
     * PenguinMod's credits page
     */
    credits: "https://espressoblocks.com/credits.html",

    /**
     * PenguinMod's terms of service page
     */
    terms: "/terms",

    /**
     * PenguinMod's privacy policy page
     */
    privacy: "/privacy",

    /**
     * PenguinMod's guideline pages for services
     */
    guidelines: {
        /**
         * PenguinMod's project uploading guidelines
         */
        projects: "https://espressoblocks.com/PenguinMod-Guidelines/PROJECTS"
    },

    /**
     * Donation pages for sites
     */
    donate: {
        scratch: "https://www.scratchfoundation.org/donate",
        turbowarp: "https://github.com/sponsors/GarboMuffin"
    },

    /**
     * PenguinMod's project page
     */
    projects: `${ProjectApi.OriginApiUrl}/`,

    /**
     * PenguinMod's my stuff page
     */
    mystuff: `${ProjectApi.OriginApiUrl}/mystuff`,

    /**
     * PenguinMod's home page
     */
    home: "https://home.espressoblocks.com/",

    /**
     * PenguinMod's packager page
     */
    packager: "https://packager.espressoblocks.com",

    /**
     * PenguinMod's unofficial wiki
     */
    wiki: "https://pmod.miraheze.org/wiki/Main_Page",

    /**
     * PenguinMod's Discord invite
     */
    discord: "https://discord.gg/NZ9MBMYTZh",

    /**
     * Scratch's website
     */
    scratch: "https://scratch.mit.edu",

    /**
     * TurboWarp's website
     */
    turbowarp: "https://turbowarp.org",

    /**
     * PenguinMod's github page
     */
    github: "https://github.com/PenguinMod/",

    /**
     * PenguinMod's basic API
     */
    basicApi: "https://basic-api.penguinmod.com/",

    /**
     * The admin panel for pm projects api
     */
    adminPanel: "https://penguinmod.com/panel"
}
