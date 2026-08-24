/**
 * 审计日志详情抽屉：展示单条日志的请求信息、异常、实体变化与操作明细。
 */
import {
  Badge,
  Card,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  Text,
} from "@fluentui/react-components";
import type { AcroStackAuditLoggingAuditLogDto as AuditLogDto } from "@/api/models/acroStack/auditLogging/AuditLogDto";
import { useAuditLogsStyles } from "../styles/auditLogs";
import { changeTypeBadgeColor, changeTypeLabel, statusBadgeColor } from "../utils/auditLogs";

type AuditLogItem = AuditLogDto;

interface AuditLogDetailDrawerProps {
  /** 当前选中的日志；null 表示抽屉关闭。 */
  log: AuditLogItem | null;
  /** 关闭抽屉回调。 */
  onClose: () => void;
}

export function AuditLogDetailDrawer({ log, onClose }: AuditLogDetailDrawerProps) {
  const styles = useAuditLogsStyles();

  return (
    <Drawer
      open={log !== null}
      onOpenChange={(_, data) => !data.open && onClose()}
      position="end"
      size="large"
    >
      <DrawerHeader>
        <DrawerHeaderTitle>{"审计日志详情"}</DrawerHeaderTitle>
      </DrawerHeader>
      <DrawerBody>
        {log && (
          <div className={styles.detailSection}>
            <div className={styles.detailRow}>
              <span>{"用户名"}</span>
              <span>{log.userName ?? "-"}</span>
            </div>
            <div className={styles.detailRow}>
              <span>{"HTTP 方法"}</span>
              <span>{log.httpMethod ?? "-"}</span>
            </div>
            <div className={styles.detailRow}>
              <span>{"网址"}</span>
              <span>{log.url ?? "-"}</span>
            </div>
            <div className={styles.detailRow}>
              <span>{"HTTP 状态代码"}</span>
              <span>
                {log.httpStatusCode ? (
                  <Badge appearance="filled" color={statusBadgeColor(log.httpStatusCode)}>
                    {log.httpStatusCode}
                  </Badge>
                ) : (
                  "-"
                )}
              </span>
            </div>
            <div className={styles.detailRow}>
              <span>{"时间"}</span>
              <span>{log.executionTime ? new Date(log.executionTime).toLocaleString() : "-"}</span>
            </div>
            <div className={styles.detailRow}>
              <span>{"持续时间"}</span>
              <span>{log.executionDuration ?? 0}ms</span>
            </div>
            <div className={styles.detailRow}>
              <span>{"客户端 IP 地址"}</span>
              <span>{log.clientIpAddress ?? "-"}</span>
            </div>
            <div className={styles.detailRow}>
              <span>{"浏览器信息"}</span>
              <span>{log.browserInfo ?? "-"}</span>
            </div>

            {log.exceptions && (
              <>
                <Text weight="semibold">{"异常"}</Text>
                <Text size={200} className={styles.exceptions}>
                  {log.exceptions}
                </Text>
              </>
            )}

            {log.entityChanges && log.entityChanges.length > 0 && (
              <>
                <Text weight="semibold">{"实体变化"}</Text>
                {log.entityChanges.map((change, idx) => {
                  const changeType = change.changeType ?? 0;
                  return (
                    <Card key={idx} className={styles.entityChangeCard} size="small">
                      <div className={styles.changeHeader}>
                        <Text weight="semibold">
                          <Badge
                            appearance="filled"
                            color={changeTypeBadgeColor(changeType)}
                            size="small"
                          >
                            {changeTypeLabel(changeType)}
                          </Badge>{" "}
                          {change.entityTypeFullName?.split(".").pop() ?? "-"}
                        </Text>
                        <Text size={200}>
                          {"实体 ID"}: {change.entityId ?? "-"}
                        </Text>
                        {change.changeTime && (
                          <Text size={200}>
                            {"时间"}: {new Date(change.changeTime).toLocaleString()}
                          </Text>
                        )}
                      </div>
                      {change.propertyChanges && change.propertyChanges.length > 0 && (
                        <div>
                          {change.propertyChanges.map((pc, pidx) => (
                            <div key={pidx} className={styles.propertyChange}>
                              <Text size={200}>
                                <Text weight="semibold">{pc.propertyName}</Text>:{" "}
                                <Text className={styles.originalValue}>
                                  {pc.originalValue ?? "null"}
                                </Text>
                                {" → "}
                                <Text className={styles.newValue}>{pc.newValue ?? "null"}</Text>
                              </Text>
                            </div>
                          ))}
                        </div>
                      )}
                    </Card>
                  );
                })}
              </>
            )}

            {log.actions && log.actions.length > 0 && (
              <>
                <Text weight="semibold">{"操作"}</Text>
                {log.actions.map((action, idx) => (
                  <div key={idx} className={styles.actionItem}>
                    <Text>
                      {action.serviceName}.{action.methodName}
                    </Text>
                    <Text size={200}>Duration: {action.executionDuration ?? 0}ms</Text>
                  </div>
                ))}
              </>
            )}
          </div>
        )}
      </DrawerBody>
    </Drawer>
  );
}
