// pages/aboutus.js
import Image from 'next/image';

const defaultImage = '/aboutus/default-profile.jpg'; // Default image path

const boardMembers = [
    { name: 'Kaicheng Ouyang', title: 'Co-Founder', image: '/aboutus/peter.png' },
    { name: 'Cyrus Andaz', title: 'Co-Founder', image: '/aboutus/cyrus.png' },
];

const members = [
    { name: 'Aaron George', title: 'Writer'},
    { name: 'Justin Zheng', title: 'Writer'},
    { name: 'Ayden Wuennemann', title: 'Media'}, // No image provided
];

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

            {/* Board Members Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-semibold text-center mb-8">
                    <span className="text-blue-500">Board</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {boardMembers.map((person, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 transition"
                        >
                            <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                                <Image
                                    src={person.image || defaultImage}
                                    alt={person.name}
                                    width={160}
                                    height={160}
                                    className="object-cover"
                                    style={{ objectPosition: "center" }}
                                />
                            </div>
                            <h3 className="text-xl font-medium">{person.name}</h3>
                            <p className="text-sm text-green-600 font-semibold">{person.title}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Members Section */}
            <section>
                <h2 className="text-3xl font-semibold text-center mb-8">
                    <span className="text-blue-500">Members</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {members.map((person, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 transition"
                        >
                            <div className="w-40 h-40 aspect-square rounded-full overflow-hidden">
                                <Image
                                    src={person.image ? person.image : defaultImage}
                                    alt={person.name}
                                    width={160}
                                    height={160}
                                    className="object-cover"
                                    style={{ objectPosition: "center" }}
                                />
                            </div>
                            <h3 className="text-lg font-medium">{person.name}</h3>
                            <p className="text-sm text-green-600 font-semibold">{person.title}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}