// import React from "react";

// const PasswordGen = (slider, { setPassword }) => {
//   const handleGen = () => {
//     let result = "";
//     const characters =
//       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     const charactersLength = characters.length;
//     let counter = 0;
//     while (counter < slider) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//       counter += 1;
//     }

//     setPassword(result);
//   };
//   return (
//     <div>
//       <button type="button" className="btn btn-primary" onClick={handleGen}>
//         Generate Password
//       </button>
//     </div>
//   );
// };

// export default PasswordGen;
