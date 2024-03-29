
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <div className='container mx-auto'>
            <section className='my-12'>
                <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"}></SectionTitle>
                <div className='grid md:grid-cols-2 gap-12 mx-2 md:mx-0'>
                    {
                        popular.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>
            </section>
        </div >
    );
};

export default PopularMenu;