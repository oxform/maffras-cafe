// Menu data for Maffra's Cafe.
// `image` fields use Unsplash stock photos. Swap these for real photos
// of each dish later — keep the same key names and the layout still works.

export const categories = [
  { id: 'breakfast', label: 'Breakfast', emoji: '🍳' },
  { id: 'snacks',    label: 'Snacks',    emoji: '🥟' },
  { id: 'lunch',     label: 'Lunch',     emoji: '🥪' },
  { id: 'coffee',    label: 'Coffee',    emoji: '☕' },
  { id: 'cold',      label: 'Cold Drinks', emoji: '🧃' },
  { id: 'desserts',  label: 'Desserts',  emoji: '🍪' },
  { id: 'kebabs',    label: 'Kebabs',    emoji: '🥙' }
]

export const menu = {
  breakfast: [
    { name: 'Egg and Bacon Muffin',    price: 9.75, desc: 'Fluffy muffin filled with egg and crispy bacon.',
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=900&q=80&auto=format&fit=crop' },
    { name: 'Egg and Bacon Roll',      price: 9.75, desc: 'Fried eggs and crispy bacon rashers in a soft roll.', popular: true,
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=900&q=80&auto=format&fit=crop' },
    { name: 'Egg and Sausage Muffin',  price: 9.75, desc: 'Savoury sausage paired with a freshly cracked egg on a toasted muffin.',
      image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=900&q=80&auto=format&fit=crop' },
    { name: 'Ham and Cheese Croissant',price: 9.75, desc: 'Buttery, flaky croissant layered with shaved ham and melted cheese.',
      image: 'https://images.unsplash.com/photo-1623334044303-241021148842?w=900&q=80&auto=format&fit=crop' }
  ],
  snacks: [
    { name: 'Dim Sim',          price: 1.95, desc: 'Savoury dim sim with a hearty filling wrapped in a tender dumpling skin.',
      image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=900&q=80&auto=format&fit=crop' },
    { name: 'Potato Cake',      price: 1.95, desc: 'Crispy exterior, fluffy interior, made with potatoes.', popular: true,
      image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=900&q=80&auto=format&fit=crop' },
    { name: 'Kransky',          price: 5.20, desc: 'Savoury European-style sausage.',
      image: 'https://images.unsplash.com/photo-1601001815853-3835274f63b1?w=900&q=80&auto=format&fit=crop' },
    { name: 'Meat Pie',         price: 7.80, desc: 'Hearty filling wrapped in a flaky pastry crust.',
      image: 'https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?w=900&q=80&auto=format&fit=crop' },
    { name: 'Beef, Lamb & Cheese Gozleme', price: 13.00, desc: 'Savoury pastry filled with beef, lamb and melted cheese.',
      image: 'https://images.unsplash.com/photo-1625938145744-533b2f1b1a8d?w=900&q=80&auto=format&fit=crop' },
    { name: 'Chicken Tender',   price: 2.60, desc: 'Tender and juicy chicken strips, perfect for snacking.',
      image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=900&q=80&auto=format&fit=crop' },
    { name: 'South Melbourne Dim Sim', price: 3.25, desc: 'Traditional Melbourne-style dim sim, steamed to perfection.',
      image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=900&q=80&auto=format&fit=crop' },
    { name: 'Battered Hot Dog', price: 5.20, desc: 'Crispy battered hot dog, perfect for a quick snack.', popular: true,
      image: 'https://images.unsplash.com/photo-1619740455993-9d77a82c8559?w=900&q=80&auto=format&fit=crop' },
    { name: 'Spring Roll',      price: 5.85, desc: 'Crisp pastry wrapped around a delicate filling.',
      image: 'https://images.unsplash.com/photo-1606851094291-6efae152bb87?w=900&q=80&auto=format&fit=crop' },
    { name: 'Chips',            price: 6.50, desc: 'Hot potato chips with a crispy exterior and fluffy centre.',
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=900&q=80&auto=format&fit=crop' },
    { name: 'Sausage Roll',     price: 9.10, desc: 'Flaky pastry filled with savoury sausage.',
      image: 'https://images.unsplash.com/photo-1601001815853-3835274f63b1?w=900&q=80&auto=format&fit=crop' },
    { name: 'Cheese & Spinach Gozleme', price: 13.00, desc: 'Flaky pastry filled with melted cheese and spinach.',
      image: 'https://images.unsplash.com/photo-1625938145744-533b2f1b1a8d?w=900&q=80&auto=format&fit=crop' }
  ],
  lunch: [
    { name: 'Beef Burger',     price: 14.30, desc: 'Juicy beef patty served in a burger.',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=80&auto=format&fit=crop' },
    { name: 'Chicken Burger',  price: 16.90, desc: 'Juicy chicken patty served in a burger.', popular: true,
      image: 'https://images.unsplash.com/photo-1606755962773-d324e2dabd3a?w=900&q=80&auto=format&fit=crop' },
    { name: 'Schnitzel Roll',  price: 16.90, desc: 'Crumbed schnitzel served in a roll with tomato, red onion and salad greens.',
      image: 'https://images.unsplash.com/photo-1606755962773-d324e2dabd3a?w=900&q=80&auto=format&fit=crop' },
    { name: 'Pasta',           price: 16.90, desc: 'Classic Italian dish made with pasta.',
      image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=900&q=80&auto=format&fit=crop' },
    { name: 'Creamy Chicken & Mushroom with Rice', price: 16.90,
      desc: 'Tender chicken and mushrooms served with a side of creamy rice.', popular: true,
      image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=900&q=80&auto=format&fit=crop' }
  ],
  coffee: [
    { name: 'Latte',     price: 5.20, desc: 'Rich and velvety espresso-style coffee drink.', popular: true,
      image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=900&q=80&auto=format&fit=crop' },
    { name: 'Cappuccino',price: 5.20, desc: 'Rich and smooth espresso-style coffee drink.',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=900&q=80&auto=format&fit=crop' },
    { name: 'Flat White',price: 5.20, desc: 'Rich and velvety coffee experience.',
      image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=900&q=80&auto=format&fit=crop' },
    { name: 'Long Black',price: 5.20, desc: 'Strong and rich coffee made to order.',
      image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=900&q=80&auto=format&fit=crop' }
  ],
  cold: [
    { name: 'Bottled Water',     price: 4.55, desc: 'Chilled spring water.',
      image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=900&q=80&auto=format&fit=crop' },
    { name: 'Soft Drink (375mL)',price: 4.95, desc: '375mL, in can.',
      image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=900&q=80&auto=format&fit=crop' },
    { name: 'Red Bull',          price: 5.20, desc: 'Energy drink — gives you wings.',
      image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=900&q=80&auto=format&fit=crop' },
    { name: 'Sugar Free Red Bull',price: 5.20, desc: 'Sugar free energy drink.',
      image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=900&q=80&auto=format&fit=crop' },
    { name: 'V Energy',          price: 5.20, desc: 'Classic V energy drink.',
      image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=900&q=80&auto=format&fit=crop' },
    { name: 'Soft Drink (600mL)',price: 5.85, desc: '600mL, in a bottle.',
      image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=900&q=80&auto=format&fit=crop' },
    { name: 'Lipton Iced Tea',   price: 5.85, desc: 'Refreshing iced tea.',
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=900&q=80&auto=format&fit=crop' },
    { name: 'River Port Soda',   price: 6.50, desc: '600ml craft soda.',
      image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=900&q=80&auto=format&fit=crop' },
    { name: 'Gatorade',          price: 6.50, desc: 'Sports hydration drink.',
      image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=900&q=80&auto=format&fit=crop' },
    { name: "Sam's Vitamin Juice",price: 7.15, desc: 'Chilled vitamin-rich juice drink.',
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=900&q=80&auto=format&fit=crop' }
  ],
  desserts: [
    { name: 'Chocolate Chip Cookie', price: 3.90, desc: 'Soft, chewy cookie filled with dark chocolate chips.',
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=900&q=80&auto=format&fit=crop' },
    { name: 'Blueberry Muffin',      price: 7.15, desc: 'Moist and sweet, bursting with fresh blueberry flavour.',
      image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=900&q=80&auto=format&fit=crop' },
    { name: 'Banana Bread',          price: 7.15, desc: 'Moist and sweet, a classic dessert treat.',
      image: 'https://images.unsplash.com/photo-1606101205254-9e62fd4b8c75?w=900&q=80&auto=format&fit=crop' },
    { name: 'Fruit Salad',           price: 8.45, desc: 'A mix of fresh seasonal fruits.',
      image: 'https://images.unsplash.com/photo-1568569350062-ebfa3cb195df?w=900&q=80&auto=format&fit=crop' }
  ],
  kebabs: [
    { name: 'Lamb Kebab', price: 13.00, desc: 'Lamb mince kebab with your choice of sauce and salads.',
      image: 'https://images.unsplash.com/photo-1633321088355-d0f81134ca3b?w=900&q=80&auto=format&fit=crop' },
    { name: 'Lamb HSP',   price: 17.00, desc: 'Lamb mince kebab served over chips with your choice of sauces.',
      image: 'https://images.unsplash.com/photo-1633321088355-d0f81134ca3b?w=900&q=80&auto=format&fit=crop' }
  ]
}

export const popularPicks = [
  { ...menu.coffee[0],   category: 'coffee' },
  { ...menu.breakfast[1],category: 'breakfast' },
  { ...menu.lunch[4],    category: 'lunch' },
  { ...menu.snacks[7],   category: 'snacks' }
]
