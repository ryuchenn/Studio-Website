import React from 'react';
import { videographyCategories, videographyAllImages } from "@/content/profolioCard";
import PortfolioCard from "@/components/PortfolioCard";
import { useTranslation } from 'react-i18next';

const PortfolioVideography: React.FC = () => {
  const { t } = useTranslation(['translation', 'dynamicContent', 'commonVariables']); 

  return (
    <>
      <div>
        <PortfolioCard
          title={t("translation:Portfolio.Videography")}
          categories={videographyCategories.map((category) => category )}
          allImages={videographyAllImages}
        />
      </div>
    </>
  );
};

export default PortfolioVideography;