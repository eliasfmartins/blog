'use client'
import { ErrorMessage } from "@/components/ErrorMessage";
import { useEffect } from "react";

type RooterErrorProps = {
  error: Error;
  reset: () => void;
};

export default function RooTErrorPage({ error }: RooterErrorProps) {
  // useEffect(() => {
  // console.log('error', error)
  // }, [error])

  return (
    <ErrorMessage
      pageTitle="Internal Server Error"
      contentTytle="501"
      content={'Ocorreu um erro inesperado, tente novamente mais tarde.'}
    />

  );
}
