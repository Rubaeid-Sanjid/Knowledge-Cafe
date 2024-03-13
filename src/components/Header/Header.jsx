import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between border-b-2 pb-5'>
            <h1 className='text-4xl font-extrabold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;