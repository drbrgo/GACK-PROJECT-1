'use client'

export default function UserAdminForm() {

    const webUrl: string = "http://localhost:8080"

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const data = {
            firstName: String(event.target.firstName.value),
            lastName: String(event.target.lastName.value),
            birthdate: Number(event.target.birthdate.value),
            phoneNumber: Number(event.target.phoneNumber.value),
            emailAddress: String(event.target.emailAddress.value),
            streetAddress: String(event.target.streetAddress.value),
            city: String(event.target.city.value),
            state: String(event.target.state.value),
            zipCode: Number(event.target.zipCode.value),
        }

        await fetch(webUrl + "/userAdmin/addNewUser", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        }).then((response) => response.json()).then(data => {
            console.log(data);
        })

    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <h1> Create/Edit Profile </h1>
                <h5>First Name: </h5>
                <div>
                <input type="text" autoComplete="off" id="firstName" required minLength={3} maxLength={25}/>
                </div>

                <div>
                <h5>Last Name: </h5>
                <input type="text" autoComplete="off" id="lastName" required minLength={3} maxLength={25}/> 
                </div>

                <div>
                <h5>Birthdate: </h5>
                <input type="text" autoComplete="off" id="birthdate" required minLength={8} maxLength={8}/>
                </div> 

                <div>
                <h5>PhoneNumber: </h5>
                <input type="text" autoComplete="off" id="phoneNumber" required minLength={10} maxLength={10}/>
                </div>                   

                <div>
                <h5>Email Address: </h5>
                <input type="text" autoComplete="off" id="emailAddress" required minLength={3} maxLength={25}/>
                </div>     
                
                <div>
                <h5>Street Address </h5>
                <input type="text" autoComplete="off" id="streetAddress" required minLength={1} maxLength={20}/>
                </div>
                
                <div>
                <h5>City: </h5>
                <input type="text" autoComplete="off" id="city" required minLength={3} maxLength={15}/>
                </div>
                
                <div>
                <h5>State: </h5>
                <input type="text" autoComplete="off" id="state" required minLength={2} maxLength={15}/>
                </div>
                
                <div>
                <h5>Zip Code: </h5>
                <input type="text" autoComplete="off" id="zipCode" required minLength={5} maxLength={10}/>
                </div>


                <button type="submit">Submit</button>

            </form>
        </div>
    )
}