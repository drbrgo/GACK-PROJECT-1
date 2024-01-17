export default function UserAdminCard(props: any) {

    return (
        <div className="border-2 p-2 m-2 bg-gray-100">       
            <p>Id: {props.profile.id}</p>
            <p>Name: {props.profile.name}</p>
            <p>Password: {props.profile.password}</p>
            <p>Birthdate: {props.profile.birthdate}</p>
            <p>Phone Number: {props.profile.phoneNumber}</p>
            <p>Email Address: {props.profile.emailAddress}</p>    
        </div>

    )
    //stopped here
}