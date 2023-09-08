function SignUp() {
  //  const router =useRouter();

  // const [inputs,setInputs]=useState({email:"",password:""});

  // const handleClick=( )=>{
  // 	 setAuthModelState((prev)=>({...prev,type:"SignIn"}));
  // }
  // store the new user detial and then send it into firebase //
  //  const [
  // 	createNewUserWithEmilAndPassword,
  // 	user,
  // 	loading,
  // 	error,
  //  ]=useCreateUserWithEmailAndPassword(auth);

  // 	// set the users and only change the email not others //
  const handleChange = async (e: React.FormEvent<HTMLFormElement>) => {
    // setInputs((prev)=>({...prev,[e.target.name]:e.target.value})) ;
  };

  // post the new user from client side to server side (firebase ) // POST method
  //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     console.log(inputs);
  //     try {
  //       const newUser = await createNewUserWithEmilAndPassword(
  //         inputs.email,
  //         inputs.password
  //       );
  //       if (!newUser) {
  //         return;
  //       }
  //       router.push("/");
  //     } catch (error: any) {
  //       alert(error.message);
  //     }
  //   };
  //   console.log(inputs);
  return (
    <div>
      <form
        className="space-y-6 px-8 p-5"
        //    onSubmit={handleSubmit}
      >
        <h3 className="text-xl font-medium  text-center">Create Account</h3>
        
        <div className="my-4">
          <label htmlFor="email" className="text-sm font-medium block mb-2 ">
             E-mail
          </label>
          <input
            //  onChange={handleChange}
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
            name
          </label>
          <input
            //  onChange={handleChange}
            type="text"
            name="name"
            id="name"
            className="
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
             border-gray-500 placeholder-gray-400 
        "
            placeholder="name"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-medium block mb-2 ">
            Password
          </label>
          <input
            //  onChange={handleChange}
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
          className="w-full  bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-white
                text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s
            "
        >SignUp
          {/* {loading ? "sumiting" :"submit"} */}
        </button>
        <div>
          <p className="text-center flex justify-center">
            Already have one ?{" "}
            <span className="font-bold text-blue-800">
              <a href="#"  >  
			   Login</a> 
            </span>{" "}
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
