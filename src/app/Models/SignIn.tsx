function SignIn() {
  return (
    <div className=" ">

      <form className="space-y-6 px-7 p-5 rounded-md">
        <h3 className="text-xl font-medium center text-center"> </h3>
             <div className="bg-blue-300 center text-center text-bold font-bold p-8 rounded-sm justify-center flex  h-full">
                    TODO
             </div> 
             <div className=" center text-center border-dashed border-color-blue justify-center flex ">
                     <h3 className="justify-start"> Task list </h3>
                     <br />
                     <br />
                     </div>

              <div>
                    <ul className="justify-center center align-center text-center color-black">
                      <li >  identify option 1 </li>
                      <li>  identify option 2 </li>
                      <li>  identify option 3 </li>
                      <li>  identify option 4 </li>
                      <li>  identify option 5 </li>
                     
                    </ul>
             </div> 
            

        <button
          type="submit"
          className="w-full bg-blue-800  focus:ring-blue-300 font-medium rounded-lg
                text-sm px-5 py-3 text-center bg-brand-orange hover:bg-brand-orange-s
				text-white
            "
        >
          + add Task
          
        </button>
        <div>
          
        </div>
      </form>
    </div>
  );
}

export default SignIn;
