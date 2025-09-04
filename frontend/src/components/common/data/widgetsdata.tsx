
//Sales Revenue

export const WidgetRseries = [
    {
        name: "Revenue",
        data: [144, 155, 141, 142, 122, 143, 121, 135, 156, 127, 143, 127],
    },
    {
        name: "Profit",
        data: [133, 21, 32, 37, 123, 32, 47, 131, 54, 132, 20, 138],
    },
    {
        name: "Income",
        data: [30, 125, 36, 30, 45, 135, 64, 51, 59, 136, 39, 51],
    },
    {
        name: "Sales",
        data: [30, 125, 36, 30, 45, 135, 64, 51, 59, 136, 39, 51],
    },
]
export const WidgetRoptions = {
    chart: {
        toolbar: {
            show: false,
        },
        type: "bar",
        fontFamily: "'Roboto', sans-serif",
        fontWeight: [600],
        height: 322,
        stacked: true,
    },
    colors: ["var(--primary-color)", "rgb(227, 84, 212)", "rgb(255, 142, 111)", "rgb(255, 93, 159)"],
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "20%",
        },
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: true,
        position: "top",
        offsetX: 0,
        offsetY: 8,
        fontSize: '14px',
        markers: {
            size: 4,
            shape: 'square',
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors: undefined,
            radius: 5,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0
        },
    },
    grid: {
        borderColor: "rgba(0,0,0,0.1)",
        strokeDashArray: 3,
        xaxis: {
            lines: {
                show: false,
            },
        },
    },
    xaxis: {
        axisBorder: {
            show: false,
        },
        categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],

    },
    yaxis: {
        tickAmount: 4,
    },
}

//Total Sales

export const SalesTseries = [85]
export const Salesoptions = {
    chart: {
        height: 275,
        type: 'radialBar',
        responsive: 'true',
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            hollow: {
                margin: 0,
                size: '60%',
                background: '#fff',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front',
            },

            dataLabels: {
                show: true,
                name: {
                    offsetY: -10,
                    show: true,
                    color: 'var(--text-muted)',
                    fontSize: '14px',
                    fontWeight: '400'
                },
                value: {
                    // formatter: function (val) {
                    //     return parseInt(val);
                    // },
                    color: '#111',
                    fontSize: '36px',
                    show: true,
                }
            }
        }
    },
    colors: ["rgb(227, 84, 212)", "var(--primary-color)"],
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'round',
        colors: "#fff",
        width: 0,
        dashArray: 0,
    },
    fill: {
        type: 'gradient',
        gradient: {
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['var(--primary-color)'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
        }
    },
    labels: ["Total Sales"]
}

//salerevenue1

