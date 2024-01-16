'use client'

import UserAdminForm from "../../components/user-admin/UserAdminForm";
import UserAdminEditDisplay from "../../components/user-admin/UserAdminEditDisplay";
import { useState, useEffect } from "react";


interface Profiles {
        id: Number,
        name: String,
        password: String,
        birthdate: Number,
        phoneNumber: Number,
        emailAddress: String,
        }


    export default function UserAdmin() {

    const webUrl: string = 'http://localhost:8080'

    const [profiles, setProfiles] = useState<Profiles[]>([])

    useEffect(function() {
        const getProfiles = async() => {
            await fetch(webUrl + '/userAdmin/getUsers')
            .then(response => response.json())
            .then(data => {
                setProfiles(data);
            })    
        }
        getProfiles()
    }, [])

    return (
        <div>
        <p>This is the admin user profile page!</p>

        <div>
            <p> display active profile</p>
        </div>
        
        <div className="">
        <UserAdminForm 
        setProfiles= {setProfiles} />
        <p>Add new user</p>
        <p>Show new user being added</p>
        </div>

        <div>
            <UserAdminEditDisplay 
            profiles={profiles} />
        </div>
    </div>

    )

    //getcall from this page, pass in the item array into User Admin Edit Display component

}

