// ============= Dark Version =================
import React from "react";

const DoctorLogin = ({ handleLoginClick }) => {
  return (
    <div className="flex h-screen">
      <div className="hidden flex-1 bg-[url('https://i.pinimg.com/originals/0f/26/81/0f268185754236facab219156bb71694.jpg')] bg-cover bg-center bg-no-repeat md:flex dark:bg-[url('https://i.pinimg.com/736x/bd/5a/5e/bd5a5e7a73794901f41ab5faba4fdea4.jpg')]">
        <div className="h-full w-full bg-black opacity-20"></div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center dark:bg-black dark:bg-opacity-95">
        <form className="lg:w-90 w-[80%] md:w-[70%]">
          <h2 className="text-3xl font-bold text-white dark:text-blue-500">
            Login
          </h2>
          <p className="text-gray-500">Login in your account.</p>

          <div className="mt-4 space-y-1">
            <label className="font-medium text-gray-400" htmlFor="email">
              Email
            </label>
            <input
              className="w-full rounded-full border border-gray-400 px-4 py-1.5 dark:bg-transparent dark:text-gray-100"
              placeholder="Enter your email"
              type="email"
              name="email"
              id="email"
            />
          </div>

          <div className="mt-3 space-y-1">
            <label className="font-medium text-gray-400" htmlFor="password">
              Password
            </label>
            <input
              className="w-full rounded-full border border-gray-400 px-4 py-1.5 dark:bg-transparent dark:text-gray-100"
              placeholder="Enter your password"
              type="password"
              name="password"
              id="password"
            />
          </div>

          <div className="mt-2 cursor-pointer text-right text-sm font-medium text-blue-500 hover:text-blue-400">
            Forgot password?
          </div>

          <button
            onClick={handleLoginClick}
            className="mt-5 w-full rounded-full border border-blue-400 bg-blue-500 px-4 py-1.5 font-semibold text-white hover:bg-blue-400"
          >
            Sign in
          </button>

          <p className="mt-3 text-center text-sm text-gray-500 sm:text-base">
            Don't have an account?{" "}
            <span className="cursor-pointer text-blue-500 hover:text-blue-400">
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default DoctorLogin;

// =========== Only Light Version =========
// import React from "react";

// const DoctorLogin = () => {
//   return (
//     <div className="flex h-screen">
//       {/* https://i.pinimg.com/736x/bd/5a/5e/bd5a5e7a73794901f41ab5faba4fdea4.jpg */}
//       <div className="hidden flex-1 bg-[url('https://i.pinimg.com/originals/0f/26/81/0f268185754236facab219156bb71694.jpg')] bg-cover bg-center bg-no-repeat md:flex">
//         <div className="h-full w-full bg-black opacity-20"></div>
//       </div>
//       <div className="flex flex-1 flex-col items-center justify-center">
//         <form className="lg:w-90 w-[80%] md:w-[70%]">
//           <h2 className="text-3xl font-bold">Login</h2>
//           <p className="text-gray-500">Login in your account.</p>

//           <div className="mt-4 space-y-1">
//             <label className="font-medium text-gray-700" htmlFor="email">
//               Email
//             </label>
//             <input
//               className="w-full rounded-full border border-gray-400 px-4 py-1.5"
//               placeholder="Enter your email"
//               type="email"
//               name="email"
//               id="email"
//             />
//           </div>

//           <div className="mt-3 space-y-1">
//             <label className="font-medium text-gray-700" htmlFor="password">
//               Password
//             </label>
//             <input
//               className="w-full rounded-full border border-gray-400 px-4 py-1.5"
//               placeholder="Enter your password"
//               type="password"
//               name="password"
//               id="password"
//             />
//           </div>

//           <div className="mt-2 cursor-pointer text-right text-sm font-medium text-blue-500 hover:text-blue-400">
//             Forgot password?
//           </div>

//           <button className="mt-5 w-full rounded-full border border-blue-400 bg-blue-500 px-4 py-1.5 font-semibold text-white hover:bg-blue-400">
//             Sign in
//           </button>

//           <p className="mt-3 text-center text-sm text-gray-500 sm:text-base">
//             Don't have an account?{" "}
//             <span className="cursor-pointer text-blue-500 hover:text-blue-400">
//               Sign Up
//             </span>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DoctorLogin;
