/**
 * 首页
 */
import { useSnapshot } from "valtio";
import routes from "../../../config/routes";

const Home = () => {
  const snap = useSnapshot(routes);
  console.log("snap", snap.routes);
  return (
    <div>
      {snap.routes.map((i) => i.component)}
      <button
        onClick={() => {
          routes.routes = [{ path: "/home", component: "/Home2" }];
        }}
      >
        点击
      </button>
    </div>
  );
};
export default Home;
