import { home_path } from "@/data/path";
import HomeWrapper from "@/features/home-wrapper";
import { Route, Routes } from "react-router-dom";

function Home() {
  return (
    <HomeWrapper>
      <Routes>
        <Route path={home_path}>{/* Your app routes go here */}</Route>
      </Routes>
    </HomeWrapper>
  );
}

export default Home;
