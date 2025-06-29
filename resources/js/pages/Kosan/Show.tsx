import { type Kosan } from '@/types';
import { Head, Link } from '@inertiajs/react';

interface Props {
    kosan: Kosan;
}

export default function Show({ kosan }: Props) {
    return (
        <>
            <Head title={kosan.name} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="border-b border-gray-200 bg-white p-6">
                            <div className="mb-6 flex items-center justify-between">
                                <h1 className="text-2xl font-semibold text-gray-900">{kosan.name}</h1>
                                <div className="flex">
                                    <Link
                                        href={route('kosans.edit', kosan.id)}
                                        className="mr-2 inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase hover:bg-blue-700"
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        href={route('kosans.index')}
                                        className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase hover:bg-gray-700"
                                    >
                                        Back to List
                                    </Link>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                {/* Image and Price Column */}
                                <div className="md:col-span-1">
                                    {kosan.image ? (
                                        <img
                                            src={`/storage/${kosan.image}`}
                                            alt={kosan.name}
                                            className="mb-4 h-auto w-full rounded-lg object-cover shadow-md"
                                        />
                                    ) : (
                                        <div className="flex h-64 items-center justify-center rounded-lg bg-gray-200">
                                            <p className="text-sm text-gray-500">No image available</p>
                                        </div>
                                    )}

                                    <div className="mt-4">
                                        <div className="rounded-lg bg-blue-50 p-4 shadow-sm">
                                            <p className="text-lg font-bold text-blue-600">Rp {kosan.price.toLocaleString('id-ID')}/bulan</p>
                                            <p className="mt-2 text-sm text-blue-700">
                                                Status:{' '}
                                                <span className={`font-medium ${kosan.status === 'Tersedia' ? 'text-green-600' : 'text-gray-600'}`}>
                                                    {kosan.status}
                                                </span>
                                            </p>
                                            <p className="mt-2 text-sm text-blue-700">
                                                Tipe: <span className="font-medium">{kosan.type}</span>
                                            </p>
                                            {kosan.room_size && (
                                                <p className="mt-2 text-sm text-blue-700">
                                                    Ukuran Kamar: <span className="font-medium">{kosan.room_size}</span>
                                                </p>
                                            )}
                                            <p className="mt-2 text-sm text-blue-700">
                                                Area: <span className="font-medium">{kosan.area}</span>
                                            </p>
                                            {kosan.featured && (
                                                <div className="mt-3 inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                                                    Featured
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Details Column */}
                                <div className="md:col-span-2">
                                    <div className="prose max-w-none">
                                        <h2 className="mb-4 text-xl font-bold text-gray-800">Detail Kosan</h2>
                                        <div className="mb-6">
                                            <h3 className="text-md font-semibold text-gray-700">Alamat</h3>
                                            <p className="mt-1">{kosan.address}</p>
                                        </div>

                                        {kosan.description && (
                                            <div className="mb-6">
                                                <h3 className="text-md font-semibold text-gray-700">Deskripsi</h3>
                                                <p className="mt-1">{kosan.description}</p>
                                            </div>
                                        )}

                                        {kosan.facilities?.length > 0 && (
                                            <div className="mb-6">
                                                <h3 className="text-md font-semibold text-gray-700">Fasilitas</h3>
                                                <div className="mt-3 grid grid-cols-2 gap-4">
                                                    {kosan.facilities.map((facility, index) => (
                                                        <div key={index} className="flex items-center">
                                                            {facility.icon ? (
                                                                <svg
                                                                    className="h-5 w-5 text-blue-500"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        dangerouslySetInnerHTML={{ __html: facility.icon }}
                                                                    />
                                                                </svg>
                                                            ) : (
                                                                <svg
                                                                    className="h-5 w-5 text-blue-500"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M5 13l4 4L19 7"
                                                                    />
                                                                </svg>
                                                            )}
                                                            <span className="ml-2 text-gray-600">{facility.name}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <div className="mb-6">
                                            <h3 className="text-md font-semibold text-gray-700">Info Tambahan</h3>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">
                                                    Ditambahkan pada: {new Date(kosan.created_at).toLocaleDateString('id-ID')}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Terakhir diperbarui: {new Date(kosan.updated_at).toLocaleDateString('id-ID')}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="mt-8 flex justify-end">
                                        <Link
                                            href={route('kosans.destroy', kosan.id)}
                                            method="delete"
                                            as="button"
                                            className="inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase ring-red-300 transition duration-150 ease-in-out hover:bg-red-700 focus:border-red-900 focus:ring focus:outline-none active:bg-red-900 disabled:opacity-25"
                                            onClick={(e) => {
                                                if (!confirm(`Are you sure you want to delete ${kosan.name}?`)) {
                                                    e.preventDefault();
                                                }
                                            }}
                                        >
                                            Delete
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
