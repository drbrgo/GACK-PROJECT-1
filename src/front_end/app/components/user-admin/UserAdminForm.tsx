'use client'

export default function UserAdminForm(props: any) {

    const webUrl: string = "http://localhost:8080"

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const data = {
            name: String(event.target.name.value),
            password: String(event.target.password.value),
            birthdate: Number(event.target.birthdate.value),
            phoneNumber: Number(event.target.phoneNumber.value),
            emailAddress: String(event.target.emailAddress.value),
        }

        await fetch(webUrl + "/userAdmin/addNewUser", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        }).then((response) => response.json()).then(data => {
            props.setProfiles(oldData => [...oldData, data]);
        })

    }

    return (
        <div className="flex justify-center">
            <form onSubmit = {handleSubmit}>
                <h1> Create/Edit Profile </h1>       
                <div>        
                <h5>Name: </h5>
                <input type="text" autoComplete="off" id="name" required minLength={3} maxLength={25}/>
                </div>

                <div>
                <h5>Password: </h5>
                <input type="text" autoComplete="off" id="password" required minLength={3} maxLength={25}/> 
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
                <button className="bg-blue-500/80 p-2 rounded-md" type="submit">Submit</button>
            </form>
        </div>
    )
}