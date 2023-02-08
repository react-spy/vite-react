/**
 * 首页
 */
import { useSnapshot, proxy } from "valtio";
import { getPageQuery } from "@/utils/common";
import { openNewWindow } from "@/utils/windowUtils";
import request from "@/utils/request";

// const state = proxy({
//   routes: __APP_URL__,
// });

const Home = () => {
  //   const snap = useSnapshot(state);
  const { id, name } = getPageQuery();
  console.log(id, name);
  return (
    <div>
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
