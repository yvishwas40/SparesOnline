import { FcCheckmark } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";

export const navlist = [
  { text: "home", path: "/" },
  { text: "shop", path: "/shop" },
  { text: "about us", path: "/about" },
  { text: "blog", path: "/blog" },
  { text: "contact us", path: "/contact" },
];

export const hero = [
  {
    id: 1,
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfU1vtI8mcCEfA4DV5glfxFphvPFASfasl4A&s",
    name: "Cars",
    items: "5",
  },
  {
    id: 2,
    cover: "https://w7.pngwing.com/pngs/1012/637/png-transparent-honda-livo-bike.png",
    name: "Bikes",
    items: "12",
  },
  {
    id: 3,
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzIWYNa8oypF7pbRL-nrEkmDNxGrt8gqfq6Q&s",
    name: "Tractor",
    items: "12",
  },
  {
    id: 4,
    cover: "https://e7.pngegg.com/pngimages/897/148/png-clipart-isuzu-motors-ltd-isuzu-d-max-isuzu-forward-pickup-truck-lorry-freight-transport-van-thumbnail.png",
    name: "Trucks",
    items: "15",
  },
  {
    id: 5,
    cover: "https://e7.pngegg.com/pngimages/377/86/png-clipart-jcb-krishna-jcb-bilaspur-backhoe-loader-heavy-machinery-tractor-mode-of-transport-transport.png",
    name: "JCB",
    items: "7",
  },
];

export const products = [
  {
    id: 1,
    cover: "https://image.made-in-china.com/43f34j00KjVlFMShiBzJ/D785-Auto-Parts-Car-Parts-Ceramic-Brake-Pads-Manufacturer.webp",
    title: "Car Brake Pad",
    author: "by AutoPartsPro",
    price: 150.0,
    category: "car parts",
    qty: 0,
  },
  {
    id: 2,
    cover: "https://res.cloudinary.com/safexbikes-com/image/upload/f_auto,q_auto,w_300/images/SPARK%20PLUGS/bosch_spark_plug.jpg",
    title: "Bike Spark Plug",
    author: "by MotoPartsCo",
    price: 20.0,
    category: "bike parts",
    qty: 0,
  },
  {
    id: 3,
    cover: "https://s.alicdn.com/@sc04/kf/Ha4742464e21744dd8f91d15cc61313b4L.jpg_300x300.jpg",
    title: "Truck Air Filter",
    author: "by HeavyDutyParts",
    price: 70.0,
    category: "truck parts",
    qty: 0,
  },
  {
    id: 4,
    cover: "https://s.alicdn.com/@sc04/kf/Hfc8e897aedea4f3b82fc971ff8ddf5e2b.jpg_300x300.jpg",
    title: "Tractor Oil Filter",
    author: "by AgriParts",
    price: 60.0,
    category: "tractor parts",
    qty: 0,
  },
  {
    id: 5,
    cover: "https://m.media-amazon.com/images/I/417YXEjVV3L._AC_UF350,350_QL80_.jpg",
    title: "JCB Hydraulic Pump",
    author: "by IndustrialPro",
    price: 500.0,
    category: "JCB parts",
    qty: 0,
  },
  {
    id: 6,
    cover: "https://s.alicdn.com/@sc04/kf/H23372b4b9793437bacf221e9c755a726P.png_300x300.jpg",
    title: "Car Oil Filter",
    author: "by AutoPartsPro",
    price: 25.0,
    category: "car parts",
    qty: 0,
  },
];

export const banner = [
  {
    id: 1,
    title1: "Car Parts Sale",
    title2: "Discount on Engine and Brake Parts",
    desc: "Up to 20% off for all members",
    cover: "https://www.pivotmotors.com/wp-content/uploads/2019/05/Pivot-Motors-Car-Parts.jpg",
  },
  
];

