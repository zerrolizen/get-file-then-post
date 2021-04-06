const axios = require('axios')
const axiosInstance = axios.create()
const FormData = require('form-data');


async function getFileThenPost(options){

    if (!options.getUrl) return console.log("The 'getUrl' option must be of type string. Received undefined")
    if (!options.postUrl) return console.log("The 'postUrl' option must be of type string. Received undefined")

    await axiosInstance({
        url: options.getUrl, 
        method: 'GET',
        responseType: 'arraybuffer', 

    }).then(async (response) => { 
        var formData = new FormData()
        var fileName = options.fileName ? options.fileName : 'file'
        formData.append('uploadFile', response.data, fileName)
        
        await axiosInstance.post(options.postUrl, formData, { headers: formData.getHeaders() })
            .catch((err) => {console.log(err)})

    }).catch((err) => {console.log(err)})
}


module.exports = getFileThenPost