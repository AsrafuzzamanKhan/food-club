const MenuItem = ({ item }) => {
    const { image, name, price, recipe } = item
    return (
        <div className='flex items-center justify-between '>
            <div className="flex space-x-2">
                <img style={{ borderRadius: '0 200px 200px 200px', objectFit: 'contain' }} className='w-[100px]' src={image} alt="" />
                <div>
                    <h3 className="font-bold">{name} ---</h3>
                    <p>{recipe}</p>
                </div>
            </div>
            <p className='text-yellow-600 font-bold text-xl'>${price}</p>
        </div>
    );
};

export default MenuItem;