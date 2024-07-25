import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import LimitedProductsDetails from "./pages/HomeMiddlePages/LimitedProductsDetails";
import AllFitness from "./components/HomeMiddleCards/AllFitness";
import FitnessProductDetails from "./pages/HomeMiddlePages/FitnessProductDetails";
import HomeBodyMainPage from "./pages/HomeMiddlePages/HomeBodyMainPage";
import OffersList from "./components/HomeLimitedCarouselViewAll/OffersList";

import BestSellersProductDetails from "./pages/HomeMiddlePages/BestSellersProductDetails";
import NewArrivalProductDetails from "./pages/HomeMiddlePages/NewArrivalProductDetails";
// import AllLimited from "./components/HomeMiddleCards/AllLimited";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeBodyMainPage />} />
          {/* <Route path="limitedViewAll" element={<AllLimited/>} /> */}
          <Route path="limitedViewAll" element={<OffersList />} />
          <Route
            path="/limitedProductDatails/:limitedProductId"
            element={<LimitedProductsDetails />}
          />
          {/* <Route path="fitnessViewAll" element={<AllFitness />} />
          <Route
            path="fitnessProductDatails/:fitnessProductId"
            element={<FitnessProductDetails />}
          /> */}

          <Route
            path="bestSellersProductDetails/:bestSellerProductId"
            element={<BestSellersProductDetails />}
          />

          <Route
            path="newArrivalProductDetails/:newArrivalProductId"
            element={<NewArrivalProductDetails />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
