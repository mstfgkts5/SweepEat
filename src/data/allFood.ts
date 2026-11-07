// The full menu the app shows: the original dishes plus the expanded set.
import { mockFoodItems } from "./mockFood";
import { extraFoodItems } from "./moreFood";

export const allFoodItems = [...mockFoodItems, ...extraFoodItems];
