import SpkJobdetails from "../../../../../@spk-reusable-components/reusable-apps/spk-jobdetails";
import job2 from "../../../../../assets/images/media/jobs/2.png"
const jobData = [
  {
    title: "Frontend Developer",
    company: "InnovateZ Solutions",
    location: "San Francisco, CA",
    experience: "2+ Yrs Exp.",
    salary: "$50k - $80k",
    Imagetag: true,
    image: job2,
    icon: "",
    color: "",
  },
  {
    title: "Backend Developer",
    company: "Tech Solutions Inc.",
    location: "New York, NY",
    experience: "3+ Yrs Exp.",
    salary: "$60k - $90k",
    image: "",
    icon: "bi bi-laptop",
    color: "danger",
    Imagetag: false
  },
  {
    title: "UI/UX Designer",
    company: "Creative Designs Co.",
    location: "Seattle, WA",
    experience: "3+ Yrs Exp.",
    salary: "$70k - $100k",
    image: "",
    icon: "bi bi-laptop",
    color: "warning",
    Imagetag: false
  },
  {
    title: "Full Stack Developer",
    company: "TechGurus Ltd.",
    location: "Los Angeles, CA",
    experience: "5+ Yrs Exp.",
    salary: "$80k - $120k",
    image: "",
    icon: "bi bi-laptop",
    color: "info",
    Imagetag: false
  },
];

export const JobsSwiper = jobData.map((job, index) => (
  <div key={index}>
    <SpkJobdetails
      cardClass="custom-card featured-jobs shadow-none border"
      mainClass="d-flex mb-3 gap-2 flex-xxl-nowrap"
      image={job.image}
      Imagetag={job.Imagetag}
      title={job.title}
      company={job.company}
      location={job.location}
      experience={job.experience}
      salary={job.salary}
      color={job.color}
      icon={job.icon}
    />
  </div>
));
