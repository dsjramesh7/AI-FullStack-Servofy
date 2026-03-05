"use client";
import { getMealsByCategory } from "@/actions/mealdb.actions";
import RecipeGrid from "@/components/RecipeGrid";
import { useParams } from "next/navigation";
import React from "react";

const CategoryRecipesPage = () => {
  const params = useParams();
  const category = params.category;
  return (
    <RecipeGrid
      type="category"
      value={category}
      fetchAction={getMealsByCategory}
      backLink="/dashboard"
    />
  );
};

export default CategoryRecipesPage;
