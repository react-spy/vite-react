/**
 * 首页
 */
import { useSnapshot } from "valtio";
import globalState from "@/models/global";
import "./index.less";

const Home = () => {
  const state = useSnapshot(globalState);
  return (
    <div>
      <h1>Welcome to {state.name}</h1>
      <p>This is a example of a {state.name} application.</p>
    </div>
  );
};
export default Home;
