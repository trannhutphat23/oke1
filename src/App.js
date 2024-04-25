import './App.css';
import React from 'react';
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Components/footer/Footer';
import SignIn from './Components/login/signIn';
import SignUp from './Components/login/signUp';
import Navbar from './Components/navbar/navbar';
import Cart from './Components/shopping cart/cart';
import Favourite from './Components/favourite/favourite';
import Home from './Components/home page/home';
import ItemDisplay from './Components/display/item_display';
import ItemView from './Components/display/item view/item_view';
import CheckOut from './Components/checkout/checkout';
import User from './Components/user/user';
import { AppProvider } from './Context/AppContext';
import 'react-toastify/dist/ReactToastify.css';
import SearchDisplay from './Components/display/searchDisplay';
import NewsDisplay from './Components/News/NewDisplay';
import GioiThieu from './Components/News/NewContent/Introduce/gioithieu';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
              <Route path="/trang-chu" element={<Home />} />
              <Route path="i/:id/:name" element={<ItemView />} />
              <Route path="/giay/:id" element={<ItemDisplay />} />
              <Route path="/giay/:id/:cate" element={<ItemDisplay />} />
              <Route path="/tim-kiem/:content" element={<SearchDisplay />} />
              <Route path="/thanh-toan" element={<CheckOut />} />
              <Route path="/tai-khoan" element={<User />} />
              <Route path="/shop-giay-secondhand-blue-ribbon" element={<GioiThieu />} />
              <Route path="/gio-hang" element={<Cart />} />
              <Route path="/yeu-thich" element={<Favourite />} />
              <Route path="/dang-nhap" element={<SignIn />} />
              <Route path="/dang-ky" element={<SignUp />} />
              <Route path="tin-tuc/:id" element={<NewsDisplay />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppProvider>
      <ToastContainer hideProgressBar />
    </div>
  );
}

export default App;
