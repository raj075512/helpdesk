function SignIn() {
  return (
    <div>
      <form className="space-y-6 px-7 p-5">
        <h3 className="text-xl font-medium center text-center">Log in to your account</h3>
        <div className="my-4">
          <label htmlFor="email" className="text-sm font-medium block mb-2 ">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
      border-gray-500 placeholder-gray-400 
        "
            placeholder="name@gmail.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-medium block mb-2 ">
             Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            border-gray-500 placeholder-gray-400 
        "
            placeholder="password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-800  focus:ring-blue-300 font-medium rounded-lg
                text-sm px-5 py-3 text-center bg-brand-orange hover:bg-brand-orange-s
				text-white
            "
        >
          SignIn
       
        </button>
        <div>
          <p className="  font-medium center text-center ">
             Not on MyApp ? <span className="text-blue-500 font-medium"><a href="" >Sign Up</a></span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
