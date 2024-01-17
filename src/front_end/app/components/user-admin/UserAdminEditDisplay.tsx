'use client'
import { useEffect} from "react"
import UserAdminCard from "./UserAdminCard"

export default function UserAdminEditDisplay(props: any) {

    const webUrl: string = "http://localhost:8080"

    const removeUser = (userId: number) => {
        fetch(webUrl + '/userAdmin/removeUser/' + userId, {
            method: "DELETE"
      }).then((response) => response.json()).then(data => {
        props.setUserProfiles(data);
      })
    }

    useEffect (()=>{
},[])

 
    const allUserProfiles = props.userProfiles.map((userprofile: any) => {
        return (
         <UserAdminCard
          key={userprofile.id}
            userprofile={userprofile} 
            removeUser={removeUser}
    
        />              
            )
        })


    return (
        <div >
        {allUserProfiles}
        </div>
    )

    
}
