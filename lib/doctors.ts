export interface Doctor {
  id: number;
  name: string;
  slug: string;
  image: string;
  title: string;
  languages?: string[];
  specialties: string[];
  experience?: string;
  education?: { institution: string; degree: string; year?: string }[];
  bio: string;
  filterTags: string[];
}

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. C. Kingston",
    slug: "dr-c-kingston",
    image: "/images/Dr. C. Kingston.png",
    title: "Kingslyn Dental Care | Expert Cosmetic Dentistry",
    languages: ["Hindi", "English"],
    specialties: [
      "Restorative Dental Treatments",
      "Root Canal Therapy (Endodontics)",
      "Aesthetic Dental Treatments",
    ],
    experience: "17 years General Dentistry + 9 years Endodontics",
    education: [
      {
        institution: "Balaji Dental College and Hospital, Chennai",
        degree: "B.D.S",
        year: "2007",
      },
      {
        institution: "Rajas Dental College and Hospital, Tirunelveli",
        degree: "M.D.S",
        year: "2015",
      },
      {
        institution: "SRM University, Chennai",
        degree: "Ph.D (in progress)",
      },
    ],
    bio: "Introducing Dr. C. Kingston, Your Trusted Dental Care Partner at Kingslyn Dental Care! Dr. C. Kingston is a highly experienced and dedicated dental professional, committed to providing exceptional care to his patients. He obtained his Bachelor's in Dental Surgery (BDS) from Balaji Dental College and Hospital, Chennai, graduating in 2007. Following his passion for dentistry, he pursued further studies and completed his Master's in Dental Surgery (MDS) from Rajas Dental College and Hospital, Tirunelveli, in 2015. Currently, he is pursuing a PhD at SRM University, Chennai, to further enhance his expertise in the field. Dr. Kingston's motivation to start Kingslyn Dental Care was to offer quality dental services with a strong emphasis on proper sterilization of instruments, ensuring a safe and hygienic environment for all patients. He understands the importance of affordable dental care and strives to make his services accessible to all. With a remarkable 17 years of experience as a General Dentist and an additional 9 years specializing in Endodontics, Dr. Kingston has gained extensive knowledge and skills in various aspects of dentistry. His areas of expertise include restorative dentistry, esthetic dentistry, and endodontics. Dr. Kingston's passion lies in restoring smiles and enhancing the aesthetic appeal of his patients' teeth, while also ensuring their oral health and well-being. At Kingslyn Dental Care, Dr. Kingston and his team are dedicated to providing personalized and comprehensive dental care to each patient. Whether you require a routine check-up, a cosmetic procedure, or specialized treatment, Dr. Kingston is here to help you achieve a healthy and beautiful smile. Trust your dental health to Dr. C. Kingston at Kingslyn Dental Care, where your smile is our priority.",
    filterTags: ["Cosmetic", "General"],
  },
  {
    id: 2,
    name: "Dr. Janlyn Kingston",
    slug: "dr-janlyn-kingston",
    image: "/images/Dr. Janlyn Kingston.png",
    title: "Chief Dental Surgeon, BDS",
    specialties: [
      "Teeth Scaling and Polishing",
      "Tooth Removal (Extraction)",
      "Preventive Dental Care Services",
      "Aesthetic Dental Treatments",
      "Dental Prosthetics and Restorations",
    ],
    bio: "Introducing Dr. Janlyn Kingston, B.D.S Welcome to Kingslyn Dental Care, where your smile is our top priority! Meet our esteemed Chief Dental Surgeon, Dr. Janlyn Kingston, B.D.S. With a passion for excellence and a commitment to your oral health, Dr. Kingston leads our team with unparalleled expertise and dedication. Experience Matters: With years of experience in the field, Dr. Kingston brings a wealth of knowledge and skill to every patient interaction. Her commitment to staying abreast of the latest advancements in dentistry ensures that you receive the highest standard of care tailored to your unique needs. Patient-Centered Care: At Kingslyn Dental Care, we believe in treating each patient like family. Dr. Kingston's compassionate approach and gentle demeanor create a comfortable environment where you can feel at ease throughout your dental journey. Your comfort and satisfaction are paramount to us. Advanced Techniques: Dr. Kingston is dedicated to utilizing cutting-edge techniques and state-of-the-art technology to deliver exceptional results. From routine cleanings to complex procedures, you can trust in her expertise to provide comprehensive dental care that exceeds your expectations. Your Smile, Our Mission: A healthy, beautiful smile can transform your life, and Dr. Janlyn Kingston is here to make that transformation a reality. Whether you're seeking preventive care, cosmetic enhancements, or restorative treatments, she is committed to helping you achieve the smile of your dreams. Experience the difference of personalized care and professional excellence at Kingslyn Dental Care, where Dr. Janlyn Kingston and our team are dedicated to ensuring your oral health and happiness. Schedule your appointment today and embark on a journey to a brighter, healthier smile!",
    filterTags: ["General", "Cosmetic"],
  },
  {
    id: 3,
    name: "Dr. Anand Kasi",
    slug: "dr-anand-kasi",
    image: "/images/Dr Anand kasi.png",
    title: "Pedodontist (Pediatric Dentist)",
    specialties: ["Pediatric Dentistry Services"],
    bio: "Dr. Anand Kasi is a highly esteemed pedodontist practicing at Kingslyn Dental Care, a renowned dental clinic located in Tamil Nadu, India. With a passion for pediatric dentistry and a commitment to providing exceptional care to young patients, Dr. Kasi has established himself as a leading expert in his field. Education and Training: Dr. Anand Kasi completed his dental education at a prestigious institution, where he excelled academically and received specialized training in pedodontics. His dedication to continuing education ensures that he stays abreast of the latest advancements in pediatric dentistry, allowing him to provide his patients with the highest standard of care. Expertise and Specialization: As a pedodontist, Dr. Kasi specializes in the oral health care of children, including infants, toddlers, children, and adolescents. He is skilled in diagnosing and treating a wide range of dental issues specific to pediatric patients, such as tooth decay, developmental abnormalities, and dental injuries. Dr. Kasi is also experienced in providing preventive care, including dental cleanings, fluoride treatments, and sealants, to help children maintain healthy smiles. Commitment to Patient Care: Dr. Anand Kasi is known for his gentle and compassionate approach to pediatric dentistry. He understands the unique needs of young patients and strives to create a comfortable and welcoming environment for children and their parents. Dr. Kasi takes the time to educate his patients and their families about the importance of good oral hygiene habits and works collaboratively with them to develop personalized treatment plans that meet their specific needs. Advanced Technology and Techniques: Dr. Kasi is committed to using the latest technology and techniques in pediatric dentistry to ensure the best possible outcomes for his patients. From digital X-rays to laser dentistry, Dr. Kasi employs state-of-the-art tools and methods to provide safe, effective, and minimally invasive treatments for children. Community Involvement: Beyond his clinical practice, Dr. Anand Kasi is actively involved in community outreach programs aimed at promoting oral health education and awareness among children. He believes in the importance of instilling good oral hygiene habits early in life and is dedicated to making a positive impact on the oral health of children in his community. Dr. Anand Kasi is a dedicated pedodontist with a passion for providing exceptional dental care to children. His commitment to patient comfort, advanced technology, and community involvement sets him apart as a leader in pediatric dentistry. If you're looking for a compassionate and experienced pedodontist for your child, Dr. Kasi at Kingslyn Dental Care is an excellent choice.",
    filterTags: ["Pediatric"],
  },
  {
    id: 4,
    name: "Dr. Praveen",
    slug: "dr-praveen",
    image: "/images/Dr Praveen.png",
    title: "Orthodontist",
    specialties: ["Braces and Orthodontic Services"],
    bio: "In the heart of Kingslyn, Dr. Praveen stands out as a leading orthodontist dedicated to transforming smiles and improving oral health. With a passion for precision and a commitment to patient-centric care, Dr. Praveen combines advanced orthodontic techniques with a personalized approach to create stunning, lasting results. Introduction to Dr. Praveen and Kingslyn Dental Care Dr. Praveen is a highly skilled orthodontist with a deep-rooted belief in the power of a confident smile. As a key member of the Kingslyn Dental Care team, he is known for his compassionate care and exceptional treatment outcomes. Dr. Praveen takes pride in staying at the forefront of orthodontic innovation, ensuring that his patients receive the best possible care using the latest techniques and technologies. Expertise and Specializations Dr. Praveen specializes in a wide range of orthodontic treatments, including traditional braces, clear aligners, and more. He works closely with each patient to develop a personalized treatment plan tailored to their unique needs and goals. Whether it's correcting misaligned teeth, addressing bite issues, or enhancing overall dental aesthetics, Dr. Praveen's expertise shines through in every case. State-of-the-Art Facilities At Kingslyn Dental Care, patients can expect nothing but the best in terms of facilities and equipment. The clinic is equipped with state-of-the-art technology, allowing Dr. Praveen to deliver precise, efficient treatments with minimal discomfort. From digital impressions to 3D treatment planning, every aspect of care is designed to provide patients with a seamless experience and exceptional results. Patient-Centric Care What sets Dr. Praveen apart is his unwavering commitment to patient-centric care. He understands that every patient is unique, and takes the time to listen to their concerns, answer their questions, and involve them in every step of the treatment process. This personalized approach not only ensures better outcomes but also helps patients feel more comfortable and confident throughout their orthodontic journey. Positive Patient Experiences Dr. Praveen's dedication to excellence is reflected in the countless positive reviews and testimonials from his patients. Many have praised his gentle approach, attention to detail, and ability to achieve remarkable transformations. Whether it's children, teenagers, or adults seeking orthodontic treatment, Dr. Praveen has earned a reputation for delivering exceptional results and creating beautiful, healthy smiles that last a lifetime. Community Involvement and Outreach Beyond his clinical work, Dr. Praveen is actively involved in community outreach programs and initiatives aimed at promoting oral health and education. He believes in giving back to the community and is committed to making a positive impact on the lives of others through his work. Dr. Praveen is more than just an orthodontist - he is a dedicated healthcare professional who is passionate about helping his patients achieve their dream smiles. With his expertise, state-of-the-art facilities, and a patient-centric approach, Dr. Praveen and Kingslyn Dental Care are setting new standards in orthodontic care. If you're looking for top-quality orthodontic treatment in Kingslyn, look no further than Dr. Praveen and his team.",
    filterTags: ["Orthodontics"],
  },
  {
    id: 5,
    name: "Dr. Aravind V",
    slug: "dr-aravind-v",
    image: "/images/Dr Aravind.png",
    title: "Periodontist",
    specialties: ["Gum Disease Treatment (Periodontics)"],
    bio: "Dr. Aravind is a highly skilled and experienced periodontist at Kingslyn Dental Care, known for his exceptional care and expertise in treating gum diseases and other periodontal conditions. With a passion for delivering quality dental care, Dr. Aravind is dedicated to helping patients achieve optimal oral health and a beautiful smile. Education and Training: Dr. Aravind completed his dental education at a prestigious dental school, where he excelled in periodontics. He then pursued advanced training in periodontology, honing his skills in the diagnosis and treatment of gum diseases. Dr. Aravind stays abreast of the latest advancements in periodontal care through continuing education, ensuring that his patients receive the best possible treatment. Expertise and Specializations: As a periodontist, Dr. Aravind specializes in the prevention, diagnosis, and treatment of gum diseases such as gingivitis and periodontitis. He is also skilled in performing procedures to enhance the health and appearance of the gums, including gum grafting and crown lengthening. Dr. Aravind's expertise extends to dental implant placement, a procedure often required to replace missing teeth and restore oral function. Patient-Centered Care: Dr. Aravind believes in providing personalized care tailored to each patient's unique needs and goals. He takes the time to listen to his patients' concerns and educates them about their oral health, empowering them to make informed decisions about their dental care. Dr. Aravind's compassionate approach and gentle demeanor help patients feel at ease during their visits, fostering a positive dental experience. Advanced Technology and Techniques: Dr. Aravind utilizes state-of-the-art technology and techniques to deliver precise and effective periodontal care. From digital imaging to laser dentistry, he employs the latest tools to ensure optimal treatment outcomes and patient comfort. Dr. Aravind's commitment to staying abreast of advancements in his field reflects his dedication to providing his patients with the best possible care. Community Engagement and Recognition: Dr. Aravind is actively involved in the dental community, participating in seminars, conferences, and workshops to share his knowledge and expertise with fellow professionals. His contributions to the field of periodontology have earned him recognition as a leading periodontist in the area. Dr. Aravind's commitment to excellence, combined with his passion for periodontal care, makes him a trusted and respected practitioner at Kingslyn Dental Care. Patients can trust Dr. Aravind to provide them with the highest standard of care and achieve optimal oral health.",
    filterTags: ["Periodontics"],
  },
  {
    id: 6,
    name: "Dr. Sethuraman",
    slug: "dr-sethuraman",
    image: "/images/Dr. Sethuraman.png",
    title: "Prosthodontist & Implantologist",
    specialties: [
      "Dental Implant Solutions",
      "Advanced Prosthodontic Solutions",
    ],
    bio: "In the world of dentistry, few names resonate as strongly as Dr. Sethuraman R., a distinguished Prosthodontist and Implantologist at Kingslyn Dental Care. With a passion for precision and a commitment to excellence, Dr. Sethuraman has become a beacon of hope for patients seeking advanced dental solutions. His innovative approach, coupled with his extensive experience, has set new standards in the field, earning him a reputation as a leading expert in Prosthodontics and Implantology. Introduction to Dr. Sethuraman R. Dr. Sethuraman R. completed his Bachelor of Dental Surgery (BDS) from a prestigious institution, followed by a Master's degree in Prosthodontics. His relentless pursuit of knowledge led him to further specialize in Implantology, where he honed his skills under some of the most renowned mentors in the field. Today, with over a decade of experience, Dr. Sethuraman is regarded as a pioneer in the integration of cutting-edge technology and traditional dental techniques. A Visionary in Prosthodontics Prosthodontics is a specialized field of dentistry focused on the restoration and replacement of teeth. Dr. Sethuraman's approach to Prosthodontics goes beyond the conventional, as he combines artistry with science to create functional and aesthetically pleasing dental prostheses. His meticulous attention to detail ensures that each prosthesis is custom-crafted to fit the unique needs of every patient, restoring not just their smile but also their confidence. Pushing Boundaries in Implantology Implantology is a rapidly evolving field that involves the placement of dental implants to support dental prostheses. Dr. Sethuraman is at the forefront of this revolution, utilizing the latest advancements in implant technology to provide his patients with long-lasting and natural-looking results. His expertise in implant placement and restoration has helped countless individuals regain their ability to eat, speak, and smile with confidence. The Kingslyn Dental Care Experience At Kingslyn Dental Care, Dr. Sethuraman and his team offer a comprehensive range of dental services, from routine check-ups to complex restorative procedures. The clinic is equipped with state-of-the-art facilities, including digital imaging and 3D printing technology, allowing for precise diagnosis and treatment planning. Patients at Kingslyn Dental Care can expect personalized care in a warm and welcoming environment, ensuring a comfortable and stress-free experience. A Commitment to Excellence What sets Dr. Sethuraman apart is not just his technical expertise but also his compassionate approach to patient care. He takes the time to listen to his patients' concerns and works closely with them to develop personalized treatment plans that address their unique needs. His commitment to excellence is evident in every aspect of his practice, from the quality of care to the results he achieves. Dr. Sethuraman R. is more than just a Prosthodontist and Implantologist; he is a visionary who is redefining the standards of dental care. His passion for his work, coupled with his dedication to his patients, has made him a trusted name in the field of dentistry. If you are looking for world-class dental care that combines expertise with compassion, look no further than Dr. Sethuraman and Kingslyn Dental Care.",
    filterTags: ["Implants"],
  },
  {
    id: 7,
    name: "Dr. R. Snega Latha",
    slug: "dr-r-snega-latha",
    image: "/images/Dr. R. Snega Latha.png",
    title: "General Dentist, BDS",
    specialties: [
      "Tooth Removal (Extraction)",
      "Preventive Dental Care Services",
      "Teeth Scaling and Polishing",
    ],
    bio: "Dr. R. Snega Latha, BDS, is a dedicated and skilled dental professional practicing at Kingslyn Dental Care. With a commitment to excellence in patient care, Dr. Snega Latha offers a comprehensive range of dental services to address various oral health needs. Her compassionate approach and clinical expertise make her a trusted dentist among her patients. Education and Professional Background Dr. Snega Latha completed her Bachelor of Dental Surgery (BDS) from a reputable dental school, where she gained a solid foundation in dental science and patient care. She continues to stay updated with the latest advancements in dentistry through ongoing education and training, ensuring that her patients receive the best possible care using the most current techniques and technologies. Specialties and Services Dr. Snega Latha specializes in providing a wide range of dental services, including: General Dentistry: Dr. Snega Latha offers routine dental check-ups, cleanings, and preventive treatments to help patients maintain optimal oral health. Restorative Dentistry: Dr. Snega Latha offers restorative treatments like dental implants, crowns, and bridges to restore the function and appearance of damaged or missing teeth. Fillings: Dr. Snega Latha provides fillings for the treatment of cavities and tooth decay. Cleaning: Dr. Snega Latha offers professional dental cleaning services to remove plaque and tartar buildup. Extraction of Teeth: Dr. Snega Latha performs extractions for teeth that are severely decayed or damaged. Patient-Centered Care Dr. Snega Latha is known for her compassionate and patient-centered approach to dentistry. She takes the time to listen to her patient's concerns and educates them about their oral health, empowering them to make informed decisions about their dental care. Her gentle demeanor and caring attitude create a welcoming environment for patients of all ages. Commitment to Excellence Dr. Snega Latha is committed to providing the highest quality dental care to her patients. She strives for excellence in everything she does, from the initial consultation to the completion of treatment. Her attention to detail and commitment to patient satisfaction ensures that every patient receives personalized and effective dental care. Dr. R. Snega Latha, BDS, is a dedicated dental professional with a passion for providing exceptional dental care. Her commitment to excellence, compassionate approach, and comprehensive range of services make her a valuable asset to the dental team at Kingslyn Dental Care. Whether patients require routine dental maintenance or more complex treatment, they can trust Dr. Snega Latha to deliver outstanding care with a focus on their oral health and overall well-being.",
    filterTags: ["General"],
  },
];