export const Revenue1series = [{
    name: "Revenue",
    data: [34, 84, 15, 36, 18, 19, 38, 65, 21]
},
{
    name: "Profit",
    data: [14, 65, 24, 88, 12, 65, 89, 65, 48]
}]
export const Revenue1options = {
    chart: {
        height: 320,
        type: 'line',
        zoom: {
            enabled: false
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 2,
            left: 0,
            blur: 6,
            color: ['rgb(227, 84, 212)', "var(--primary-color)"],
            opacity: 0.3
        },
        toolbar: { show: false }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: true,
        position: "top",
        offsetX: 0,
        offsetY: 8,
        markers: {
            width: 5,
            height: 5,
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors: undefined,
            radius: 12,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0
        },
    },
    stroke: {
        curve: 'smooth',
        width: ['2', '2'],
        dashArray: [2, 1]
    },
    grid: {
        borderColor: '#f5f4f4',
        strokeDashArray: 3
    },
    colors: ["rgb(227, 84, 212)", "var(--primary-color)"],
    yaxis: {
    },
    xaxis: {
        type: 'category',
        categories: ['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1', '1.1', '1.2', '1.3', '1.4'],
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

//Total Visitors

export const Visitorseries = [90, 80, 75]
export const Visitoroptions = {
    chart: {
        height: 270,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            startAngle: -180,
            endAngle: 180,
            hollow: {
                margin: 10,
                size: '60%',
            },
            dataLabels: {
                name: {
                    fontSize: '25px',
                },
                value: {
                    fontSize: '16px',
                },
                total: {
                    show: true,
                    label: 'Total',
                    formatter: function (_w: any) {
                        return 358
                    }
                }
            }
        }
    },
    stroke: {
        dashArray: [0, 3, 1]
    },
    colors: [
        "var(--primary-color)",
        "rgb(227, 84, 212)", "rgb(255, 93, 159)"
    ],
    labels: ['Apps', 'Offline', 'Website'],
}

//salerevenue2

export const Revenue2series = [
    {
        name: "Orders",
        data: [24, 57, 55, 18, 44, 88, 65, 88, 66, 55, 25, 88],
    },
    {
        name: "Delivered",
        data: [-8, -40, -15, -32, -45, -30, -20, -35, -28, -43, -65, -35],
    },
    {
        name: "Cancelled",
        data: [18, 40, 32, 65, 45, 30, -20, 35, 28, 43, -30, -40],
    }
]
export const Revenue2options = {
    chart: {
        type: "line",
        height: 288,
        toolbar: {
            show: false
        },
    },
    colors: [
        "var(--primary-color)",
        "rgb(227, 84, 212)",
        "rgb(255, 93, 159)"
    ],
    markers: {
        size: 3,
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: true,
        position: "top",
        offsetX: 0,
        offsetY: 8,
        markers: {
            width: 5,
            height: 5,
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors: undefined,
            radius: 12,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0
        },
    },
    stroke: {
        curve: 'stepline',
        width: [2, 2, 2],
        lineCap: 'round',
    },
    grid: {
        borderColor: "#edeef1",
        strokeDashArray: 2,
    },
    yaxis: {
        axisBorder: {
            show: true,
            color: "rgba(227, 84, 212, 0.05)",
            offsetX: 0,
            offsetY: 0,
        },
        axisTicks: {
            show: true,
            borderType: "solid",
            color: "rgba(227, 84, 212, 0.05)",
            width: 6,
            offsetX: 0,
            offsetY: 0,
        },
    },
    xaxis: {
        type: "month",
        categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "sep",
            "oct",
            "nov",
            "dec",
        ],
        axisBorder: {
            show: false,
            color: "rgba(227, 84, 212, 0.05)",
            offsetX: 0,
            offsetY: 0,
        },
        axisTicks: {
            show: false,
            borderType: "solid",
            color: "rgba(227, 84, 212, 0.05)",
            width: 6,
            offsetX: 0,
            offsetY: 0,
        },
        labels: {
            rotate: -90,
        },
    }
}

//top-sales

export const Topsaleseries = [{
    type: 'area',
    name: 'Sales',
    data: [14, 35, 85, 88, 45, 56, 25, 36, 14, 85, 96, 74],
},
{
    type: 'bar',
    name: 'Revenue',
    data: [47, 55, 56, 33, 33, 48, 48, 22, 22, 86, 88, 99],
}
]
export const Topsaleoptions = {
    chart: {
        type: 'line',
        height: 290,
        toolbar: {
            show: false,
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 7,
            left: 1,
            blur: 3,
            color: ["#000", "#000"],
            opacity: 0.1
        },
    },
    grid: {
        show: false,
        borderColor: '#f2f6f7',
    },
    colors: ["rgb(227, 84, 212)", "var(--primary-color)"],
    fill: {
        type: ['gradient', 'none'],
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 90, 100],
            colorStops: [
                [
                    {
                        offset: 0,
                        color: "rgba(227, 84, 212,0.05)",
                        opacity: 1
                    },
                    {
                        offset: 75,
                        color: "rgba(227, 84, 212,0.05)",
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: "rgba(227, 84, 212,0.05)",
                        opacity: 1
                    }
                ],
                [
                    {
                        offset: 0,
                        color: "var(--primary005)",
                        opacity: 1
                    },
                    {
                        offset: 75,
                        color: "var(--primary005)",
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: "var(--primary005)",
                        opacity: 1
                    }
                ]
            ]
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "35%",
            borderRadius: "4"
        },
    },
    stroke: {
        curve: 'smooth',
        width: [1.5, 1.5],
        lineCap: 'round',
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: true,
        position: "bottom",
        offsetX: 0,
        offsetY: 8,
        markers: {
            width: 8,
            height: 8,
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors: undefined,
            radius: 12,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0
        },
    },
    yaxis: {
        Show: true,
        labels: {
            show: true,
        }
    },
    xaxis: {
        show: false,
        type: 'day',
        categories: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        axisBorder: {
            show: false,
            color: 'rgba(119, 119, 142, 0.05)',
            offsetX: 0,
            offsetY: 0,
        },
    }
}

