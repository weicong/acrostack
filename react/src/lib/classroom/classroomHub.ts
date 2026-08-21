/**
 * 课堂 Hub 连接构建。
 *
 * 连接地址：/signalr-hubs/classroom?sessionId=xxx&access_token=yyy
 * - 学员/投屏：access_token 为课堂短期令牌（加入课堂/生成投屏令牌时获得）
 * - 教师：access_token 为 OpenIddict 令牌（服务端校验创建者身份）
 *
 * 服务端（ClassroomHub.OnConnectedAsync）依据令牌与角色自动分组：
 *   classroom:{tenantId}:{sessionId}:teachers / students / presentation
 * 客户端不能自行选择分组。
 */
import { HttpTransportType, HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { userManager } from "@/lib/auth/userManager";
import { getBackendOrigin } from "@/lib/runtimeConfig";

const HUB_PATH = "/signalr-hubs/classroom";

/** 教师连接：使用 OpenIddict access_token。 */
export async function buildTeacherHubConnection(sessionId: string): Promise<HubConnection> {
  const user = await userManager.getUser();
  const accessToken = user?.access_token;
  if (!accessToken) {
    throw new Error("Cannot build classroom hub connection: teacher is not signed in.");
  }
  return buildConnection(sessionId, accessToken);
}

/** 学员/投屏连接：使用课堂短期令牌（join / presentation-token 接口下发）。 */
export function buildClassroomTokenHubConnection(
  sessionId: string,
  classroomToken: string,
): HubConnection {
  return buildConnection(sessionId, classroomToken);
}

function buildConnection(sessionId: string, accessToken: string): HubConnection {
  const origin = getBackendOrigin();
  const url = `${origin}${HUB_PATH}?sessionId=${encodeURIComponent(sessionId)}&access_token=${encodeURIComponent(accessToken)}`;

  return (
    new HubConnectionBuilder()
      .withUrl(url, { transport: HttpTransportType.WebSockets })
      // 自动重连：0/2/5/10/30/60s；重连成功后由调用方重新拉取快照校准状态
      .withAutomaticReconnect([0, 2000, 5000, 10000, 30000, 60000])
      .build()
  );
}
