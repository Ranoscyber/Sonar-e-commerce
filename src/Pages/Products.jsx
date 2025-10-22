
import Card from "../Components/Card";
import useGetAllProduct from "../Hooks/useGetAllProducts";

function Products() {
 
  const {data,isLoading} = useGetAllProduct()

  return (
    <div className="my-20 max-w-[90%] lg:max-w-5xl mx-auto">
      <h1 className="text-center text-3xl font-bold uppercase">All Products</h1>

      {isLoading == true && <div className="flex items-center justify-center flex-col py-10">
        <div className="border-gray-300 h-8 w-8 rounded-full border-4 border-t-gray-600 mb-10 animate-spin"></div>
        <h1 className="text-3xl">Loading....</h1>
        </div>}
      {isLoading == false && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-[50px]">
          {data.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
