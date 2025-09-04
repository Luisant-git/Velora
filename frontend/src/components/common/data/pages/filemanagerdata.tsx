

//File-Manager

export const Fileseries = [38, 36, 27, 32]
export const Fileoptions = {
    chart: {
        height: 164,
        type: 'donut',
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
        colors: ["#fff"],
        width: 0,
        dashArray: 0,
    },
    labels: ["Media", "Downloads", "Apps", "Documents"],
    plotOptions: {
        pie: {
            startAngle: -90,
            endAngle: 90,
            offsetY: 10,
            expandOnClick: false,
            donut: {
                size: '75%',
                background: 'transparent',
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '20px',
                        color: '#495057',
                        offsetY: -3,
                    },
                    value: {
                        show: true,
                        fontSize: '28px',
                        fontWeight: 600,
                        color: undefined,
                        offsetY: -40,
                        formatter: function (val: string) {
                            return val + "%"
                        },
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        label: 'Used of 720 GB',
                        fontSize: '12px',
                        fontWeight: 400,
                    }

                }
            }
        }
    },
    grid: {
        padding: {
            bottom: -100
        }
    },
    colors: ["var(--primary-color)", "rgba(227, 84, 212, 1)", "rgba(255, 93, 159, 1)", "rgba(255, 142, 88, 1)"],

}

const svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M112,175.67V168a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8h56a8,8,0,0,0,8-8v-8.82L144,216V160Z" opacity="0.2"></path><polyline points="112 175.67 144 160 144 216 112 199.18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline><rect x="40" y="160" width="72" height="56" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></rect><polygon points="152 32 152 88 208 88 152 32" opacity="0.2"></polygon><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline><path d="M176,224h24a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>

const svg1 = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M112,175.67V168a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8h56a8,8,0,0,0,8-8v-8.82L144,216V160Z" opacity="0.2"></path><polyline points="112 175.67 144 160 144 216 112 199.18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline><rect x="40" y="160" width="72" height="56" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></rect><polygon points="152 32 152 88 208 88 152 32" opacity="0.2"></polygon><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline><path d="M176,224h24a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>

const svg2 = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M168,192h16a20,20,0,0,0,0-40H168v56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><line x1="128" y1="152" x2="128" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><polyline points="56 152 88 152 56 208 88 208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline><polygon points="152 32 152 88 208 88 152 32" opacity="0.2"></polygon><path d="M48,112V40a8,8,0,0,1,8-8h96l56,56v24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline></svg>

const svg3 = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polygon points="48 200 48 160 72 160 96 136 96 224 72 200 48 200" opacity="0.2"></polygon><polygon points="48 200 48 160 72 160 96 136 96 224 72 200 48 200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polygon><path d="M128,152a32.5,32.5,0,0,1,0,56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><polygon points="152 32 152 88 208 88 152 32" opacity="0.2"></polygon><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline><path d="M168,224h32a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>

const svg4 = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polygon points="152 32 152 88 208 88 152 32" opacity="0.2"></polygon><path d="M48,112V40a8,8,0,0,1,8-8h96l56,56v24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline><polyline points="216 152 184 152 184 208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline><line x1="208" y1="184" x2="184" y2="184" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><path d="M48,192H64a20,20,0,0,0,0-40H48v56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><path d="M112,152v56h16a28,28,0,0,0,0-56Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>

export const Filesdata = [
    {
        id: 1,
        name: "VIDEO_88745_KKI451.mp4",
        type: "Videos",
        size: "89MB",
        date: "15, Aug 2024",
        mainClass: "",
        iconClass: "primary",
        path: svg,
    },
    {
        id: 2,
        name: "VID-14211110-AKP823.mp4",
        type: "Videos",
        size: "12MB",
        date: "18, May 2024",
        mainClass: "",
        iconClass: "primary1",
        path: svg1,

    },
    {
        id: 3,
        name: "AC-20241.zip",
        type: "Archives",
        size: "564KB",
        date: "06, Mar 2024",
        mainClass: "table-active",
        iconClass: "primary2",
        path: svg2,
    },
    {
        id: 4,
        name: "AUD__145_24152.mp3",
        type: "Archives",
        size: "264KB",
        date: "26, Apr 2024",
        mainClass: "",
        iconClass: "primary3",
        path: svg3,
    },
    {
        id: 5,
        name: "Document-file.pdf",
        type: "Documents",
        size: "2.6MB",
        mainClass: "",
        date: "07, Feb 2024",
        iconClass: "secondary",
        path: svg4,
    },
];

export const Folderdata = [
    { id: 1, text1: 'Images', text2: '345 Files', text3: '124.16MB' },
    { id: 2, text1: 'Docs', text2: '45 Files', text3: '451.15KB' },
    { id: 3, text1: 'Downloads', text2: '568 Files', text3: '1.45GB' },
    { id: 4, text1: 'Apps', text2: '247 Files', text3: '15.88GB' },
];

export const Accessdata = [
    { id: 1, title: 'Images', percentage: '17% Used', storage: '26.14GB', files: "245 files", icon: 'photo', color: 'primary' },
    { id: 2, title: 'Videos', percentage: '22% Used', storage: '24.32GB', files: "224 files", icon: 'video', color: 'primary1' },
    { id: 3, title: 'Audio', percentage: '24% Used', storage: '29.45GB', files: "1354 files", icon: 'headphones', color: 'primary2' },
    { id: 4, title: 'Apps', percentage: '46% Used', storage: '54.14GB', files: "18 files", icon: 'layout-grid', color: 'primary3' },
    { id: 5, title: 'Docs', percentage: '18% Used', storage: '8.42GB', files: "102 files", icon: 'file-description', color: 'info' },
    { id: 6, title: 'Downloads', percentage: '16% Used', storage: '6.36GB', files: "16 files", icon: 'download', color: 'secondary' }
]
interface files {
    id: number;
    icon: string;
    text1: string;
    text2: string;
    class: string;
    class1: string;
}
export const Filesloopdata: files[] = [
    { id: 1, icon: 'folder-2-line', text1: 'All Files', text2: '412', class: 'badge bg-primary', class1: 'active files-type' },
    { id: 2, icon: 'history-fill', text1: 'Recent Files', text2: '', class: '', class1: 'files-type' },
    { id: 3, icon: 'share-forward-line', text1: 'Shared Files', text2: '', class: '', class1: 'files-type' },
    { id: 4, icon: 'star-s-line', text1: '  favourites', text2: '02', class: 'badge bg-primary1', class1: 'files-type' },
    { id: 5, icon: 'delete-bin-line', text1: ' Recycle Bin', text2: '', class: '', class1: 'files-type' },
    { id: 6, icon: 'settings-3-line', text1: 'Settings', text2: '', class: '', class1: '' },
    { id: 7, icon: 'questionnaire-line', text1: 'Help Center', text2: '', class: '', class1: '' },
    { id: 8, icon: 'folder-line', text1: 'Version', text2: '', class: '', class1: '' },
    { id: 9, icon: 'logout-box-line', text1: 'Log out', text2: '', class: '', class1: '' }
]