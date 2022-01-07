import { useState } from "react"

function Login() {

  const [error, setError] = useState<string | null>(null)

  return (
    <div className="w-screen h-screen flex flex-col space-y-4 items-center justify-center" >
      {/**
       * make a error part that always exist but opacity is 0
       * when error is null opacity 0 and pointer events all
       * when error then opacity 1 with transition, red border and error in between
      */}
      <div className={`border-2 border-red-500 p-2 rounded-md text-red-500 bg-red-400/5 transition-transform duration-200 ease-in-out ${!error ? " scale-0 " : "scale-100"}`} >
        {error && error}
      </div>
      <div className="p-5 border rounded-lg shadow-sm">
        <h1 className="text-gray-800 " >Login to <span className="font-bold" >Expense Tracker</span></h1>

        <button
          className="font-bold text-amber-300 border border-amber-300 p-3 rounded-lg w-full mt-4 hover:bg-amber-300 hover:text-white transition-colors duration-200 "
          type="button"
          // onClick={loginHandler}
        >
          Login with Google
        </button>
      </div>
    </div>
  )
}

export default Login