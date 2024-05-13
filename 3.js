const students=[
    {
        name: "Pritam",
        marks:100
    },
    {
        name: "Shubham",
        marks:92
    },
    {
        name: "Satadru",
        marks:80
    },
    {
        name: "Bittu",
        marks:90
    },
    {
        name: "Avi",
        marks:89
    }
]
function checkResults(str){
    let check =0
    for(let names of students){
        if(names.name===str){
            if(names.marks>90)
                console.log(`Congratulations ${names.name}! You have cleared the exam.`)
            else
                console.log("Sorry ! You have not cleared the exam.")
            check =1
            break;
        }
    }
    if (check===0)
        console.log("Invalid User !!!")
}
checkResults("Pritam")
checkResults("Avi")
checkResults("Shilpy")
