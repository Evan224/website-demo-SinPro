import { About,Contact,CoreTech,MainPage,News,Products } from "../pages";



const routes = [
   {
      path: "/contact",
      component: Contact
   },
   {
      path: "/About",
      component: About
   },
   {
      path: "/coreTech",
      component: CoreTech
   },
   {
      path: "/mainPage",
      component: MainPage
   },
   {
      path: "/news",
      component: News
   },
   {
      path: "/Products",
      component: Products
   },
];

export default routes;