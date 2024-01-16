'use client'
import { useEffect} from "react"


import UserAdminCard from "./UserAdminCard"

export default function UserAdminEditDisplay(props: any) {

    useEffect (()=>{
console.log(props.profiles)
},[])

    const allProfiles = props.profiles.map((profile: any) => {
        console.log(profile)
        return (
            <div key={profile.id}>
                 <UserAdminCard 
                 profile={profile} />
            </div>
           
        )
    })

    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
        {allProfiles}
        </div>
    )
}