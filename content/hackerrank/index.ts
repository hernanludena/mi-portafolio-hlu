import type { HackerRankDetailDefinition, HackerRankDifficulty, HackerRankLang } from "@/types/hackerrank";
import { resolveHackerRankCard } from "@/types/hackerrank";
import { approximateMatchingChallenge } from "./approximate-matching";
import { designHashsetChallenge } from "./design-hashset";
import { detectCapitalUseChallenge } from "./detect-capital-use";
import { ecommerceOrderStreamsChallenge } from "./ecommerce-order-streams";
import { electronicsShopChallenge } from "./electronics-shop";
import { fizzBuzzChallenge } from "./fizz-buzz";
import { integerToRomanChallenge } from "./integer-to-roman";
import { javaLambdaExpressionsChallenge } from "./java-lambda-expressions";
import { libraryStreamsChallenge } from "./library-streams";
import { longestPalindromicSubstringChallenge } from "./longest-palindromic-substring";
import { longestSubarrayChallenge } from "./longest-subarray";
import { lotteryCouponsChallenge } from "./lottery-coupons";
import { maximumSubarrayChallenge } from "./maximum-subarray";
import { mergeIntervalsChallenge } from "./merge-intervals";
import { migratoryBirdsChallenge } from "./migratory-birds";
import { minimumAbsoluteDifferenceChallenge } from "./minimum-absolute-difference";
import { onlineLearningStreamsChallenge } from "./online-learning-streams";
import { printLinkedListChallenge } from "./print-linked-list";
import { primeGroupsChallenge } from "./prime-groups";
import { processRuntimeConsolidationChallenge } from "./process-runtime-consolidation";
import { reverseIntegerChallenge } from "./reverse-integer";
import { reverseStringChallenge } from "./reverse-string";
import { romanToIntegerChallenge } from "./roman-to-integer";
import { simpleArraySumChallenge } from "./simple-array-sum";
import { stackImplementationChallenge } from "./stack-implementation";
import { stringAnagramChallenge } from "./string-anagram";
import { stringDecryptionReversalChallenge } from "./string-decryption-reversal";
import { supermarketStreamsChallenge } from "./supermarket-streams";
import { treeReviewChallenge } from "./tree-review";
import { typeCounterChallenge } from "./type-counter";
import { validIpAddressChallenge } from "./valid-ip-address";
import { validPalindromeChallenge } from "./valid-palindrome";

const difficultyOrder: Record<HackerRankDifficulty, number> = {
    Hard: 0,
    Medium: 1,
    Easy: 2,
};

const hackerrankDefinitions: HackerRankDetailDefinition[] = [
    approximateMatchingChallenge,
    primeGroupsChallenge,
    ecommerceOrderStreamsChallenge,
    integerToRomanChallenge,
    libraryStreamsChallenge,
    longestPalindromicSubstringChallenge,
    longestSubarrayChallenge,
    mergeIntervalsChallenge,
    onlineLearningStreamsChallenge,
    processRuntimeConsolidationChallenge,
    reverseIntegerChallenge,
    stringAnagramChallenge,
    stringDecryptionReversalChallenge,
    supermarketStreamsChallenge,
    validIpAddressChallenge,
    designHashsetChallenge,
    detectCapitalUseChallenge,
    electronicsShopChallenge,
    fizzBuzzChallenge,
    javaLambdaExpressionsChallenge,
    lotteryCouponsChallenge,
    maximumSubarrayChallenge,
    migratoryBirdsChallenge,
    minimumAbsoluteDifferenceChallenge,
    printLinkedListChallenge,
    reverseStringChallenge,
    romanToIntegerChallenge,
    simpleArraySumChallenge,
    stackImplementationChallenge,
    treeReviewChallenge,
    typeCounterChallenge,
    validPalindromeChallenge,
].sort((a, b) => {
    const byDifficulty = difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
    if (byDifficulty !== 0) return byDifficulty;
    return a.locales.es.title.localeCompare(b.locales.es.title, "es");
});

const hackerrankBySlug = Object.fromEntries(
    hackerrankDefinitions.map((def) => [def.slug, def])
) as Record<string, HackerRankDetailDefinition>;

export function getHackerRankDefinition(slug: string): HackerRankDetailDefinition | undefined {
    return hackerrankBySlug[slug];
}

export function getAllHackerRankDefinitions(): HackerRankDetailDefinition[] {
    return hackerrankDefinitions;
}

export function getAllHackerRankSlugs(): string[] {
    return hackerrankDefinitions.map((def) => def.slug);
}

export function getAllHackerRankCards(lang: HackerRankLang = "es") {
    return hackerrankDefinitions.map((def) => resolveHackerRankCard(def, lang));
}

export {
    approximateMatchingChallenge,
    designHashsetChallenge,
    detectCapitalUseChallenge,
    ecommerceOrderStreamsChallenge,
    electronicsShopChallenge,
    fizzBuzzChallenge,
    integerToRomanChallenge,
    javaLambdaExpressionsChallenge,
    libraryStreamsChallenge,
    longestPalindromicSubstringChallenge,
    longestSubarrayChallenge,
    lotteryCouponsChallenge,
    maximumSubarrayChallenge,
    mergeIntervalsChallenge,
    migratoryBirdsChallenge,
    minimumAbsoluteDifferenceChallenge,
    onlineLearningStreamsChallenge,
    printLinkedListChallenge,
    primeGroupsChallenge,
    processRuntimeConsolidationChallenge,
    reverseIntegerChallenge,
    reverseStringChallenge,
    romanToIntegerChallenge,
    simpleArraySumChallenge,
    stackImplementationChallenge,
    stringAnagramChallenge,
    stringDecryptionReversalChallenge,
    supermarketStreamsChallenge,
    treeReviewChallenge,
    typeCounterChallenge,
    validIpAddressChallenge,
    validPalindromeChallenge,
};
