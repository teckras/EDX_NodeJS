const csv = require('csvtojson')
const fs = require('fs')
const path = require('path')

let filepath = path.join(__dirname, "Data", "customer-data.csv")

const convertFile = () =>{
    console.log("Reading file at " + filepath)
    const data = fs.readFileSync(filepath)
    console.log("Finished reading file")
    let buff = []
    csv({noheader:false})
    .fromString(data)
    .on('json',(json)=>{ //this func will be called 3 times
        buff.push(json)  
    })
    .on('done',()=>{
        console.log('end')
        fs.writeFileSync(path.join(__dirname, "customer-data.json"), JSON.stringify(buff,null,2).replace(/\n/g, '\r\n'))
    })
}

convertFile()

