/**
 * File Management API client.
 *
 * The open-source ABP ships <c>Volo.Abp.BlobStoring</c> for raw blob
 * storage but no folder hierarchy, metadata, or HTTP API. The backend
 * exposes a custom <c>FileManagementController</c> at
 * <c>/api/app/file-management</c> with explicit REST routes.
 *
 * Hand-written (not Kubb-generated) because this is a project-specific
 * custom service. Uses the shared axios instance so auth/tenant/locale
 * interceptors apply automatically.
 */
import client from "@kubb/plugin-client/clients/axios";
import type { RequestConfig } from "@kubb/plugin-client/clients/axios";
import { queryOptions, useMutation, useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

// ── Types ───────────────────────────────────────────────────────────

export interface FileFolderDto {
  id?: string;
  name?: string | null;
  parentId?: string | null;
  creationTime?: string;
  creatorId?: string | null;
  lastModificationTime?: string | null;
  lastModifierId?: string | null;
}

export interface FileEntryDto {
  id?: string;
  name?: string | null;
  contentType?: string | null;
  byteSize?: number;
  folderId?: string | null;
  creationTime?: string;
  creatorId?: string | null;
  lastModificationTime?: string | null;
  lastModifierId?: string | null;
}

export interface CreateFileFolderDto {
  name: string;
  parentId?: string | null;
}

export interface RenameDto {
  name: string;
}

interface ListResultDto<T> {
  items?: T[] | null;
}

// ── Base URL ────────────────────────────────────────────────────────

const BASE_URL = "/api/app/file-management";

// ── Query keys ──────────────────────────────────────────────────────

export const fileFoldersQueryKey = (parentId?: string | null) =>
  [{ url: `${BASE_URL}/folders`, parentId: parentId ?? null }] as const;

export const fileEntriesQueryKey = (folderId?: string | null) =>
  [{ url: `${BASE_URL}/files`, folderId: folderId ?? null }] as const;

// ── Raw API functions ───────────────────────────────────────────────

async function getFolders(
  parentId?: string | null,
  config: Partial<RequestConfig> = {},
): Promise<FileFolderDto[]> {
  const res = await client<ListResultDto<FileFolderDto>>({
    method: "GET",
    url: `${BASE_URL}/folders`,
    params: parentId ? { parentId } : undefined,
    ...config,
  });
  return res.data.items ?? [];
}

async function createFolder(
  data: CreateFileFolderDto,
  config: Partial<RequestConfig> = {},
): Promise<FileFolderDto> {
  const res = await client<FileFolderDto>({
    method: "POST",
    url: `${BASE_URL}/folders`,
    data,
    ...config,
  });
  return res.data;
}

async function renameFolder(
  id: string,
  data: RenameDto,
  config: Partial<RequestConfig> = {},
): Promise<FileFolderDto> {
  const res = await client<FileFolderDto>({
    method: "PUT",
    url: `${BASE_URL}/folders/${id}/rename`,
    data,
    ...config,
  });
  return res.data;
}

async function deleteFolder(id: string, config: Partial<RequestConfig> = {}): Promise<void> {
  await client<void>({
    method: "DELETE",
    url: `${BASE_URL}/folders/${id}`,
    ...config,
  });
}

async function getFiles(
  folderId?: string | null,
  config: Partial<RequestConfig> = {},
): Promise<FileEntryDto[]> {
  const res = await client<ListResultDto<FileEntryDto>>({
    method: "GET",
    url: `${BASE_URL}/files`,
    params: folderId ? { folderId } : undefined,
    ...config,
  });
  return res.data.items ?? [];
}

async function uploadFile(
  file: File,
  folderId?: string | null,
  config: Partial<RequestConfig> = {},
): Promise<FileEntryDto> {
  const formData = new FormData();
  formData.append("file", file);
  const res = await client<FileEntryDto>({
    method: "POST",
    url: `${BASE_URL}/files/upload`,
    params: folderId ? { folderId } : undefined,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
    ...config,
  });
  return res.data;
}

/** Returns the download URL for a file (used in <a href> for direct download). */
export function getFileDownloadUrl(id: string): string {
  return `${BASE_URL}/files/${id}/download`;
}

async function deleteFile(id: string, config: Partial<RequestConfig> = {}): Promise<void> {
  await client<void>({
    method: "DELETE",
    url: `${BASE_URL}/files/${id}`,
    ...config,
  });
}

// ── Query options ───────────────────────────────────────────────────

export function fileFoldersQueryOptions(
  parentId?: string | null,
  config: Partial<RequestConfig> = {},
) {
  const queryKey = fileFoldersQueryKey(parentId);
  return queryOptions({
    queryKey,
    queryFn: async ({ signal }) =>
      getFolders(parentId, { ...config, signal: config.signal ?? signal }),
  });
}

export function fileEntriesQueryOptions(
  folderId?: string | null,
  config: Partial<RequestConfig> = {},
) {
  const queryKey = fileEntriesQueryKey(folderId);
  return queryOptions({
    queryKey,
    queryFn: async ({ signal }) =>
      getFiles(folderId, { ...config, signal: config.signal ?? signal }),
  });
}

// ── Mutation hooks ──────────────────────────────────────────────────

export function useCreateFolder() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateFileFolderDto) => createFolder(data),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: [{ url: `${BASE_URL}/folders` }] });
    },
  });
}

export function useRenameFolder() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: RenameDto }) => renameFolder(id, data),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: [{ url: `${BASE_URL}/folders` }] });
    },
  });
}

export function useDeleteFolder() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteFolder(id),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: [{ url: `${BASE_URL}/folders` }] });
      void queryClient.invalidateQueries({ queryKey: [{ url: `${BASE_URL}/files` }] });
    },
  });
}

export function useUploadFile() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ file, folderId }: { file: File; folderId?: string | null }) =>
      uploadFile(file, folderId),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: [{ url: `${BASE_URL}/files` }] });
    },
  });
}

export function useDeleteFile() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteFile(id),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: [{ url: `${BASE_URL}/files` }] });
    },
  });
}

export { useQuery };
