export default function Tokens() {
    return(
        <div className="py-20 px-[15%] bg-[#262626]">
            <h1 className="text-red-500 text-center text-6xl font-extrabold">HVORFOR VELGE OSS?</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 text-center mt-20">
                <div className="bg-[#141414] border border-neutral-100/15 hover:border-red-500 p-8 rounded-md">
                    <div className="flex justify-center items-center mb-5">
                        <div className="flex justify-center items-center w-20 h-20 rounded-full bg-red-500/10">
                            <img className="w-10 h-10" src="/dumbbell.svg" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="text-2xl font-extrabold">Toppmoderne Utstyr</h1>
                        <p className="text-neutral-500 text-md">De nyeste maskinene og vektene for optimal trening</p>
                    </div>
                </div>
                <div className="bg-[#141414] border border-neutral-100/15 hover:border-red-500 p-8 rounded-md">
                    <div className="flex justify-center items-center mb-5">
                        <div className="flex justify-center items-center w-20 h-20 rounded-full bg-red-500/10">
                            <img className="w-10 h-10" src="/users.svg" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="text-2xl font-extrabold">Erfarne Trenere</h1>
                        <p className="text-neutral-500 text-md">Profesjonelle instruktører som hjelper deg nå dine mål</p>
                    </div>
                </div>
                <div className="bg-[#141414] border border-neutral-100/15 hover:border-red-500 p-8 rounded-md">
                    <div className="flex justify-center items-center mb-5">
                        <div className="flex justify-center items-center w-20 h-20 rounded-full bg-red-500/10">
                            <img className="w-10 h-10" src="/clock.svg" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="text-3xl 2ont-extrabold">Åpent 24/7</h1>
                        <p className="text-neutral-500 text-md">Tren når det passer deg best, døgnet rundt</p>
                    </div>
                </div>
                <div className="bg-[#141414] border border-neutral-100/15 hover:border-red-500 p-8 rounded-md">
                    <div className="flex justify-center items-center mb-5">
                        <div className="flex justify-center items-center w-20 h-20 rounded-full bg-red-500/10">
                            <img className="w-10 h-10" src="/trophy.svg" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="text-2xl font-extrabold">Resultater</h1>
                        <p className="text-neutral-500 text-md">Dokumenterte resultater og fornøyde medlemmer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}