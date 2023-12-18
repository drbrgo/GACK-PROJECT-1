'use client'

export default function FridgeAdmin(){

    const webUrl: string = "http://localhost:8080"



    const handleSubmit = (event: any) => {
        event.preventDefault();

        const data={
            // Will this need to be where we edit beers? Delete beers here? 
        }
        //the below is wrong. Should be fetching from MySQL if possible, not Intellij
        // window.addEventListener("load", function() {
        //     fetch(webUrl + "/admin/" + fridgeId).then(function(response){
        //         console.log(response);
        //     });
        // });
    }
    return(
        <>
        <div>
        <script>

        </script>
        </div>
        <div className="flex justify-center"> 
            <table className="bg-green-300/60 p-2 rounded-md">
            <tr>
                <th>Beer Name</th>
                <th>Picture?</th>
                <th>Type</th>
                <th>ABV</th>
                <th>Notes</th>
            </tr>
            <tr>
                <th></th>
            </tr>
            </table>
        
        </div>
        </>
    )
}