'use client';

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        About Us
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Learn more about our mission, vision, and the team behind our success.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        We are committed to delivering innovative solutions that empower businesses and individuals to achieve their goals.
                    </p>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {['Innovation', 'Integrity', 'Excellence'].map((value) => (
                            <div key={value} className="bg-white p-6 rounded-lg shadow">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value}</h3>
                                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}