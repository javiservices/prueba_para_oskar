const { default: axios } = require("axios");
const { TextField } = require("./Helpers/Fields/TextField");


/**
 * 
 * @param {*} name 
 * @returns A greet with the given name
 */
const greet = name => `Hello ${name}!`

/**
 * 
 * @param {*} url 
 * @returns the result of the api call
 */
const APITell = async (url) => {
    const res = await axios.get(url);
    return res.data;
}


module.exports = {
    greet,
    APITell,
    TextField
}