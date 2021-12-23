const candySeed = [
  {
    candy: 'Skittles',
    img: "https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/499248639-1.jpg",
    flavor: "Fruity",
  },
  {
    candy:"Jolly Ranchers",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/579930746.jpg", 
    flavor:"Fruity",
  },
  {
    candy:"Milk Duds",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/592715126.jpg", 
    flavor:"Chocolate malt",
  },
  {
    candy:"Baby Ruth",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Babyruth.jpg", 
    flavor:"Peanuts and chocolate",
  },
  {
    candy:"Starbursts",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Starburst.jpg", 
    flavor:"Fruity",
  },
  {
    candy:"SweetTarts",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Sweetarts.jpg", 
    flavor:"Tarty sweets",
  },
  {
    candy:"Bit o Honey",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Bit-o-Honey.jpg", 
    flavor:"Caramel",
  },
  {
    candy:"Werther's Original",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Werthers-Original.png",
    flavor:"Caramel-chewy/hard",
  },
  {
    candy:"Riesen",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Riesen.jpg", 
    flavor:"Dark chocolate  &  Caramel",
  },
  {
    candy:"Pop rocks",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Pop-Rocks.jpg", 
    flavor:"Fruity-fizzy",
  },
  {
    candy:"Nestle Crunch Bar",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Nestle-Crunch-Bar.jpg", 
    flavor:"Chocolate Rice crispies crunch",
  },
  {
    candy:"Jawbreakers",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Jawbreakers.jpg", 
    flavor:"Sweet",
  },
  {
    candy:"Twizzlers",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Twizzlers.jpg", 
    flavor:"Cherry",
  },
  {
    candy:"Toblerone",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Toblerone-Dark.png", 
    flavor:"Dark Chocolate",
  },
  {
    candy:"Smarties",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Smarties.jpg", 
    flavor:"Sweet Tarty Chalky",
  },
  {
    candy:"Mr.Goodbar",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Mr.-Goodbar.jpg", 
    flavor:"Chocolate and peanuts",
  },
  {
    candy:"Pez Candy",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Pez-Candy-Dispenser.jpg", 
    flavor:"Chalky candy",
  },
  {
    candy:"Blow Pops",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Blow-pops.jpg", 
    flavor:"Fruity",
  },
  {
    candy:"Almond Joy",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Almond-Joy.jpg", 
    flavor:"Chocolate coconut and almonds",
  },
  {
    candy:"Sour Patch Kids",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Sour-Patch.jpg", 
    flavor:"Fruity",
  },
  {
    candy:"Atomic Fireball",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Fireball.jpg", 
    flavor:"Fire, spicy, cinnamon",
  },
  {
    candy:"Payday",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/source/rev-ae78e0b/wp-content/uploads/2020/10/Payday.png", 
    flavor:"Peanuts and nougats",
  },
  {
    candy:"Reese's Pieces ",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Reeses-Pieces.jpg", 
    flavor:"Chocolate coated delight",
  },
  {
    candy:"Junior Mints",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Junior-Mints.jpg", 
    flavor:"Chocolate and mint",
  },
  {
    candy:"Milky Way",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Milky-Way.jpg", 
    flavor:"Chocolate and Caramel over nougat",
  },
  {
    candy:"Cadbury Egg",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Cadbury-egg.jpg", 
    flavor:"Chocolate egg with caramel",
  },
  {
    candy:"Toostie Pop",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Tootsie-Pop.jpg", 
    flavor:"Hard candy with tootsie roll inside",
  },
  {
    candy:"York Peppermint Patties",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/York.jpg", 
    flavor:"Mint and chocolate",
  },
  {
    candy:"Three Musketeers",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/3-Musketeeres.jpg", 
    flavor:"Chocolate and nougat",
  },
  {
    candy:"Twix",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Twix.jpg", 
    flavor:"Cookie Bar chocolate with caramel",
  },
  {
    candy:"Kit Kat",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Kitkat2.jpg", 
    flavor:"Cookie Chocolate bar, variaties depending in area",
  },
  {
    candy:"M&Ms",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/MMs.jpg", 
    flavor:"Chocolate with candy coating",
  },
  {
    candy:"Snickers",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Snickers.jpg", 
    flavor:"Chocolate and nuts ",
  },
  {
    candy:"Air Heads",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/source/rev-ae78e0b/wp-content/uploads/2020/10/Air-Heads.png", 
    flavor:"Chewy Taffy fruity flavors",
  },
  {
    candy:"Andes Mint",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Andes-Mints.png", 
    flavor:"Mint and Chocolate",
  },
  {
    candy:"Boston Baked Beans",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Boston-Baked-Beans.gif", 
    flavor:"Candy coated peanuts",
  },
  {
    candy:"Hubba Bubba",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Hubba-Bubba.png", 
    flavor:"Bubble Gum with fruity goo",
  },
  {
    candy:"Charleston Chew",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/source/rev-ae78e0b/wp-content/uploads/2020/10/Charleston-Chew.png", 
    flavor:"Chocolate covered nougat",
  },
  {
    candy:"Dots",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/source/rev-ae78e0b/wp-content/uploads/2020/10/Dots.png", 
    flavor:"Fruity chews",
  },
  {
    candy:"Chick-o-Stick",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Chick-o-Stick.jpg", 
    flavor:"Tropical coconut and crunchy peanut butter",
  },
  {
    candy:"Gobstopper",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Gobstopper.jpg", 
    flavor:"Jawbreaker like fruity",
  },
  {
    candy:"Whatchamacallit",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Whatchamacallit.jpg", 
    flavor:"Chocolatey wafers",
  },
  {
    candy:"Fruit Gushers",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Fruit-Gushers.jpg", 
    flavor:"Tropical Flavors that burst in your mouth",
  },
  {
    candy:"Fun Dip",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Fun-Dip.jpg", 
    flavor:"Flavored powdered candy",
  },
  {
    candy:"Hot Tamales",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/HotTamales1.jpg", 
    flavor:"Fire, fierce, and 3 alarm fire",
  },
  {
    candy:"Goo Goo Cluster",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/GooGooCluster.jpg", 
    flavor:"Nutty and chocolatey",
  },
  {
    candy:"Jujy Fruits",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/source/rev-ae78e0b/wp-content/uploads/2020/10/Jujyfruits.png", 
    flavor:"Chewy fruit candy",
  },
  {
    candy:"Mounds",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Mounds.jpg", 
    flavor:"Dark chocolaty and coconut",
  },
  {
    candy:"LemonHeads",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/source/rev-ae78e0b/wp-content/uploads/2020/10/Lemonhead.png", 
    flavor:"Lemond hard candy",
  },
  {
    candy:"Nerds",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Wonka-Nerds.jpg", 
    flavor:"Fruity",
  },
  {
    candy:"Cherry Sours",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Cherry-SOurs.jpg", 
    flavor:"Cherry",
  },
  {
    candy:"Laffy Taffy",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Laffy-Taffy.jpg", 
    flavor:"",
  },
  {
    candy:"100 Grand Bar",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/100Grand.jpg", 
    flavor:"Rice Krispies, chocolate and caramel",
  },
  {
    candy:"Orange Slices",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Orang-Slices.jpg", 
    flavor:"Orange",
  },
  {
    candy:"Razzles",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/source/rev-ae78e0b/wp-content/uploads/2020/10/Razzles.png", 
    flavor:"Fruity, tart",
  },
  {
    candy:"Slo Poke",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Slo-Poke.jpg", 
    flavor:"Caramel on a stick",
  },
  {
    candy:"Ring Pop",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Ring-Pop.jpg", 
    flavor:"Fruity",
  },
  {
    candy:"Sky Bar",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Sky-Bar.jpg", 
    flavor:"Milk chocolate bar peanut and fudge stuffed.",
  },
  {
    candy:"Rolo",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Rolo.jpg", 
    flavor:"Carmel and chocolate",
  },
  {
    candy:"Red Hots",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/RedHots.jpg", 
    flavor:"Hot, cinnamony",
  },
  {
    candy:"Warheads",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Warheads.jpg", 
    flavor:"Super sour fruity candy",
  },
  {
    candy:"Sno-caps",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Sno-Caps.jpg", 
    flavor:"Chocolate nonpareils",
  },
  {
    candy:"Spree",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Spree.jpg", 
    flavor:"Fruity",
  },
  {
    candy:"Oh Henry",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Oh-Henry.jpg", 
    flavor:"Fudge and caramel",
  },
  {
    candy:"Whoppers",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Whoppers.jpg", 
    flavor:"Malted chocolate covered balls",
  },
  {
    candy:"Swedish Fish",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Swedish-Fish.jpg", 
    flavor:"Chewy Cherry",
  },
  {
    candy:"Valomilk",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/ValoMilk.jpg", 
    flavor:"Milky creamy chocolate cups",
  },
  {
    candy:"Butterfinger",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Butterfinger.jpg", 
    flavor:"Chocolate peanut butter sticks",
  },
  {
    candy:"Lifesavers",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Lifesavers.jpg", 
    flavor:"Fruity hard candy",
  },
  {
    candy:"5th Avenue",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/5th-Avenue.jpg", 
    flavor:"Crunchy peanut buttery chocolate coated bar",
  },
  {
    candy:"Clark Bar",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Clark-Bar.jpg", 
    flavor:"Crunchy peanut buttery chocolate coated bar",
  },
  {
    candy:"Rocky Road",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Rocky-Road.jpg", 
    flavor:"Rocky road flavored chocolate bars",
  },
  {
    candy:"Mike and Ike",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Mike-and-Ike.jpg", 
    flavor:"Fruity, chewy candy",
  },
  {
    candy:"Health",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Heath.jpg", 
    flavor:"Milk chocolate toffee",
  },
  {
    candy:"Skor",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Skor.jpg", 
    flavor:"Chsocolate butter toffee",
  },
  {
    candy:"Sugar Babies",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Sugar-Babies.png", 
    flavor:"Caramel",
  },
  {
    candy:"Wunderbar",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/WunderBar.jpg", 
    flavor:"Peanut butter caramel",
  },
  {
    candy:"Mamba",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Mamba.jpg", 
    flavor:"Fruity",
  },
  {
    candy:"Raisinets",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Raisinets.jpg", 
    flavor:"Milk chocolate covered raisins",
  },
  {
    candy:"Goobers",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Goobers.jpg", 
    flavor:"Peanuts covered with chocolate",
  },
  {
    candy:"Bun",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Bun.jpg", 
    flavor:"Caramel roasted peanut clusters",
  },
  {
    candy:"Zero Candy Bar",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Zero-Candy.jpg", 
    flavor:"white chocolate nougat caramel",
  },
  {
    candy:"Mars Bar",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Mars-bar.jpg", 
    flavor:"Nougat, chocolate and caramel",
  },
  {
    candy:"Now and Later",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Now-and-Later.jpg", 
    flavor:"Fruity",
  },
  {
    candy:"Take 5",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Take-5.jpg", 
    flavor:"Pretzels and peanut butter and milk chocolate",
  },
  {
    candy:"Caramello",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Caramello.jpg", 
    flavor:"Milk chocolate creamy caramel bar",
  },
  {
    candy:"Dove Chocolate Bar",
    img:"https://cdn-anofn.nitrocdn.com/jQDfetAYpBYbzUHaVHqshamjDuzDFbUZ/assets/static/optimized/rev-ae78e0b/wp-content/uploads/2020/10/Dove-Chocolate.jpg", 
    flavor:"Chocolate",
  },

];

module.exports = candySeed;