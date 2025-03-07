import Encyclopedia from "../../pages/blog_page/Encyclopedia";
import Brewing from "../../pages/blog_page/Brewing";
import CoffeeShop from "../../pages/blog_page/CoffeeShop";
import Culture from "../../pages/blog_page/Culture";
import Etiquette from "../../pages/blog_page/Etiquette";
import Equipment from "../../pages/blog_page/Equipment";
import BrewingTechniques from "../../pages/BrewingTechniques";

export const BlogRoutes = [
  { path: "blog_page/coffee-bean-encyclopedia", element: <Encyclopedia /> },
  { path: "blog_page/brewing-techniques", element: <BrewingTechniques /> },
  { path: "blog_page/coffee-shop", element: <CoffeeShop /> },
  { path: "blog_page/coffee-culture", element: <Culture /> },
  { path: "blog_page/coffee-etiquette", element: <Etiquette /> },
  { path: "blog_page/coffee-equipment", element: <Equipment /> },
  { path: "blog_page/brewing", element: <Brewing /> },
]; 