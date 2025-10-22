
import { Link, useParams } from "react-router-dom";
import useGetoneProduct from "../Hooks/useGetoneProduct";

function ProductDetail() {
 
   const route = useParams();
   const {data,isLoading} = useGetoneProduct(route.id)
  

  return (
    <>
      <div className="bg-blue-50 w-full py-1 font-jost h-fit">
        <div className="max-w-[90%] lg:max-w-5xl mx-auto flex items-center gap-2 text-sm">
          <Link to={`/`}>Home</Link>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <Link to="/products">Product</Link>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>

          <span className="font-semibold">Men's cloth</span>
        </div>

        {/* Body */}

        {isLoading == true && (
          <div className="flex items-center justify-center flex-col py-10">
            <div className="border-gray-300 border-4 border-t-gray-600 w-8 h-8 animate-spin rounded-full"></div>
            <h1 className=""></h1>
          </div>
        )}

        {isLoading == false && (
          <div className="my-10 max-w-[90%] lg:max-w-5xl mx-auto font-jost">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <div className="p-2">
                <img className="w-[300px] h-[300px]" src={data.image} alt="" />
              </div>
              <div className="px-5">
                <h3 className="text-lg uppercase">{data.category}</h3>
                <h1 className="text-3xl font-bold">{data.title}</h1>
                <h1 className="text-2xl text-red-500 font-bold mt-3">
                  ${data.price}
                </h1>

                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 my-8">
                  <div className="border text-sm border-gray-300 w-32 py-2 flex items-center justify-evenly">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14"
                        />
                      </svg>
                    </button>
                    <button>1</button>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </button>
                  </div>
                  <button className="bg-primary text-white py-2 px-8 rounded-md active:scale-90">
                    Add to Card
                  </button>
                  <button className="bg-yellow-500 text-white py-2 px-8 rounded-md active:scale-90">
                    Pay now
                  </button>
                </div>

                <hr />
                <p className="text-gray-500 text-sm line-clamp-5">
                  {data.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductDetail;
