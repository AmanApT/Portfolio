export const projectData = {
  arcadeX: {
    title: "ArcadeX - Game ERP",
    desc: "ArcadeX is a gaming marketplace where users can explore, purchase, and manage their favorite games. Built with a powerful backend and dynamic frontend, ArcadeX serves as an e-commerce platform for games. Sellers can upload their game listings, while administrators manage the platform, ensuring quality control and security.",
    img: "/arcade.png",
    github: "https://github.com/AmanApT/ArcadeX",
    // live: "https://project-demo.com",
    techStack: [
      "React",
      "Javascript",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Stripe Payment",
      "Socket.io",
    ],
    details: [
      "Browse and explore a variety of games 📜",
      "Add games to cart and checkout via Stripe 💳",
      "Approve or reject games submitted by sellers",
      "Implemented role-based access control (RBAC) for users, sellers, and admins, including game approval workflows and user moderation, improving platform security",
      " Optimized database queries and API performance in a MERN stack architecture, reducing API response time by 40% and enhancing user experience.",
    ],
    code: `function App() {
  const dispatch = useDispatch();
  const { user, seller } = useSelector((store) => store);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const responseGames = await axios.get(
          "http://localhost:5000/api/game/landingPageGames",
          { withCredentials: true }
        );

        dispatch(setGames(responseGames.data.data));

        const type = localStorage.getItem("type");
        const response = await axios.post(
          "http://localhost:5000/api/auth/refresh",
          { type: type },
          { withCredentials: true }
        );

        if (response.data.length === 0) {
          throw new Error("User not authenticated");
        }

        if (type === "User") {
          dispatch(addUser(response.data.data));
        } else if (type === "Seller") {
          dispatch(addSeller(response.data.data));
        }
      } catch (error) {
        console.error("Error fetching user:", error.message);
      } finally {
        setLoading(false);
      }
    };

    if (!user && !seller) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, [dispatch, user, seller]);

  if (loading) {
    return <LoadingScreen />;
  }

  //to see rest of the code, check github`,
  },
  credhill: {
    title: "CredHill",
    desc: "Smart Solutions for Your Business Needs Invoice Simplified",
    img: "/credhill.png",
    github: "https://github.com/AmanApT/CredHill-TS",
    live: "https://credhill-ts.vercel.app/",
    techStack: [
      "Next JS",
      "TypeScript",
      "Shadcn",
      "ConvexDB",
      "Next Auth",
      "ERP For Business",
    ],
    details: [
      "Used by Real-World Clients: Actively used by multiple businesses to manage clients, invoices, and inventory efficiently.",
      "Powerful Invoice Automation: Generate, manage, and analyze up to 10,000 invoices monthly with real-time status tracking,customized to client needs.",
      " Comprehensive Management Tools: Efficiently handle 1,000+ client and inventory records with streamlined updates",
      "CI/CD Pipeline with Github Actions",
    ],
    code: `"use client"
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react";


export default function Home() {
  const {user} = useKindeBrowserClient();
  console.log(user)
  useEffect(()=>{
    console.log("User Details : ", user)
      },[user])
  return (
  <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
    <Header />
    <Hero />
    <Features />
    <Faq />
    <Footer />
  </div>
  );
}`,
  },
  scribble: {
    title: "Scribble",
    desc: "Smart Solutions for Your Business Needs Invoice Simplified",
    img: "/scribble.png",
    github: "https://github.com/AmanApT/Scribble.io",
    live: "https://scribble-io-ap.vercel.app/",
    techStack: [
      "Next JS",
      "TypeScript",
      "Shadcn",
      "ConvexDB",
      "Next Auth",
      "Tailwind",
    ],
    details: [
      "Built a high-performance document and diagram engineering tool that enables users to efficiently edit, organize, and manage digital content, achieving 40% faster load times.",
      "Implemented secure user authentication with Kinde, reducing security vulnerabilities by 30%.",
      "Responsive design for all devices",
      "Optimized UI/UX with Shadcn and TypeScript, boosting user engagement by 25%.",
      "CI/CD Pipeline with Github Actions",
    ],
    code: `"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react";
import Features from "./_components/Features";
import Footer from "./_components/Footer";

export default function Home() {

  const {user} = useKindeBrowserClient();

  useEffect(()=>{
console.log("User Details : ", user)
  },[[user]])

  return (
 <div>
 <Header />
 <Hero />
 <Features />
 <Footer />
 </div>
  );
}`,
  },
  reclaimGreen: {
    title: "Reclaim Green",
    desc: "Reclaim Green calculates carbon footprints on individual and industry level, leveraging React for Frontend, Firebase for Database and Google OAuth for authentication",
    github: "https://github.com/AmanApT/CEmission",
    live: "https://reclaim-green-project.vercel.app/",
    techStack: ["React", "Firebase", "Machine Learning"],
    img: "/reclaim.png",
    details: [
      "Reclaim Green calculates carbon footprints on individual and industry level, leveraging React for Frontend, Firebase for Database and Google OAuth for authentication",
      "The project achieved 90% accuracy using Random Forest for precise carbon footprint calculations",

      "CI/CD pipeline with GitHub Actions",
    ],
    code: `import React, { useState } from "react";
import Auth from "./auth/Auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import Home from "./home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
   // State to store user details and toggle between components
   const [loggedUser, setLoggedUser] = useState("");
   const [checkUser, setCheckUser] = useState(0);
 
   return (
     <div>
       <Router>
         <Routes>
           <Route
             path="/"
             element={
               <Home
                 setCheckUser={setCheckUser}
                 loggedUser={loggedUser}
                 checkUser={checkUser}
                 setLoggedUser={setLoggedUser}
               />
             }
           />
           {loggedUser ? (
             <>
               <Route
                 path="/"
                 element={
                   <Home
                     setCheckUser={setCheckUser}
                     loggedUser={loggedUser}
                     checkUser={checkUser}
                     setLoggedUser={setLoggedUser}
                   />
                 }
               />
             </>
           ) : (
             <>
               <Route
                 path="/auth"
                 element={
                   <Auth
                     setCheckUser={setCheckUser}
                     setLoggedUser={setLoggedUser}
                   />
                 }
               />
               <Route
                 path="/"
                 element={
                   <Home
                     setCheckUser={setCheckUser}
                     loggedUser={loggedUser}
                     checkUser={checkUser}
                     setLoggedUser={setLoggedUser}
                   />
                 }
               />
             </>
           )}
         </Routes>
       </Router>
     </div>
   );
}

export default App;`,
  },
};
