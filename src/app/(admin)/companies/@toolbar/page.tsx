import AddCompanyButton from '@/app/components/add-company-button';
import SearchInput from '@/app/components/search-input';
import Toolbar from '@/app/components/toolbar';

const ToolbarPage = () => {
  return (
    <Toolbar action={<AddCompanyButton />}>
      <SearchInput />
    </Toolbar>
  );
};

export default ToolbarPage;
