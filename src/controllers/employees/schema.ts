import { body } from "express-validator";
import { CONSTANTS } from "../../constants";

const Schema = [
  body("skillId")
    .trim()
    .notEmpty()
    .withMessage("skillId is required."),
  body("level")
    .trim()
    .notEmpty()
    .withMessage("level is required.")
    .bail()
    .isIn(CONSTANTS.SKILL_LEVELS)
    .withMessage("level must be one of the following: " + CONSTANTS.SKILL_LEVELS.join(", ")),
  body("yearOfExperience").trim().notEmpty().withMessage("yearOfExperience is required."),
];

export { Schema };
