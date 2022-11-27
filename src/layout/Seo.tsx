import Head from "next/head";

interface SeoProps {
  title: string;
  description: string;
}

//basic SEO component
const Seo = ({ title, description }: SeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="desc" />
    </Head>
  );
};

export default Seo;
