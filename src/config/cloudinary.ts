// Cloudinary configuration
// You can use either:
// 1. Full URL: 'https://res.cloudinary.com/your-cloud/video/upload/v1234567/video.mp4'
// 2. Public ID: 'video' (will build URL automatically)

// Your Cloudinary cloud name (find it in your Cloudinary dashboard)
const CLOUDINARY_CLOUD_NAME = 'dmvvi2rjh';

// Helper function to build Cloudinary URL from public ID
const buildCloudinaryUrl = (publicId: string, resourceType: 'video' | 'raw' | 'image' = 'raw'): string => {
  // If it's already a full URL, return it
  if (publicId.startsWith('http://') || publicId.startsWith('https://')) {
    return publicId;
  }
  
  // Build URL from public ID
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/${resourceType}/upload/${publicId}`;
};

export const cloudinaryConfig = {
  // Video assets - use full URL or public ID
  videos: {
    heroVideo: 'YOUR_HERO_VIDEO_PUBLIC_ID', // 01.Kompleksi-Parku-Animacion.mp4 - Please add this if you have it
    projectVideo: 'VIDEO-2025-09-18-22-14-06_g2rtrl', // VIDEO-2025-09-18-22-14-06.mp4
  },
  
  // PDF assets - use full URL or public ID
  pdfs: {
    'Alori Reklama.pdf': 'Alori_Reklama_xjt7z9',
    'AXHUSTATOR ENISI.pdf': 'AXHUSTATOR_ENISI_tl3uoa',
    'E-BAAU.pdf': 'E-BAAU_aq24cc',
    'ELONI COMMERCE.pdf': 'ELONI_COMMERCE_vozz2y',
    'EP GJEOMETRI.pdf': 'EP_GJEOMETRI_shfaxw',
    'GAZI LED.pdf': 'GAZI_LED_ohqib6',
    'RELUX.pdf': 'RELUX_xgyzng',
    'STATIKA.pdf': 'STATIKA_bobkv6',
  },
  
  // Image assets (for future use in Projects, etc.)
  images: {
    'LLOGO.png': 'LLOGO_mwkiom',
    'RINA1.jpg': 'RINA1_z48ehl',
    'RINA2.jpg': 'RINA2_dbnoep',
    'RINA3.jpg': 'RINA3_fl0uy1',
    'RINA4.jpg': 'RINA4_zd6bdl',
    'RINA5.jpg': 'RINA5_dlmiaf',
    'RINA6.jpg': 'RINA6_ben9uv',
    'RINA7.jpg': 'RINA7_y2lfgi',
    'RINA8.jpg': 'RINA8_w7dkbj',
    'RINA11.jpg': 'RINA11_st6i8x',
    'NDERTESA ANASH1.jpg': 'NDERTESA_ANASH1_vhjdlb',
    'ndertesa21.jpg': 'ndertesa21_v8v8j7',
    'ndertesa22.jpg': 'ndertesa22_v3r042',
    'ndertesa23.jpg': 'ndertesa23_mipd4l',
    'ndertesa24.jpg': 'ndertesa24_inv7zd',
    'ndertesa25.jpg': 'ndertesa25_wve3n9',
    'ndertesa26.jpg': 'ndertesa26_xknznz',
    'ndertesa27.jpg': 'ndertesa27_yycr4f',
    'ndertesa28.jpg': 'ndertesa28_xzbraw',
    'ndertesa29.jpg': 'ndertesa29_tz8lvo',
    'ndertesa30.jpg': 'ndertesa30_p0crri',
    'ndertesa31.jpg': 'ndertesa31_uavv5w',
    'ndertesa32.jpg': 'ndertesa32_viusgv',
    'ndertesa35.jpg': 'ndertesa35_mhyait',
    'ndertesa36.jpg': 'ndertesa36_golmai',
    'ndertesa38.jpg': 'ndertesa38_l7hts4',
    'ND.2.jpg': 'ND.2_ld3tza',
    'ND.3.jpg': 'ND.3_uz8i4e',
    'ND.4.jpg': 'ND.4_vvdlty',
    'ND.5.jpg': 'ND.5_ikojcw',
    'ND.6.jpg': 'ND.6_mex9xf',
    'ND.7.jpg': 'ND.7_dtt1is',
    'ND.9.jpg': 'ND.9_pwrqde',
    'ND.10.jpg': 'ND.10_pfl09d',
    'ND.11.jpg': 'ND.11_hscypv',
    'ND.12.jpg': 'ND.12_podob3',
    'ND.13.jpg': 'ND.13_d2sihc',
    'ND.14.jpg': 'ND.14_j0dqia',
    'ND.15.jpg': 'ND.15_gwy90m',
    'ND.17.jpg': 'ND.17_p30v8u',
    'ND.18.jpg': 'ND.18_ya9yes',
    'ND.19.jpg': 'ND.19_o9ckl5',
    'ND.20.jpg': 'ND.20_fyuqdg',
    'NDD.8.jpg': 'NDD.8_vxhklc',
    'Facetune_23-09-2025-17-52-45.jpeg': 'Facetune_23-09-2025-17-52-45_vato1t',
  },
};

// Helper function to get Cloudinary URL for videos
export const getCloudinaryVideoUrl = (key: keyof typeof cloudinaryConfig.videos): string => {
  const value = cloudinaryConfig.videos[key];
  return buildCloudinaryUrl(value, 'video');
};

// Helper function to get Cloudinary URL for PDFs
export const getCloudinaryPdfUrl = (filename: string): string => {
  const value = cloudinaryConfig.pdfs[filename as keyof typeof cloudinaryConfig.pdfs];
  return buildCloudinaryUrl(value || '', 'raw');
};

// Helper function to get Cloudinary URL for images
export const getCloudinaryImageUrl = (filename: string): string => {
  const value = cloudinaryConfig.images[filename as keyof typeof cloudinaryConfig.images];
  return buildCloudinaryUrl(value || '', 'image');
};

