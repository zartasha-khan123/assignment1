


// export default function Support() {
//     return (
//         <>
     
//               <div className="h-screen container mx-auto p-5 flex justify-center items-center mb-10 text-center">
//         <h1 className="text-3xl font-bold ">Support Page</h1>
//         <p className="text-gray-900 ml-24 ">If you need support, please contact us!</p>
//       </div>
//       </>
//     );
//   }


export default function Support() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Support Page
        </h1>
        <p className="text-gray-900 text-sm md:text-base max-w-md mx-auto">
          If you need support, please contact us!
        </p>
      </div>
    </div>
  );
}
