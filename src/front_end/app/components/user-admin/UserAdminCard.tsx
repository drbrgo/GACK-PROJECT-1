export default function UserAdminCard(props: any) {

    return (
        <div>
            <p>Id: {props.profile.id}</p>
            <p>Name: {props.profile.name}</p>
            <p>Password: {props.profile.password}</p>
            <p>Birthdate: {props.profile.birthdate}</p>
            <p>Phone Number: {props.profile.phoneNumber}</p>
            <p>Email Address: {props.profile.emailAddress}</p>
            <button onClick={() => props.removeProfile(props.profile.id)}>Delete</button>    
        </div>

    )
    //stopped here
}