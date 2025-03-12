import type { TourStep, ButtonProp } from "#nuxt-tour/props";
import { FilePlus2, PlaneTakeoff, PlaneLanding, PackageSearch, Truck, Check } from "lucide-vue-next";

export const findRealParent = (firstVueParent: any) => {
  let found = false;
  while (firstVueParent && !found) {
      if (firstVueParent.leafletObject === undefined) {
          firstVueParent = firstVueParent.$parent;
      } else {
          found = true;
      }
  }
  return firstVueParent;
};


export const order_steps = [
  {
    step: "create_time",
    title: "Создан",
    description: "Заказ создан и готовится к отправке.",
    icon: FilePlus2,
  },
  {
    step: "departure_datetime",
    title: "В аэропорту отправителя",
    description: "Заказ проходит осмотр в аэропорту отправителя.",
    icon: PlaneTakeoff,
  },
  {
    step: 'enter_uzb_datetime',
    title: "В аэропорту Узбекистана",
    description: "Заказ готовится к таможенному оформлению.",
    icon: PlaneLanding,
  },
  {
    step: 'process_customs_datetime',
    title: "На таможенном осмотре",
    description:
      "Заказ проходит таможенное оформление и вскоре будет направлен на доставку.",
    icon: PackageSearch,
  },
  {
    step: "process_local_datetime",
    title: "В процессе доставки",
    description: "Заказ находится в процессе доставки и скоро будет у вас.",
    icon: Truck,
  },
  {
    step: "process_received_datetime",
    title: "Доставлен",
    description: "Заказ успешно доставлен.",
    icon: Check,
  },
];

export const tour_buttons: {[key: string]: ButtonProp} = {
  skipBtn: {
    label: "Пропустить",
  },
  nextBtn: {
    label: "Дальше",
  },
  prevButton: {
    label: "Назад",
  },
  finishButton:  {
    label: "Готово",
  }
}


export const tour_steps: TourStep[] = [
  {
    target: '#langSwitcher',
    body: 'Выбор языка для комфортного использования.',
    popperConfig: {
      placement: 'left-start'
    }
  },
  {
    target: '#notifications',
    body: 'Включите уведомления, чтобы получать обновления о вашем заказе и другие важные новости!'
  },
  {
    target: '#install',
    body: 'Установите наше приложение и пользуйтесь сайтом удобнее!'
  },
  {
    target: ".sidebarTrigger",
    body: "Быстрый доступ к разделам сайта",
  },
]; 

export const sidebar_steps: TourStep[] = [
  {
    target: '#/passport',
    body: "This passport site",
  },
  {
    target: '#/order',
    body: "This order site",
  },
  {
    target: '#/order',
    body: "This order site",
  },
  {
    target: '#userDropdown',
    body: "userDropdown",
  }
]