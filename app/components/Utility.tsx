export default function Utility() {
    return(
        <div className="py-20 px-[15%] bg-[#262626]">
            <h1 className="text-red-500 text-center text-6xl font-extrabold">UTSTYR & FASILITETER</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center mt-20">
                <div className="bg-[#141414] border border-neutral-100/15 p-8 rounded-md">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-2xl font-extrabold">Frivekter</h1>
                        <p className="text-neutral-500 text-md">Komplett utvalg av manualer, stenger og vektskiver for styrketrening</p>
                    </div>
                </div>
                <div className="bg-[#141414] border border-neutral-100/15 p-8 rounded-md">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-2xl font-extrabold">Kardio Område</h1>
                        <p className="text-neutral-500 text-md">Tredemøller, sykler, crosstrainere og romaskin</p>
                    </div>
                </div>
                <div className="bg-[#141414] border border-neutral-100/15 p-8 rounded-md">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-3xl 2ont-extrabold">Maskinpark</h1>
                        <p className="text-neutral-500 text-md">Nye masking for alle muskelgrupper fra Technopark</p>
                    </div>
                </div>
                <div className="bg-[#141414] border border-neutral-100/15 p-8 rounded-md">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-2xl font-extrabold">Funksjonelt Område</h1>
                        <p className="text-neutral-500 text-md">Plass for functional training, TRX og CrossFit-inspirerte økter</p>
                    </div>
                </div>
                <div className="bg-[#141414] border border-neutral-100/15 p-8 rounded-md">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-2xl font-extrabold">Garderober</h1>
                        <p className="text-neutral-500 text-md">Moderne garderober med dusj, badstue og skap</p>
                    </div>
                </div>
                <div className="bg-[#141414] border border-neutral-100/15 p-8 rounded-md">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-2xl font-extrabold">Treningsstudio</h1>
                        <p className="text-neutral-500 text-md">Dedikert rom for gruppetimer og personlig trening</p>
                    </div>
                </div>
            </div>
        </div>
    )
}