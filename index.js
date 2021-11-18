//Dependencies
const Fs = require("fs")

//Variables
const Self_Args = process.argv.slice(2)

//Functions
function removeduplicatelines(file){
    const filedata = Fs.readFileSync(file, "utf8").replace(/\r/g, "").split("\n")
    const newdata = []

    for( i in filedata ){
        if(newdata.indexOf(filedata[i]) == -1){
            newdata.push(filedata[i])
        }
    }

    Fs.writeFileSync(file, newdata.join("\n"), "utf8")
    console.log("Successfully removed the file duplicate lines.")
}

//Main
if(!Self_Args.length){
    console.log("node index.js <input>")
    process.exit()
}

console.log("Removing the file duplicate lines.")
removeduplicatelines(Self_Args[0])
