const UserProfile = information => {
    let { fridgeId, firstName, lastName, birthdate, phoneNumber, emailAddress, streetAddress, city, state, zipCode} = information.user;
    return <p id={fridgeId}>{firstName}-{lastName} - {birthdate} - {phoneNumber} - {emailAddress} - {streetAddress} -</p>
}
export default UserProfile;

//edit and save option?

