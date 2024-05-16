import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["one punch"]);
  console.warn(categories);
  const onNewCategory = (newCategory) => {
    const firstLetter = newCategory[0]; // Obtiene la primera letra
    const restOfString = newCategory.slice(1); // Obtiene el resto de la cadena
    // Convierte la primera letra a minúscula
    const firstLetterLowercase = firstLetter.toLowerCase();
    const firstLetterUppercase = firstLetter.toUpperCase();
    // Une la primera letra en minúscula con el resto de la cadena
    const categoryMinus = firstLetterLowercase + restOfString;
    const categoryUpper = firstLetterUppercase + restOfString;
    console.log(categoryMinus);
    console.warn(categories.includes(categoryMinus));
    if (
      categories.includes(categoryMinus) ||
      categories.includes(categoryUpper)
    )
      return;
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onNewCategory} />
        {categories.map((category) => (
            <GifGrid key={category} category={category}>
            </GifGrid>    
        ))}
      </>
  );
};