export const services = [
  {
    id: 1,
    title: "Cosmetic Dentistry",
    icon: "CO",
    description: "Transform your smile with advanced cosmetic treatments including veneers, bonding, and teeth whitening.",
    doctors: ["dr-c-kingston", "dr-janlyn-kingston"],
    category: "Cosmetic",
  },
  {
    id: 2,
    title: "Root Canal Therapy",
    icon: "RC",
    description: "Expert endodontic treatment to save damaged teeth and eliminate pain with precision and care.",
    doctors: ["dr-c-kingston"],
    category: "Cosmetic",
  },
  {
    id: 3,
    title: "Orthodontics (Braces)",
    icon: "OR",
    description: "Straighten your teeth with traditional braces, clear aligners, and personalized 3D treatment plans.",
    doctors: ["dr-praveen"],
    category: "Orthodontics",
  },
  {
    id: 4,
    title: "Pediatric Dentistry",
    icon: "PD",
    description: "Gentle, child-friendly dental care for infants, toddlers, children, and adolescents.",
    doctors: ["dr-anand-kasi"],
    category: "Pediatric",
  },
  {
    id: 5,
    title: "Periodontics (Gum Treatment)",
    icon: "GU",
    description: "Comprehensive gum disease treatment including grafting, crown lengthening, and laser therapy.",
    doctors: ["dr-aravind-v"],
    category: "Periodontics",
  },
  {
    id: 6,
    title: "Dental Implants",
    icon: "IM",
    description: "Permanent tooth replacement with state-of-the-art implant technology for natural-looking results.",
    doctors: ["dr-sethuraman", "dr-aravind-v"],
    category: "Implants",
  },
  {
    id: 7,
    title: "Prosthodontics",
    icon: "PR",
    description: "Custom-crafted dental prostheses, crowns, bridges, and dentures using 3D printing technology.",
    doctors: ["dr-sethuraman", "dr-janlyn-kingston"],
    category: "Implants",
  },
  {
    id: 8,
    title: "Preventive Care & Scaling",
    icon: "PC",
    description: "Professional teeth cleaning, scaling, polishing, and preventive treatments for optimal oral health.",
    doctors: ["dr-janlyn-kingston", "dr-r-snega-latha"],
    category: "General",
  },
  {
    id: 9,
    title: "Tooth Extraction",
    icon: "EX",
    description: "Safe and comfortable tooth removal for severely decayed or damaged teeth by experienced professionals.",
    doctors: ["dr-janlyn-kingston", "dr-r-snega-latha"],
    category: "General",
  },
];

