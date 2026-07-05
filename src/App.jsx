import { Package, Boxes, AlertTriangle } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import PageTitle from './components/PageTitle';
import Toolbar from './components/Toolbar';
import SearchBar from './components/SearchBar';
import ProductCard from './components/ProductCard';
import styles from './App.module.css';

const products = [
  { id: 1, name: 'Tシャツ', price: 2980, stock: 12, category: 'アパレル' },
  { id: 2, name: 'マグカップ', price: 1200, stock: 0, category: '雑貨' },
  { id: 3, name: 'ステッカー', price: 400, stock: 88, category: '雑貨' },
];

const App = () => {
  const total = products.length;
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const outOfStock = products.filter((p) => p.stock === 0).length;

  return (
    <div className={styles.layout}>
      <Sidebar />

      <main className={styles.main}>
        <Header />

        <div className={styles.stats}>
          <StatCard label="商品点数" value={total} icon={<Package size={22} />} />
          <StatCard label="合計在庫" value={totalStock} icon={<Boxes size={22} />} />
          <StatCard label="在庫切れ" value={outOfStock} icon={<AlertTriangle size={22} />} />
        </div>

        <PageTitle title="商品一覧" count={total} />

        <Toolbar>
          <SearchBar placeholder="商品を検索…" />
        </Toolbar>

        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              stock={product.stock}
              category={product.category}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
