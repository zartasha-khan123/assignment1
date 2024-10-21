import Link from "next/link";



export default function Feedback() {
    return (
<>
        
      <div className="container mx-auto p-5">
        <h1 className="text-3xl font-bold text-center">Feedback Page</h1>
        <p className="font-serif font-black">Your feedback is valuable to us!</p>

        <div>
            <label>
            FEEDBACK
            </label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring h-32"
                          placeholder="Write your message here"
                          required>
            </textarea>
        </div>

        <div className="flex items-center justify-center">
                     <Link href="/support"><button
                          type="submit"
                          className="bg-green-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                          Submit
                      </button></Link>
                  </div>
      </div>
      </>
    );
  }