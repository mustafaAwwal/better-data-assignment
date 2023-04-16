import React from "react";
import { MainLayout } from "../layouts";
const Home = () => {
  return (
    <MainLayout className="space-y-4 text-center">
      <h1 className="text-3xl font-bold">
        Welcome to Test Assignment for better data
      </h1>
      <h2 className="text-xl font-bold italic text-slate-500">
        Author: Mustafa Awwal
      </h2>
      <h2 className="text-xl font-bold italic text-slate-500">
        Github Username: mustafaAwwal
      </h2>
      <h2 className="text-xl font-bold italic text-slate-500">
        Email: mustafaawwal1@gmail.com
      </h2>
    </MainLayout>
  );
};

export default Home;
