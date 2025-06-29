import { type Kosan } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';

interface Props {
    kosan: Kosan;
}

export default function Edit({ kosan }: Props) {
    const form = useForm({
        name: kosan.name || '',
        price: String(kosan.price) || '',
        address: kosan.address || '',
        description: kosan.description || '',
        status: kosan.status || 'Tersedia',
        type: kosan.type || 'Campur',
        room_size: kosan.room_size || '',
        image: null as File | null,
        featured: kosan.featured || false,
        area: kosan.area || '',
        facilities:
            kosan.facilities.length > 0
                ? kosan.facilities.map((facility) => ({
                      id: facility.id,
                      name: facility.name,
                      icon: facility.icon || '',
                  }))
                : [{ name: '', icon: '' }],
        _method: 'PUT',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        form.post(route('kosans.update', kosan.id), {
            forceFormData: true, // Ensure files upload correctly
        });
    }

    function addFacility() {
        form.setData('facilities', [...form.data.facilities, { name: '', icon: '' }]);
    }

    function removeFacility(index: number) {
        const facilities = [...form.data.facilities];
        facilities.splice(index, 1);
        form.setData('facilities', facilities);
    }

    function updateFacility(index: number, field: 'name' | 'icon', value: string) {
        const facilities = [...form.data.facilities];
        facilities[index][field] = value;
        form.setData('facilities', facilities);
    }

    return (
        <>
            <Head title={`Edit Kosan - ${kosan.name}`} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="border-b border-gray-200 bg-white p-6">
                            <div className="mb-6 flex items-center justify-between">
                                <h1 className="text-2xl font-semibold text-gray-900">Edit Kosan: {kosan.name}</h1>
                                <div>
                                    <Link
                                        href={route('kosans.show', kosan.id)}
                                        className="mr-2 inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase hover:bg-gray-500"
                                    >
                                        View
                                    </Link>
                                    <Link
                                        href={route('kosans.index')}
                                        className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase hover:bg-gray-700"
                                    >
                                        Back to List
                                    </Link>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
                                    {/* Name */}
                                    <div className="sm:col-span-4">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                            Name
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                value={form.data.name}
                                                onChange={(e) => form.setData('name', e.target.value)}
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                            />
                                        </div>
                                        {form.errors.name && <p className="mt-2 text-sm text-red-600">{form.errors.name}</p>}
                                    </div>

                                    {/* Price */}
                                    <div className="sm:col-span-2">
                                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                            Price (Rp)
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="number"
                                                name="price"
                                                id="price"
                                                value={form.data.price}
                                                onChange={(e) => form.setData('price', e.target.value)}
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                            />
                                        </div>
                                        {form.errors.price && <p className="mt-2 text-sm text-red-600">{form.errors.price}</p>}
                                    </div>

                                    {/* Address */}
                                    <div className="sm:col-span-6">
                                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                            Address
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="address"
                                                id="address"
                                                value={form.data.address}
                                                onChange={(e) => form.setData('address', e.target.value)}
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                            />
                                        </div>
                                        {form.errors.address && <p className="mt-2 text-sm text-red-600">{form.errors.address}</p>}
                                    </div>

                                    {/* Description */}
                                    <div className="sm:col-span-6">
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                            Description
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                                id="description"
                                                name="description"
                                                rows={3}
                                                value={form.data.description}
                                                onChange={(e) => form.setData('description', e.target.value)}
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                            />
                                        </div>
                                        {form.errors.description && <p className="mt-2 text-sm text-red-600">{form.errors.description}</p>}
                                    </div>

                                    {/* Type */}
                                    <div className="sm:col-span-2">
                                        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                                            Type
                                        </label>
                                        <div className="mt-1">
                                            <select
                                                id="type"
                                                name="type"
                                                value={form.data.type}
                                                onChange={(e) => form.setData('type', e.target.value)}
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                            >
                                                <option value="Putra">Putra</option>
                                                <option value="Putri">Putri</option>
                                                <option value="Campur">Campur</option>
                                            </select>
                                        </div>
                                        {form.errors.type && <p className="mt-2 text-sm text-red-600">{form.errors.type}</p>}
                                    </div>

                                    {/* Status */}
                                    <div className="sm:col-span-2">
                                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                                            Status
                                        </label>
                                        <div className="mt-1">
                                            <select
                                                id="status"
                                                name="status"
                                                value={form.data.status}
                                                onChange={(e) => form.setData('status', e.target.value)}
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                            >
                                                <option value="Tersedia">Tersedia</option>
                                                <option value="Terisi">Terisi</option>
                                            </select>
                                        </div>
                                        {form.errors.status && <p className="mt-2 text-sm text-red-600">{form.errors.status}</p>}
                                    </div>

                                    {/* Room Size */}
                                    <div className="sm:col-span-2">
                                        <label htmlFor="room_size" className="block text-sm font-medium text-gray-700">
                                            Room Size
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="room_size"
                                                id="room_size"
                                                value={form.data.room_size}
                                                onChange={(e) => form.setData('room_size', e.target.value)}
                                                placeholder="e.g. 3x4m"
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                            />
                                        </div>
                                        {form.errors.room_size && <p className="mt-2 text-sm text-red-600">{form.errors.room_size}</p>}
                                    </div>

                                    {/* Area */}
                                    <div className="sm:col-span-3">
                                        <label htmlFor="area" className="block text-sm font-medium text-gray-700">
                                            Area
                                        </label>
                                        <div className="mt-1">
                                            <select
                                                id="area"
                                                name="area"
                                                value={form.data.area}
                                                onChange={(e) => form.setData('area', e.target.value)}
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                            >
                                                <option value="">Select Area</option>
                                                <option value="Balikpapan Selatan">Balikpapan Selatan</option>
                                                <option value="Balikpapan Utara">Balikpapan Utara</option>
                                                <option value="Balikpapan Tengah">Balikpapan Tengah</option>
                                                <option value="Balikpapan Timur">Balikpapan Timur</option>
                                                <option value="Balikpapan Barat">Balikpapan Barat</option>
                                            </select>
                                        </div>
                                        {form.errors.area && <p className="mt-2 text-sm text-red-600">{form.errors.area}</p>}
                                    </div>

                                    {/* Featured */}
                                    <div className="sm:col-span-3">
                                        <div className="flex h-full items-center">
                                            <input
                                                id="featured"
                                                name="featured"
                                                type="checkbox"
                                                checked={form.data.featured}
                                                onChange={(e) => form.setData('featured', e.target.checked)}
                                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                            />
                                            <label htmlFor="featured" className="ml-2 block text-sm text-gray-700">
                                                Feature this kosan on the homepage
                                            </label>
                                        </div>
                                        {form.errors.featured && <p className="mt-2 text-sm text-red-600">{form.errors.featured}</p>}
                                    </div>

                                    {/* Current Image (if any) */}
                                    {kosan.image && (
                                        <div className="sm:col-span-6">
                                            <label className="block text-sm font-medium text-gray-700">Current Image</label>
                                            <div className="mt-1">
                                                <img
                                                    src={`/storage/${kosan.image}`}
                                                    alt={kosan.name}
                                                    className="h-32 w-auto rounded-md object-cover"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {/* Image */}
                                    <div className="sm:col-span-6">
                                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                                            {kosan.image ? 'Replace Image' : 'Kosan Image'}
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="file"
                                                name="image"
                                                id="image"
                                                onChange={(e) => form.setData('image', e.target.files?.[0] || null)}
                                                className="block w-full border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                            />
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">Leave blank to keep current image</p>
                                        {form.errors.image && <p className="mt-2 text-sm text-red-600">{form.errors.image}</p>}
                                    </div>

                                    {/* Facilities */}
                                    <div className="sm:col-span-6">
                                        <div className="flex items-center justify-between">
                                            <label className="block text-sm font-medium text-gray-700">Facilities</label>
                                            <button
                                                type="button"
                                                onClick={addFacility}
                                                className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-3 py-1 text-sm leading-4 font-medium text-white shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                                            >
                                                Add Facility
                                            </button>
                                        </div>

                                        <div className="mt-2 space-y-4">
                                            {form.data.facilities.map((facility, index) => (
                                                <div key={index} className="flex items-center space-x-4">
                                                    <div className="flex-grow">
                                                        <label htmlFor={`facility-name-${index}`} className="sr-only">
                                                            Facility Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id={`facility-name-${index}`}
                                                            value={facility.name}
                                                            onChange={(e) => updateFacility(index, 'name', e.target.value)}
                                                            placeholder="Facility name (e.g. WiFi, AC)"
                                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                                        />
                                                    </div>
                                                    <div className="flex-grow">
                                                        <label htmlFor={`facility-icon-${index}`} className="sr-only">
                                                            Icon SVG
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id={`facility-icon-${index}`}
                                                            value={facility.icon}
                                                            onChange={(e) => updateFacility(index, 'icon', e.target.value)}
                                                            placeholder="SVG Icon Path"
                                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                                        />
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={() => removeFacility(index)}
                                                        className="inline-flex items-center rounded-full border border-transparent bg-red-600 p-1 text-white shadow-sm hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-5 w-5"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                        {form.errors.facilities && <p className="mt-2 text-sm text-red-600">{form.errors.facilities}</p>}
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        onClick={() => form.reset()}
                                        className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                                    >
                                        Reset
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={form.processing}
                                        className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                                    >
                                        {form.processing ? 'Saving...' : 'Update'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
