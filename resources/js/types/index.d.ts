import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    flash: {
        success?: string;
        error?: string;
    };
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface Kosan {
    id: number;
    name: string;
    price: number;
    address: string;
    description: string | null;
    status: string;
    type: string;
    room_size: string | null;
    image: string | null;
    featured: boolean;
    area: string;
    created_at: string;
    updated_at: string;
    facilities: KosanFacility[];
}

export interface KosanFacility {
    id: number;
    kosan_id: number;
    name: string;
    icon: string | null;
    created_at: string;
    updated_at: string;
}
