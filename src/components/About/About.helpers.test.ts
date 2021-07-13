import {
  getBasedOnGender,
  getBasedOnStatus,
  getFormattedSpecies,
  getFormattedGender,
  getLastSeen,
  getPhraseDetails,
  getDescription,
} from "./helpers";

import { character } from "../../mocks";

describe("getBasedOnGender(gender)", () => {
  it("should return male pronoun", () => {
    const { pronoun } = getBasedOnGender("Male");
    expect(pronoun).toBe("He");
  });
  it("should return female pronoun", () => {
    const { pronoun } = getBasedOnGender("Female");
    expect(pronoun).toBe("She");
  });
  it("should return unknown pronoun", () => {
    const { pronoun } = getBasedOnGender("unknown");
    expect(pronoun).toBe("It");
  });
});

describe("getBasedOnStatus(status, pronoun", () => {
  it("should return dead verb to be and status phrase", () => {
    const { verbToBe, statusPhrase } = getBasedOnStatus("Dead", "He");
    expect(verbToBe).toBe("was");
    expect(statusPhrase).toBe("He is dead");
  });
  it("should return alive verb to be and status phrase", () => {
    const { verbToBe, statusPhrase } = getBasedOnStatus("Alive", "He");
    expect(verbToBe).toBe("is");
    expect(statusPhrase).toBe("He is alive and well");
  });
  it("should return unknown verb to be and status phrase", () => {
    const { verbToBe, statusPhrase } = getBasedOnStatus("unknown", "He");
    expect(verbToBe).toBe("is");
    expect(statusPhrase).toBe("It can't be told if he is alive or dead");
  });
});

describe("getFormattedSpecies(species, type", () => {
  it("should return formatted species without additional type", () => {
    const formattedSpecies = getFormattedSpecies("Human", "");
    expect(formattedSpecies).toBe("human");
  });
  it("should return formatted species with additional type", () => {
    const formattedSpecies = getFormattedSpecies("Humanoid", "Robot");
    expect(formattedSpecies).toBe("humanoid (Robot)");
  });
});

describe("getFormattedGender(gender)", () => {
  it("shoul return formatted gender", () => {
    const gender = getFormattedGender("Male");
    expect(gender).toBe("male");
  });
  it("shoul return empty gender", () => {
    const gender1 = getFormattedGender("");
    expect(gender1).toBe("");

    const gender2 = getFormattedGender("unknown");
    expect(gender2).toBe("");
  });
});

describe("getLastSeen(episode)", () => {
  it("should return empty last seen", () => {
    const lastSeen = getLastSeen([]);
    expect(lastSeen).toBe("");
  });
  it("should return last seen phrase", () => {
    const lastSeen = getLastSeen([
      { air_date: "September 26, 2019" },
      { air_date: "May 31, 2020" },
    ]);
    expect(lastSeen).toBe("Last seen in May 31, 2020.");
  });
});

describe("getPhraseDetails(props)", () => {
  it("should return object with verb to be, status phrase, last seen and formatted gender and species", () => {
    const {
      verbToBe,
      statusPhrase,
      formattedGender,
      formattedSpecies,
      lastSeen,
    } = getPhraseDetails({ ...character });
    expect(verbToBe).toBe("is");
    expect(statusPhrase).toBe("He is alive and well");
    expect(formattedGender).toBe("male");
    expect(formattedSpecies).toBe("human");
    expect(lastSeen).toBe("Last seen in May 31, 2020.");
  });
});

describe("getDescription(props)", () => {
  it("should return formatted description", () => {
    const description = getDescription(character);
    expect(description).toBe(
      "Rick Sanchez is a male human. He is alive and well. Last seen in May 31, 2020."
    );
  });
});
