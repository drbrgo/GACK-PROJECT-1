import UserAdminForm from "../../components/user-admin/UserAdminForm";

export default function UserAdmin() {

    return (
        <div>
        <p>This is the admin user profile page!</p>

        <div>
            <p> display the active user</p>
        </div>
        
        <div>
        <UserAdminForm />
        <p>Add new user</p>
        </div>

        <div>
            <p>display all users</p>
        </div>

    </div>

    )
    //left off here
}