//Orders Overview

export const Overviewseries = [88, 85, 75, 60]
export const Overviewoptions = {
    chart: {
        height: 238,
        type: 'radialBar',
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'round',
        colors: "#fff",
        width: 0,
        dashArray: 0,
    },
    labels: ["Delivered", "Returned", "Cancelled", "Pending"],
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    offsetY: -3,
                    show: true,
                    color: 'var(--text-muted)',
                    fontSize: '14px',
                    fontWeight: '400'
                },
                value: {
                    color: '#111',
                    fontSize: '14px',
                    offsetY: 2,
                    show: true,
                },
                total: {
                    show: true,
                    label: 'Total',
                    color: 'var(--text-muted)',
                    formatter: function (_w: any) {
                        return 380
                    }
                }
            }
        }
    },
    colors: ["var(--primary08)", "rgba(227, 84, 212, 0.8)", "rgba(255, 93, 159, 0.8)", "rgba(255, 142, 111, 0.8)"],
}

//
const StrokeColor = {
    Sales: {
        colorStops: [
            [
                {
                    offset: 0,
                    color: "var(--primary-color)",
                    opacity: 1
                },
                {
                    offset: 100,
                    color: "var(--primary-color)",
                    opacity: 1
                },
            ]
        ]
    },
    Profit: {
        colorStops: [
            [
                {
                    offset: 0,
                    color: "rgb(227, 84, 212)",
                    opacity: 1
                },
                {
                    offset: 100,
                    color: "rgb(227, 84, 212)",
                    opacity: 1
                },
            ]
        ]
    },
    Revenue: {
        colorStops: [
            [
                {
                    offset: 0,
                    color: "rgb(255, 142, 111)",
                    opacity: 1
                },
                {
                    offset: 100,
                    color: "rgb(255, 142, 111)",
                    opacity: 1
                },
            ]
        ]
    },
    Income: {
        colorStops: [
            [
                {
                    offset: 0,
                    color: "rgb(255, 93, 159)",
                    opacity: 1
                },
                {
                    offset: 100,
                    color: "rgb(255, 93, 159)",
                    opacity: 1
                },
            ]
        ]
    }
}
const GradientColors = {
    Sales: {
        colorStops: [
            [
                {
                    offset: 0,
                    color: "var(--primary-color)",
                    opacity: 0.08
                },
                {
                    offset: 90,
                    color: "var(--primary-color)",
                    opacity: 0.08
                }
            ]
        ]
    },
    Profit: {
        colorStops: [
            [
                {
                    offset: 0,
                    color: "rgb(227, 84, 212)",
                    opacity: 0.08
                },
                {
                    offset: 90,
                    color: "rgb(227, 84, 212)",
                    opacity: 0.08
                }
            ]
        ]
    },
    Revenue: {
        colorStops: [
            [
                {
                    offset: 0,
                    color: "rgb(255, 142, 111)",
                    opacity: 0.08
                },
                {
                    offset: 90,
                    color: "rgb(255, 142, 111)",
                    opacity: 0.08
                }
            ]
        ]
    },
    Income: {
        colorStops: [
            [
                {
                    offset: 0,
                    color: "rgb(255, 93, 159)",
                    opacity: 0.08
                },
                {
                    offset: 90,
                    color: "rgb(255, 93, 159)",
                    opacity: 0.08
                }
            ]
        ]
    }
}
const Widgetseries = [{
    name: 'Value',
    data: [14, 48, 26, 36, 26, 75, 45, 20, 55]
}]
const Widgetoptions = ({ color, getstorkecolor, getgradientcolor }: any) => ({
    chart: {
        type: 'area',
        height: 50,
        width: 120,
        sparkline: {
            enabled: true
        },
    },
    grid: {
        show: false,
        xaxis: {
            lines: {
                show: false
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        },
    },
    colors: [color],
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 2,
        dashArray: 0,
        fill: {
            type: "gradient",
            gradient: {
                type: "horizontal",
                colorStops: getstorkecolor.colorStops
            }
        }
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            type: "horizontal",
            colorStops: getgradientcolor.colorStops
        }
    },
    yaxis: {
        min: 0,
        show: false,
        axisBorder: {
            show: false
        },
    },
    xaxis: {
        axisTicks: {
            show: false
        },
        axisBorder: {
            show: false
        }
    },

})
const svg1 = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"></path></svg>

