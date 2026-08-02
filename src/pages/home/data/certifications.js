import MSME from '../assets/logo/msme-registered-certification-logo.webp'
import GST from '../assets/logo/gst-registered-government-of-india-log.webp'
import BAI from '../assets/logo/bai-member-builders-association-of-india-logo.webp'

const certifications = [
    {
        id: 1,
        name: "MSME Registered",
        type: "Micro, Small & Medium Enterprises",
        altText: 'MSME Registered - Micro, Small & Medium Enterprises Certification for VIP Construction',
        logo: MSME,
    },
    {
        id: 2,
        name: "Builders' Association of India",
        type: "",
        altText: "BAI Member - Builders' Association of India (Established 1941)",
        logo: BAI,
    },
    {
        id: 3,
        name: "GST Registered",
        type: "Goods & Services Tax",
        altText: 'GST Registered - Government of India Goods and Services Tax (GST) Registered',
        logo: GST,
    },
];


export default certifications;