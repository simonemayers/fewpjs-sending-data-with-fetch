// Add your code here
// let formData = {
//     dogName: "Byron", 
//     dogBreed: "Poodle"
// }

// const configurationObject = {
//     method: "POST", 
//     headers: {
//         "Content-Type": "application/json", 
//         "Accept": "application/json"
//     }, 
//     body: JSON.stringify(formData)
// }
// fetch("http://localhost:3000/dogs", {
//     method: "POST", 
//     headers: {
//         "Content-Type": "application/json", 
//         "Accept": "application/json"
//     }, 
//     body: JSON.stringify({
//         dogName: "Byron", 
//         dogBreed: "Poodle"
//     })
// })
// fetch("http://localhost:3000/dogs", configurationObject)
// .then((resp) => resp.json())
// .then((object) => console.log(object))
// .catch((error) => {
//     alert("Bad things! Ragnarok!")
//     console.log(error.message)
// })


function submitData(name, email){
    // const formData = {
    //     name: name,   
    //     email: email
    // }
    let configObj = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json", 
            "Accept": "application/json"
        }, 
        body: JSON.stringify({name, email})
    }
    return fetch("http://localhost:3000/users", configObj)
    .then((resp) => resp.json())
    .then(obj => {
        // const body = document.querySelector("body")
        // const newDiv = document.createElement("div")
        // newDiv.textContent = obj
        document.body.innerHTML = obj.id
        // body.appendChild(newDiv)
        // console.log(obj)
    }).catch((err) => {
        document.body.innerHTML = err.message
    })
}