const svg2 = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z"></path></svg>

const svg3 = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M244.24,60a8,8,0,0,0-7.75-.4c-42.93,21-73.59,11.16-106,.78-34-10.89-69.25-22.14-117.95,1.64A8,8,0,0,0,8,69.24V189.17a8,8,0,0,0,11.51,7.19c42.93-21,73.59-11.16,106.05-.78,19.24,6.15,38.84,12.42,61,12.42,17.09,0,35.73-3.72,56.91-14.06a8,8,0,0,0,4.49-7.18V66.83A8,8,0,0,0,244.24,60ZM232,181.67c-40.6,18.17-70.25,8.69-101.56-1.32-19.24-6.15-38.84-12.42-61-12.42a122,122,0,0,0-45.4,9V74.33c40.6-18.17,70.25-8.69,101.56,1.32S189.14,96,232,79.09ZM128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144ZM56,96v48a8,8,0,0,1-16,0V96a8,8,0,1,1,16,0Zm144,64V112a8,8,0,1,1,16,0v48a8,8,0,1,1-16,0Z"></path></svg>

const svg4 = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M192,116a12,12,0,1,1-12-12A12,12,0,0,1,192,116ZM152,64H112a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm96,48v32a24,24,0,0,1-24,24h-2.36l-16.21,45.38A16,16,0,0,1,190.36,224H177.64a16,16,0,0,1-15.07-10.62L160.65,208h-57.3l-1.92,5.38A16,16,0,0,1,86.36,224H73.64a16,16,0,0,1-15.07-10.62L46,178.22a87.69,87.69,0,0,1-21.44-48.38A16,16,0,0,0,16,144a8,8,0,0,1-16,0,32,32,0,0,1,24.28-31A88.12,88.12,0,0,1,112,32H216a8,8,0,0,1,0,16H194.61a87.93,87.93,0,0,1,30.17,37c.43,1,.85,2,1.25,3A24,24,0,0,1,248,112Zm-16,0a8,8,0,0,0-8-8h-3.66a8,8,0,0,1-7.64-5.6A71.9,71.9,0,0,0,144,48H112A72,72,0,0,0,58.91,168.64a8,8,0,0,1,1.64,2.71L73.64,208H86.36l3.82-10.69A8,8,0,0,1,97.71,192h68.58a8,8,0,0,1,7.53,5.31L177.64,208h12.72l18.11-50.69A8,8,0,0,1,216,152h8a8,8,0,0,0,8-8Z"></path></svg>
export const Cardsdata = [
    { id: 1, icon: svg1, color: "primary", total: "Total Sales", price: "87,985", percent: "0.5", icon1: "up", color1: "success", chartoptions: Widgetoptions({ color: 'var(--primary-color)', getstorkecolor: StrokeColor.Sales, getgradientcolor: GradientColors.Sales }), chartseries: Widgetseries, type: 'bar' },
    { id: 2, icon: svg2, color: "primary1", total: "Total profit", price: "$46,789", percent: "0.5", icon1: "down", color1: "danger", chartoptions: Widgetoptions({ color: 'rgb(227, 84, 212)', getstorkecolor: StrokeColor.Profit, getgradientcolor: GradientColors.Profit }), chartseries: Widgetseries, type: 'bar' },
    { id: 3, icon: svg3, color: "primary2", total: "Total Revenue", price: "$57,874", percent: "0.5", icon1: "up", color1: "success", chartoptions: Widgetoptions({ color: 'rgb(255, 142, 111)', getstorkecolor: StrokeColor.Income, getgradientcolor: GradientColors.Income }), chartseries: Widgetseries, type: 'bar' },
    { id: 4, icon: svg4, color: "primary3", total: "Total Income", price: "$98,122", percent: "0.5", icon1: "down", color1: "danger", chartoptions: Widgetoptions({ color: 'var(--primary-color)', getstorkecolor: StrokeColor.Revenue, getgradientcolor: GradientColors.Revenue }), chartseries: Widgetseries, type: 'bar' },
]

