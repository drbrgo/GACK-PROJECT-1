'use client'

import UserAdminForm from "../../components/user-admin/UserAdminForm";
import UserAdminEditDisplay from "../../components/user-admin/UserAdminEditDisplay";
import { useState, useEffect } from "react";
import CheckForAdmin from "../../components/authentication/CheckForAdmin";

interface UserProfile {
        id: number,
        name: string,
        password: string,
        birthdate: number,
        phoneNumber: number,
        emailAddress: string,
        }


    export default function UserAdmin() {

    const webUrl: string = 'http://localhost:8080'

    const [UserProfiles, setUserProfiles] = useState<UserProfile[]>([])

    useEffect(function() {
        const getUserProfiles = async() => {
            await fetch(webUrl + "/userAdmin/getUserProfiles")
            .then(response => response.json())
            .then(data => {
                setUserProfiles(data);
            })    
        }
        getUserProfiles()
    }, [])

    return (
        <CheckForAdmin>
        <div>

        <div>
        <p>This is the admin user profile page!</p>
        <p>Admin Create New User Profile</p>
        </div>
        
        <div>
        <UserAdminForm 
        setUserProfiles= {setUserProfiles} />
        <p>Show profile being added</p>
        </div>

        <div>
            <UserAdminEditDisplay 
            userProfiles={UserProfiles}
            setUserProfiles= {setUserProfiles} 
            />
        </div>
    </div>
    </CheckForAdmin>

    )

    //getcall from this page, pass in the item array into User Admin Edit Display component

}

