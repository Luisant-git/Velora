
import Bitcoin from "../../../../../assets/images/crypto-currencies/regular/Bitcoin.svg"
import Ethereum from "../../../../../assets/images/crypto-currencies/regular/Ethereum.svg"
import litecoin from "../../../../../assets/images/crypto-currencies/regular/litecoin.svg"
import Ripple from "../../../../../assets/images/crypto-currencies/regular/Ripple.svg"


export const Invoiceseries = [{
    data: [400, 540, 580, 690]
}]
export const Invoiceoptions = {
    chart: {
        type: 'bar',
        height: 200,
        toolbar: {
            show: false,
        }
    },
    colors: ['#00ffbe', '#ebf748', '#48f768', '#00e3d2'],
    plotOptions: {
        bar: {
            borderRadius: 1,
            horizontal: true,
            barHeight: '40%',
            dataLabels: {
                position: 'top'
            },
            distributed: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: ["New", "Completed", "Pending", "Ongoing"],
    },
}

//History
interface historydata {
    id: number;
    src: string;
    name: string;
    date: string;
    txn: string;
    type: string;
    bg1: string;
    amount: string;
    status: string;
    bg: string;
    recipoent: string;
}

export const Historydata:historydata[]=[
    {
      id:1,
      src:Bitcoin,
      name:"Bitcoin (BTC)",
      date:"2024-06-01 10:15:22",
      txn:"TXN123456789",
      type:"Withdrawal",
      bg1:"danger",
      amount:"0.5 BTC",
      status:"Completed",
      bg:"primary",
      recipoent:"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
    },
    {
      id:2,
      src: Ethereum,
      name:"Ethereum (ETH)",
      date:"2024-06-02 14:30:45",
      txn:"TXN987654321",
      type:"Deposit",
      bg1:"success",
      amount:"10.0 ETH",
      bg:"primary3",
      status:"Pending",
      recipoent:"0x32Be343B94f860124dC4fEe278FDCBD38C102D88"
    },
    {
      id:3,
      src:litecoin,
      name:"Litecoin (LTC)",
      date:"2024-06-03 09:45:10",
      txn:"TXN567890123",
      type:"Buy",
      bg1:"info",
      amount:"50.0 LTC",
      bg:"primary",
      status:"Completed",
      recipoent:"MV3rLMY1Tep6Rhbt4x8fZ2rERKx1CBYKFz"
    },
    {
      id:4,
      src:Ripple,
      name:"Ripple (XRP)",
      date:"2024-06-04 16:20:55",
      txn:"TXN246801357",
      type:"Sell",
      bg1:"secondary",
      amount:"1000 XRP",
      bg:"primary1",
      status:"Failed",
      recipoent:"rEb8TK3gBgk5auZkwc6sHnwrGVJH8DuaLh"
    },
    {
      id:5,
      src:Bitcoin,
      name:"Bitcoin (BTC)",
      date:"2024-06-05 11:55:30",
      txn:"TXN654321789",
      type:"Transfer",
      bg1:"warning",
      amount:"1.2 BTC",
      bg:"primary",
      status:"Completed",
      recipoent:"3BbDtxBSjgfTRxaBUgRqAeW1XVo8JpEzYy"
    },
    {
      id:6,
      src: Ethereum,
      name:"Ethereum (ETH)",
      date:"2024-06-06 08:10:18",
      txn:"TXN135790246",
      type:"Withdrawal",
      bg1:"danger",
      amount:"5.5 ETH",
      bg:"primary3",
      status:"Pending",
      recipoent:"0x1dF62f291b2E969f6B5e158bcCC90eD80720D82e"
    },
    {
      id:7,
      src:Bitcoin,
      name:"Bitcoin (BTC)",
      date:"2024-06-07 15:20:35",
      txn:"TXN789012345",
      type:"Deposit",
      bg1:"success",
      amount:"0.8 BTC",
      bg:"primary",
      status:"Completed",
      recipoent:"1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX"
    },
    {
      id:8,
      src:litecoin,
      name:"Litecoin (LTC)",
      date:"2024-06-08 12:55:50",
      txn:"TXN456789012",
      type:"Sell",
      bg1:"secondary",
      amount:"25.0 LTC",
      bg:"primary",
      status:"Completed",
      recipoent:"LPnPZ8qY2TAnYXUTtrBMHK5h8BQ4mP51sU"
    },
    {
      id:9,
      src:Ripple,
      name:"Ripple (XRP)",
      date:"2024-06-09 09:30:05",
      txn:"TXN901234567",
      type:"Buy",
      bg1:"danger",
      amount:"500 XRP",
      bg:"primary3",
      status:"Pending",
      recipoent:"rw2ciyaNshpHe7bCHo4bRWq6pqqynnWKQg"
    },
    {
      id:10,
      src:Bitcoin,
      name:"Bitcoin (BTC)",
      date:"2024-06-10 14:45:22",
      txn:"TXN234567890",
      type:"Transfer",
      bg1:"warning",
      amount:"1.0 BTC",
      bg:"primary",
      status:"Completed",
      recipoent:"3CwTjvdAx2T1ZCFjHoUYaX6jTEy4d8BQsE"
    }
]