const wsvg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="84" cy="108" r="52" opacity="0.2"></circle><path d="M10.23,200a88,88,0,0,1,147.54,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><path d="M172,160a87.93,87.93,0,0,1,73.77,40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><circle cx="84" cy="108" r="52" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle><path d="M152.69,59.7A52,52,0,1,1,172,160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>

const wsvg1 = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M40,192a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V88a8,8,0,0,0-8-8H56A16,16,0,0,1,40,64Z" opacity="0.2"></path><path d="M40,64V192a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V88a8,8,0,0,0-8-8H56A16,16,0,0,1,40,64h0A16,16,0,0,1,56,48H192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><circle cx="180" cy="140" r="12"></circle></svg>

const wsvg2 = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M88,216a24,24,0,0,0,24-24c0-10-8-16-8-16H216s8,6,8,16a24,24,0,0,1-24,24Z" opacity="0.2"></path><path d="M200,176V64a24,24,0,0,0-24-24H40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><line x1="104" y1="104" x2="168" y2="104" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><line x1="104" y1="136" x2="168" y2="136" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><path d="M24,80s-8-6-8-16a24,24,0,0,1,48,0V192a24,24,0,0,0,48,0c0-10-8-16-8-16H216s8,6,8,16a24,24,0,0,1-24,24H88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>

const wsvg3 = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,128h24a40,40,0,0,1,0,80H128Z" opacity="0.2"></path><path d="M128,48H112a40,40,0,0,0,0,80h16Z" opacity="0.2"></path><line x1="128" y1="24" x2="128" y2="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><line x1="128" y1="208" x2="128" y2="232" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><path d="M184,88a40,40,0,0,0-40-40H112a40,40,0,0,0,0,80h40a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>

export const Wudgetcard1 = [
    { id: 1, percent: "+0.5%", color1: "secondary", icon: "up", data: "15,877", total: "TOTAL EMPLOYEES", svgicon: wsvg, color: "primary" },
    { id: 2, percent: "+0.5%", color1: "secondary", icon: "up", data: "$88,784", total: "TOTAL PROFIT", svgicon: wsvg1, color: "primary1" },
    { id: 3, percent: "+0.5%", color1: "secondary", icon: "up", data: "$1,25,833", total: "TOTAL REVENUE", svgicon: wsvg2, color: "primary2" },
    { id: 4, percent: "+0.5%", color1: "secondary", icon: "up", data: "15,123", total: "TOTAL SALES", svgicon: wsvg3, color: "primary3" },
]

interface Revenue {
    id: number;
    color: string;
    revenue: string;
    color1: string;
    price: string;
    percent: string;
    icon: string;
    inc: string;
}
export const Revenuedata: Revenue[] = [
    { id: 1, color: "primary", revenue: "Today Revenue", color1: "success", price: "$789", percent: "0.5", icon: "up", inc: "Increased" },
    { id: 2, color: "primary1", revenue: "This Week Revenue", color1: "danger", price: "$1,887", percent: "2.8", icon: "down", inc: "Decreased" },
    { id: 3, color: "primary2", revenue: "This Month Revenue", color1: "success", price: "$55,666", percent: "0.5", icon: "up", inc: "Increased" },
    { id: 4, color: "primary3", revenue: "This Month Revenue", color1: "danger", price: "$3,41,173", percent: "1.2", icon: "down", inc: "Decreased" },
]

