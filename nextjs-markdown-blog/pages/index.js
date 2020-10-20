const Index = ({ title, description, ...props }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
};

export const getStaticProps = async () => {
  const siteConfig = await import("../../site.config.json");

  return {
    props: {
      title: siteConfig.title,
      description: siteConfig.description,
    },
  };
};

export default Index;
