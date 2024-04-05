// "use client";
// import "../globals.css";

// export default function Contact() {
//   async function handleSubmit(event: React.FormEvent<HTMLInputElement>) {
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);

//     formData.append("access_key", "b9d189c7-d15a-4cc9-8baf-bb2ea3a62424");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: json,
//     });
//     const result = await response.json();
//     if (result.success) {
//       console.log(result);
//     }
//   }

//   return (
//     <>
//       <div className="flex flex-col w-1/2">
//         <h1>Contact Me</h1>
//         <p>Feel free to drop me a message</p>
//         <form onSubmit={handleSubmit} className="flex flex-col">
//           <input
//             type="text"
//             name="name"
//             placeholder="name"
//             className="border border-gray-500"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="email"
//             className="border border-gray-500"
//           />
//           <textarea
//             name="message"
//             placeholder="write message here"
//             className="border border-gray-500"
//           ></textarea>
//           <button className="border border-gray-500" type="submit">
//             Submit
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }
