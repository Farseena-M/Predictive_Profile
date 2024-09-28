const getPredictedAge = async (name: string) => {
    const res = await fetch(`https://api.agify.io/?name=${name}`)
    return res.json()
}
const getPredictedGender = async (name: string) => {
    const res = await fetch(`https://api.genderize.io/?name=${name}`)
    return res.json()
}
const getPredictedCountry = async (name: string) => {
    const res = await fetch(`https://api.nationalize.io/?name=${name}`)
    return res.json()
}

interface Params {
    params: { name: string };
}


export default async function Name({ params }: Params) {
    const ageData = getPredictedAge(params.name)
    const genderData = getPredictedGender(params.name)
    const countryData = getPredictedCountry(params.name)
    const [age, gender, country] = await Promise.all([ageData, genderData, countryData])
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-900 to-teal-200 p-6">
            <div className="w-full max-w-2xl bg-gray-800/80 backdrop-blur-md shadow-xl rounded-lg p-12 border border-gray-700/50 transition-transform transform hover:scale-105">
                <div className="text-5xl font-semibold text-center text-teal-400 mb-8 drop-shadow-lg font-serif">
                    Personal Info
                </div>
                <div className="space-y-6">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium text-lg">Age</span>
                        <span className="text-teal-100 text-lg">{age?.age || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium text-lg">Gender</span>
                        <span className="text-teal-100 text-lg capitalize">{gender?.gender || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium text-lg">Country</span>
                        <span className="text-teal-100 text-lg">{country?.country[0]?.country_id || 'N/A'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
