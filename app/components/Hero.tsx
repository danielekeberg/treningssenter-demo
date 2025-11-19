'use client';
export default function Hero() {
    const scrollToMedlem = () => {
        document.getElementById('medlem')?.scrollIntoView({ behavior: 'smooth' });
    }
    return(
        <div className="relative h-screen flex items-center jusitfy-center overflow-hidden">
            <div className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url(/hero.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                }}>
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/30 to-black/20" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
                </div>
                <div className="flex absolute -inset-0 flex-col h-screen justify-center items-center">
                    <div className="text-center mb-8">
                        <h1 className="text-8xl text-red-500 font-extrabold">OPTIMAL</h1>
                        <h1 className="text-8xl text-red-500 font-extrabold">TRENINGSSENTER</h1>
                    </div>
                    <p className="text-2xl text-white">Din destinasjon for styrke og vekst</p>
                    <button onClick={scrollToMedlem} className="bg-red-500 py-2 px-5 text-2xl font-bold mt-8 cursor-pointer hover:bg-red-500/50">BLI MEDLEM NÅ</button>
                </div>
            </div>
        </div>
    )
}