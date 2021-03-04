import React, { useEffect } from "react";
import CategoriesView from "./view";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "./duck/actions";
import { RootState } from "app";
import { addCategory, removeCategory } from "features/Categories/duck/slice";

function Categories() {
  const dispatch = useDispatch();

  const activeKind = useSelector((state: RootState) => state.kinds.activeKind);
  const categories = useSelector(
    (state: RootState) => state.categories.entities
  ).filter((item) => item.parentId === activeKind?.eventDirectionId);
  const activeCategories = useSelector(
    (store: RootState) => store.categories.categoriesIds
  );
  const toggleCategory = (id: string) => {
    if (activeCategories.length >= 3) {
      dispatch(removeCategory(id));
      return;
    }
    activeCategories.includes(id)
      ? dispatch(removeCategory(id))
      : dispatch(addCategory(id));
  };

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  return (
    <CategoriesView
      categories={categories}
      coverImage={activeKind?.backgroundUrl}
      toggleCategory={toggleCategory}
      activeCategories={activeCategories}
    />
  );
}
export default Categories;
