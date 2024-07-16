import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "About Absolute",
    default: "About Codevolution",
    template: "",
  },
};

export default function About() {
  return <h1>About me</h1>;
}
