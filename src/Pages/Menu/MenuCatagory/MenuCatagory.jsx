import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCatagory = ({ items, title, coverImg, heading, subHeading }) => {
    return (
        <div>
            <Cover img={coverImg} title={title} heading={heading} subHeading={subHeading} />

            <div className='grid md:grid-cols-2 gap-12'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCatagory;