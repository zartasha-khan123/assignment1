import Link from "next/link";

export default function ThankYou() {
    return (
     <Link href='/contactus'> <div className="min-h-screen bg-yellow-300 flex items-center justify-center mb-7">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg text-center">
          <h1 className="text-3xl font-bold text-gray-700 mb-4">Thank You!</h1>
          <p className="text-gray-600">We have received your message and will get back to you shortly.</p>
        </div>
      </div></Link>
    );
  }