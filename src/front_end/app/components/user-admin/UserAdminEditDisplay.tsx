'use client'
import { useEffect} from "react"
import UserAdminCard from "./UserAdminCard"

interface UserProfile {
    id: number,
    name: string,
    password: string,
    birthdate: number,
    phoneNumber: number,
    emailAddress: string,
    }

export default function UserAdminEditDisplay(props: any) {

    const webUrl: string = "http://localhost:8080"

    const removeUser = (userId: number) => {
        fetch(webUrl + "/userAdmin/removeUser/" + userId, {
            method: "DELETE"
      }).then((response) => response.json()).then((data: UserProfile[]) => {
        props.setUserProfiles(data);
      })
    }

    useEffect (()=>{
},[])

 
    const allUserProfiles = props.userProfiles.map((userprofile: UserProfile) => {
        return (
         <UserAdminCard
          key={userprofile.id}
            userprofile={userprofile} 
            removeUser={removeUser}
            setUserProfiles={props.setUserProfiles}
        />              
            )
        })


    return (
        <div >
        {allUserProfiles}
        </div>
    )

    
}
