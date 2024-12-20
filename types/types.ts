import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";
interface SubMenuItem {
  title: string;
  link: string;
}

interface MegaMenuItem {
  title: string;
  link: string;
  hasDropdown?: boolean;
  submenus?: SubMenuItem[];
}

interface MenuItem {
  id: number;
  hasDropdown?: boolean;
  active?: boolean;
  title: string;
  pluseIncon?: boolean;
  link: string;
  submenus?: SubMenuItem[];
  megaMenu?: boolean;
  pages?: boolean;
  mega_menus?: MegaMenuItem[];
}
// context api data type
export interface AppContextType {
  sideMenuOpen?: boolean;
  toggleSideMenu?: () => void;
  headerSearchOpen?: boolean;
  toggleHeaderSearch?: () => void;
  scrollDirection?: string;
  setScrollDirection?: React.Dispatch<React.SetStateAction<string>> | undefined;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  filterType: string;
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
}

export type categoryType = {
  id: number;
  image: string;
  title: string;
  desc: string;
};

// courses-type
export interface coursesType {
  modules: string[];
  tutorImg: string | StaticImport;
  author: string;
  desc: string;
  oldPrice: number;
  id: number;
  title: string;
  description: string;
  instructor: string;
  rating: number;
  reviews: number;
  students: number;
  price: number;
  image: string;
  category: string;
  lastUpdated: string;
  duration: string;
  lectures: number;
  level: string;
  learningObjectives: string[];
  curriculum: {
    title: string;
    lectures: number;
    duration: string;
  }[];
  videoUrl?: string;
}

// category-filter-Type
export interface categoryFilterType {
  id: number;
  category: string;
}

// events-type
export interface eventType {
  id: number;
  title: string;
  date: string;
  time: string;
  place: string;
}

// counter-type
export interface counterType {
  id: number;
  // countIcon: () => JSX.Element;
  countNum: number;
  countTitle: string;
  countPlus?: string;
  wrapperClass?: string;
  counterItemClass?: string;
  counterIconClass?: string;
}

// blog-type
export interface blogType {
  id: number;
  image: StaticImageData;
  blogTag: string;
  blogWrapperClass?: string;
  title: string;
  authorImg: StaticImageData;
  author: string;
  date: string;
}

// hero-slider-type
export interface heroSliderType {
  id: number;
  image: StaticImageData;
  title: string;
  info: string;
  titleInfo?: string;
  titleCategory?: string;
  YellowBg?: StaticImageData;
  wrapperClass?: string;
  desc?: string;
  sliderBtn?: string;
}

// instructor
interface SocialType {
  id: number;
  link: string;
  icon: string;
}

// instructor type
export interface instructorType {
  id: number;
  image: StaticImageData;
  title: string;
  category: string;
  socialIcon: SocialType[];
}

// testimonial-Type
export interface TestimonialType {
  id: number;
  desc?: string;
  info?: string;
  authorName?: string;
}

// image-slider
export interface imageSliderType {
  id: number;
  image: StaticImageData;
}

// id type
export interface idType {
  id?: number;
}

// review-data-type
export interface reviewType {
  id?: number;
  image?: StaticImageData;
  title?: string;
  ratings?: number;
  duration?: string;
  description?: string;
}

// product type
export interface productsType {
  id?: number;
  image?: StaticImageData;
  title: string;
  category?: string;
  level?: string;
  price: number;
  oldPrice?: number;
  rating: number;
  quantity: number;
}
