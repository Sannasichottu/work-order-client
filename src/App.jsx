import { useContext, useEffect } from "react";
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import BaseLayout from "./layout/BaseLayout";
import { Dashboard, PageNotFound } from "./screens";
import { AddOrder, DownloadInvoice, RecivedCustomer, RecivedQuotation, UpdateQuotation, UploadQuotation } from "./components";  //customer
// import ListOrder from "./components/order/listOrder/ListOrder";
import RecivedOrder from "./components/intermediate/recivedOrder/RecivedOrder";  //intermediate
import RecivedList from "./components/vendor/recivedList/RecivedList"; //vendor

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // adding dark-mode class if the dark mode is set on to the body tag
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <>
      <Router>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/order" element={<AddOrder />} />
            <Route path="/recivedCustomer" element={<RecivedCustomer />} />
            <Route path="/downloadInvoice" element={<DownloadInvoice />} />
            {/* <Route path="/list" element={<ListOrder /> } /> */}

            {/* Intermediate */}
            <Route path="/recivedOrder" element={<RecivedOrder/> } />
            <Route path="/recivedQuotation" element={<RecivedQuotation /> } />
            <Route path="/updateQuotation" element={<UpdateQuotation /> } />

            {/* Vendor */}
            <Route path="/recivedList" element={<RecivedList /> } />
            <Route path="/uploadQuotation" element={<UploadQuotation /> } />
            
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>

        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
        >
          <img
            className="theme-icon"
            src={theme === LIGHT_THEME ? SunIcon : MoonIcon} 
            alt="theme"
          />
        </button>
      </Router>
    </>
  );
}

export default App;
