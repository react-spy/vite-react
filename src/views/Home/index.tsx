/**
 * 首页
 */
import { useSnapshot, proxy } from "valtio";
import { openNewWindow } from "@/utils/windowUtils";
import request from "@/utils/request";
// import "./index.less";
import classss from "./index.module.less";
import { name } from "../../../package.json";
console.log("name", name);

// const state = proxy({
//   routes: __APP_URL__,
// });

const Home = () => {
  //   const snap = useSnapshot(state);
  return (
    <div className={classss.container}>
      3333
      <button
        onClick={() => {
          openNewWindow({ url: "https://www.baidu.com" });
        }}
      >
        点击
      </button>
      <button
        onClick={async () => {
          const response = await request({ url: "/api/crawling/list?id=1" });
          console.log(response);
        }}
      >
        请求数据
      </button>
    </div>
  );
};
export default Home;
