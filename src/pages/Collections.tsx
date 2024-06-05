import { ICollectionResponse } from "@/interface/ICollection";
import { useEffect, useState } from "react";

function Collections() {
  const [collections, setCollections] = useState<ICollectionResponse[]>();
  useEffect(() => {
    fetch(`/api/collections/all`, { method: "GET" })
      .then((response) => response.json())
      .then((data: ICollectionResponse[]) => {
        setCollections(data);
      });
  }, []);
  return (
    <div className="w-full h-full p-5 pt-36">
      {collections?.map((element) => {
        return (
          <div className="flex flex-col gap-3" key={element.collection_id}>
            <h1 className="text-xl font-bold">{element.collection_name}</h1>
            <p className="text-sm">{element.description}</p>
            <div className="flex gap-1 text-sm">
              by <p className="font-bold">{element.user_nickname}</p>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Collections;
