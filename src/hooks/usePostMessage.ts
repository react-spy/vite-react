/**
 * usePostMessage
 * @description 用于父子窗口传递数据
 */
import { useState, useCallback, useEffect } from "react";

export type postMessageType = {
  msgKey: string;
};

const usePostMessage = (msgKey: string) => {
  const [isSendSuccess, setIsSendSuccess] = useState(false);

  // 推送消息
  const sendMessage = useCallback(() => {
    if (!msgKey) {
      throw new Error("缺少msgKey!");
    }
    const { opener } = window;
    if (opener) {
      opener.postMessage({ action: msgKey }, "*");
    }
  }, []);

  // 接收消息
  const receiveMessage = useCallback((event: any) => {
    if (!msgKey) {
      throw new Error("缺少msgKey!");
    }
    if (!event || !event.data) return;
    const { action } = event.data;
    if (action === msgKey) {
      setIsSendSuccess(true);
      // 1秒后重置
      setTimeout(() => {
        setIsSendSuccess(false);
      }, 1000);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("message", receiveMessage);
    return () => window.removeEventListener("message", receiveMessage);
  }, []);

  return [isSendSuccess, sendMessage] as [boolean, () => void];
};
export default usePostMessage;
