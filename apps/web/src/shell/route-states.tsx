import type { ErrorComponentProps } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SearchX, TriangleAlert } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@workspace/ui/components/alert";
import { Button } from "@workspace/ui/components/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty";
import { Skeleton } from "@workspace/ui/components/skeleton";

/**
 * App-wide route states, wired on the root route in `routes/__root.tsx`.
 *
 * They render *inside* the shell, so the sidebar and header stay usable while a
 * route is loading, missing or broken.
 */

/** Shown while a route's code-split chunk (or a future loader) is in flight. */
export function RoutePending() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-7 w-40" />
        <Skeleton className="h-4 w-64" />
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {Array.from({ length: 3 }, (_, index) => (
          <Skeleton key={index} className="h-20 rounded-xl" />
        ))}
      </div>
      <Skeleton className="h-64 rounded-xl" />
    </div>
  );
}

/** Shown for a URL that matches no route. */
export function RouteNotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <SearchX />
          </EmptyMedia>
          <EmptyTitle>页面不存在</EmptyTitle>
          <EmptyDescription>这个地址没有对应的页面，可能链接已失效或拼写有误。</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="sm" nativeButton={false} render={<Link to="/" />}>
            返回首页
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  );
}

/** Shown when a route throws while rendering. */
export function RouteError({ error, reset }: ErrorComponentProps) {
  const message = error instanceof Error ? error.message : String(error);

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Alert variant="destructive" className="max-w-xl">
        <TriangleAlert />
        <AlertTitle>页面出错了</AlertTitle>
        <AlertDescription>
          <p>渲染这个页面时抛出了异常，可以重试一次。</p>
          <p className="mt-2 font-mono text-xs break-words">{message}</p>
          <Button size="sm" variant="outline" className="mt-3" onClick={reset}>
            重试
          </Button>
        </AlertDescription>
      </Alert>
    </div>
  );
}
