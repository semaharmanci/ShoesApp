import { useQuery } from "@tanstack/react-query";
import { getShoes } from "../../api";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Card from "../../components/Card";
import { Shoe } from "../../types";
import { useSearchParams } from "react-router-dom";
import formatParams from "../../utils/formatParams";


const List = () => {
  const [params] = useSearchParams();
  const paramsObj = Object.fromEntries(params.entries());
  const paramsStr = formatParams(paramsObj);

  const { isLoading, error, data } = useQuery<Shoe[]>({
    queryKey: ["shoes", paramsStr],
    queryFn: () => getShoes(paramsStr),
  });


  return (
    <div className="col-span-4 lg:col-span-3">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : data?.length === 0 ? (
        <p>Aradiginiz ürün bulunamadi.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6">
          {data?.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
