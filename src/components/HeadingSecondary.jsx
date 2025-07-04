export default function HeadingSecondary({ heading, description }) {
  return (
    <div className="text-center my-16">
      <h2 className="text-4xl font-bold text-gray-800 pb-8">{heading}</h2>
      <p className="flex flex-col text-gray-700 text-lg">
        <span>{description.first}</span>
        <span>{description.second}</span>
      </p>
    </div>
  );
}
