import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <Head title="Smart Living BPN - Find Your Perfect Home">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=poppins:300,400,500,600,700|inter:400,500,600,700" rel="stylesheet" />
                <meta
                    name="description"
                    content="Find your perfect rental home with Smart Living BPN. Browse thousands of properties, schedule viewings, and secure your dream home."
                />
            </Head>
            <div className="min-h-screen bg-white">
                {/* Navigation */}
                <nav className="fixed top-0 right-0 left-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-sm">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-20 items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center">
                                        <svg className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12,3L2,12h3v8h6v-6h2v6h6v-8h3L12,3z" />
                                        </svg>
                                        <h1 className="ml-2 text-2xl font-bold text-gray-900">Smart Living</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-6">
                                    <a
                                        href="#featured"
                                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
                                    >
                                        Featured Homes
                                    </a>
                                    <a
                                        href="#how-it-works"
                                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
                                    >
                                        How it Works
                                    </a>
                                    <a
                                        href="#testimonials"
                                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
                                    >
                                        Testimonials
                                    </a>
                                    <a
                                        href="#areas"
                                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
                                    >
                                        Areas We Cover
                                    </a>
                                </div>
                            </div>

                            {/* Mobile menu button */}
                            <div className="flex md:hidden">
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-inset"
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {!mobileMenuOpen ? (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    )}
                                </button>
                            </div>

                            <div className="hidden items-center gap-4 md:flex">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-lg px-5 py-2 font-medium text-gray-700 transition-colors hover:text-blue-600"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow"
                                        >
                                            Get Started
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu, show/hide based on mobile menu state */}
                    {mobileMenuOpen && (
                        <div className="md:hidden">
                            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                                <a
                                    href="#featured"
                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                                >
                                    Featured Homes
                                </a>
                                <a
                                    href="#how-it-works"
                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                                >
                                    How it Works
                                </a>
                                <a
                                    href="#testimonials"
                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                                >
                                    Testimonials
                                </a>
                                <a
                                    href="#areas"
                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                                >
                                    Areas We Cover
                                </a>

                                <div className="border-t border-gray-200 pt-4 pb-3">
                                    {auth.user ? (
                                        <Link
                                            href={route('dashboard')}
                                            className="block w-full rounded-lg bg-blue-600 px-5 py-2.5 text-center font-medium text-white hover:bg-blue-700"
                                        >
                                            Dashboard
                                        </Link>
                                    ) : (
                                        <div className="flex flex-col space-y-2">
                                            <Link
                                                href={route('login')}
                                                className="block w-full rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-center font-medium text-gray-700"
                                            >
                                                Log in
                                            </Link>
                                            <Link
                                                href={route('register')}
                                                className="block w-full rounded-lg bg-blue-600 px-5 py-2.5 text-center font-medium text-white hover:bg-blue-700"
                                            >
                                                Get Started
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </nav>

                {/* Hero Section */}
                <section className="relative bg-gradient-to-b from-blue-50 to-white pt-64 pb-20">
                    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="items-center lg:grid lg:grid-cols-12 lg:gap-8">
                            <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:flex-col lg:justify-center lg:text-left">
                                <div>
                                    <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600">
                                        Rental Made Simple
                                    </span>
                                </div>
                                <h1 className="mt-6">
                                    <span className="mt-1 block text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl">
                                        <span className="block text-gray-900">Find Your Dream</span>
                                        <span className="block text-blue-600">Home Today</span>
                                    </span>
                                </h1>
                                <p className="mt-6 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                    Browse thousands of rental properties in Balikpapan. From cozy apartments to spacious family homes, we make
                                    finding your perfect place effortless and enjoyable.
                                </p>

                                <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start lg:gap-8">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                                                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">Verified Listings</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                                                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">24/7 Support</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                                                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">Secure Payments</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:items-center">
                                <div className="relative mx-auto w-full">
                                    <div className="relative">
                                        <img
                                            className="h-96 w-full rounded-2xl object-cover shadow-xl sm:h-80 lg:h-96"
                                            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
                                            alt="Beautiful modern home"
                                        />
                                        <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset"></div>
                                    </div>
                                    <div className="absolute -bottom-14 -left-12 w-60">
                                        <div className="rounded-lg bg-white p-5 shadow-lg ring-1 ring-gray-900/5">
                                            <div className="flex">
                                                <div className="flex-shrink-0">
                                                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-sm font-medium text-gray-900">4.8/5 Rating</p>
                                                    <p className="text-xs text-gray-500">Based on 2,000+ reviews</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute -top-6 -right-6 w-72">
                                        <div className="rounded-lg bg-white p-5 shadow-lg ring-1 ring-gray-900/5">
                                            <div className="flex">
                                                <div className="flex-shrink-0">
                                                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-sm font-medium text-gray-900">1,000+ New Listings</p>
                                                    <p className="text-xs text-gray-500">Added this month</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute right-0 bottom-0 left-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
                </section>
                <div className="hidden h-14.5 lg:block"></div>

                {/* Featured Properties Section */}
                <section id="featured" className="bg-white py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Properties</h2>
                            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                                Discover our handpicked selection of premium rental properties in Balikpapan
                            </p>
                        </div>

                        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {/* Property Card 1 */}
                            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl">
                                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                                    <img
                                        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                        alt="Luxury apartment with pool"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-0.5 text-sm font-medium text-blue-800">
                                            Featured
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800">
                                            Available
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-bold text-gray-900">Balikpapan Heights Apartment</h3>
                                        <p className="text-lg font-bold text-blue-600">Rp 5.5jt/bulan</p>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">
                                        <svg
                                            className="mr-1 inline-block h-4 w-4 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        Balikpapan Selatan, 5 menit ke mall
                                    </p>
                                    <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex items-center">
                                                <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                                    />
                                                </svg>
                                                <span className="ml-2 text-sm text-gray-500">2 Kamar Tidur</span>
                                            </div>
                                            <div className="flex items-center">
                                                <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2"
                                                    />
                                                </svg>
                                                <span className="ml-2 text-sm text-gray-500">2 Kamar Mandi</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                                                />
                                            </svg>
                                            <span className="ml-2 text-sm text-gray-500">72m²</span>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <a
                                            href="#"
                                            className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
                                        >
                                            View Details
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Property Card 2 */}
                            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl">
                                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                                    <img
                                        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                        alt="Modern studio apartment"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800">
                                            Available
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-bold text-gray-900">Studio Apartment Balikpapan</h3>
                                        <p className="text-lg font-bold text-blue-600">Rp 3.8jt/bulan</p>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">
                                        <svg
                                            className="mr-1 inline-block h-4 w-4 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        Balikpapan Tengah, dekat dengan pusat kota
                                    </p>
                                    <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex items-center">
                                                <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                                    />
                                                </svg>
                                                <span className="ml-2 text-sm text-gray-500">1 Kamar Tidur</span>
                                            </div>
                                            <div className="flex items-center">
                                                <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2"
                                                    />
                                                </svg>
                                                <span className="ml-2 text-sm text-gray-500">1 Kamar Mandi</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M4 8V4m0 0h4m-4 0l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                                                />
                                            </svg>
                                            <span className="ml-2 text-sm text-gray-500">45m²</span>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <a
                                            href="#"
                                            className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
                                        >
                                            View Details
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Property Card 3 */}
                            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl">
                                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                                    <img
                                        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                        alt="Family house with garden"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-0.5 text-sm font-medium text-blue-800">
                                            Featured
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800">
                                            Available
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-bold text-gray-900">Rumah Keluarga Balikpapan Utara</h3>
                                        <p className="text-lg font-bold text-blue-600">Rp 8.2jt/bulan</p>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">
                                        <svg
                                            className="mr-1 inline-block h-4 w-4 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        Balikpapan Utara, lingkungan tenang dan asri
                                    </p>
                                    <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex items-center">
                                                <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                                    />
                                                </svg>
                                                <span className="ml-2 text-sm text-gray-500">3 Kamar Tidur</span>
                                            </div>
                                            <div className="flex items-center">
                                                <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2"
                                                    />
                                                </svg>
                                                <span className="ml-2 text-sm text-gray-500">2 Kamar Mandi</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M4 8V4m0 0h4m-4 0l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                                                />
                                            </svg>
                                            <span className="ml-2 text-sm text-gray-500">120m²</span>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <a
                                            href="#"
                                            className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
                                        >
                                            View Details
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <a
                                href="#"
                                className="inline-flex items-center rounded-md border border-blue-600 px-6 py-3 text-base font-medium text-blue-600 shadow-sm hover:bg-blue-50"
                            >
                                View All Properties
                                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>
                <div className="hidden h-14.5 lg:block"></div>

                {/* How It Works Section */}
                <section id="how-it-works" className="bg-gray-50 py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="lg:text-center">
                            <h2 className="text-base font-semibold tracking-wide text-blue-600 uppercase">Proses Mudah</h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Cara Kerja Smart Living BPN
                            </p>
                            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                Temukan rumah impian Anda dalam 3 langkah mudah dengan Smart Living BPN
                            </p>
                        </div>

                        <div className="mt-16">
                            <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                                <div className="flex flex-col items-center">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="mt-6 text-center">
                                        <h3 className="text-xl font-medium text-gray-900">1. Cari & Filter</h3>
                                        <p className="mt-2 text-base text-gray-500">
                                            Cari properti berdasarkan lokasi, harga, dan fasilitas. Kami memiliki ribuan properti di seluruh
                                            Balikpapan yang siap untuk disewa.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="mt-6 text-center">
                                        <h3 className="text-xl font-medium text-gray-900">2. Pesan & Kunjungi</h3>
                                        <p className="mt-2 text-base text-gray-500">
                                            Jadwalkan kunjungan ke properti yang Anda minati secara online atau melalui aplikasi kami. Tim kami akan
                                            mendampingi Anda.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="mt-6 text-center">
                                        <h3 className="text-xl font-medium text-gray-900">3. Sewa & Pindah</h3>
                                        <p className="mt-2 text-base text-gray-500">
                                            Tanda tangani kontrak secara digital dan bayar deposit melalui platform kami yang aman. Kami akan membantu
                                            proses pindahan Anda.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 flex justify-center">
                            <a
                                href="#"
                                className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                            >
                                Mulai Pencarian Sekarang
                            </a>
                        </div>
                    </div>
                </section>

                {/* Services (Layanan) Section */}
                <section id="services" className="bg-gray-50 py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-base font-semibold tracking-wide text-blue-600 uppercase">Layanan Kami</h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Solusi Lengkap untuk Kebutuhan Hunian Anda
                            </p>
                            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                Smart Living BPN menyediakan berbagai layanan untuk membantu Anda menemukan dan mengelola properti sewaan dengan
                                mudah.
                            </p>
                        </div>

                        <div className="mt-16">
                            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                {/* Service 1 */}
                                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-48 w-full object-cover"
                                            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                            alt="Property Search"
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                        <div className="flex-1">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-blue-500 text-white">
                                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                            />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="text-xl font-medium text-gray-900">Pencarian Properti</h3>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <p className="text-base text-gray-500">
                                                    Temukan properti ideal dengan alat pencarian canggih kami. Filter berdasarkan lokasi, harga,
                                                    jumlah kamar, dan banyak lagi.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <a href="#" className="text-base font-medium text-blue-600 hover:text-blue-700">
                                                Pelajari Lebih Lanjut
                                                <span aria-hidden="true"> &rarr;</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Service 2 */}
                                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-48 w-full object-cover"
                                            src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                            alt="Property Management"
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                        <div className="flex-1">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-blue-500 text-white">
                                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                                            />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="text-xl font-medium text-gray-900">Manajemen Properti</h3>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <p className="text-base text-gray-500">
                                                    Kami menangani semua aspek manajemen properti, mulai dari perawatan hingga penagihan sewa,
                                                    sehingga Anda tidak perlu khawatir.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <a href="#" className="text-base font-medium text-blue-600 hover:text-blue-700">
                                                Pelajari Lebih Lanjut
                                                <span aria-hidden="true"> &rarr;</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Service 3 */}
                                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-48 w-full object-cover"
                                            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                            alt="Legal Support"
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                        <div className="flex-1">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-blue-500 text-white">
                                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                                                            />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="text-xl font-medium text-gray-900">Dukungan Legal</h3>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <p className="text-base text-gray-500">
                                                    Tim hukum kami memastikan semua kontrak dan perjanjian sewa menyewa sesuai dengan peraturan yang
                                                    berlaku dan melindungi kepentingan semua pihak.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <a href="#" className="text-base font-medium text-blue-600 hover:text-blue-700">
                                                Pelajari Lebih Lanjut
                                                <span aria-hidden="true"> &rarr;</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section id="testimonials" className="bg-white py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-base font-semibold tracking-wide text-blue-600 uppercase">Testimoni</h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Apa Kata Mereka Tentang Kami
                            </p>
                            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                Dengarkan pengalaman pelanggan yang telah menemukan hunian impian mereka melalui Smart Living BPN.
                            </p>
                        </div>

                        <div className="mt-16 flow-root">
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {/* Testimonial 1 */}
                                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                    <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                        <div className="flex-1">
                                            <div className="flex items-center">
                                                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500">
                                                    <span className="text-xl leading-none font-medium text-white">RS</span>
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="text-lg font-medium text-gray-900">Rudi Santoso</h3>
                                                    <div className="mt-1 flex items-center">
                                                        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <p className="text-gray-500">
                                                    "Smart Living BPN sangat memudahkan saya dalam mencari apartemen di Balikpapan. Proses pencarian
                                                    hingga penandatanganan kontrak sangat cepat dan efisien. Sangat merekomendasikan!"
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-6 border-t border-gray-200 pt-4 text-sm text-gray-500">
                                            <p>Penyewa Apartemen - Balikpapan Selatan</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Testimonial 2 */}
                                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                    <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                        <div className="flex-1">
                                            <div className="flex items-center">
                                                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500">
                                                    <span className="text-xl leading-none font-medium text-white">SW</span>
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="text-lg font-medium text-gray-900">Sarah Wulandari</h3>
                                                    <div className="mt-1 flex items-center">
                                                        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <p className="text-gray-500">
                                                    "Sebagai mahasiswa baru di kota ini, saya sangat terbantu dengan Smart Living BPN dalam menemukan
                                                    kos yang sesuai dengan budget. Foto dan deskripsi properti sangat akurat, tidak ada kejutan saat
                                                    survey."
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-6 border-t border-gray-200 pt-4 text-sm text-gray-500">
                                            <p>Penyewa Kos - Balikpapan Tengah</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Testimonial 3 */}
                                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                    <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                        <div className="flex-1">
                                            <div className="flex items-center">
                                                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500">
                                                    <span className="text-xl leading-none font-medium text-white">JH</span>
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="text-lg font-medium text-gray-900">Joko Hartono</h3>
                                                    <div className="mt-1 flex items-center">
                                                        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <p className="text-gray-500">
                                                    "Saya menyewakan beberapa properti melalui Smart Living BPN. Mereka sangat profesional dalam
                                                    mengelola properti dan penyewa. Pembayaran selalu tepat waktu dan komunikasi lancar. Beban saya
                                                    sebagai pemilik jadi berkurang."
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-6 border-t border-gray-200 pt-4 text-sm text-gray-500">
                                            <p>Pemilik Properti - Balikpapan Utara</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 flex justify-center">
                            <a
                                href="#"
                                className="rounded-md border border-blue-600 px-6 py-3 text-base font-medium text-blue-600 transition-colors hover:bg-blue-50"
                            >
                                Lihat Semua Testimoni
                            </a>
                        </div>
                    </div>
                </section>

                {/* Areas We Cover Section */}
                <section id="areas" className="bg-gray-50 py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-base font-semibold tracking-wide text-blue-600 uppercase">Area Jangkauan</h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Wilayah yang Kami Layani
                            </p>
                            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                Smart Living BPN hadir di berbagai wilayah di Balikpapan untuk memudahkan pencarian hunian di seluruh kota
                            </p>
                        </div>

                        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {/* Area 1 */}
                            <div className="group overflow-hidden rounded-xl shadow-lg">
                                <div className="relative h-64 w-full">
                                    <img
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        src="https://dev.microsites.99iddev.net/app/uploads/sites/775/2023/03/Banner-New-Palladium-at-Grand-City-Balikpapan.webp"
                                        alt="Balikpapan Selatan"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 w-full p-4">
                                        <h3 className="text-xl font-bold text-white">Balikpapan Selatan</h3>
                                        <p className="text-sm text-white/80">142 Properti Tersedia</p>
                                    </div>
                                </div>
                            </div>

                            {/* Area 2 */}
                            <div className="group overflow-hidden rounded-xl shadow-lg">
                                <div className="relative h-64 w-full">
                                    <img
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        src="https://ik.imagekit.io/tvlk/loc-asset/gNr3hLh55ZCkPJisyxFK-v9MmzxPu57ZRVI+10VZ2S4b1PNW4T++cbA6yK4gzhAhs9o2HLZ9vs7gy3rpcIU+oKi5EygzQLRjTUv7fRblEVA=/images/1525335048352-2048x1365-FIT_AND_TRIM-9b790d23dfa735f0a72e9fbbe6480c1c.jpeg?tr=q-40,c-at_max,w-1280,h-720&_src=imagekit"
                                        alt="Balikpapan Tengah"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 w-full p-4">
                                        <h3 className="text-xl font-bold text-white">Balikpapan Tengah</h3>
                                        <p className="text-sm text-white/80">98 Properti Tersedia</p>
                                    </div>
                                </div>
                            </div>

                            {/* Area 3 */}
                            <div className="group overflow-hidden rounded-xl shadow-lg">
                                <div className="relative h-64 w-full">
                                    <img
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2023/11/08/7944ddb9-7b24-461f-bf0b-46496c3c1dee-1699406733303-a58c6329338c06072d0e0bd7e7804b11.jpg"
                                        alt="Balikpapan Utara"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 w-full p-4">
                                        <h3 className="text-xl font-bold text-white">Balikpapan Utara</h3>
                                        <p className="text-sm text-white/80">75 Properti Tersedia</p>
                                    </div>
                                </div>
                            </div>

                            {/* Area 4 */}
                            <div className="group overflow-hidden rounded-xl shadow-lg">
                                <div className="relative h-64 w-full">
                                    <img
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        src="https://www.grandcitybalikpapan.co/app/uploads/sites/968/2024/02/promo.webp"
                                        alt="Balikpapan Timur"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 w-full p-4">
                                        <h3 className="text-xl font-bold text-white">Balikpapan Timur</h3>
                                        <p className="text-sm text-white/80">63 Properti Tersedia</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <a
                                href="#"
                                className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-blue-700"
                            >
                                Jelajahi Semua Area
                                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Contact CTA Section */}
                <section className="bg-blue-700 py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="lg:flex lg:items-center lg:justify-between">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                <span className="block">Siap untuk menemukan hunian impian Anda?</span>
                                <span className="mt-2 block text-xl font-medium">Daftar sekarang dan mulai pencarian dengan Smart Living BPN</span>
                            </h2>
                            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                                <div className="inline-flex rounded-md shadow">
                                    <a
                                        href={route('register')}
                                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-blue-700 hover:bg-blue-50"
                                    >
                                        Daftar Sekarang
                                    </a>
                                </div>
                                <div className="ml-3 inline-flex rounded-md shadow">
                                    <a
                                        href="#"
                                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium text-white hover:bg-blue-500"
                                    >
                                        Kontak Kami
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 text-white">
                    <div className="mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {/* Logo & About */}
                            <div>
                                <div className="flex items-center">
                                    <svg className="h-8 w-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12,3L2,12h3v8h6v-6h2v6h6v-8h3L12,3z" />
                                    </svg>
                                    <h1 className="ml-2 text-2xl font-bold">Smart Living</h1>
                                </div>
                                <p className="mt-4 text-sm text-gray-400">
                                    Smart Living BPN adalah platform digital yang menghubungkan penyewa dan pemilik properti di Balikpapan. Kami
                                    berkomitmen untuk memudahkan pencarian hunian yang sesuai dengan kebutuhan dan budget Anda.
                                </p>
                                <div className="mt-6 flex space-x-4">
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        <span className="sr-only">Facebook</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                fillRule="evenodd"
                                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        <span className="sr-only">Instagram</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                fillRule="evenodd"
                                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        <span className="sr-only">Twitter</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Links 1 */}
                            <div>
                                <h3 className="text-sm font-semibold tracking-wider uppercase">Perusahaan</h3>
                                <ul className="mt-4 space-y-2">
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white">
                                            Tentang Kami
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white">
                                            Karir
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white">
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white">
                                            Investor
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white">
                                            Mitra
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Links 2 */}
                            <div>
                                <h3 className="text-sm font-semibold tracking-wider uppercase">Layanan</h3>
                                <ul className="mt-4 space-y-2">
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white">
                                            Sewa Properti
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white">
                                            Manajemen Properti
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white">
                                            Konsultasi Legal
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white">
                                            Pembayaran Sewa
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white">
                                            Pelaporan Masalah
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Contact Info */}
                            <div>
                                <h3 className="text-sm font-semibold tracking-wider uppercase">Hubungi Kami</h3>
                                <ul className="mt-4 space-y-2">
                                    <li className="flex items-start">
                                        <svg className="mt-1 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="ml-2 text-gray-400">
                                            Jl. MT. Haryono No.123, <br />
                                            Balikpapan, Kalimantan Timur
                                        </span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                        <span className="ml-2 text-gray-400">+62 542 123 4567</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                        <span className="ml-2 text-gray-400">info@smartlivingbpn.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-12 border-t border-gray-800 pt-8">
                            <p className="text-center text-sm text-gray-400">&copy; 2023 Smart Living BPN. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