export const clinicInfo = {
  name: "Kingslyn Dental Care",
  phone: "+91 99766 58340",
  phoneLink: "tel:+919976658340",
  facebook: "https://www.facebook.com/share/1HJcck1h3L/",
  instagram: "https://www.instagram.com/kingstonchellapandian",
  tagline: "Your Smile, Our Priority",
  subTagline: "Trusted Dental Excellence in Tamil Nadu",
};

export const facilityImages = [
  { src: "/images/clinicouterlook.png", alt: "Clinic Exterior", caption: "Kingslyn Dental Care - Welcome" },
  { src: "/images/reception.png", alt: "Reception Area", caption: "Modern Reception - Warm Welcome" },
  { src: "/images/operatory1.png", alt: "Operatory Room 1", caption: "State-of-the-Art Operatory" },
  { src: "/images/operatory2.png", alt: "Operatory Room 2", caption: "Advanced Treatment Suite" },
  { src: "/images/dentalchair.png", alt: "Dental Chair", caption: "Comfortable Treatment Chair" },
  { src: "/images/sterilazationroom.png", alt: "Sterilization Room", caption: "Sterilization Room - Safety First" },
  { src: "/images/waitingarea.png", alt: "Waiting Area", caption: "Relaxing Waiting Lounge" },
];

export const filterCategories = [
  "All",
  "Cosmetic",
  "Orthodontics",
  "Pediatric",
  "Implants",
  "Periodontics",
  "General",
];
