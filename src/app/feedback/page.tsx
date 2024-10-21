import Link from "next/link";



export default function Feedback() {
    return (   <>

<div className="container mx-auto px-4 py-8">
  <h1 className="text-3xl font-bold text-center mb-5">Feedback Page</h1>
  <p className="font-serif font-black text-center mb-6">Your feedback is valuable to us!</p>

  <div className="w-full max-w-lg mx-auto mb-6">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      FEEDBACK
    </label>
    <textarea 
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500 h-32" 
      placeholder="Write your message here" 
      required 
    />
  </div>

  <div className="flex items-center justify-center">
    <Link href="/support">
      <button 
        type="submit" 
        className="bg-green-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </Link>
  </div>
</div>

      </>
    );
  }