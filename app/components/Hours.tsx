export default function Hours() {
    return(
        <div className="py-20 px-[15%]">
            <h1 className="text-red-500 text-center text-6xl font-extrabold">HVORFOR VELGE OSS?</h1>
            <div className="grid grid-cols-1 gap-5 text-center mt-20">
                <div className="bg-[#262626] border border-red-500 p-8 rounded-md">
                    <div className="flex justify-center items-center mb-5 pb-5 border-b border-neutral-400/20">
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-20 h-20" src="/clock.svg" />
                            <h1 className="text-4xl text-red-500 font-extrabold my-3">ÅPENT 24/7</h1>
                            <p className="text-xl text-neutral-400">Døgnåpent, 365 dager i året</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="text-2xl font-extrabold">Bemannet Resepsjon</h1>
                        <div className="flex justify-between">
                            <p className="text-xl text-neutral-400">Mandag - Fredag:</p>
                            <p className="font-extrabold text-xl">06:00 - 22:00</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-xl text-neutral-400">Lørdag - Søndag:</p>
                            <p className="font-extrabold text-xl">08:00 - 20:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}