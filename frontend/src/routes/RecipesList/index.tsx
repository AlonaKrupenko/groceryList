import { useState } from "react";
import PlusIcon from "../../assets/icons/PlusIcon";
import { useResponsive } from "../../hooks/useResponcive";
import styles from "./styles.module.scss";
import { RecipeForm } from "../../components/RecipeForm";

const RecipesList = () => {
  const [isRecipeFormOpen, setIsRecipeFormOpen] = useState<boolean>(false);
  const screenSize = useResponsive();

  const handleAddClick = () => {
    setIsRecipeFormOpen(true);
    console.log("clicked add");
    console.log(screenSize);
  };

  const handleFormClose = () => {
    setIsRecipeFormOpen(false);
  };

  return (
    <div className={"contentWrapper " + styles.list}>
      <h1>My recipes</h1>
      {screenSize === "isMobile" || screenSize === "isTablet" ? (
        <button className={styles.addBtnMobile} onClick={handleAddClick}>
          <PlusIcon />
        </button>
      ) : (
        <div className={styles.addRecipeBar}>
          <button className={styles.addBtnDesktop} onClick={handleAddClick}>
            Add you recipe
          </button>
        </div>
      )}
      {isRecipeFormOpen ? (
        <RecipeForm
          isFormOpen={isRecipeFormOpen}
          handleFormClose={handleFormClose}
        />
      ) : null}
    </div>
  );
};

export default RecipesList;
