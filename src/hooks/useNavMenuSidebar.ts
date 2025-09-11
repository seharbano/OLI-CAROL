import { useState } from "react";

export type ActiveMenu = "main" | "shop" | "toys";

export const useNavMenuSidebar = () => {
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>("main");

  const goToMain = () => setActiveMenu("main");
  const goToShop = () => setActiveMenu("shop");
  const goToToys = () => setActiveMenu("toys");

  return { activeMenu, goToMain, goToShop, goToToys };
};
