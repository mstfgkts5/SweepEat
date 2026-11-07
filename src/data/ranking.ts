// Restaurant ranking by Google rating that also respects how many reviews back it up.
//
// Bayesian average (the idea IMDb uses for its top list): a rating with few reviews is
// pulled toward an average restaurant's rating; the more reviews, the more the real rating
// counts. 1 review at 5.0 scores ~4.21, 900 reviews at 4.5 score ~4.46, so the well-reviewed
// place wins.

// How many reviews it takes before a place's own rating weighs as much as the prior.
export const PRIOR_WEIGHT = 150;
// The rating we assume for an "average" restaurant before seeing its reviews.
export const PRIOR_RATING = 4.2;
// Below this many reviews a star rating is not shown at all.
export const MIN_REVIEWS = 30;

export const bayesianScore = (rating: number, reviews: number): number =>
  (reviews / (reviews + PRIOR_WEIGHT)) * rating + (PRIOR_WEIGHT / (reviews + PRIOR_WEIGHT)) * PRIOR_RATING;

export const hasTrustedRating = (rating: number | null | undefined, reviews: number | null | undefined): boolean =>
  rating != null && reviews != null && reviews >= MIN_REVIEWS;

/**
 * Sorts places with a trusted rating first (best Bayesian score first); places without one
 * keep their original order after them. Stable, does not mutate the input.
 */
export const rankByRating = <T>(items: T[], get: (item: T) => { rating?: number | null; reviews?: number | null }): T[] =>
  items
    .map((item, index) => ({ item, index, r: get(item) }))
    .sort((a, b) => {
      const ta = hasTrustedRating(a.r.rating, a.r.reviews);
      const tb = hasTrustedRating(b.r.rating, b.r.reviews);
      if (ta && tb) return bayesianScore(b.r.rating as number, b.r.reviews as number) - bayesianScore(a.r.rating as number, a.r.reviews as number) || a.index - b.index;
      if (ta !== tb) return ta ? -1 : 1;
      return a.index - b.index;
    })
    .map((x) => x.item);
