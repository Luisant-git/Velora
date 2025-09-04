
export const Staticseries = [{
  type: 'bar',
  name: "Buy",
  data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80],
}, {
  type: 'line',
  name: "Sell",
  data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89]
}]

export const Staticoptions = {
  chart: {
    height: 316,
    type: 'line',
    zoom: {
      enabled: false
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "28%",
      borderRadius: 2
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    position: "top",
    horizontalAlign: "center",
    offsetX: -15,
    fontWeight: "bold",
  },
  stroke: {
    curve: 'smooth',
    width: [1, 1],
  },
  markers: {
    size: 4,
    hover: {
      size: 6
    },
  },
  grid: {
    borderColor: '#f1f1f1',
    strokeDashArray: 3
  },
  colors: ["rgb(84, 109, 254)", "rgba(227, 84, 212, 1)"],
  yaxis: {
    title: {
      text: 'Statistics',
      style: {
        color: '#adb5be',
        fontSize: '14px',
        fontFamily: 'poppins, sans-serif',
        fontWeight: 600,
        cssClass: 'apexcharts-yaxis-label',
      },
    },
  },
  xaxis: {
    type: 'category',
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    axisBorder: {
      show: true,
      color: 'rgba(119, 119, 142, 0.05)',
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: true,
      borderType: 'solid',
      color: 'rgba(119, 119, 142, 0.05)',
      width: [6],
      offsetX: 0,
      offsetY: 0
    },
    labels: {
      rotate: -90
    }
  }
}

interface SelectType {
  value: string;
  label: string;
}
export const Options1: SelectType[] = [
  { value: 'Bitcoin', label: 'Bitcoin' },
  { value: 'Etherium', label: 'Etherium' },
  { value: 'Litecoin', label: 'Litecoin' },
  { value: 'Ripple', label: 'Ripple' },
  { value: 'Cardano', label: 'Cardano' },
  { value: 'Neo', label: 'Neo' },
  { value: 'Stellar', label: 'Stellar' },
  { value: 'EOS', label: 'EOS' },
  { value: 'NEM', label: 'NEM' },
];

export const Options2: SelectType[] = [
  { value: 'USD', label: 'USD' },
  { value: 'Pound', label: 'Pound' },
  { value: 'Rupee', label: 'Rupee' },
  { value: 'Euro', label: 'Euro' },
  { value: 'Won', label: 'Won' },
  { value: 'Dinar', label: 'Dinar' },
  { value: 'Rial', label: 'Rial' }
];

/** Selectdata**/
interface Data {
  value: string;
  label: string;
}
export const Data1: Data[] = [
  { value: 'BTC', label: 'BTC' },
  { value: 'ETH', label: 'ETH' },
  { value: 'XRP', label: 'XRP' },
  { value: 'DASH', label: 'DASH' },
  { value: 'NEO', label: 'NEO' },
  { value: 'LTC', label: 'LTC' },
  { value: 'BSD', label: 'BSD' }
];
interface Dataa {
  value: string;
  label: string;
}
export const Data2: Dataa[] = [
  { value: 'USD', label: 'USD' },
  { value: 'AED', label: 'AED' },
  { value: 'AUD', label: 'AUD' },
  { value: 'ARS', label: 'ARS' },
  { value: 'AZN', label: 'AZN' },
  { value: 'BGN', label: 'BGN' },
  { value: 'BRL', label: 'BRL' }
];