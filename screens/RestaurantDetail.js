import { View } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

const foods = [
  {
    title: "Lobster Bisque",
    description:
      "A luxurious creamy soup made with fresh lobster meat, delicate herbs, and a splash of brandy, garnished with chive oil and accompanied by buttery crostini.",
    price: "$21.98",
    image:
      "https://princeedwardislandseafood.com/wp-content/uploads/2021/02/Lobster-Bisque.jpg",
  },
  {
    title: "Seared Foie Gras with Fig Compote",
    description:
      "A delicate slice of seared foie gras, served with a sweet and tangy fig compote, toasted brioche, and a drizzle of aged balsamic reduction.",
    price: "$35.74",
    image:
      "https://www.umami.site/wp-content/uploads/2021/01/pan-seared-foie-gras-recipe.jpg",
  },
  {
    title: "Truffle Risotto with Wild Mushrooms",
    description:
      "Creamy Arborio rice infused with white truffle oil, topped with a medley of sautéed wild mushrooms, finished with shaved black truffles and Parmigiano-Reggiano.",
    price: "$31.25",
    image:
      "https://www.onegreenplanet.org/wp-content/uploads/2015/11/Truffled-Mushroom-Risotto.jpg",
  },
  {
    title: "Prime Wagyu Beef Steak",
    description:
      "A succulent 10-ounce Wagyu beef steak, perfectly marbled for unparalleled tenderness and flavor, grilled to your preferred doneness, served with truffle mashed potatoes and roasted seasonal vegetables.",
    price: "$53.47",
    image:
      "https://meatthebutchers.com/wp-content/uploads/2019/05/Aus_tomahawk.png",
  },
  {
    title: "White Truffle and Porcini Mushroom Pizza",
    description:
      "A thin-crust pizza topped with a luscious white truffle sauce, sautéed porcini mushrooms, fontina cheese, and fresh arugula, drizzled with truffle oil.",
    price: "$38.63",
    image:
      "https://delvecchiopasta.com/cdn/shop/products/pastafresca_20210911_take-outpizza-close_4.jpg?v=1632165057",
  },
  {
    title: "Pan-Seared Scallops with Saffron Cream Sauce",
    description:
      "Plump and tender scallops, pan-seared to a golden brown, served over saffron-infused cream sauce, garnished with microgreens and crispy prosciutto.",
    price: "$42.87",
    image:
      "https://i.ytimg.com/vi/iOcbzHhZbP0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDQX7TMxfZY3jeKYr7SYoG8hBulKQ",
  },
  {
    title: "Chilean Wagyu Burger",
    description:
      "A decadent burger crafted from a blend of Chilean Wagyu beef, topped with aged Gouda cheese, caramelized onions, black truffle aioli, and served on a toasted brioche bun.",
    price: "$31.54",
    image:
      "https://cdn.shopify.com/s/files/1/0507/8250/3091/files/cheese_wagyu_burger.png?v=1649848244",
  },
  {
    title: "Alaskan King Crab Legs",
    description:
      "A generous portion of succulent Alaskan King Crab legs, steamed to perfection, served with clarified butter, lemon wedges, and a side of herb-roasted fingerling potatoes.",
    price: "$72.95",
    image:
      "https://www.shopandersonseafoods.com/media/catalog/product/cache/da6fde83830206b1271a1f702b1ebc44/1/7/frozen-alaskan-king-crab-legs",
  },
  {
    title: "Grilled Chilean Sea Bass",
    description:
      "Butter-soft Chilean Sea Bass fillet, seasoned with fresh herbs and grilled, accompanied by a lemon beurre blanc sauce and a medley of grilled asparagus and baby carrots.",
    price: "$44.67",
    image:
      "https://cooksandeats.com/wp-content/uploads/2013/05/240_F_102123736_3UnlYznkHU28jjQiEQU9iaERIPvNNyNG.jpg",
  },
  {
    title: "Decadent Chocolate Fondue Kit",
    description:
      "Rich, velvety chocolate fondue served with an assortment of fresh fruits, house-made marshmallows, and buttery shortbread cookies for dipping.",
    price: "$28.83",
    image:
      "https://www.foodandwine.com/thmb/gWjbyllvqiHAYiE7MzLNUqm2dEU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spiced-chocolate-fondue-FT-RECIPE0422-27f2b7b454e54bb8bdd4214c66deaa6f.jpg",
  },
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
}
