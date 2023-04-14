import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import RootLayout from "./Components/RootLayout";
import FoodForm from "./Components/form";
import FoodList from "./Components/foodlist";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<FoodForm />} />
        <Route path="/food-list" element={<FoodList />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
