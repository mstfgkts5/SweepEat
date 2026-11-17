// Remembers on the device that the first-run guide was seen (or skipped).
const ONBOARDING_KEY = "kaydirak_onboarding_done_v1";

export const isOnboardingDone = (): boolean => {
  try {
    return localStorage.getItem(ONBOARDING_KEY) === "1";
  } catch {
    // storage blocked: do not show the guide on every start
    return true;
  }
};

export const markOnboardingDone = () => {
  try {
    localStorage.setItem(ONBOARDING_KEY, "1");
  } catch {
    // storage unavailable: the guide may show again next time
  }
};
