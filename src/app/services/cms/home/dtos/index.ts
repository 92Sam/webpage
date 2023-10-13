export interface Root {
    company_details: CompanyDetails
    home: Home
    experience: Experience
    services: Services
    about_us: AboutUs
    portfolio: Portfolio
    teams: Teams
    contacts: Contacts
  }
  
  export interface CompanyDetails {
    name: string
    description: string
  }
  
  export interface Home {
    title: string
    paper: string
  }
  
  export interface Experience {
    title: string
    paper: string
  }
  
  export interface Services {
    title: string
    description: string
    list: string[]
  }
  
  export interface AboutUs {
    title: string
    description: string
    list: string[]
  }
  
  export interface Portfolio {
    projects: any[]
    clients: any[]
  }
  
  export interface Teams {
    staff: Staff[]
  }
  
  export interface Staff {
    name: string
    last_name: string
    about_me: string
    position: string
    skills: any[]
    social_media: any[]
  }
  
  export interface Contacts {
    catalog: Catalog[]
    address: Address[]
    social_media: SocialMedum[]
  }
  
  export interface Catalog {
    key: string
    value: string
    data: Data
  }
  
  export interface Data {}
  
  export interface Address {
    lat: string
    long: string
    link: string
    zipcode: string
    country_iso_code: string
    address: string
    phone_number: string
    email: string
  }
  
  export interface SocialMedum {
    type: string
    user: string
    link: string
  }
  