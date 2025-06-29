import { type Kosan, type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

interface Props {
    kosans: Kosan[];
}

export default function Index({ kosans }: Props) {
    const { auth, flash } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Manage Kosans" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="border-b border-gray-200 bg-white p-6">
                            <div className="mb-6 flex items-center justify-between">
                                <div>
                                    <h1 className="text-2xl font-semibold text-gray-900">Manage Kosans</h1>
                                    {auth.user && <p className="text-sm text-gray-500">Logged in as {auth.user.name}</p>}
                                </div>
                                <Link
                                    href={route('kosans.create')}
                                    className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase ring-blue-300 hover:bg-blue-700 focus:border-blue-900 focus:ring focus:outline-none active:bg-blue-900"
                                >
                                    Add New Kosan
                                </Link>
                            </div>

                            {flash.success && (
                                <div className="mb-4 rounded border border-green-400 bg-green-100 p-4 text-green-700">{flash.success}</div>
                            )}

                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                            >
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                            >
                                                Price
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                            >
                                                Area
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                            >
                                                Type
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                            >
                                                Status
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                            >
                                                Featured
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                            >
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {kosans.length > 0 ? (
                                            kosans.map((kosan) => (
                                                <tr key={kosan.id}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            {kosan.image && (
                                                                <div className="h-10 w-10 flex-shrink-0">
                                                                    <img
                                                                        className="h-10 w-10 rounded-md object-cover"
                                                                        src={`/storage/${kosan.image}`}
                                                                        alt={kosan.name}
                                                                    />
                                                                </div>
                                                            )}
                                                            <div className={`${kosan.image ? 'ml-4' : ''}`}>
                                                                <div className="text-sm font-medium text-gray-900">{kosan.name}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                                                        Rp {kosan.price.toLocaleString('id-ID')}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">{kosan.area}</td>
                                                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">{kosan.type}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span
                                                            className={`inline-flex rounded-full px-2 text-xs leading-5 font-semibold ${
                                                                kosan.status === 'Tersedia'
                                                                    ? 'bg-green-100 text-green-800'
                                                                    : 'bg-gray-100 text-gray-800'
                                                            }`}
                                                        >
                                                            {kosan.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                                                        {kosan.featured ? 'Yes' : 'No'}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                                        <Link
                                                            href={route('kosans.show', kosan.id)}
                                                            className="mr-4 text-blue-600 hover:text-blue-900"
                                                        >
                                                            View
                                                        </Link>
                                                        <Link
                                                            href={route('kosans.edit', kosan.id)}
                                                            className="mr-4 text-indigo-600 hover:text-indigo-900"
                                                        >
                                                            Edit
                                                        </Link>
                                                        <Link
                                                            href={route('kosans.destroy', kosan.id)}
                                                            method="delete"
                                                            as="button"
                                                            className="text-red-600 hover:text-red-900"
                                                            onClick={(e) => {
                                                                if (!confirm('Are you sure you want to delete this kosan?')) {
                                                                    e.preventDefault();
                                                                }
                                                            }}
                                                        >
                                                            Delete
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={7} className="px-6 py-4 text-center text-sm text-gray-500">
                                                    No kosans found.{' '}
                                                    <Link href={route('kosans.create')} className="text-blue-600 hover:underline">
                                                        Add your first kosan
                                                    </Link>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
