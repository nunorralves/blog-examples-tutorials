import Layout from "../components/Layout";

const Index = ({ title, description, ...props }) => {
  return (
    <Layout title={title}>
      <h1>{title}</h1>
      <p>{description}</p>
      <main>
        <p>Blog Posts here!</p>
      </main>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const siteConfig = await import("../site.config.json");

  return {
    props: {
      title: siteConfig.title,
      description: siteConfig.description,
    },
  };
};

export default Index;
