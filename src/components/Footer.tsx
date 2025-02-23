import {
    ChatBubbleLeftEllipsisIcon,
    QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

import { HomeIcon } from "@heroicons/react/24/solid";

const Footer = () => {
    return (
        <footer className="fixed bottom-5 left-0  w-full">
            <nav className="w-[calc(100%-32px)] bg-[#1F2125] h-[81px] flex justify-around items-center rounded-lg shadow-[0px_0px_25px_0px_#0000000D] mx-4">
                {/* Home */}
                <button className="flex flex-col items-center text-primary hover:text-primary group">
                    <HomeIcon className="w-6 h-6 group-hover:text-primary" />
                    <span className="text-xs mt-1 group-hover:text-primary">Home</span>
                </button>
                {/* Messages */}
                <button className="flex flex-col items-center text-gray-400 group">
                    <ChatBubbleLeftEllipsisIcon className="w-6 h-6 group-hover:text-primary" />
                    <span className="text-xs mt-1 group-hover:text-primary">Messages</span>
                </button>
                {/* Help */}
                <button className="flex flex-col items-center text-gray-400 group">
                    <QuestionMarkCircleIcon className="w-6 h-6 group-hover:text-primary" />
                    <span className="text-xs mt-1 group-hover:text-primary">Help</span>
                </button>
            </nav>
        </footer>
    );
};

export default Footer; 