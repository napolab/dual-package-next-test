/* eslint-disable unused-imports/no-unused-imports-ts */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Generally } from "~/components/generally";
import { Hack } from "~/components/hack";

import type { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <>
      <section>
        <h1>hello Next.js</h1>
        <Hack />
        {/* ここのコメントアウトを外すとビルドエラーになる */}
        {/* <Generally /> */}
      </section>
    </>
  );
};

export default Page;
