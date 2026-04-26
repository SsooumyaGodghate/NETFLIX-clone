import { useParams } from "react-router-dom";

const Moviepage = () => {
  const { id } = useParams();

  return (
    <div className="p-6 text-gray-200">
      <h1 className="text-2xl font-semibold">Movie</h1>
      <p className="mt-2 text-sm text-gray-400">Movie id: {id}</p>
    </div>
  );
};

export default Moviepage;
