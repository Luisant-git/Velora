import Bitcoinsq from "../../../../../assets/images/crypto-currencies/square-color/Bitcoin.svg"
import Ethereum from "../../../../../assets/images/crypto-currencies/square-color/Ethereum.svg"
import Stratis from "../../../../../assets/images/crypto-currencies/square-color/Stratis.svg"
import EOS from "../../../../../assets/images/crypto-currencies/square-color/EOS.svg"
import Monero from "../../../../../assets/images/crypto-currencies/square-color/Monero.svg"
import Golem from "../../../../../assets/images/crypto-currencies/square-color/Golem.svg"
import Ripple from "../../../../../assets/images/crypto-currencies/square-color/Ripple.svg"
import Litecoin from "../../../../../assets/images/crypto-currencies/square-color/Litecoin.svg"
import Dash from "../../../../../assets/images/crypto-currencies/square-color/Dash.svg"
const Currencyseries = [
  {
    name: "Value",
    data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
  },
]
const Currencyoptions: any = ({ color }: any) => ({
  chart: {
    type: "area",
    height: 45,
    width: 230,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#000',
      opacity: 0.1
    }
  },
  stroke: {
    show: true,
    curve: "smooth",
    lineCap: "butt",
    colors: undefined,
    width: 1,
    dashArray: 3,
  },
  fill: {
    gradient: {
      // enabled: true
    }
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
  },
  colors: [color],
  tooltip: {
    enabled: false,
  }
})

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

interface CryptoType {
  id: number;
  title: string;
  rank: string;
  changePercent: string;
  changeValue: string;
  isPositive: boolean;
  price2: string;
  price3: string;
  chartoption: string;
  chartseries: any;
  img: string;
  changeValues: string;
}
export const Cryptocurrencies: CryptoType[] = [
  {
    id: 1,
    title: 'Bitcoin',
    rank: '-BTC',
    changePercent: '24.3%',
    changeValue: '+0.59',
    isPositive: true,
    price2: '0.00434',
    price3: '$30.29',
    chartoption: Currencyoptions({ color: 'rgb(227, 84, 212)' }),
    chartseries: Currencyseries,
    img: Bitcoinsq,
    changeValues: '+0.59'
  },
  {
    id: 2,
    title: 'Ethereum',
    rank: '-ETH',
    changePercent: '18.7%',
    changeValue: '+0.92',
    isPositive: true,
    price2: '0.01758',
    price3: '$2564.89',
    chartoption: Currencyoptions({ color: 'rgba(106, 78, 237,0.5)' }),
    chartseries: Currencyseries,
    img: Ethereum,
    changeValues: '+0.92'
  },
  {
    id: 3,
    title: 'Dash',
    rank: '-DASH',
    changePercent: '12.5%',
    changeValue: '-0.30',
    isPositive: false,
    price2: '0.00487',
    price3: '$116.78',
    chartoption: Currencyoptions({ color: 'rgba(10, 145, 81,0.5' }),
    chartseries: Currencyseries,
    img: Dash,
    changeValues: '-0.30'
  },
  {
    id: 4,
    title: 'Litecoin',
    rank: '-LTC',
    changePercent: '8.2%',
    changeValue: '+0.15',
    isPositive: true,
    price2: '0.00789',
    price3: '$158.42',
    chartoption: Currencyoptions({ color: 'rgba(227, 192, 11, 0.5)' }),
    chartseries: Currencyseries,
    img: Litecoin,
    changeValues: '+0.15'
  },
  {
    id: 5,
    title: 'Ripple',
    rank: '-XRP',
    changePercent: '6.5%',
    changeValue: '+0.10',
    isPositive: true,
    price2: '0.00123',
    price3: '$0.79',
    chartoption: Currencyoptions({ color: 'rgba(252, 108, 133, 0.5)' }),
    chartseries: Currencyseries,
    img: Ripple,
    changeValues: '+0.10'
  },
  {
    id: 6,
    title: 'Golem',
    rank: '-GNT',
    changePercent: '4.8%',
    changeValue: '-0.02',
    isPositive: false,
    price2: '0.000045',
    price3: '$1.23',
    chartoption: Currencyoptions({ color: 'rgba(227, 84, 212, 0.5)' }),
    chartseries: Currencyseries,
    img: Golem,
    changeValues: '-0.02'
  },
  {
    id: 7,
    title: 'Monero',
    rank: '-XMR',
    changePercent: '3.2%',
    changeValue: '+0.08',
    isPositive: true,
    price2: '0.00456',
    price3: '$182.34',
    chartoption: Currencyoptions({ color: 'rgba(237, 78, 131, 0.5)' }),
    chartseries: Currencyseries,
    img: Monero,
    changeValues: '+0.08'
  },
  {
    id: 8,
    title: 'EOS',
    rank: '-EOS',
    changePercent: '5.7%',
    changeValue: '+0.23',
    isPositive: true,
    price2: '0.00234',
    price3: '$4.78',
    chartoption: Currencyoptions({ color: 'rgba(70, 178, 201, 0.5)' }),
    chartseries: Currencyseries,
    img: EOS,
    changeValues: '+0.23'
  },
  {
    id: 9,
    title: 'Stratis',
    rank: '-STRAX',
    changePercent: '2.1%',
    changeValue: '+0.04',
    isPositive: true,
    price2: '0.001234',
    price3: '$2.34',
    chartoption: Currencyoptions({ color: 'rgba(70, 178, 201, 0.5)' }),
    chartseries: Currencyseries,
    img: Stratis,
    changeValues: '+0.04'
  },
];