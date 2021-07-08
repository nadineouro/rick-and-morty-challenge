import { Props } from ".";

type Option = {
  [key: string]: any;
};

const getBasedOnGender = (gender: string) => {
  const basedOnGender: Option = {
    Male: { pronoun: "He" },
    Female: { pronoun: "She" },
    unknown: { pronoun: "It" },
  };
  return basedOnGender[gender];
};

const getBasedOnStatus = (status: string, pronoun: string) => {
  const basedOnStatus: Option = {
    Dead: {
      verbToBe: "was",
      statusPhrase: `${pronoun} is dead`,
    },
    Alive: {
      verbToBe: "is",
      statusPhrase: `${pronoun} is alive and well`,
    },
    unknown: {
      verbToBe: "is",
      statusPhrase: `It can't be told if ${pronoun.toLowerCase()} is alive or dead`,
    },
  };
  return basedOnStatus[status];
};

const getFormattedSpecies = (species: string, type: string) => {
  if (!type) return species.toLowerCase();
  return `${species.toLowerCase()} (${type})`;
};

const getFormattedGender = (gender: string) => {
  if (!gender || gender === "unknown") return "";
  return gender.toLowerCase();
};

const getPhraseDetails = ({
  status,
  gender,
  species,
  episode,
  type,
}: Props) => {
  const { pronoun } = getBasedOnGender(gender);
  const { verbToBe, statusPhrase } = getBasedOnStatus(status, pronoun);

  return {
    verbToBe,
    statusPhrase,
    formattedGender: getFormattedGender(gender),
    formattedSpecies: getFormattedSpecies(species, type),
    lastSeen: episode[episode.length - 1].air_date,
  };
};

export const getDescription = (props: Props) => {
  const {
    verbToBe,
    statusPhrase,
    formattedGender,
    formattedSpecies,
    lastSeen,
  } = getPhraseDetails(props);

  return `${props.name} ${verbToBe} a ${formattedGender} ${formattedSpecies}. ${statusPhrase}. Last seen in ${lastSeen}.`;
};
