

const Soups = ({ soup }) => {
    const { image, name, price, recipe } = soup;
    return (
        <div className='flex space-x-2'>
            <img style={{ borderRadius: '0 200px 200px 200px', objectFit: 'contain' }} className='w-[100px]' src={image} alt="" />
            <div>
                <h3>{name}---</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-600'>${price}</p>
        </div>
    );
};

export default Soups;