import styles from "./styles.module.scss";
import { Field } from "./../Field";
import { CrossIcon } from "../../assets/icons/CrossIcon";

interface RecipeFormProps {
  isFormOpen: boolean;
  handleFormClose: () => void;
}

export const RecipeForm: React.FC<RecipeFormProps> = ({
  isFormOpen,
  handleFormClose,
}) => {
  const handleCrossClick = () => {
    handleFormClose();
  };

  return (
    <div className={styles.recipeForm}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>Input your recipe</h2>
        <div onClick={handleCrossClick}>
          <CrossIcon />
        </div>
      </div>
      <h4>Add ingredients</h4>
      <Field label="Ingredient" isRequired errorText={"EEEERRRROOOOORRR"}>
        <input
          type="text"
          className={styles.recipeInput}
          placeholder="EEEERRRROOOOORRR"
        />
      </Field>
      <Field label="Amount" isRequired errorText={"EEEERRRROOOOORRR"}>
        <input
          type="text"
          className={styles.recipeInput}
          placeholder="EEEERRRROOOOORRR"
        />
      </Field>

      <h4>Add description</h4>
    </div>
  );
};
