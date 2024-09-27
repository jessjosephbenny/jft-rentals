import React from "react";

const Brands = () => {
    return (
        < div className = "w-screen bg-gray-100 py-10" >
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">Our Trusted Brands</h2>
                <div className="overflow-hidden">
                    <div className="whitespace-nowrap animate-scroll">
                        <img src="./bedrock.avif" alt="Bedrock" className="inline-block mx-4 w-32 h-auto" />
                        <img src="./teran.webp" alt="Teran" className="inline-block mx-4 w-32 h-auto" />
                        <img src="./liebherr.png" alt="Liebherr" className="inline-block mx-4 w-32 h-auto" />
                        <img src="./bobcat.png" alt="Bobcat" className="inline-block mx-4 w-32 h-auto" />
                        <img src="./moffett.png" alt="Moffett" className="inline-block mx-4 w-32 h-auto" />
                        <img src="./sany.svg" alt="Sany" className="inline-block mx-4 w-32 h-auto" />
                        <img src="./doosan.svg" alt="Doosan" className="inline-block mx-4 w-32 h-auto" />
                        <img src="./caterpiller.png" alt="Caterpillar" className="inline-block mx-4 w-32 h-auto" />
                        <img src="./xcmg.png" alt="XCMG" className="inline-block mx-4 w-32 h-auto" />
                        <img src="./hitachi.png" alt="Hitachi" className="inline-block mx-4 w-32 h-auto" />
                        <img src="./komatsu.png" alt="Komatsu" className="inline-block mx-4 w-32 h-auto" />
                        <img src="./jcb.png" alt="JCB" className="inline-block mx-4 w-32 h-auto" />
                        {/* Duplicate images for continuous scrolling effect */}
                        <img src="./bedrock.avif" alt="Bedrock" className="inline-block mx-4 w-32 h-auto" />
                        <img src="./teran.webp" alt="Teran" className="inline-block mx-4 w-32 h-auto" />
                        <img src="./liebherr.png" alt="Liebherr" className="inline-block mx-4 w-32 h-auto" />
                        <img src="./bobcat.png" alt="Bobcat" className="inline-block mx-4 w-32 h-auto" />
                        <img src="./moffett.png" alt="Moffett" className="inline-block mx-4 w-32 h-auto" />
                        <img src="./sany.svg" alt="Sany" className="inline-block mx-4 w-32 h-auto" />
                        <img src="./doosan.svg" alt="Doosan" className="inline-block mx-4 w-32 h-auto" />
                        <img src="./caterpiller.png" alt="Caterpillar" className="inline-block mx-4 w-32 h-auto" />
                        <img src="./xcmg.png" alt="XCMG" className="inline-block mx-4 w-32 h-auto" />
                        <img src="./hitachi.png" alt="Hitachi" className="inline-block mx-4 w-32 h-auto" />
                        <img src="./komatsu.png" alt="Komatsu" className="inline-block mx-4 w-32 h-auto" />
                        <img src="./jcb.png" alt="JCB" className="inline-block mx-4 w-32 h-auto" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Brands;