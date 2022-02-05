export const getItem = () => {
  try {
    const item = JSON.parse(localStorage.getItem("fruitCart"));
    return item || [];
  } catch (error) {
    return [];
  }
};

export const setItem = (fruitList) => {
  const item = localStorage.setItem("fruitCart", JSON.stringify(fruitList));
  return item;
};
