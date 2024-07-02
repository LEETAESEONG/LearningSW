const newStr = "Str";
console.log(typeof newStr);

interface productType {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
}

const product: productType = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};
