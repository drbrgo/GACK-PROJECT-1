'use client'
import RegisterDummyForm from '../components/authentication/RegisterDummyForm';
import RegisterDummyForm2 from '../components/authentication/RegisterDummyForm2';


export default function registerDummy(){
    return(
    <div>
    <p>This is a dummy registration page, so that the log in can be tested</p>

    {/* <RegisterDummyForm /> */}
    <RegisterDummyForm2 />
    </div>)
}