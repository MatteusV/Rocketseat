const url = "http://localhost:5500/api";
            

function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.log(error))
}
getUsers()


function addNewUser() {
    axios.post(url, newUser)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))
}
const newUser = {
    name: "Matteus Varlesse",
    avatar: "https://picsum.photos/200/200",
    city: "São josé dos campos"
}
// addNewUser(newUser)


function getUser(id) {
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data

        userID.textContent = data.id

        userName.textContent = data.name

        userCity.textContent = data.city

        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}
getUser(2)


function updateUser(id, userUpdated) {
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}
const userUpdated = {
    name : "Guilherme Varlesse",
    avatar: "https://picsum.photos/200/200",
    city: "São José dos campos"
}
updateUser(3, userUpdated)

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}
deleteUser(1)