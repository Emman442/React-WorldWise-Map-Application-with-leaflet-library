
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";

import PageNotFound from "./pages/pageNotFound";
import AppLayout from "./pages/AppLayout";
import Homepage from "./pages/HomePage";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form"
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {

  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="login" element={<Login />} />
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              {/* <Route index element={<CityList cities={cities} isLoading={isLoading} />}/>Alternatively */}
              <Route index replace element={<Navigate to="countries" />} />

              {/* replace key word allows us to back to previous page */}

              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
//With routing, we match different URLs to different Views(React components)
