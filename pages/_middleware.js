// // import { withAuth } from "next-auth/middleware";
// import { withAuth } from "next-auth/middleware";

// console.log(withAuth);

// export { default } from "next-auth/middleware";
// // export default withAuth({

// // })

// // export default function () {
// //   return;
// // }
import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => console.log(token),
  },
});
