/**
 * 服务端时钟校正倒计时。
 *
 * 剩余秒数 = EndsAt - (本机时间 + 时钟偏移)，每秒刷新；
 * 无 EndsAt 时返回 null（表示当前无倒计时）。
 */
import { useEffect, useState } from "react";

export function useServerClockCountdown(
  endsAt: string | null | undefined,
  clockOffsetRef: { readonly current: number },
): number | null {
  const [remainingSeconds, setRemainingSeconds] = useState<number | null>(null);

  useEffect(() => {
    if (!endsAt) {
      setRemainingSeconds(null);
      return;
    }
    const compute = () => {
      const serverNow = Date.now() + clockOffsetRef.current;
      const diff = Math.floor((Date.parse(endsAt) - serverNow) / 1000);
      setRemainingSeconds(diff > 0 ? diff : 0);
    };
    compute();
    const timer = setInterval(compute, 1000);
    return () => clearInterval(timer);
  }, [endsAt, clockOffsetRef]);

  return remainingSeconds;
}

/** 把剩余秒数格式化为 m:ss。 */
export function formatCountdown(seconds: number): string {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}
