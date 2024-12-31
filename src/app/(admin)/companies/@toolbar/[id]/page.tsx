import AddPromotionButton from '@/app/components/add-promotion-button';
import SearchInput from '@/app/components/search-input';
import Toolbar from '@/app/components/toolbar';

export interface IToolbarCompaniesPageProps {
  params: { id: string };
}

const ToolbarCompaniesPage = ({ params }: IToolbarCompaniesPageProps) => {
  return (
    <Toolbar action={<AddPromotionButton companyId={params.id} />}>
      <SearchInput />
    </Toolbar>
  );
};

export default ToolbarCompaniesPage;
