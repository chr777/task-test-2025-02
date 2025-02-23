const Header = () => {
    return (
        <header className="flex items-center flex-col px-5 pt-5 h-[236px] lg:h-[280px] justify-between ">
            {/* Brand / Logo */}
            <div className='flex items-center justify-between w-full'>
                <h1 className="text-[32px] lg:text-6xl font-semibold">
                    <span className='font-nohemi text-primary'>Eiger</span>
                    <span className='font-nohemi text-[#F5F5F5] '>X</span>
                </h1>
                {/* Avatars */}
                <div className="flex -space-x-2">
                    <img
                        src="/src/assets/c98ecb3ec92ac86805fe55581fbeaa60.png"
                        alt="Avatar 1"
                        className="w-10 h-10 rounded-full border-2 border-gray-800 z-30"
                    />
                    <img
                        src="/src/assets/33fe647a46f9bf668322f8c1d94ed937.png"
                        alt="Avatar 2"
                        className="w-10 h-10 rounded-full border-2 border-gray-800 z-20"
                    />
                    <img
                        src="/src/assets/56dfdd8faea9ed52a81fbdcd844baa28.png"
                        alt="Avatar 3"
                        className="w-10 h-10 rounded-full border-2 border-gray-800 z-10"
                    />
                </div>
            </div>
            <div className='w-full text-left text-white'>
                <p className="opacity-70 text-[32px] lg:text-[48px] leading-[38px] lg:leading-[56px] font-bold">Hello there</p>
                <h1 className="font-bold text-[32px] lg:text-[48px] leading-[38px] lg:leading-[56px]">How can we help?</h1>
            </div>
        </header>
    );
};

export default Header; 