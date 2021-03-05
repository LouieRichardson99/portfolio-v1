import Head from "next/head";

export default function Meta(props) {
  return (
    <Head>
      <title>{`Louie Richardson | ${props.title}`}</title>
      <meta name="description" content={props.desc} />
    </Head>
  );
}
