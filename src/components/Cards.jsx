import Card from "./Card";

const products = [
    { 
        id: 1,
        img: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Bread 1', 
        price: '250' 
    },
    {
        id: 2, 
        img: 'https://images.pexels.com/photos/2067621/pexels-photo-2067621.jpeg?auto=compress&cs=tinysrgb&w=600', 
        title: 'Bread 2',
        price: '500' 
    },
    {
        id: 3,
        img: 'https://images.pexels.com/photos/166021/pexels-photo-166021.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Bread 3', price: '500' 
    },
    {
        id: 4, 
        img: 'https://images.pexels.com/photos/137103/pexels-photo-137103.jpeg?auto=compress&cs=tinysrgb&w=600', 
        title: 'Bread 4', 
        price: '950' },
]

export default function Cards() {
    return (
        <main>
            <h2>Our Products</h2>
            {
                products && products.map(product => <Card key={product.id} {...product}/>)
            }
        </main>
    )
}