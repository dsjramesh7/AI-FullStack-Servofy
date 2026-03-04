"use server";

const MealDB_BaseURL = "https://www.themealdb.com/api/json/v1/1";

// to get random recipe of the day from api
export const getRecipeOfTheDay = async () => {
  try {
    const res = await fetch(`${MealDB_BaseURL}/random.php`, {
      next: { revalidate: 86400 }, //here 24 hours = 86400 stored/cache
    });

    if (!res.ok) {
      throw new Error("Failed to fetch recipe of the day");
    }

    const data = await res.json();
    console.log("DataForRecipeDay: ", data);
    return {
      success: true,
      recipe: data.meals[0],
    };
  } catch (error) {
    console.error("Error Fetching recipe of the day: ", error);
    throw new Error(error.message || "Failed to load recipe");
  }
};

// to get all all categories
export const getCategories = async () => {
  try {
    const response = await fetch(`${MealDB_BaseURL}/list.php?c=list`, {
      next: { revalidate: 604800 }, // Cache for 1 week
    });

    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    const data = await response.json();
    return {
      success: true,
      categories: data.meals || [],
    };
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error(error.message || "Failed to load categories");
  }
};

// Get all areas and their cuisines
export async function getAreas() {
  try {
    const response = await fetch(`${MealDB_BaseURL}/list.php?a=list`, {
      next: { revalidate: 604800 }, // Cache for 1 week
    });

    if (!response.ok) {
      throw new Error("Failed to fetch areas");
    }

    const data = await response.json();
    return {
      success: true,
      areas: data.meals || [],
    };
  } catch (error) {
    console.error("Error fetching areas:", error);
    throw new Error(error.message || "Failed to load areas");
  }
}

// Get meals by category
export async function getMealsByCategory(category) {
  try {
    const response = await fetch(`${MealDB_BaseURL}/filter.php?c=${category}`, {
      next: { revalidate: 86400 }, // Cache for 24 hours
    });

    if (!response.ok) {
      throw new Error("Failed to fetch meals");
    }

    const data = await response.json();
    return {
      success: true,
      meals: data.meals || [],
      category,
    };
  } catch (error) {
    console.error("Error fetching meals by category:", error);
    throw new Error(error.message || "Failed to load meals");
  }
}

// Get meals by area
export async function getMealsByArea(area) {
  try {
    const response = await fetch(`${MealDB_BaseURL}/filter.php?a=${area}`, {
      next: { revalidate: 86400 }, // Cache for 24 hours
    });

    if (!response.ok) {
      throw new Error("Failed to fetch meals");
    }

    const data = await response.json();
    return {
      success: true,
      meals: data.meals || [],
      area,
    };
  } catch (error) {
    console.error("Error fetching meals by area:", error);
    throw new Error(error.message || "Failed to load meals");
  }
}
