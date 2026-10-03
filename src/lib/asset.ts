/**
 * Prefixa o caminho de um arquivo de /public com o basePath do site.
 * O Next prefixa links e chunks sozinho, mas não o `src` do next/image, do
 * <video> e do poster. Sem isso, os arquivos dão 404 em arrumasite.com/<pasta>.
 */
export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
