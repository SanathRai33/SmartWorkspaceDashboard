import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main>
      <h1>Welcome to React Router!</h1>
      <p>
        This is a starter template for your new React Router app. Feel free to
        explore and modify it as you like.
      </p>
    </main>
  );
}
