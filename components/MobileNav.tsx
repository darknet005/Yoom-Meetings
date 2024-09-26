import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
     
import Image from "next/image"
import Link from "next/link"

export const MobileNav = () => {
    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger asChild>
                    <Image
                        src="/icons/hamburger.svg"
                        width={32}
                        height={3}
                        alt="hamburger icon"
                        className="cursor-pointer sm:hideen"
                    />
                </SheetTrigger>
                <SheetContent side="left" className="border-none bg-dark-1">
                    <Link href="/" className="flex items-center gap-1">
                        <Image
                            src="/icons/logo.svg"
                            width={40}
                            height={40}
                            alt='Yoom Logo'
                            className='max-sm:size-10'
                        />
                        <p className='text-[26px] font-extrabold
                text-white'></p>
                    </Link>

                    <div className="flex h-[calc(100vh-72px)]
                    flex-col justify-between overflow-y-auto"></div>

                    <SheetClose asChild>
                    <section className="flex h-full flex-col gap-6 pt-16 text-white">
                            
                            </section>
                    </SheetClose>

                </SheetContent>
            </Sheet>
        </section>
    )
}


