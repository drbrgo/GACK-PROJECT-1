import CheckForLoggedIn from '../../../components/authentication/CheckForLoggedIn'

export default function Fridge (){
    
    return(
        <CheckForLoggedIn>
        <p>This is the fridge page for viewing another's fridge</p>
        </CheckForLoggedIn>
    )
}