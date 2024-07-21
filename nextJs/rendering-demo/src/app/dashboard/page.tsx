"use client";

import { useState } from "react";

export default function DashboardPage() {
  // use client에서는 log가 웹에서 찍힌다.
  console.log("Dashboard client component");
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Dashboard Page</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}!</p>
    </div>
  );
}
