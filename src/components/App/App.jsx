import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AppRoutes from "../Routes/Routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import { sidebarFunk } from '../../features/products/productsSlice'

import { getCategories } from "../../features/categories/categoriesSlice";
import productsSlice, { getProducts } from "../../features/products/productsSlice";

import UserForm from "../User/UserForm";


const App = () => {
  const dispatch = useDispatch();

  const {sideBar} = useSelector(({products}) => products);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  
  return (
		<div className='app'>
			<Header />
			<UserForm />
			<div className='container'>
				{sideBar && <Sidebar />}
				<AppRoutes />
			</div>
			<Footer />
		</div>
	)
};

export default App;
