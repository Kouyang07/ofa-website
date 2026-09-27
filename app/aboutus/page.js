// pages/aboutus.js
import Image from 'next/image';

const defaultImage = '/aboutus/default-profile.jpg'; // Default image path

const director = { name: 'Cyrus Andaz', title: 'Co-Founder & Director of Operations (CEO)', image: '/aboutus/cyrus.png' };

const presidents = [
    { name: 'Liel Agajan', title: 'Co-President', image: '/aboutus/liel.jpg' },
    { name: 'John Barton', title: 'Co-President', image: '/aboutus/john.jpg' },
];

const founders = [
    { name: 'Kaicheng Ouyang', title: 'Co-Founder', image: '/aboutus/peter.png' },
];

function PersonCard({ person }) {
    return (
        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 transition">
            <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                <Image
                    src={person.image || defaultImage}
                    alt={person.name}
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                    style={{ objectPosition: "center" }}
                />
            </div>
            <h3 className="text-xl font-medium">{person.name}</h3>
            <p className="text-sm text-green-600 font-semibold">{person.title}</p>
        </div>
    );
}

export default function AboutUs() {
    return (
        <div className="bg-white text-black py-12 px-6">
            {/* About One4All */}
            <section className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-semibold mb-4">
                    About <span className="text-blue-500">One4All</span>
                </h2>
                <p className="text-lg leading-relaxed">
                    <span className="text-green-600 font-semibold">One4All</span> is committed to <span className="text-green-600">honoring</span> and <span className="text-green-600">supporting</span> the elderly across the USA.
                    We ensure they receive the <span className="text-green-600">care</span>, <span className="text-green-600">respect</span>, and <span className="text-green-600">appreciation</span> they deserve, fostering
                    a community where their well-being is prioritized and their spirits rejuvenated.
                </p>
            </section>

            {/* Director */}
            <section className="mb-16">
                <h2 className="text-3xl font-semibold text-center mb-8">
                    <span className="text-blue-500">Director</span>
                </h2>
                <div className="max-w-xs mx-auto">
                    <PersonCard person={director} />
                </div>
            </section>

            {/* Presidents */}
            <section className="mb-16">
                <h2 className="text-3xl font-semibold text-center mb-8">
                    <span className="text-blue-500">Presidents</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
                    {presidents.map((person) => (
                        <PersonCard key={person.name} person={person} />
                    ))}
                </div>
            </section>

            {/* Founders */}
            <section className="">
                <h2 className="text-3xl font-semibold text-center mb-8">
                    <span className="text-blue-500">Founders</span>
                </h2>
                <div className="max-w-xs mx-auto">
                    {founders.map((person) => (
                        <PersonCard key={person.name} person={person} />
                    ))}
                </div>
            </section>
        </div>
    );
}