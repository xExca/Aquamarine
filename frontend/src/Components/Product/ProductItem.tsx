import { useState } from "react";
import { FaHeart } from "react-icons/fa";

  const colors = [
    { name: "Red", value: "red-500" },
    { name: "Blue", value: "blue-500" },
    { name: "Green", value: "green-500" },
    { name: "Yellow", value: "yellow-500" },
    { name: "White", value: "pink-500" },
  ];

const ProductItem = () => {
    const [selectedColor, setSelectedColor] = useState<string>("");
  return (
    <div className="my-10 flex gap-2 items-start justify-center">
      <div className="flex w-28 md:w-32 flex-col gap-2">
        {[
          "https://placehold.co/300x400",
          "https://placehold.co/300x400",
          "https://placehold.co/300x400",
        ].map((src, i) => (
          <div key={i} className="aspect-[3/4] overflow-hidden rounded-md">
            <img src={src} alt={`thumb ${i + 1}`} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
      <div className="w-[422px]">
        <div className="aspect-[4/5] overflow-hidden rounded-md">
          <img
            src="https://placehold.co/500"
            alt="product main"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="ml-10">
        <h2 className="text-2xl font-bold mb-2">Sunset Orchid Bikini Top</h2>
        <p className="text-lg mb-4">₱1299</p>
        <hr className="my-4" />
        <div className="mb-6">
          <p>Size</p>
          <div className="flex flex-row gap-2 text-sm">
            <button className="border border-green-800 px-2 hover:bg-green-800 hover:text-white">
              Extra Small
            </button>
            <button className="border border-green-800 px-2 hover:bg-green-800 hover:text-white">
              Small
            </button>
            <button className="border border-green-800 px-2 hover:bg-green-800 hover:text-white">
              Medium
            </button>
            <button className="border border-green-800 px-2 hover:bg-green-800 hover:text-white">
              Large
            </button>
            <button className="border border-green-800 px-2 hover:bg-green-800 hover:text-white">
              Extra Large
            </button>
          </div>
        </div>
        <div className="mb-6">
          <p className="font-semibold mb-2">Color</p>
          <div className="flex gap-2 m-1">
            {colors.map((c) => (
              <div
                key={c.name}
                onClick={() => setSelectedColor(c.value)}
                className={`
                  p-1 rounded-full cursor-pointer
                  border-[0.5px]
                  ${selectedColor === c.value ? "border-gray-800" : "border-gray-300"}
                `}
              >
                <div
                  className={`w-6 h-6 rounded-full bg-${c.value}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2 text-sm mb-6">
          <button className="px-2 bg-teal-700 text-white hover:bg-teal-800">
            Buy Now
          </button>
          <button className="px-2 bg-gray-800 text-white hover:bg-gray-900">
            Add to Bag
          </button>
          <button className="p-2 bg-gray-800 text-white hover:bg-gray-900">
            <FaHeart />
          </button>
        </div>

        <p className="text-gray-700 mb-6">
          The "Sunset Orchid" bikini features a classic triangle top with ruched details and adjustable ties for a flattering,customizable fit.
        </p>

        <p className="text-gray-700 mb-6">
          Paired with low-rise V-cut bottoms and side ties, the design enhances natural curves and elongates the legs. Finished in a soft floral print of coral pink and sea foam green on a pale sand base, it captures the calm elegance of tropical waters.
        </p>

        <button className="px-5 py-2 rounded-md bg-teal-700 text-white hover:bg-teal-800">
          Add to Bag
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
