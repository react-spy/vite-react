/**
 * 首页
 */
import { useSnapshot, proxy } from "valtio";
import routes from "../../../config/routes";

const state = proxy({
  routes,
});

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <div>
      {snap.routes.map((i) => i.component)}
      <button
        onClick={() => {
          state.routes = [{ path: "/home", component: "/Home2" }];
        }}
      >
        点击
      </button>
    </div>
  );
};
export default Home;
