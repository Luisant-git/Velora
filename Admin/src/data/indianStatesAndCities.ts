export interface State {
  name: string;
  code: string;
  stateCode: string;
  cities: string[];
}

export const indianStates: State[] = [
  {
    name: "Andhra Pradesh",
    code: "AP",
    stateCode: "28",
    cities: ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Rajahmundry", "Tirupati", "Kadapa", "Anantapur", "Eluru"]
  },
  {
    name: "Gujarat",
    code: "GJ",
    stateCode: "24",
    cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Junagadh", "Gandhinagar", "Anand", "Navsari"]
  },
  {
    name: "Karnataka",
    code: "KA",
    stateCode: "29",
    cities: ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum", "Gulbarga", "Davanagere", "Bellary", "Bijapur", "Shimoga"]
  },
  {
    name: "Maharashtra",
    code: "MH",
    stateCode: "27",
    cities: ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad", "Solapur", "Amravati", "Kolhapur", "Sangli"]
  },
  {
    name: "Tamil Nadu",
    code: "TN",
    stateCode: "33",
    cities: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Tiruppur", "Vellore", "Erode", "Thoothukkudi"]
  },
  {
    name: "Uttar Pradesh",
    code: "UP",
    stateCode: "09",
    cities: ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi", "Meerut", "Allahabad", "Bareilly", "Aligarh", "Moradabad"]
  },
  {
    name: "West Bengal",
    code: "WB",
    stateCode: "19",
    cities: ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri", "Malda", "Bardhaman", "Baharampur", "Habra", "Kharagpur"]
  },
  {
    name: "Delhi",
    code: "DL",
    stateCode: "07",
    cities: ["New Delhi", "Delhi", "North Delhi", "South Delhi", "East Delhi", "West Delhi", "Central Delhi"]
  },
  {
    name: "Rajasthan",
    code: "RJ",
    stateCode: "08",
    cities: ["Jaipur", "Jodhpur", "Kota", "Bikaner", "Ajmer", "Udaipur", "Bhilwara", "Alwar", "Bharatpur", "Sikar"]
  },
  {
    name: "Punjab",
    code: "PB",
    stateCode: "03",
    cities: ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Mohali", "Firozpur", "Batala", "Pathankot", "Moga"]
  }
];