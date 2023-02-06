let request = {
    name : 'PN',
    rollNo : 24,
    classDetail : {
        language : 'English',
        division : 'A',
        location : {
            city : 'Bangalore',
        }
    }
}

function searchObj(request, keyword){ 
    // let result = ""
    for( const [key,value] of Object.entries(request)){
        if(typeof value == "string" || typeof value == "number"){
            console.log("if - for - ", value==keyword, typeof value, value)
            if(value == keyword){
                return `--${key},${value}--`
            }
        }else{
            console.log("else - for - ", typeof value, value)
            return searchObj (value, keyword)
        }
    }
    // return result
}

const getKey = searchObj (request, 'Bangalore')
console.log("getKey",getKey)
