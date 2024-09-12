import Breadcumbs from '@/components/main/collection/breadcumbs/Breadcumbs';
import ItemsList from '@/components/main/collection/item-lists/ItemsList';

const CollectionComponent = () => {
  return (
    <div>
      <Breadcumbs title="Collections"></Breadcumbs>
      <ItemsList></ItemsList>
    </div>
  );
};

export default CollectionComponent;
