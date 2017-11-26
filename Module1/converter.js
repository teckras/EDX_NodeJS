const csv = require('csvtojson')
const fs = require('fs')
const path = require('path')
const json = require('json')

let filepath = path.join(__dirname, "Data", "customer-data.csv")

const convertFile = () =>{
    console.log("Reading file at " + filepath)
    const data = fs.readFileSync(filepath)
    console.log("Finished reading file")
    const buff = {
        items: []
    };
    csv({noheader:false})
    .fromString(data)
    .on('json',(json)=>{ //this func will be called 3 times
        buff.items =  buff.items.concat(json)  
    })
    .on('done',()=>{
        console.log('end')
        fs.writeFileSync(path.join(__dirname, "customer-data.json"), JSON.stringify(buff.items,null,4))
    })
}

convertFile()

