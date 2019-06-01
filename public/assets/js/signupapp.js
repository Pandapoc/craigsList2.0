const { fetch, alert } = window
let newUser
let totalNum
// fetch('/users')
//     .then(r=>r.json())
//     .then(user=> console.log(user))
//     .catch(e=>console.log(e))
console.log(moment().format("YYYY-MM-DD HH:mm:ss"))
document.querySelector("#submitButton").addEventListener('click', e=>{
    e.preventDefault()
    newUser=
         {       name:document.querySelector("#signupName").value,
                 email:document.querySelector("#signupEmail").value,
                 password:document.querySelector("#signupPassword").value,
                 address:document.querySelector("#signupAddress").value,
                 DOB:`${document.querySelector("#selectMonth").options.selectedIndex<10?'0'+document.querySelector("#selectMonth").options.selectedIndex:document.querySelector("#selectMonth").options.selectedIndex}-${document.querySelector("#selectDay").options.selectedIndex<10?'0'+document.querySelector("#selectDay").options.selectedIndex:document.querySelector("#selectDay").options.selectedIndex}-${2006-document.querySelector("#selectYear").options.selectedIndex}`,
                 gender:document.querySelector("#selectGender").options.selectedIndex-1?'Male':'Female',
                 locationId:document.querySelector("#selectLocation").options.selectedIndex
                }
                console.log(newUser)
                //  createdAt:moment().format("YYYY-MM-DD HH:mm:ss"),
                //  updateAt:moment().format("YYYY-MM-DD HH:mm:ss")}
                 fetch('/users', {
                     method: 'POST',
                     headers: {
                       'Content-Type': 'application/json'
                     },
                     body: JSON.stringify(newUser)
             })
            .then(_=>{
            localStorage.setItem('CraiglistLogin', `{name:${newUser.name},logedin:true}`)
            document.querySelector("#signupName").value=''
            document.querySelector("#signupEmail").value=''
            document.querySelector("#signupPassword").value=''
            document.querySelector("#signupAddress").value=''
            window.location.href='/browse.html'
        
          })
            .catch(e=>console.log(e))
       })
    
