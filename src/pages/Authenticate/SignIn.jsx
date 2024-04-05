function SignIn() {
  return (
    <div>
      <div className="w-3/5 mx-auto px-10 py-14 bg-neutral-400 rounded-lg">
        <h1 className="text-3xl text-center font-bold">SignIn Here</h1>
        <form action="" className="w-1/2 mx-auto">
          <div className="py-2 flex flex-col">
            <label htmlFor="email" className="font-semibold">
              Enter your Email
            </label>
            <input type="email" id="email" className="rounded-md" />
          </div>
          <div className="py-2 flex flex-col">
            <label htmlFor="password" className="font-semibold">
              Enter your Password
            </label>
            <input type="password" id="password" className="rounded-md" />
          </div>
          <div className="py-2 flex flex-col">
            <label htmlFor="rePass" className="font-semibold">
              Retype your Password again
            </label>
            <input type="rePass" id="rePass" className="rounded-md" />
          </div>
          <button className="bg-zinc-700 text-center py-2 w-1/2 mx-auto rounded-xl text-white font-semibold hover:bg-zinc-800 hover:rounded-2xl">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
