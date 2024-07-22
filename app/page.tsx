import ReactLayout from "./layout";
import { JSX } from "react";
import { Landing } from "./components/landing/Landing";

export default function Home(): JSX.Element {

  return (
    <ReactLayout>
      <Landing />
    </ReactLayout>
  );
}
