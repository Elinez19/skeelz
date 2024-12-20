import Image from "next/image";

interface BannerProps {
  title: string;
  description: string;
}

const Banner: React.FC<BannerProps> = ({ title, description }) => {
  return (
    <div className="py-10 relative">
      <Image
        src="/assets/img/bg-img-2.svg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="bg-white rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
          <div className="p-6 md:p-8 lg:p-10">
            <h2 className="mb-4 text-2xl font-bold text-purple md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