export const topProducts = [
  {
    id: 20,
    cover: "https://media.istockphoto.com/id/1500401065/photo/3d-render-spark-plug-is-an-electrical-device-used-in-an-internal-combustion-engine-to-produce.jpg?s=612x612&w=0&k=20&c=bDN_ppxdxKQc-WUHUgSFfGF9oZ-yE1d32cRxY5j1W2E=",
    title: "Bike Spark Plug",
    author: "by MotoPartsCo",
    price: 20.0,
    category: "bike parts",
    qty: 0,
  },
  {
    id: 21,
    cover: "https://www.shutterstock.com/image-photo/car-cabin-air-filter-cleaning-600nw-2146874563.jpg",
    title: "Truck Air Filter",
    author: "by HeavyDutyParts",
    price: 70.0,
    category: "truck parts",
    qty: 0,
  },
  {
    id: 22,
    cover: "https://t3.ftcdn.net/jpg/01/63/30/06/360_F_163300641_2blPhlRhHugWEPgDumhjKBI9DjWjCHw5.jpg",
    title: "Car Brake Pad",
    author: "by AutoPartsPro",
    price: 150.0,
    category: "car parts",
    qty: 0,
  },
  {
    id: 23,
    cover: "https://png.pngtree.com/thumb_back/fh260/background/20230704/pngtree-d-render-of-motor-oil-canister-filter-element-and-new-oil-image_3735728.jpg",
    title: "Tractor Oil Filter",
    author: "by AgriParts",
    price: 60.0,
    category: "tractor parts",
    qty: 0,
  },
];

export const price = [
  {
    id: 1,
    name: "Basic Mechanic Plan",
    price: "0",
    desc: "Essential tools for mechanics getting started with B2B services. 14 days of free access.",
    list: [
      { para: "Access to Basic Parts Catalog", icon: <FcCheckmark /> },
      { para: "Limited Customer Support", icon: <FcCheckmark /> },
      { para: "Basic Analytics & Reports", icon: <AiOutlineClose /> },
      { para: "Priority Shipping", icon: <AiOutlineClose /> },
      { para: "Discounts on Parts", icon: <AiOutlineClose /> },
      { para: "Dedicated Account Manager", icon: <AiOutlineClose /> },
    ],
  },
  {
    id: 2,
    name: "Standard Mechanic Plan",
    price: "26",
    desc: "Enhanced plan with added tools for growing mechanic businesses.",
    list: [
      { para: "Access to Full Parts Catalog", icon: <FcCheckmark /> },
      { para: "Priority Customer Support", icon: <FcCheckmark /> },
      { para: "Advanced Analytics & Reports", icon: <FcCheckmark /> },
      { para: "Priority Shipping", icon: <FcCheckmark /> },
      { para: "Standard Discounts on Parts", icon: <FcCheckmark /> },
      { para: "Dedicated Account Manager", icon: <AiOutlineClose /> },
    ],
  },
  {
    id: 3,
    name: "Premium Mechanic Plan",
    price: "49",
    desc: "Comprehensive plan for mechanics seeking full B2B support and premium features.",
    list: [
      { para: "Access to Full Parts Catalog", icon: <FcCheckmark /> },
      { para: "24/7 Premium Support", icon: <FcCheckmark /> },
      { para: "In-depth Analytics & Insights", icon: <FcCheckmark /> },
      { para: "Express Shipping", icon: <FcCheckmark /> },
      { para: "Maximum Discounts on Parts", icon: <FcCheckmark /> },
      { para: "Dedicated Account Manager", icon: <FcCheckmark /> },
    ],
  },
];

export const customer = [
  {
    id: 1,
    desc: "Join the Family of Spares on Wheels ",
    name: "Sanjay Sayam",
    post: "Marketing Company Director",
  },
  {
    id: 2,
    desc: "One stop Solution for all your vehicle repairs",
    name: "Vishwas Yeleshwaram",
    post: "Cheif Executive Officer",
  },
  {
    id: 3,
    desc: "Mechanic oreinted B2B support",
    name: "Bhavya Danala",
    post: "CTO",
  },
];

export const blog = [
  {
    id: 1,
    date: "October 27, 2021",
    title: "Transition Your Favorite Looks into Fall France 2022",
    category: "image",
    cover: "https://yourdomain.com/images/blog/b1.jpg",
  },
  {
    id: 2,
    date: "October 27, 2021",
    title: "Meeting Breathtaking Beauty for Everyday Life",
    category: "shopping",
    cover: "https://yourdomain.com/images/blog/b2.jpg",
  },
  {
    id: 3,
    date: "October 27, 2021",
    title: "Perfect Quality Reasonable Price for Your",
    category: "travel",
    cover: "https://yourdomain.com/images/blog/b3.jpg",
  },
];
