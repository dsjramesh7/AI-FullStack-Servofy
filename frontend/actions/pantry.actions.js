import { checkUser } from "@/lib/checkUser";
import { GoogleGenerativeAI } from "@google/generative-ai";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const scanPantryImage = async () => {
  try {
    const user = await checkUser();
    if (!user) {
      throw new Error("User not authenticated");
    }

    const isPro = user.subscriptionTier === "pro";

    //adding rate limiter based on tier with help of Arcjet
  } catch (error) {}
};
