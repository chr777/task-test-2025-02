import { useState, useMemo } from "react";
import { ChevronRightIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDebounce } from "../hooks/useDebounce";

interface HelpTopic {
  title: string;
  content: string;
}

const helpTopics: HelpTopic[] = [
  {
    title: "In-game bonuses and free spins",
    content: "Learn about our exciting bonuses and free spins offers that enhance your gaming experience."
  },
  {
    title: "Crypto deposit still not credited?",
    content: "Find out what to do if your crypto deposit hasn't been credited to your account yet."
  },
  {
    title: "EigerX VIP program overview",
    content: "Discover the exclusive benefits and rewards of our VIP program."
  },
  {
    title: "Achievements and awards",
    content: "Explore the various achievements and awards you can earn while playing."
  },
];

const MainContent = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 300);

  const filteredTopics = useMemo(() => {
    const searchLower = debouncedSearch.toLowerCase();
    return helpTopics.filter(
      topic =>
        topic.title.toLowerCase().includes(searchLower) ||
        topic.content.toLowerCase().includes(searchLower)
    );
  }, [debouncedSearch]);

  return (
    <div className="bg-[#1F2125] rounded-[10px] p-2 gap-2 flex flex-col border border-[#15171B] shadow-custom">
      <div className="w-full relative">
        <input
          id="search"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for help"
          className="w-full rounded-lg bg-[#1b1e22] focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-0 pr-8 pl-3 py-2.5 text-sm text-[#f5f5f5] placeholder:text-[#f5f5f5] leading-[21px]"
        />
        <MagnifyingGlassIcon className="size-[16px] text-primary absolute right-3 top-1/2 -translate-y-1/2" />
      </div>
      <ul>
        {filteredTopics.map((topic) => (
          <li
            key={topic.title}
            className="overflow-hidden"
          >
            <div
              onClick={() => setOpenItem(openItem === topic.title ? null : topic.title)}
              className="flex items-center justify-between px-2.5 py-3 lg:p-4 hover:bg-primary/5 cursor-pointer"
            >
              <span className="font-Inter font-normal text-sm text-[#f5f5f5] leading-[21px]">
                {topic.title}
              </span>
              <ChevronRightIcon
                className={`w-4 h-4 text-primary transition-transform duration-300 ${openItem === topic.title ? 'rotate-90' : ''
                  }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openItem === topic.title ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
              <p className="px-2.5 py-3 lg:p-4 text-sm text-[#83838D]">
                {topic.content}
              </p>
            </div>
          </li>
        ))}
        {filteredTopics.length === 0 && (
          <li className="text-center py-4 text-[#83838D]">
            No results found
          </li>
        )}
      </ul>
    </div>
  );
};

export default MainContent; 