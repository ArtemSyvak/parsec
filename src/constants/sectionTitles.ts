import { SECTION_NAMES } from '../enum'

type SectionTitle = {
    id: string,
    title: string,
    subtitle: string,
    index: string
}

type SectionTitles = {
    [key: string]: SectionTitle
}

const SECTION_TITLES: SectionTitles = {
    [SECTION_NAMES.SERVICES]: {
        id: 'services-title', title: 'Наші послуги', index: '01', subtitle: 'Services'
    },
    [SECTION_NAMES.CASES]: {
        id: 'cases-title', title: 'Наші роботи', index: '02', subtitle: 'Cases'
    },
    [SECTION_NAMES.CLIENTS]: {
        id: 'clients-title', title: 'Клієнти', index: '03', subtitle: 'Clients'
    },
    [SECTION_NAMES.FEEDBACKS]: {
        id: 'feedbacks-title', title: 'Відгуки', index: '04', subtitle: 'Reviews'
    },
    [SECTION_NAMES.TEAM]: {
        id: 'team-title', title: 'Команда', index: '05', subtitle: 'Team'
    },
    [SECTION_NAMES.CONTACT_US]: {
        id: 'contact-us-title', title: 'Contact Us', index: '06', subtitle: 'Collaborate'
    },
}

export { 
    SECTION_NAMES,
    SECTION_TITLES
}
