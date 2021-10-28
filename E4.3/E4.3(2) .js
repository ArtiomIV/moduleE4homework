const student = {
    course: "developer",
    school: "skillfactory"
}

let str = "str"

function getProperty(obj, str){
    if (obj[str] != undefined){
        console.log(true) //for the test
        return true
    }else{
        console.log(false) //for the test
        return false
    }
}

getProperty(student, str)