const Revenueseries = [
    {
        name: "This Week",
        data: [88, 42, 65, 44, 57, 35, 33],
    },
    {
        name: "Last Week",
        data: [-24, -38, -31, -57, -37, -22, -14],
    },
]
const Revenueoptions = ({ color }: any) => ({
    chart: {
        toolbar: {
            show: false,
        },
        type: "bar",
        width: 100,
        height: 100,
        stacked: true,
    },
    colors: Array.isArray(color) ? color : [color],
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "45%",
        },
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    grid: {
        borderColor: "rgba(0,0,0,0.1)",
        xaxis: {
            lines: {
                show: false
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        }
    },
    xaxis: {
        axisBorder: {
            show: false,
        },
        labels: {
            show: false,
        }
    },
    yaxis: {
        tickAmount: 4,
        labels: {
            show: false,
        },
    }
})

const Rsvg = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"></path></svg>

const Rsvg1 = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path></svg>

const Rsvg2 = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path></svg>

const Rsvg3 = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z"></path></svg>

export const Revenu1data = [
    { id: 1, color: "primary", svgIcon: Rsvg, total: "Total Sales", price: "87,472", icon: "up", percent: "2.0", inc: "Increased ", color1: "success", chartoptions: Revenueoptions({ color: ['rgb(158, 92, 247)', 'var(--primary-color)'] }), chartseries: Revenueseries, type: 'bar' },
    { id: 2, color: "primary1", svgIcon: Rsvg1, total: "Total Revenue", price: "$9,432", icon: "down", percent: "1.0", inc: "Decreased ", color1: "danger", chartoptions: Revenueoptions({ color: ["#AB54E3", "rgb(227, 84, 212)"] }), chartseries: Revenueseries, type: 'bar' },
    { id: 3, color: "primary2", svgIcon: Rsvg2, total: "Total Customers", price: "3,132", icon: "up", percent: "1.5", inc: "Increased ", color1: "success", chartoptions: Revenueoptions({ color: ["#FF6C5D", "rgb(255, 93, 159)"] }), chartseries: Revenueseries, type: 'bar' },
    { id: 4, color: "primary3", svgIcon: Rsvg3, total: "Total Profit", price: "$5,325", icon: "up", percent: "1.3", inc: "Increased ", color1: "success", chartoptions: Revenueoptions({ color: ["#FF663C", "rgb(255, 142, 111)"] }), chartseries: Revenueseries, type: 'bar' },
]

interface Recent {
    id: number;
    color: string;
    review: string;
    template: string;
    date: string;
}
export const Recentdata: Recent[] = [
    { id: 1, color: "primary", review: "Template Review", template: "<span class='fs-12 text-muted'>Reviewing the new template <a class='text-primary' href='#!'>HTML template</a></span>", date: "15 May 2024" },
    { id: 2, color: "primary1", review: "Update Documentation", template: "<span class='fs-12 text-muted'>Documentation is updated <a class='text-primary' href='#!'>Available here</a></span>", date: "18 Jun 2024" },
    { id: 3, color: "primary2", review: "Meeting for Managers", template: "<span class='fs-12 text-muted'>Meeting is going to be held on</span> <a class='text-secondary' href='#!'>Today Evening 5:30PM</a>", date: "05 Jul 2024" },
    { id: 4, color: "primary3", review: "Monitoring progress", template: "<span class='fs-12 text-muted'>Work Progess of each and every template is </span><a class='text-success' href='#!'>taken as consider</a>", date: "13 July 2024" },
    { id: 5, color: "secondary", review: "Quality Testing", template: "<span class='fs-12 text-muted'><a class='text-warning' href='#!'> Pending </a> Quality Aussrance</span>", date: "15 Aug 2024" },
    { id: 6, color: "success", review: "Remainder for submission", template: "<span class='fs-12 text-muted'>The deadline for template submission is </span> 10-08-2024", date: "21 Aug 2024" },
]

