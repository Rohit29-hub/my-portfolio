"use server"

export const formAction = (e:FormData) => {
    const data = {
        username: e.get("username"),
        phone: e.get("phone"),
        email: e.get("email"),
        message: e.get("message")
    }
    
    console.log(data);

    return;
}