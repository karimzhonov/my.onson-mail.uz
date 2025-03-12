import {
    IdCard, Package, MapPin, Search
  } from 'lucide-vue-next'

export default [
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