"use client";
import React, { useState } from "react";
import Todo from "@/Components/Todo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((form) => ({ ...form, [name]: value }));
    console.log(formData);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      // Simulate API code here
      console.log("Form submitted", formData);

      // Show success toast
      toast.success("Todo added successfully!");
    } catch (error) {
      console.error(error);

      // Show error toast if an error occurs
      toast.error("Failed to add Todo.");
    }
  };

  return (
    <>
      <ToastContainer theme="dark" />
      <form
        onSubmit={onSubmitHandler} // Corrected here
        className="flex item-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto"
      >
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          className="px-3 py-2 border-2 w-full"
          value={formData.title}
          onChange={onChangeHandler}
        />
        <textarea
          name="description"
          placeholder="Enter Description"
          className="px-3 py-2 border-2 w-full"
          value={formData.description}
          onChange={onChangeHandler}
        ></textarea>
        <button type="submit" className="bg-orange-600 py-3 px-11 text-white">
          Add Todo
        </button>
      </form>

      <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <Todo />
            <Todo />
            <Todo />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default page;





// "use client";
// import React, { useState } from "react";
// import Todo from "@/Components/Todo";
// import { ToastContainer , toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

// const page = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//   });

//   const onChangeHandler = (e) => {
//     const name = e.target.name;
//     const value = e.target.value; // Fixed the typo here
//     setFormData((form) => ({ ...form, [name]: value }));
//     console.log(formData);
//   };
//   const onSubmitHandler = async (e) =>{
//     e.preventDefault();
//     try{
//       //API code

//       toast.success('Success')
//     } catch(error){

//     }
//   }

//   return (
//     <>
//     <ToastContainer/>
//       <form onSubmi={onSubmitHandler} className="flex item-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
//         <input
//           type="text"
//           name="title"
//           placeholder="Enter Title"
//           className="px-3 py-2 border-2 w-full"
//           value={formData.title}
//           onChange={onChangeHandler} // Use a single handler
//         />
//         <textarea
//           name="description"
//           placeholder="Enter Description"
//           className="px-3 py-2 border-2 w-full"
//           value={formData.description}
//           onChange={onChangeHandler} // Use a single handler
//         ></textarea>
//         <button type="submit" className="bg-orange-600 py-3 px-11 text-white">
//           Add Todo
//         </button>
//       </form>

//       <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto">
//         <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
//               <th scope="col" className="px-6 py-3">
//                 ID
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Title
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Description
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Status
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <Todo />
//             <Todo />
//             <Todo />
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default page;



// "use client";
// import React, { useState } from 'react'; // Import useState hook
// import Todo from '@/Components/Todo';

// const page = () => {
//   // Move useState inside the component
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//   });
//   const onChangeHandler=(e)=>{
//     const name= e.target.name;
//     const vale=e.target.value;
//     setFormData(form=>({...form ,[name]: value}));
//     console.log(formData);

//   }

//   return (
//     <>
//       <form className="flex item-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
//         <input value= {formData.title } onChange={onChangeHandler}
//           type="text"
//           name="title"
//           placeholder="Enter Title"
//           className="px-3 py-2 border-2 w-full"
//           value={formData.title} // Controlled input
//           onChange={(e) => setFormData({ ...formData, title: e.target.value })} // Update formData state
//         />
//         <textarea value={ formData.description} onChange={ onChangeHandler}
//           name="description"
//           placeholder="Enter Description"
//           className="px-3 py-2 border-2 w-full"
//           value={formData.description} // Controlled textarea
//           onChange={(e) =>
//             setFormData({ ...formData, description: e.target.value })
//           } // Update formData state
//         ></textarea>
//         <button type="submit" className="bg-orange-600 py-3 px-11 text-white">
//           Add Todo
//         </button>
//       </form>

//       <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto">
//         <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
//               <th scope="col" className="px-6 py-3">
//                 ID
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Title
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Description
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Status
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <Todo />
//             <Todo />
//             <Todo />
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default page;




// // "use client"
// // import React from 'react'
// // import Todo from '@/Components/Todo'

// // const [formData,serFormData] = useState({
// //   title:"",
// //   description:"",

// // });
// // const page = () => {

// //   return (
// //     <>
// //       <form className='flex item-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto'>
// //         <input type="text" name="title" placeholder="Enter Title" className='px-3 py-2 border-2 w-full ' />
// //         <textarea name="description" placeholder='Enter Description ' className='px-3 py-2 border-2 w-full'></textarea>
// //         <button type='submit' className='bg-orange-600 py-3 px-11 text-white'> Add Todo</button>
// //       </form>


// //       <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto ">
// //         <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
// //           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
// //             <tr>
// //               <th scope="col" className="px-6 py-3">
// //                 ID
// //               </th>
// //               <th scope="col" className="px-6 py-3">
// //                 Title
// //               </th>
// //               <th scope="col" className="px-6 py-3">
// //                 Description
// //               </th>
// //               <th scope="col" className="px-6 py-3">
// //                 Status
// //               </th>
// //               <th scope="col" className="px-6 py-3">
// //                 Action
// //               </th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             <Todo/>
// //             <Todo/>
// //             <Todo/>

// //           </tbody>
// //         </table>
// //       </div>

// //     </>
// //   )
// // }

// // export default page
