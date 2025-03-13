import {
    IdCard, Package, MapPin, Search, Globe, Globe2, Notebook, Pen, NotebookPen
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
        title: 'Найти тур',
        url: '/',
        icon: Search,
        disabled: true
    },
    {
        title: 'Гарячие туры',
        url: '/',
        icon: Globe,
        disabled: true
    },
    {
        title: 'Чартерные туры',
        url: '/',
        icon: Globe2,
        disabled: true
    }
]

export const consulting = [
    {
        title: 'Подать заявку',
        url: '/',
        icon: Pen,
        disabled: true
    },
    {
        title: 'Отчеты',
        url: '/',
        icon: Notebook,
        disabled: true
    }
]

export const customs = [
    {
        title: 'Подать заявку',
        url: '/',
        icon: Pen,
        disabled: true
    },
    {
        title: 'Отчеты',
        url: '/',
        icon: Notebook,
        disabled: true
    },
    {
        title: 'Бланки',
        url: '/',
        icon: NotebookPen,
        disabled: true
    },
    
]

export default [...cargo, ...turism, ...consulting, ...customs]