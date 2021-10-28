const person = {
    nation: "russian"
}

const student = Object.create(person)
student.city = 'Moscow'


function getProperty(obj){
    let keyArr = [] // key without property
    for(let key in obj){
        if (obj.hasOwnProperty(key)){
            keyArr.push(key)
            console.log(key + ":" + obj[key])
        }
    }
    return keyArr
}

getProperty(student)