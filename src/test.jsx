import React, { useState } from "react";

export default function StateFunc() {
  const [data, setData] = useState({ email: "", username: "", password: "" });

  const handleOnChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <label htmlFor="email">EMAIL</label>
        <input type="email" id="email" name="email" onChange={handleOnChange} />
      </div>
      <div>
        <label htmlFor="username">USERNAME</label>
        <input type="text" id="username" name="username" onChange={handleOnChange} />
      </div>
      <div>
        <label htmlFor="password">PASSWORD</label>
        <input type="password" id="password" name="password" onChange={handleOnChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

// import React, { useState, useEffect } from "react";

// export default function EffectFunc() {
//   const [user, setUser] = useState({
//     isLogin: false,
//     user: {
//       email: "",
//       password: "",
//     },
//   });

//   // did mount
//   useEffect(() => {
//     console.log("Effect Func Did Mount");
//     return console.log("Effect Func Will Unmount");
//   }, []);

//   // did update
//   useEffect(() => {
//     console.log("Effect Func Did Update");
//     console.log(user);
//   }, [user]);

//   const handleOnSubmit = (e) => {
//     e.preventDefault();
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     setUser({
//       isLogin: true,
//       user: {
//         email,
//         password,
//       },
//     });
//   };

//   return (
//     <form onSubmit={handleOnSubmit}>
//       {user.isLogin ? <h1>You're already logged in!</h1> : <h1>You're not logged in!</h1>}
//       <div>
//         <label htmlFor="email">EMAIL</label>
//         <input type="email" id="email" name="email" />
//       </div>
//       <div>
//         <label htmlFor="password">PASSWORD</label>
//         <input type="password" id="password" name="password" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
