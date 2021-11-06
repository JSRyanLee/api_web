const express = require("express");
const app = express();
// const https = require("https") //api key Feq5dGlWragCL6W9Vt2OW42emc99mfFfLzGDihRm
// app.get("/", function(req, res){
    
//     const url="https://api.nasa.gov/planetary/apod?api_key=Feq5dGlWragCL6W9Vt2OW42emc99mfFfLzGDihRm"
//     https.get(url, function(response){
//         console.log(response.statusCode)

//         response.on("data", function(data){
//             console.log(data)
//             const nasaData = JSON.parse(data)
//             console.log(nasaData);
//             const date = nasaData.date
//             console.log(date)

//             res.write("<h1>the date is currently" + date + "</h1>");
//         })
//     })

const https = require("https") //api key Feq5dGlWragCL6W9Vt2OW42emc99mfFfLzGDihRm
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
    const url="https://api.nasa.gov/planetary/apod?api_key=Feq5dGlWragCL6W9Vt2OW42emc99mfFfLzGDihRm"
    
    https.get(url, function(response){
        console.log(response.statusCode)

        response.on("data", function(data){
            console.log(data)
            const nasaData = JSON.parse(data)
            console.log(nasaData);
            const date = nasaData.date
            const image = nasaData.hdurl
            console.log(date)

            res.write("<h1>picture of the day for " + date + "</h1>");
            res.write("<img src=" + image +  ">")
            res.send()
        })
    })

    
})
    


app.listen(3000, function(){
    console.log("server is running on 300");
})