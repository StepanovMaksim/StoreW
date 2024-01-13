import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useGetProductsQuery } from "../../features/api/apiSlice";

import styles from "../../styles/Category.module.css";

import Products from "../Products/Products";

const Category = () => {
  const { id } = useParams();
  const { list } = useSelector(({ categories }) => categories);

  const defaultValues = {
    title: "",
    price_min: 0,
    price_max: 0,
  };

  const defaultParams = {
    categoryId: id,
    limit: 5,
    offset: 0,
    ...defaultValues,
  };

  const [isEnd, setEnd] = useState(false);
  const [cat, setCat] = useState(null);
  const [items, setItems] = useState([]);
  const [values, setValues] = useState(defaultValues);
  const [params, setParams] = useState(defaultParams);
  const [filter, setFilter] = useState(false)

  const { data = [], isLoading, isSuccess } = useGetProductsQuery(params);

  useEffect(() => {
    if (!id) return;

    setValues(defaultValues);
    setItems([]);
    setEnd(false);
    setParams({ ...defaultParams, categoryId: id });
  }, [id]);

  useEffect(() => {
    if (isLoading) return;

    if (!data.length) return setEnd(true);

    setItems((_items) => [..._items, ...data]);
  }, [data, isLoading]);

  useEffect(() => {
    if (!id || !list.length) return;

    const category = list.find((item) => item.id === id * 1);

    setCat(category);
  }, [list, id]);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setItems([]);
    setEnd(false);
    setParams({ ...defaultParams, ...values });
  };

  const handleReset = () => {
    setValues(defaultValues);
    setParams(defaultParams);
    setEnd(false);
  };

  return (
		<section className={styles.wrapper}>
			<h2 className={styles.title}>{cat?.name}</h2>

			<div className={styles.filters} >
				<button onClick={() => setFilter(!filter)} style={{ padding: 6, height: 36, marginTop: 28}}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						fill='currentColor'
						className='bi bi-filter-square'
						viewBox='0 0 16 16'
					>
						<path d='M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z' />
						<path d='M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5' />
					</svg>
				</button>

				{filter && (
					<form className={styles.filters} onSubmit={handleSubmit}>
						<div className={styles.filter}>
							<input
								type='text'
								name='title'
								onChange={handleChange}
								placeholder='Product name'
								value={values.title}
							/>
						</div>
						<div className={styles.filter}>
							<input
								type='number'
								name='price_min'
								onChange={handleChange}
								placeholder='0'
								value={values.price_min}
							/>
							<span>Price from</span>
						</div>
						<div className={styles.filter}>
							<input
								type='number'
								name='price_max'
								onChange={handleChange}
								placeholder='0'
								value={values.price_max}
							/>
							<span>Price to</span>
						</div>

						<button type='submit' style={{ padding: 10 }}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								fill='currentColor'
								className='bi bi-search'
								viewBox='0 0 15 15'
							>
								<path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0' />
							</svg>
						</button>
					</form>
				)}
			</div>
			{isLoading ? (
				<div className='preloader'>Loading...</div>
			) : !isSuccess || !items.length ? (
				<div className={styles.back}>
					<span>No results</span>
					<button onClick={handleReset}>Reset</button>
				</div>
			) : (
				<Products
					title=''
					products={items}
					style={{ padding: 0 }}
					amount={items.length}
				/>
			)}

			{!isEnd && (
				<div className={styles.more}>
					<button
						onClick={() =>
							setParams({ ...params, offset: params.offset + params.limit })
						}
					>
						See more
					</button>
				</div>
			)}
		</section>
	)
};

export default Category;
