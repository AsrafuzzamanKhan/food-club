import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCatagory = ({ items, title, coverImg, heading, subHeading }) => {
    return (
        <div className="pt-10">
            {title && <Cover img={coverImg} title={title} heading={heading} subHeading={subHeading} />}

            <div className="container mx-auto">
                <div className='grid md:grid-cols-2 gap-12 my-12 mx-2 md:mx-0 '>
                    {
                        items.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>
                <Link to={`/order/${title}`} >
                    <button className="btn btn-outline border-0 border-b-4 border-black text-black">Order Your Favorite Food</button>
                </Link>
            </div>

        </div >
    );
};

export default MenuCatagory;