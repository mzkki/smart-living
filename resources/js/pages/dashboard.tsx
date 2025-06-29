import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type Kosan, type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Building, Check, Home, Plus, Star, Users } from 'lucide-react';

interface DashboardProps {
    kosans: Kosan[];
    stats: {
        total: number;
        available: number;
        featured: number;
        types: Record<string, number>;
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard({ kosans, stats }: DashboardProps) {
    const { auth, flash } = usePage<SharedData>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {/* Welcome message */}
                <div className="rounded-xl border border-sidebar-border/70 bg-white p-6 dark:border-sidebar-border dark:bg-gray-800">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome back, {auth.user?.name}!</h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Manage your kosan properties and view performance from your dashboard.</p>
                </div>

                {/* Stats Cards */}
                <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                    <div className="rounded-xl border border-sidebar-border/70 bg-white p-6 shadow-sm dark:border-sidebar-border dark:bg-gray-800">
                        <div className="flex items-center">
                            <div className="mr-4 rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-900 dark:text-blue-200">
                                <Building className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Total Kosans</p>
                                <h3 className="text-xl font-bold">{stats.total}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl border border-sidebar-border/70 bg-white p-6 shadow-sm dark:border-sidebar-border dark:bg-gray-800">
                        <div className="flex items-center">
                            <div className="mr-4 rounded-full bg-green-100 p-3 text-green-600 dark:bg-green-900 dark:text-green-200">
                                <Check className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Available</p>
                                <h3 className="text-xl font-bold">{stats.available}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl border border-sidebar-border/70 bg-white p-6 shadow-sm dark:border-sidebar-border dark:bg-gray-800">
                        <div className="flex items-center">
                            <div className="mr-4 rounded-full bg-yellow-100 p-3 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-200">
                                <Star className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Featured</p>
                                <h3 className="text-xl font-bold">{stats.featured}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl border border-sidebar-border/70 bg-white p-6 shadow-sm dark:border-sidebar-border dark:bg-gray-800">
                        <div className="flex items-center">
                            <div className="mr-4 rounded-full bg-purple-100 p-3 text-purple-600 dark:bg-purple-900 dark:text-purple-200">
                                <Users className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Types</p>
                                <h3 className="text-xl font-bold">{Object.keys(stats.types).length}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Kosans and Actions */}
                <div className="flex flex-col gap-4 lg:flex-row">
                    {/* Recent Kosans */}
                    <div className="flex-1 rounded-xl border border-sidebar-border/70 bg-white shadow-sm dark:border-sidebar-border dark:bg-gray-800">
                        <div className="border-b border-gray-200 p-6 dark:border-gray-700">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold">Recent Kosans</h2>
                                <Link href={route('kosans.index')} className="text-sm text-blue-600 hover:underline dark:text-blue-400">
                                    View All
                                </Link>
                            </div>
                        </div>
                        <div className="p-6">
                            {flash?.success && (
                                <div className="mb-4 rounded border border-green-400 bg-green-100 p-4 text-green-700">{flash.success}</div>
                            )}

                            {kosans && kosans.length > 0 ? (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead>
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                                                    Name
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                                                    Price
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                                                    Status
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                                            {kosans.map((kosan) => (
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
                                                            <div className={kosan.image ? 'ml-4' : ''}>
                                                                <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                                                    {kosan.name}
                                                                </div>
                                                                <div className="text-sm text-gray-500 dark:text-gray-400">{kosan.area}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                        Rp {kosan.price.toLocaleString('id-ID')}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span
                                                            className={`inline-flex rounded-full px-2 text-xs leading-5 font-semibold ${
                                                                kosan.status === 'Tersedia'
                                                                    ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                                                                    : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                                                            }`}
                                                        >
                                                            {kosan.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                                        <Link
                                                            href={route('kosans.show', kosan.id)}
                                                            className="mr-4 text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-200"
                                                        >
                                                            View
                                                        </Link>
                                                        <Link
                                                            href={route('kosans.edit', kosan.id)}
                                                            className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-200"
                                                        >
                                                            Edit
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div className="py-10 text-center">
                                    <Home className="mx-auto h-12 w-12 text-gray-400" />
                                    <h3 className="mt-2 text-sm font-semibold text-gray-900 dark:text-gray-100">No kosans yet</h3>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Get started by creating a new kosan listing.</p>
                                    <div className="mt-6">
                                        <Link
                                            href={route('kosans.create')}
                                            className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
                                        >
                                            <Plus className="mr-2 -ml-1 h-5 w-5" />
                                            Add New Kosan
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="rounded-xl border border-sidebar-border/70 bg-white shadow-sm dark:border-sidebar-border dark:bg-gray-800">
                    <div className="border-b border-gray-200 p-6 dark:border-gray-700">
                        <h2 className="text-lg font-semibold">Quick Actions</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-3">
                        <Link
                            href={route('kosans.create')}
                            className="flex flex-col items-center justify-center rounded-lg border border-gray-200 p-6 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700"
                        >
                            <Plus className="mb-2 h-8 w-8 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Add New Kosan</span>
                        </Link>

                        <Link
                            href={route('kosans.index')}
                            className="flex flex-col items-center justify-center rounded-lg border border-gray-200 p-6 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700"
                        >
                            <Building className="mb-2 h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Manage Kosans</span>
                        </Link>

                        <Link
                            href="/"
                            className="flex flex-col items-center justify-center rounded-lg border border-gray-200 p-6 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700"
                        >
                            <Home className="mb-2 h-8 w-8 text-green-600 dark:text-green-400" />
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">View Landing Page</span>
                        </Link>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
