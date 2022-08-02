import React from "react";

import qs from "qs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../App";
import {
  setCategoryId,
  setCurentPage,
  setFilter,
} from "../redux/slices/filterSlice";

import Categories from "../components/Categories";
import Pagination from "../components/Pagination/Pagination";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Sort, { sortList } from "../components/Sort";
import { fetchPizzas } from "../redux/slices/pizzaSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { categoryId, sort, curentPage } = useSelector((state) => state.filter);
  const { items, status } = useSelector((state) => state.pizza);

  const { searchValue } = React.useContext(SearchContext);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurentPage(number));
  };

  const getPizzas = async () => {
    // setIsloading = true
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `search=${searchValue}` : "";

    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        search,
        curentPage,
      })
    );
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        curentPage,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, curentPage]);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortList.find(
        (obj) => obj.sortProperty === params.sortProperty
      );

      dispatch(
        setFilter({
          ...params,
          sort,
        })
      );
      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    getPizzas();
  }, []);

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">All pizzas</h2>

       {status === "error" ? (
        <div className="content__error-info">
          <h2>Error</h2>
          <p>There’s probably been an error</p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : pizzas}
        </div>
      )}

      <Pagination curentPage={curentPage} onCangePage={onChangePage} />
    </div>
  );
};

export default Home;
