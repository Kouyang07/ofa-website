import Image from 'next/image';

export const metadata = {
    title: "Partnerships | One for All Foundation",
    description: "The organizations that partner with One4All to bring joy and connection to our elders.",
};

const partners = [
    {
        name: 'The Sinclair at Port Washington',
        logo: '/partnerships/sinclair-logo.png',
        logoBg: 'bg-white',
        desc: 'The Sinclair at Port Washington is home base for many of our community events. Their residents and staff welcome our volunteers for games, conversations, and celebrations, including our Mini Olympics.',
    },
    {
        name: 'Superior Sports',
        logo: '/partnerships/superior-sports-logo.jpg',
        logoBg: 'bg-[#e7dc9e]',
        desc: 'Superior Sports partners with One4All to bring movement and friendly competition to our events, helping us design games that keep everyone active, laughing, and involved.',
    },
];

const photos = [
    { src: '/partnerships/balloon-volleyball.jpg', alt: 'Residents playing balloon volleyball' },
    { src: '/partnerships/group-table.jpg', alt: 'One4All volunteers with residents at The Sinclair' },
    { src: '/partnerships/ball-toss.jpg', alt: 'A resident lining up a ball toss' },
    { src: '/partnerships/conversation.jpg', alt: 'Volunteers and residents talking together' },
    { src: '/partnerships/team-photo.jpg', alt: 'One4All volunteers with a resident' },
];

export default function Partnerships() {
    return (
        <div className="bg-white text-black py-12 px-6">
            <section className="max-w-3xl mx-auto text-center mb-16">
                <h1 className="text-4xl font-semibold mb-4">
                    Our <span className="text-blue-500">Partners</span>
                </h1>
                <p className="text-lg leading-relaxed text-gray-700">
                    <span className="text-green-600 font-semibold">One4All</span> works alongside organizations
                    that share our mission of bringing <span className="text-green-600">joy</span>,{' '}
                    <span className="text-green-600">connection</span>, and <span className="text-green-600">care</span> to our elders.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20">
                {partners.map((partner) => (
                    <div key={partner.name} className="bg-gray-100 rounded-xl shadow-lg overflow-hidden flex flex-col">
                        <div className={`${partner.logoBg} h-56 flex items-center justify-center p-6 border-b border-gray-200`}>
                            <Image
                                src={partner.logo}
                                alt={`${partner.name} logo`}
                                width={400}
                                height={220}
                                className="max-h-44 w-auto object-contain"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-green-600 mb-3">{partner.name}</h2>
                            <p className="text-gray-700 leading-relaxed">{partner.desc}</p>
                        </div>
                    </div>
                ))}
            </section>

            <section className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-8">
                    From Our <span className="text-blue-500">Events</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {photos.map((photo, i) => (
                        <div
                            key={photo.src}
                            className={`relative overflow-hidden rounded-xl shadow-lg h-72 ${i === 0 ? 'lg:row-span-2 lg:h-full' : ''}`}
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
