import { Props } from ".";

import { Episode } from "../../services/character/types";

type Option = {
  [key: string]: any;
};

export const getBasedOnGender = (gender: string) => {
  const basedOnGender: Option = {
    Male: { pronoun: "He" },
    Female: { pronoun: "She" },
    unknown: { pronoun: "It" },
  };
  return basedOnGender[gender];
};

export const getBasedOnStatus = (status: string, pronoun: string) => {
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

export const getFormattedSpecies = (species: string, type: string) => {
  if (!type) return species.toLowerCase();
  return `${species.toLowerCase()} (${type})`;
};

export const getFormattedGender = (gender: string) => {
  if (!gender || gender === "unknown") return "";
  return gender.toLowerCase();
};

export const getLastSeen = (episode: Episode[]) => {
  if (!episode?.length) return "";
  return `Last seen in ${episode[episode.length - 1].air_date}.`;
};

export const getPhraseDetails = ({
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
    lastSeen: getLastSeen(episode),
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

  return `${props.name} ${verbToBe} a ${formattedGender} ${formattedSpecies}. ${statusPhrase}. ${lastSeen}`;
};
