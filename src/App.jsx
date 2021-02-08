import React, {useState} from 'react';
import Categories from './Categories'
import Menu from './Menu'

import items from './data.json';

const categories = Array.from(new Set(items.map(item => item.category)))

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const filterItems = category => {
    const categoryItems = category !== 'all' ?
      items.filter(item => item.category === category) : items;

    setMenuItems(categoryItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>

          <div className="underline" />
        </div>

        <Categories categories={categories} filterItems={filterItems} />

        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App;
