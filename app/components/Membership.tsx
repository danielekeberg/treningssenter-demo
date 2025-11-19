export default function Membership() {
    return(
        <div className="py-20 px-[15%]" id="medlem">
            <h1 className="text-red-500 text-center text-6xl font-extrabold">MEDLEMSKAP & PRISER</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-20 gap-5">
                <div className="bg-[#262626] border border-neutral-100/15 hover:border-red-500 p-10 rounded-md">
                    <div className="text-center">
                        <h2 className="font-bold text-3xl mb-2">BASIC</h2>
                        <div className="flex items-end justify-center mb-8">
                            <h1 className="text-red-500 font-extrabold text-5xl">399,-</h1>
                            <p className="text-neutral-400">/mnd</p>
                        </div>
                    </div>
                    <ul className="text-neutral-400 list-disc marker:text-red-500 marker:text-2xl">
                        <li>Tilgang til alle treningsområder</li>
                        <li>Gratis WiFi</li>
                        <li>Garderobe of dusj</li>
                    </ul>
                    <div className="min-h-20 flex items-end">
                        <button className="bg-[#333] font-bold w-full p-2 rounded border-neutral-500/20 hover:bg-[#333]/50 border cursor-pointer">VELG BASIC</button>
                    </div>
                </div>
                <div className="bg-[#262626] border-2 relative border-red-500 p-10 rounded-md">
                    <div className="absolute z-99 -top-10 rounded-[2] bg-red-500 py-2 px-5 translate-[50%] right-[50%]">
                        <p className="font-bold">MEST POPULÆR</p>
                    </div>
                    <div className="text-center">
                        <h2 className="font-bold text-3xl mb-2">PRO</h2>
                        <div className="flex items-end justify-center mb-8">
                            <h1 className="text-red-500 font-extrabold text-5xl">599,-</h1>
                            <p className="text-neutral-400">/mnd</p>
                        </div>
                    </div>
                    <ul className="text-neutral-400 list-disc marker:text-red-500 marker:text-2xl">
                        <li>Tilgang til alle treningsområder</li>
                        <li>Gratis WiFi</li>
                        <li>Garderobe of dusj</li>
                    </ul>
                    <div className="min-h-20 flex items-end">
                        <button className="bg-red-500 font-bold w-full p-2 rounded border-neutral-500/20 hover:bg-red-500/50 border cursor-pointer">VELG PRO</button>
                    </div>
                </div>
                <div className="bg-[#262626] border border-neutral-100/15 hover:border-red-500 p-10 rounded-md">
                    <div className="text-center">
                        <h2 className="font-bold text-3xl mb-2">ELITE</h2>
                        <div className="flex items-end justify-center mb-8">
                            <h1 className="text-red-500 font-extrabold text-5xl">899,-</h1>
                            <p className="text-neutral-400">/mnd</p>
                        </div>
                    </div>
                    <ul className="text-neutral-400 list-disc marker:text-red-500 marker:text-2xl">
                        <li>Tilgang til alle treningsområder</li>
                        <li>Gratis WiFi</li>
                        <li>Garderobe of dusj</li>
                    </ul>
                    <div className="min-h-20 flex items-end">
                        <button className="bg-[#333] font-bold w-full p-2 rounded border-neutral-500/20 hover:bg-[#333]/50 border cursor-pointer">VELG BASIC</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}