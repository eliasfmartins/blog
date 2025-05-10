import { ErrorMessage } from "@/components/ErrorMessage";

export default function NotFound() {
  return (
    <ErrorMessage
      content='Erro 404 - a Página que você está tentando acessar não exisste neste site.'
      contentTytle="404"
      pageTitle="Página não encontrada" />

  );
}
