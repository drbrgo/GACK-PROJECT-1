'use client'


export default function RegisterDummyForm2() {

    const webUrl = "http://localhost:8080";

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            username: event.target.username.value,
            password: event.target.password.value,
            verifyPassword: event.target.verifyPassword.value
        }

        console.log(data);

       try{
        const response = await fetch(webUrl + "/registerdummy", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(data),
        }).then((response) => response.json()).then(data => {
            console.log(data);
        })
    } catch (error) {
        // checking if response status is not OK (as in a 4-- or 5-- response status code)--will need to update for username taken error AND pw no match error
        throw new Error(`Make sure your passwords match and maybe try a different username`);
        
      }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>create new dummy profile</h1>
                <div>
                    <h1>Username</h1>
                    
                    <input
                        type="text"
                        autoComplete="off"
                        id="username"
                        // value={username}
                        required minLength={2}
                    />
                </div>
                <div>
                    <h1>Password</h1>
                    <input
                        type="password"
                        autoComplete="off"
                        id="password"
                        // value={password}
                        required minLength={2}
                    />
                </div>
                <div>
                    <h1>Verify Password</h1>
                    <input
                        type="password"
                        autoComplete="off"
                        id="verifyPassword"
                        // value={verifyPassword}
                        required minlength={2}
                    />
                </div>


            <button type="submit">Dummy</button>
      </form>
    </div>

                
            
    )
}