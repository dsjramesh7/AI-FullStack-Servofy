"use client";
import React from "react";
import { getMealsByArea } from "@/actions/mealdb.actions";
import { useParams } from "next/navigation";
import RecipeGrid from "@/components/RecipeGrid";

const CuisineRecipePage = () => {
  const params = useParams();
  const cuisine = params.cuisine;
  return (
    <RecipeGrid
      type="cuisine"
      value={cuisine}
      fetchAction={getMealsByArea}
      backLink="/dashboard"
    />
  );
};

export default CuisineRecipePage;