interface Budget {
    id: number;
    icon: string;
    color: string;
    total: string;
    avg: string;
    price: string;
}
export const Budgetdata: Budget[] = [
    { id: 1, icon: "hourglass", color: "primary1", total: "Total-Income", avg: "Average Income Per Hour", price: "$17.03" },
    { id: 2, icon: "clock", color: "primary2", total: "Total-Income", avg: "Average Income Per Hour", price: "$17.03" },
    { id: 3, icon: "bolt", color: "primary3", total: "Total-Income", avg: "Average Income Per Hour", price: "$77.93" },
    { id: 4, icon: "activity-heartbeat", color: "secondary", total: "Total-Income", avg: "Average Income Per Hour", price: "$970.63" },
]

const widgetseries = [{
    name: 'Value',
    data: [14, 20, 15, 25, 33, 58]
}]
const widgetoptions = ({ color }: any) => ({
    chart: {
        type: 'bar',
        height: 80,
        width: 100,
        sparkline: {
            enabled: true
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 3,
            bottom: -50,
            left: 0,
            blur: 3,
            color: 'var(--primary-color)',
            opacity: 0.3
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '45%',
            endingShape: 'rounded'
        },
    },
    grid: {
        show: false,
        xaxis: {
            lines: {
                show: false
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        },
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 1.9,
        dashArray: 3,
    },
    // yaxis: {
    //     min: 0,
    //     show: false
    // },
    xaxis: {
        show: false,
        axisTicks: {
            show: false
        },
        axisBorder: {
            show: false
        }
    },
    yaxis: {
        axisBorder: {
            show: false
        },
    },
    colors: [color],
})

export const widget3card = [
    { id: 1, chartoptions: widgetoptions({ color: 'var(--primary-color)' }), chartseries: widgetseries, icon: "bar-chart-box-line", color: "primary", total: "Total Sales", price: "42,312", icon1: "up", color1: "success", percent: "1.64", type: 'bar' },
    { id: 2, chartoptions: widgetoptions({ color: 'rgb(227, 84, 212)' }), chartseries: widgetseries, icon: "wallet-3-line", color: "primary1", total: "Total Revenue", price: "$78.7K", icon1: "down", color1: "danger", percent: "1.32", type: 'bar' },
    { id: 3, chartoptions: widgetoptions({ color: 'rgb(255, 93, 159)' }), chartseries: widgetseries, icon: "group-line", color: "primary2", total: "Total Users", price: "86,475", icon1: "down", color1: "danger", percent: "1.15", type: 'bar' },
    { id: 4, chartoptions: widgetoptions({ color: 'rgb(254, 124, 88)' }), chartseries: widgetseries, icon: "money-dollar-circle-line", color: "primary3", total: "Total Profit", price: "$18.4K", icon1: "up", color1: "success", percent: "2.05", type: 'bar' },
]

interface Transaction {
    id: number;
    icon: string;
    color: string;
    shop: string;
    date: string;
    percent: string;
    percolor: string;
    icon1: string;
}
export const Transactions: Transaction[] = [
    { id: 1, icon: "fe-shopping-bag", color: "primary", shop: "Shopping", date: "22 August 2024", percent: "0.27", percolor: "success", icon1: "up" },
    { id: 2, icon: "fe-shopping-bag", color: "primary1", shop: "Traveling", date: "05 September 2024", percent: "0.3", percolor: "danger", icon1: "down" },
    { id: 3, icon: "fe-shopping-bag", color: "primary2", shop: "Credit card Bill", date: "18 September 2024", percent: "1.2", percolor: "danger", icon1: "down" },
    { id: 4, icon: "fe-shopping-bag", color: "primary3", shop: "Shop Rent", date: "13 October 2024", percent: "1.7", percolor: "success", icon1: "up" },
]