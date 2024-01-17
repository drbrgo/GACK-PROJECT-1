'use client'
import { useEffect} from "react"
import UserAdminCard from "./UserAdminCard"

export default function UserAdminEditDisplay(props: any) {

    const webUrl: string = "http://localhost:8080"

    const removeProfile = (profileId: number) => {
        fetch(webUrl + '/userAdmin/removeProfile/' + profileId, {
            method: "DELETE"
      }).then((response) => response.json()).then(data => {
        props.setProfiles(data);
      })
    }

    useEffect (()=>{
},[])

const allProfiles = props.profiles.map((profile: any) => {
    return (
    <UserAdminCard
        key={profile.id}
        profile={profile} 
        removeProfile={removeProfile}

        />
           
        )
    })

    return (
        <div className="everyone">
        {allProfiles}
        </div>
    )
}
