import logo1 from "../../../../../assets/images/company-logos/1.png"
import logo2 from "../../../../../assets/images/company-logos/2.png"
import logo3 from "../../../../../assets/images/company-logos/3.png"
import logo7 from "../../../../../assets/images/company-logos/7.png"
import logo5 from "../../../../../assets/images/company-logos/5.png"
import logo6 from "../../../../../assets/images/company-logos/6.png"
import logo10 from "../../../../../assets/images/company-logos/10.png"
import logo9 from "../../../../../assets/images/company-logos/9.png"

interface SelectType {
  value: string;
  label: string;
}
export const Data: SelectType[] = [
  { value: 'All Categories', label: 'All Categories' },
  { value: 'Software Dveloper', label: 'Software Dveloper' },
  { value: 'Web Developer', label: 'Web Developer' },
  { value: 'Software Architect', label: 'Software Architect' },
  { value: 'IT Hardware', label: 'IT Hardware' },
  { value: 'Network Engineer', label: 'Network Engineer' },
  { value: 'React Developer', label: 'React Developer' },
];

interface JobType {
  id: number;
  logo: string;
  name: string;
  location: string;
  establishmentYear: number;
  ratingCount: number;
  employees: number;
  vacancies: number;
  ratings?: any
  viewLink: string;
  ratingLink: string;
  iconLink: string;
  link: string;
  spanLink: string;
}
export const jobData: JobType[] = [
  {
    id: 1,
    logo: logo1,
    name: "TechGurus Ltd.",
    location: "Los Angeles, CA",
    establishmentYear: 2015,
    ratingCount: 245,
    employees: 345,
    vacancies: 50,
    ratings: (
      <>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-half"></i></span>
      </>
    ),
    viewLink: "#!",
    ratingLink: "#!",
    iconLink: "#!",
    link: "#!",
    spanLink: "#!",
  },
  {
    id: 2,
    logo: logo2,
    name: "XYZ Solutions Ltd.",
    location: "New York, NY",
    establishmentYear: 2010,
    ratingCount: 318,
    employees: 146,
    vacancies: 40,
    ratings: (
      <>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-half"></i></span>
      </>
    ),
    viewLink: "#!",
    ratingLink: "#!",
    iconLink: "#!",
    link: "#!",
    spanLink: "#!",
  },
  {
    id: 3,
    logo: logo3,
    name: "Innovate Labs Inc.",
    location: "San Francisco, CA",
    establishmentYear: 2013,
    ratingCount: 198,
    employees: 56,
    vacancies: 35,
    ratings: (
      <>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-half"></i></span>
      </>
    ),
    viewLink: "#!",
    ratingLink: "#!",
    iconLink: "#!",
    link: "#!",
    spanLink: "#!",
  },
  {
    id: 4,
    logo: logo7,
    name: "GlobalTech Innovations",
    location: "London, UK",
    establishmentYear: 2011,
    ratingCount: 367,
    employees: 120,
    vacancies: 10,
    ratings: (
      <>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-half"></i></span>
      </>
    ),
    viewLink: "#!",
    ratingLink: "#!",
    iconLink: "#!",
    link: "#!",
    spanLink: "#!",
  },
  {
    id: 5,
    name: "Innovision Software Solutions",
    logo: logo5,
    location: "Sydney, Australia",
    establishmentYear: 2005,
    employees: 120,
    vacancies: 10,
    ratingCount: 276,
    ratings: (
      <>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-half"></i></span>
      </>
    ),
    viewLink: "#!",
    ratingLink: "#!",
    iconLink: "#!",
    link: "#!",
    spanLink: "#!",
  },
  {
    id: 6,
    name: "Digital Nexus Solutions",
    logo: logo6,
    location: "Chicago, IL",
    establishmentYear: 2012,
    employees: 120,
    vacancies: 10,
    ratingCount: 389,
    ratings: (
      <>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-half"></i></span>
      </>
    ),
    viewLink: "#!",
    ratingLink: "#!",
    iconLink: "#!",
    link: "#!",
    spanLink: "#!",
  },
  {
    id: 7,
    name: "Innovate IT Solutions",
    logo: logo10,
    location: "Mumbai, India",
    establishmentYear: 2009,
    employees: 345,
    vacancies: 50,
    ratingCount: 312,
    ratings: (
      <>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-half"></i></span>
      </>
    ),
    viewLink: "#!",
    ratingLink: "#!",
    iconLink: "#!",
    link: "#!",
    spanLink: "#!",
  },
  {
    id: 8,
    name: "CloudSoft Technologies",
    logo: logo9,
    location: "Seattle, WA",
    establishmentYear: 2014,
    employees: 146,
    vacancies: 40,
    ratingCount: 424,
    ratings: (
      <>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-fill"></i></span>
        <span className="text-warning"><i className="bi bi-star-half"></i></span>
      </>
    ),
    viewLink: "#!",
    ratingLink: "#!",
    iconLink: "#!",
    link: "#!",
    spanLink: "#!",
  },
];
