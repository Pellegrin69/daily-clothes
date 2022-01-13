import * as React from "react";
import {HomeGenerateOutfit} from "../components/HomeGenerateOutfit";
import {RecentClothes} from "../components/RecentClothes";

const Home = () => {
  return (
    <>
      <RecentClothes/>
      <HomeGenerateOutfit/>
    </>
  )
}

export default Home;