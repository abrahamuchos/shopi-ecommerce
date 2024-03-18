import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "../Home";
import MyAccount from "../MyAccount/index.jsx";
import MyOrder from "../MyOrder/index.jsx";
import MyOrders from "../MyOrders/index.jsx";
import SignIn from "../SignIn/index.jsx";
import NotFound from "../NotFound/index.jsx";
import Navbar from "../../componets/Navbar/index.jsx";

import '../../App.css'
import Layout from "../../componets/Layout/index.jsx";

/**
 * Routes
 * @return {React.ReactElement}
 * @constructor
 */
const AppRoutes = () => {
  return useRoutes([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/my-account',
      element: <MyAccount/>
    },
    {
      path: '/my-order',
      element: <MyOrder/>
    },
    {
      path: '/my-orders',
      element: <MyOrders/>
    },
    {
      path: '/sign-in',
      element: <SignIn/>,
    },
    {
      path: '*',
      element: <NotFound/>
    },
  ]);
}


function App() {
  return <BrowserRouter>
    <Navbar/>
    <Layout>
      <AppRoutes/>
    </Layout>
  </BrowserRouter>
}

export default App