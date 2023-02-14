import { HStack as HStack1 } from "esbuild-cjs";
// import { HStack as HStack2 } from "esbuild-esm";

import type { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <>
      <section>
        <HStack1>
          <h1>hello Next.js</h1>
        </HStack1>
        {/* <HStack2> */}
          <p>hstack2</p>
        {/* </HStack2> */}
      </section>
    </>
  );
};

export default Page;
