import {
    IdCard, Package, MapPin, Search
  } from 'lucide-vue-next'

export const cargo = [
    {
        title: 'Отследить',
        url: '/',
        icon: Search,
    },
    {
        title: 'Филиали',
        url: '/filial',
        icon: MapPin,
    },
    {
        title: 'Пасспорт',
        url: '/passport',
        icon: IdCard,
    },
    {
        title: 'Заказы',
        url: '/order',
        icon: Package,
    }
]

export const turism = [
    {
        title: 'Отследить',
        url: '/',
        icon: Search,
        disabled: true
    }
]

export const consulting = [
    {
        title: 'Отследить',
        url: '/',
        icon: Search,
        disabled: true
    }
]

export const customs = [
    {
        title: 'Отследить',
        url: '/',
        icon: Search,
        disabled: true
    }
]

export default [...cargo, ...turism, ...consulting, ...customs]