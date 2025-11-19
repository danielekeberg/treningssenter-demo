import Link from "next/link";

export default function Footer() {
    const now = new Date();
    const year = now.getFullYear();
    return(
        <div className="px-[15%] py-20 bg-[#262626]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20 border-b border-neutral-400/20 pb-10 mb-10">
                <div className="flex flex-col gap-5">
                    <h1 className="text-3xl font-extrabold text-red-500">OPTIMAL</h1>
                    <p className="text-neutral-400">Hadelands største treningssenter. Vi hjelper deg å nå dine mål</p>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-2xl font-bold">Kontakt</h1>
                    <div className="flex flex-col gap-2">
                        <p className="text-neutral-400">Adresse: XXX</p>
                        <p className="text-neutral-400">Telefon: +47 </p>
                        <p className="text-neutral-400">E-post: post@post.post</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-2xl font-bold">Følg Oss</h1>
                    <div className="flex gap-2">
                        <Link href="https://www.instagram.com/optimaltreningssenter/" className="flex items-center justify-center bg-red-500/10 p-4 h-15 w-15 rounded-full" target="_blank">
                            <img src="/instagram.svg" />
                        </Link>
                        <Link href="https://www.facebook.com/optimaltreningssenter" className="flex items-center justify-center bg-red-500/10 p-4 h-15 w-15 rounded-full" target="_blank">
                            <img src="/fb.svg" />
                        </Link>
                    </div>
                </div>
            </div>
            <p className="text-neutral-400 text-center font-bold">&copy; {year} Optimal Treningssenter. Alle rettigheter reservert.</p>
        </div>
    )
}