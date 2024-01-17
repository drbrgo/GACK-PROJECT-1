export default function UserAdminCard(props: any) {

    return (
        <div>
            <p>Id: {props.userprofile.id}</p>
            <p>Name: {props.userprofile.name}</p>
            <p>Password: {props.userprofile.password}</p>
            <p>Birthdate: {props.userprofile.birthdate}</p>
            <p>Phone Number: {props.userprofile.phoneNumber}</p>
            <p>Email Address: {props.userprofile.emailAddress}</p>
            <button onClick={() => props.editUser(props.userprofile.id)}>Edit</button>    
            <button onClick={() => props.removeUser(props.userprofile.id)}>Delete</button>    
        </div>

    )

    //set this as its own component so it can be a series of cards with a special tag once fully set up...will need css styling for that
} 