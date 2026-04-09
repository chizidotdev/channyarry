import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Channyarry" },
    { name: "description", content: "Gender equitable storyteller" },
  ];
}

export default function Home() {
  return <></>;
}
