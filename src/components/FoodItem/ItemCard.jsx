"use client";
import Image from "next/image"; // Import Image component from next/image
import { useRouter } from "next/navigation";

const ItemCard = ({ item }) => {
  const { id, name, description, image, category, price, isNew } = item;
  const router = useRouter();
  const handleView = () => {
    router.push(`/item/${id}`);
  };

  return (
    <div
      onClick={handleView}
      className="card md:w-96 bg-base-100 shadow-xl rounded hover:scale-[1.03] duration-200 cursor-pointer"
    >
      <figure>
        <Image src={image} alt={name} width={500} height={500} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          {isNew && (
            <div className="badge badge-secondary font-bold">Featured</div>
          )}
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">Price: ${price}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
