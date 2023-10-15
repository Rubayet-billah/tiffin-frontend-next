const PageHeading = ({ title, subTitle }) => {
  return (
    <div className="text-center mb-8">
      <h3 className="text-4xl font-bold mb-1">{title}</h3>
      <p className="capitalize">{subTitle}</p>
    </div>
  );
};

export default PageHeading;
