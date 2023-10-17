import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
// import Offers from '../Offers/Offers';
// import Desserts from '../Desserts/Desserts';
// import Salads from '../Salads/Salads';
// import Soups from '../Soups/Soups';
// import Pizza from '../Pizza/Pizza';
import MenuCatagory from '../MenuCatagory/MenuCatagory';

const Menu = () => {
    const [menu] = useMenu()
    const offers = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const salades = menu.filter(item => item.category === 'salad')
    const soups = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>Food-club | Menu</title>
            </Helmet>
            <Cover img={menuImg} title='OUR MENU' heading={'Would you like to try a dish?'} />
            {/* main cover  */}
            <SectionTitle heading="TODAY'S OFFER" subHeading="---Don't miss---"></SectionTitle>
            {/* offer 
             */}
            <MenuCatagory items={offers}></MenuCatagory>

            {/* dessert  */}
            <MenuCatagory coverImg={dessertImg} items={desserts} title="Dessert" heading='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'></MenuCatagory>
            {/* pizza */}
            <MenuCatagory coverImg={pizzaImg} items={pizzas} title="Pizza" heading='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'></MenuCatagory>
            {/* salad */}
            <MenuCatagory coverImg={saladImg} items={salades} title="Salad" heading='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'></MenuCatagory>
            {/* soup */}
            <MenuCatagory coverImg={soupImg} items={soups} title="Soup" heading='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'></MenuCatagory>

        </div >
    );
};

export default Menu;

// {/* offer  */ }
// <section>
//     <SectionTitle heading={"TODAY'S OFFER"} subHeading={"---Don't miss---"}></SectionTitle>
//     <div className='grid md:grid-cols-2 gap-12'>
//         {
//             offers.map(offer => <Offers
//                 key={offer.id}
//                 offer={offer}>

//             </Offers>)
//         }
//         <button className="btn btn-primary">ORDER YOUR FAVOURITE FOOD  </button>
//     </div>


// </section>
// {/* desserts  */ }
// <section>
//     <Cover img={dessertImg} title={"DESSERTS"} heading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
//     <div className='grid md:grid-cols-2 gap-12 my-12'>
//         {
//             desserts.map(dessert => <Desserts
//                 key={dessert.id}
//                 dessert={dessert}>

//             </Desserts>)
//         }

//     </div>
//     <button className="btn btn-primary">ORDER YOUR FAVOURITE FOOD  </button>
// </section>
// {/* pizza  */ }
// <section>
//     <Cover img={pizzaImg} title={"Pizza"} heading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
//     <div className='grid md:grid-cols-2 gap-12 my-12'>
//         {
//             pizzas.map(pizza => <Pizza
//                 key={pizza.id}
//                 pizza={pizza}>

//             </Pizza>)
//         }

//     </div>
//     <button className="btn btn-primary">ORDER YOUR FAVOURITE FOOD  </button>

// </section>
// {/* salads  */ }
// <section>
//     <Cover img={saladImg} title={"SALADS"} heading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
//     <div className='grid md:grid-cols-2 gap-12 my-12'>
//         {
//             salades.map(salad => <Salads
//                 key={salad.id}
//                 salad={salad}>

//             </Salads>)
//         }

//     </div>
//     <button className="btn btn-primary">ORDER YOUR FAVOURITE FOOD  </button>
// </section>
// {/* soups  */ }
// <section>
//     <Cover img={soupImg} title={"SOUPS"} heading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Cover>
//     <div className='grid md:grid-cols-2 gap-12 my-12'>
//         {
//             soups.map(soup => <Soups
//                 key={soup.id}
//                 soup={soup}>

//             </Soups>)
//         }

//     </div>
//     <button className="btn btn-primary">ORDER YOUR FAVOURITE FOOD  </button>
// </section>