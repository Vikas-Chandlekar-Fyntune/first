import Error from "../../../shared/components/Error/Error";
import Loader from "../../../shared/components/Loader/Loader";
import PersonsTable from "../components/PersonsTable";
import useGetPersons from "../hooks/useGetPersons";

const PersonPage = () => {
  const { data, isLoading, isError } = useGetPersons();

  const persons = data?.data || [];

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <div className="max-w-5xl mx-auto space-y-2">
        <h1 className="text-gray-400 text-2xl text-center">Persons Data</h1>

        {/* Person Table */}
        <PersonsTable data={persons} />
      </div>
    </>
  );
};

export default PersonPage;
