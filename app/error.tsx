'use client'
const error = ({error,reset}: {
    error: Error,
    reset: () => void
}) => {
  return (
    <div className="w-full h-screen grid place-content-center">
        <h1 className="text-2xl font-bold py-2">{error.message}</h1>
        <button className="py-2 px-4 rounded bg-violet-400" onClick={() => reset()}>Retry</button>
    </div>
  )
}

export default error