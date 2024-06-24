"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface HeaderProps {
    page: any;
    lang: string;
}

export const scrollToContent = (e:any, contentId:string) => {
    e.preventDefault();
  
    const content = document.getElementById(contentId);
    if (content) {
      content.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

const Header: React.FunctionComponent<HeaderProps> = ({ page, lang }) => {

    const router = useRouter();

    function changeVal(e: any) {
        router.push(`/${e}`)
    }

    return (
        <header className="w-full bg-gray-200 py-5">
            <div className="container m-auto flex items-center justify-between">
                <Link href={"/"}>
                    {/* <Image src={"/images/logo.png"} width={120} height={100} alt="" className="max-md:w-[90px] max-sm:w-[70px]"/> */}
                    <h1 className="text-[#3ba4ec] font-bold text-2xl">TULIP TRAVEL</h1>
                </Link>
                <nav>
                    <div className="flex gap-5 text-[#3ba4ec] items-center">
                        <p
                            onClick={(e)=> scrollToContent(e, "tours")}
                            className="cursor-pointer max-[580px]:hidden"
                        >
                            {page.toursText}
                        </p>
                        <p
                            onClick={(e)=> scrollToContent(e, "question")}
                            className="cursor-pointer max-[580px]:hidden"
                        >
                            {page.QuestionText}
                        </p>
                        <p
                            onClick={(e)=> scrollToContent(e, "footer")}
                            className="cursor-pointer max-[580px]:hidden"
                        >
                            {page.ContactsText}
                        </p>
                        <Select onValueChange={changeVal}>
                            <SelectTrigger className="w-[70px] max-sm:px-2 max-sm:w-[55px] max-sm:h-[30px] max-sm:text-xs rounded-lg text-white bg-[#3ba4ec]">
                                <SelectValue placeholder={lang.toUpperCase()} />
                            </SelectTrigger>
                            <SelectContent className="max-sm:w-fit">
                                <SelectItem className="max-sm:text-xs max-sm:px-6 max-sm:w-fit" value="ru">RU</SelectItem>
                                <SelectItem className="max-sm:text-xs max-sm:px-6 max-sm:w-fit" value="en">EN</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
