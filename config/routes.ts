import { proxy } from "valtio";

export default proxy({
  routes: [
    {
      path: "/",
      component: "./Home",
    },
  ],
});
