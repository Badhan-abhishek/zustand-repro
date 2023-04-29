import { useValueStore } from "@/state";
import { NextPage } from "next";
import Link from "next/link";

const Main: NextPage = () => {
  const { clearStore } = useValueStore();
  return (
    <div
      style={{
        padding: "100px",
      }}
    >
      <section>
        <Link href="/">Go to home page</Link>
      </section>
     
      <main>
        <button onClick={() => clearStore()}>clear store</button>
      </main>
    </div>
  );
};

export default Main;
