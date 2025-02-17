export default class UserServices {

    save = async (data) =>{
        const request = new Request("http://localhost:5151/users", 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: data.nome,
                    email: data.email,
                    password: data.senha
                })
            }
        );

        const response = await fetch(request);

        return response;
    }

    get = async (email) => {
        const request = new Request(`http://localhost:5151/users/email?${email}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const userReturned = await fetch(request);

        return userReturned;
    }
}