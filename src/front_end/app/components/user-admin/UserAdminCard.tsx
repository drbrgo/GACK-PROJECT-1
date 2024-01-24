import { useState } from "react";

export default function UserAdminCard(props: any) {
    
    interface UserProfile {
        id: number,
        name: string,
        password: string,
        birthdate: number,
        phoneNumber: number,
        emailAddress: string,
        }
    const webUrl: string = "http://localhost:8080"

    const [user, setUser] = useState<boolean>(false);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        
        const data = {
            name: String(event.target.name.value),
            password: String(event.target.password.value),
            birthdate: Number(event.target.birthdate.value),
            phoneNumber: Number(event.target.phoneNumber.value),
            emailAddress: String(event.target.emailAddress.value),            
        }

        fetch(webUrl + "/userAdmin/updateUser/" + event.target.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), 
      }).then((response) => response.json()).then((data: UserProfile[]) => {
        props.setUserProfiles(data);        
        setUser(prev => !prev)
      })
    }

    return (           
        <div >
            {user ? 
        
        <form onSubmit = {handleSubmit}>
                <h1> Create/Delete User Profile </h1>       
                <div>        
                <h5>Name: </h5>
                <input type="text" autoComplete="off" id="name" defaultValue={props.userprofile.name} required minLength={3} maxLength={25}/>
                </div>

                <div>
                <h5>Password: </h5>
                <input type="text" autoComplete="off" id="password" defaultValue={props.userprofile.password} required minLength={3} maxLength={25}/> 
                </div>

                <div>
                <h5>Birthdate: </h5>
                <input type="text" autoComplete="off" id="birthdate" defaultValue={props.userprofile.birthdate} required minLength={8} maxLength={8}/>
                </div> 

                <div>
                <h5>PhoneNumber: </h5>
                <input type="text" autoComplete="off" id="phoneNumber" defaultValue={props.userprofile.phoneNumber} required minLength={10} maxLength={10}/>
                </div>            
                
                <div>
                <h5>Email Address: </h5>
                <input type="text" autoComplete="off" id="emailAddress" defaultValue={props.userprofile.emailAddress} required minLength={3} maxLength={25}/>
                </div>   
                <button type="submit">Submit</button>
            </form>
        
            :
    
        <div>
            <p>Id: {props.userprofile.id}</p>
            <p>Name: {props.userprofile.name}</p>
            <p>Password: {props.userprofile.password}</p>
            <p>Birthdate: {props.userprofile.birthdate}</p>
            <p>Phone Number: {props.userprofile.phoneNumber}</p>
            <p>Email Address: {props.userprofile.emailAddress}</p>
            <button onClick={() => props.removeUser(props.userprofile.id)}>Delete</button>    
            <button onClick={() => setUser(prev => !prev)}>Edit</button>    
        </div>
        }
        </div>       
    )
} 
//set this as its own component so it can be a series of cards with a special tag once fully set up...will need css styling for that
