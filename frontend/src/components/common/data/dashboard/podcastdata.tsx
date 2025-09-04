import podcast6 from "../../../../assets/images/podcast/6.jpg"
import podcast7 from "../../../../assets/images/podcast/7.jpg"
import podcast8 from "../../../../assets/images/podcast/8.jpg"
import podcast9 from "../../../../assets/images/podcast/9.jpg"
import podcast1 from "../../../../assets/images/podcast/1.jpg"
import podcast2 from "../../../../assets/images/podcast/2.jpg"
import podcast3 from "../../../../assets/images/podcast/3.jpg"
import podcast4 from "../../../../assets/images/podcast/4.jpg"

import media60 from "../../../../assets/images/media/media-60.jpg"

interface Recently {
    id: number;
    src: string;
    podcast: string;
    name: string;
    duration: string;
    latest: string;
    avg: string;
    favourite: string;
    color1: string;
    category: string;
    color: string;
}
export const Recentlydata: Recently[] = [
    { id: 1, src: podcast6, podcast: "Whimsical Wonders", name: "Emily Watson", duration: "150s", latest: "#156: Silly Stories", avg: "45 mins", favourite: "Added", color1: "danger", category: "Comedy", color: "secondary" },
    { id: 2, src: podcast7, podcast: "Mindful Meditations", name: "Sarah Johnson", duration: "1 min", latest: "#82: Deep Nonsense", avg: "30 mins", favourite: "Add Now", color1: "muted op-2", category: "Culture", color: "success" },
    { id: 3, src: podcast8, podcast: "Deep Dive Dialogues", name: "John Doe", duration: "2 min", latest: "#30: Life's Random Moments", avg: "60 mins", favourite: "Added", color1: "danger", category: "Personal Journal", color: "info" },
    { id: 4, src: podcast9, podcast: "Random Revelations", name: "Sophia Brown", duration: "3 min", latest: "#300: Current Affairs", avg: "20 mins", favourite: "Add Now", color1: "muted op-2", category: "News and Politics", color: "warning" },
    { id: 5, src: media60, podcast: "Bite-sized Banter", name: "Michael Smith", duration: "4 min", latest: "#45: Culinary Capers", avg: "50 mins", favourite: "Added", color1: "danger", category: "Food and Drink", color: "primary" },
]

export const Categoriesdata = [
    { id: 1, icon: "macbook-line", color: "primary", data: "Technology", data1: "250" },
    { id: 2, icon: "briefcase-2-line", color: "primary1", data: "Business", data1: "236" },
    { id: 3, icon: "heart-pulse-line", color: "primary2", data: "Health", data1: "236" },
    { id: 4, icon: "football-line", color: "primary3", data: "Sports", data1: "236" },
    { id: 5, icon: "flask-line", color: "secondary", data: "Science", data1: "236" },
    { id: 6, icon: "book-line", color: "warning", data: "Education", data1: "236" },
    { id: 7, icon: "disc-line", color: "info", data: "Music", data1: "236" },
    { id: 8, icon: "tv-line", color: "danger", data: "Entertainment", data1: "236" },
]

export const Podcastsdata = [
    {
        title: "Foodie Adventures",
        author: "By Chef Mia Johnson",
        image: podcast6,
        listeners: "75.3k",
    },
    {
        title: "Environmental Insights",
        author: "By Dr. David Green",
        image: podcast7,
        listeners: "75.3k",
    },
    {
        title: "Travel Tales",
        author: "By Wanderlost Explorers",
        image: podcast7,
        listeners: "75.3k",
    },
];

export const Podcastsdata1 = [
    {
        title: "True Crime Files",
        author: "By Detective John Smith",
        image: podcast9,
        listeners: "75.3k",
    },
    {
        title: "Science Explained",
        author: "Dr. Michael Lee",
        image: podcast8,
        listeners: "75.3k",
    },
    {
        title: "Business Buzz",
        author: "By Emily Davis",
        image: podcast8,
        listeners: "75.3k",
    },
];

export const Podcastcard = [
    {
        title: "Technos Talk",
        host: "John Samitrin",
        image: podcast1,
    },
    {
        title: "Science Explorers",
        host: "Emily Johnson",
        image: podcast2,
    },
    {
        title: "Business Insights",
        host: "David Williams",
        image: podcast3,
    },
    {
        title: "Entertainment",
        host: "Michael Brown",
        image: podcast4,
    },
];