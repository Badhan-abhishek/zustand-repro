import { useValueStore } from "@/state";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { setValue, value, clearStore } = useValueStore();
  return (
    <section
      style={{
        padding: "50px",
      }}
    >
      <main>
        <Link href="/main">Go to secondary page</Link>
      </main>
      <main>
        <button onClick={() => setValue("This should break on secondary page")}>
          Click here to call setValue
        </button>
        <p>value: {value}</p>
      </main>

      <section>
        <h3>Instruction</h3>
        <ol>
          <li>Click on `Click here to call setValue`</li>
          <li>Go to secondary page</li>
          <li>Click `Clear Store` button</li>
          <li>Come back to this page and click on repeat #1, you should see the
            error{" "}
          </li>
          <li>
            Refresh the page and it should work again
          </li>
        </ol>
      </section>
      <Image src="/error.png" height={350} width={700} alt="Error message" />
    </section>
  );
}
