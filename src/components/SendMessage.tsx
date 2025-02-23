import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const SendMessage = () => {
    return (
        <div className="text-white border border-primary rounded-[10px] flex justify-between w-full py-4 px-5 items-center bg-[#1B1E22] hover:bg-primary/10 transition-colors cursor-pointer shadow-custom">
            <div>
                <p className="text-[#F5F5F5] leading-[21px] text-sm font-medium">
                    Send us a message
                </p>
                <p className="text-sm text-[#83838D] leading-[21px] font-medium">
                    We typically reply within a day
                </p>
            </div>
            <PaperAirplaneIcon className="size-[16px] text-primary" />
        </div>
    );
};

export default SendMessage; 