/**
 * 首页
 */
import { useSnapshot, proxy } from "valtio";

// const state = proxy({
//   routes: __APP_URL__,
// });

const Home = () => {
  //   const snap = useSnapshot(state);

  return (
    <div>
      333侧333耳
      {/* {snap.routes.map((i) => i.component)}
      <button
        onClick={() => {
          state.routes = [{ path: "/home", component: "/Home2" }];
        }}
      >
        点击
      </button> */}
    </div>
  );
};
export default Home;
