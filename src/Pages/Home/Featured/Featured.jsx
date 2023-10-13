
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredimg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <section className='featured-item bg-fixed py-16'>
            <SectionTitle heading={'Featured Item'} subHeading={"Check in out"}></SectionTitle>
            <div className='md: flex justify-center items-center pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredimg} alt="" />
                </div>
                <div className='md:ml-10 text-gray-200'>
                    <p>July27,2023 </p>
                    <p className='uppercase'>Where I can get some</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis minima aliquid a velit officia accusamus, quo, officiis ratione totam nisi deserunt reprehenderit, blanditiis aspernatur pariatur aperiam iure quasi esse ipsum.</p>
                    <button className="btn btn-outline border-0 border-b-4 border-white text-white">Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;