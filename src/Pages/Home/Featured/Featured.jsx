
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredimg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <section className='featured-item bg-fixed py-12'>
            <SectionTitle heading={'Featured Item'} subHeading={"Check in out"}></SectionTitle>
            <div className='md:flex items-center container mx-auto gap-4'>
                <div className='hidden md:block'>
                    <img src={featuredimg} alt="" className='rounded-xl' />
                </div>
                <div className='text-gray-200 bg-slate-800 rounded-2xl px-4 py-6 mx-2 md:mx-0 leading-8'>
                    <p>27 July, 2023 </p>
                    <p className='uppercase'>Where I can get some</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis minima aliquid a velit officia accusamus, quo, officiis ratione totam nisi deserunt reprehenderit, blanditiis aspernatur pariatur aperiam iure quasi esse ipsum.</p>
                    <button className="btn btn-outline border-0 border-b-4 border-white text-white mt-6">Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;