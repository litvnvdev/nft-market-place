// import { useState, useLayoutEffect } from "react";

// const queries = ["(max-width: 766px)"];

// export const useDevice = () => {
//   const mediaQueryLists = queries.map((query) => matchMedia(query));

//   const getValues = () => mediaQueryLists.map((list) => list.matches);

//   const [isMobile, setIsMobile] = useState(getValues);

//   useLayoutEffect(() => {
//     const handler = () => setIsMobile(getValues);

//     mediaQueryLists.forEach((list) => list.addEventListener("change", handler));

//     return () =>
//       mediaQueryLists.forEach((list) =>
//         list.removeEventListener("change", handler)
//       );
//   }, []);

//   return { isMobile };
// };
