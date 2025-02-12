import { useEffect } from "react";
import { Category } from "../components/ecommerce/index";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import actGetCategories from "../store/categories/act/actGetCategories"
import { GridList } from "../components/common/index";
import { Loading } from "../components/feedback/index";
import { TCategory } from "../types/category";
const Categories = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);

  return (
    <Loading status={loading} error={error}>
      <GridList<TCategory>
        records={records}
        renderItem={(record) => <Category {...record} />}
      />
    </Loading>
  );
};

export default Categories;