"use server"

export const  formAction = async (e:FormData) => {
    const data = {
        name: e.get("username")?.toString(),
        phone: e.get("phone")?.toString(),
        email: e.get("email")?.toString(),
        message: e.get("message")?.toString()
    }

    await fetch(process.env.API_URL!,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    return;
}