
import Card from "../Components/Card";
import useGetLimitProducts from "../Hooks/useGetLimitProducts";


function Home() {
  
  const {data} = useGetLimitProducts()

  return (
    <div className="font-jost">
      <div style={{backgroundImage: "url('./slide_02.jpg')"}} className="bg-secondary bg-center bg-cover lg:bg-contain bg-no-repeat flex items-center h-screen px-4 lg:px-40">
        <div>
          <h2 className="text-2xl font-bold">New Collection</h2>
          <h1 className="text-4xl lg:text-6xl font-bold">
            Luxury Without
            <br /> Labels
          </h1>
          <p>Explore new-in product and best sellers</p>
          <button className="bg-primary text-white px-[12px] py-[7px] rounded-[12px] mt-6">
            View Collection
          </button>
        </div>
      </div>

      <div className="my-20 max-w-[90%] lg:max-w-5xl mx-auto">
        <h2 className="text-center text-3xl font-bold">Best Seller</h2>
        <p className="text-center">Explor out best seller products</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">

          {
            data.map(item =>(
                <Card key={item.id} data={item}/>
            ))
          }
          

        </div>
        <div className="flex items-center justify-center mt-8">
          <button className="bg-transparent border border-primary px-8 py-2 rounded-lg hover:bg-primary hover:text-white transition-all">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
