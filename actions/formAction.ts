"use server"

export const  formAction = async (e:FormData) => {
    const data = {
        name: e.get("username")?.toString(),
        phone: e.get("phone")?.toString(),
        email: e.get("email")?.toString(),
        message: e.get("message")?.toString()
    }

    await fetch('https://65bbc35852189914b5bd06c6.mockapi.io/api/v1/users',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    return;
}