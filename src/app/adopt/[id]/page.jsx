export default async function AdoptPage({ params }) {

  const { id } = await params;

  return (

    <div className="min-h-screen flex justify-center items-start pt-10 px-4">

      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-white shadow-2xl">

        <h1 className="text-4xl font-extrabold mb-8 text-center">
          Adopt Request
        </h1>

        <form className="space-y-5">

          <div>
            <label className="block mb-2 font-semibold">
              Pet ID
            </label>

            <input
              type="text"
              value={id}
              readOnly
              className="input input-bordered w-full bg-white/10 text-white"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Your Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full bg-white/10 text-white"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full bg-white/10 text-white"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Phone Number
            </label>

            <input
              type="text"
              placeholder="Enter phone number"
              className="input input-bordered w-full bg-white/10 text-white"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Address
            </label>

            <textarea
              placeholder="Enter your address"
              className="textarea textarea-bordered w-full bg-white/10 text-white"
            ></textarea>
          </div>

          <button className="btn bg-cyan-400 hover:bg-cyan-500 border-none text-white w-full mt-4">
            Submit Request
          </button>

        </form>

      </div>

    </div>
  );
}