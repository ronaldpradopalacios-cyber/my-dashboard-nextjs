import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/dashboard/main");

  return (
    <>
      <h1 className="text-3xl font-bold">Hola Mundo</h1>
    </>
  );
}
