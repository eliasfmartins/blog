import { SpinLoader } from "@/components/SpinLoader";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      teste
      <SpinLoader className="bg-amber-400"/>
      <div>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <p className="text-gray-500">This is a simple example of a paragraph.</p>
        <p className="text-gray-500">This is a simple example of a paragraph.</p>
      </div>
      pao
    </div>
  );
}
