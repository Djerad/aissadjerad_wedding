// Central configuration for the wedding invitation.
// Update the values below to personalize the entire site — no need to
// touch any component.

export const weddingConfig = {
  groomName: "عيسى جرّاد",
  groomInitial: "ع",

  openingBlessing: "بسم الله الرحمن الرحيم",
  invitationMessage:
    "بكل حب وفرح، يسعدنا دعوتكم لمشاركتنا فرحتنا بمناسبة زفافنا، والتشرّف بحضوركم معنا على مائدة الغداء احتفاءً بهذه المناسبة السعيدة.\n\nوجودكم بيننا يكمّل فرحتنا، ويجعل هذا اليوم أكثر جمالًا وبهجة.\nنسعد بحضوركم ومشاركتكم لنا هذه اللحظات الجميلة.",

  // ISO date string used to drive the live countdown. Change this only.
  weddingDateISO: "2026-09-25T11:00:00",
  weddingDateDisplay: "25 سبتمبر 2026",
  weddingTimeDisplay: "ابتداءً من الساعة 11:00 صباحًا",

  venueName: "قاعة حفلات شهرزاد",
  coordinates: { lat: 35.689454, lng: 4.5363931 },
  googleMapsUrl:
    "https://www.google.com/maps/place/Salle+Des+F%C3%AAtes+Chahrazed+%D9%82%D8%A7%D8%B9%D8%A9+%D8%AD%D9%81%D9%84%D8%A7%D8%AA+%D8%B4%D9%87%D8%B1%D8%B2%D8%A7%D8%AF%E2%80%AD/@35.6911451,4.5400883,15.03z/data=!4m12!1m5!3m4!2zMzXCsDQxJzEyLjMiTiA0wrAzMic1NS4yIkU!8m2!3d35.6867531!4d4.548659!3m5!1s0x128b7b397edb6487:0x4dc9026a2df22a35!8m2!3d35.689454!4d4.5363931!16s%2Fg%2F11fsm_bjm_?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D",

  coverPhoto: "/images/cover-placeholder.jpg",

  finalMessageTitle: "وجودكم معنا\nيزيد فرحتنا جمالاً 🤍",
  finalMessageSubtitle: "نتشرف بمشاركتكم أجمل لحظاتنا",
} as const;

export type WeddingConfig = typeof weddingConfig;
