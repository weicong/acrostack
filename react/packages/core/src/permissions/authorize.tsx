/**
 * 组件级权限判定。
 *
 * ABP React 文档只给出 `isGranted(...) && <X/>` 的手写形式，
 * 这里提供等价的声明式封装，避免每处重复展开：
 *
 * ```tsx
 * <Authorize policy="AbpIdentity.Users.Create">
 *   <Button>新建</Button>
 * </Authorize>
 * ```
 */
import type { ReactNode } from "react";
import { usePermissions } from "./permissions";

export interface AuthorizeProps {
  /** ABP 权限名，支持复合策略（`A || B`、`A && B`）。 */
  policy: string;
  /** 未授予时渲染的内容，默认不渲染。 */
  fallback?: ReactNode;
  children: ReactNode;
}

export function Authorize({ policy, fallback = null, children }: AuthorizeProps) {
  const { isGranted } = usePermissions();
  return <>{isGranted(policy) ? children : fallback}</>;
}
