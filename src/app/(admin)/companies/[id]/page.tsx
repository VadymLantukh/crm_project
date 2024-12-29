export interface ICompaniesPageIdProps {
  params: { id: string };
}

const CompaniesPageId = ({ params }: ICompaniesPageIdProps) => {
  return (
    <div className="py-6 px-10">
      <p>{`Information about company (${params.id})`}</p>
    </div>
  );
};

export default CompaniesPageId;
