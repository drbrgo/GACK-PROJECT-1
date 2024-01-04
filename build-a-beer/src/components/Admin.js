
//the form will be here under admin for new users, once submitted it will go to user profile
//edit and save option?
export default function Register() {

    //link to define frontend talking to the backend 
//    const webUrl: string = "http://localhost:8080"

    const handleSubmit = (event: any) => {
        event.preventDefault();
        //console.log("Button clicked")

    const profileData = {
        firstName: String(event.target.firstName.value),
        lastName: String(event.target.lastName.value),
        birthdate: String(event.target.birthdate.value),
        phoneNumber: String(event.target.phoneNumber.value),
        emailAddress: String(event.target.emailAddress.value),
        city: String(event.target.city.value),
        state: String(event.target.state.value),
        zipCode: String(event.target.zipCode.value),
    }

console.log(profileData)

//this info will be sent to the backend
//await fetch(webUrl + "/admin/addNewUser", {
//method: 'POST',
//headers: {
//    "Content-Type": "application/json"
//},
//body: JSON.stringify(profileData),
//}).then((response) => response.json()).then(profileData => {
//    console.log(profileData);

//})

}

return (
    <div>
        <form onSubmit={handleSubmit}>
            <h3>Create A Beer Enthusiast Account!</h3> 
            <div>
                <h5>First Name: </h5>
                <input type="text" autoComplete="off" id="firstName" required minLength={3} maxLength={25}/>
                <h5>Last Name: </h5>
                <input type="text" autoComplete="off" id="lastName" required minLength={3} maxLength={25}/>
                <h5>Birthdate: </h5>
                <input type="text" autoComplete="off" id="birthdate" required minLength={6} maxLength={6}/>
                <h5>PhoneNumber: </h5>
                <input type="text" autoComplete="off" id="phoneNumber" required minLength={10} maxLength={10}/>
                <h5>Email Address: </h5>
                <input type="text" autoComplete="off" id="emailAddress" required minLength={3} maxLength={25}/>
                <h5>Street Address </h5>
                <input type="text" autoComplete="off" id="streetAddress" required minLength={1} maxLength={20}/>
                <h5>City: </h5>
                <input type="text" autoComplete="off" id="city" required minLength={3} maxLength={15}/>
                <h5>State: </h5>
                <input type="text" autoComplete="off" id="state" required minLength={2} maxLength={15}/>
                <h5>Zip Code: </h5>
                <input type="text" autoComplete="off" id="zipCode" required minLength={5} maxLength={10}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
)

}

