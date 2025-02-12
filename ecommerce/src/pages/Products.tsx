import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch,useAppSelector } from "../store/hooks";
import { actGetProductsByCatPrefix, cleanUp } from  "../store/products/productsSlice";
import { GridList } from "../components/common/index";
import { Product } from "../components/ecommerce/index";
import { Loading } from "../components/feedback/index";
import { TProduct } from "../types/product";
const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);
  const cartItems = useAppSelector((state) => state.cart.items);

  const productsFullInfo = records.map((el) => ({
    ...el,
    quantity: cartItems[el.id] || 0,
  }));

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));

    return () => {
      dispatch(cleanUp());
    };
  }, [dispatch, params]);

  return (
    <>
      <Loading status={loading} error={error}>
        <GridList<TProduct>
          records={productsFullInfo}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};

export default Products;