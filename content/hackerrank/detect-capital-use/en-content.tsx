export const detectCapitalUseDetailEn = (
    <>
        <p>A word is valid if all lowercase, Title Case (first letter only), or ALL UPPERCASE.</p>
        <h2>Statement</h2>
        <p>Given <code>word</code>, return <code>true</code> if it follows one of three valid capitalization rules.</p>
        <h2>Example</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`"USA"      → true
"leetcode" → true
"Google"   → true
"FlaG"     → false`}
        </pre>
        <h2>Approach</h2>
        <ol><li>If length ≤ 1 → valid.</li><li>If first two chars uppercase → expect all uppercase.</li><li>Else → expect lowercase from second char onward.</li></ol>
        <h2>Complexity</h2>
        <ul>
            <li><strong>Time:</strong> <code>O(n)</code></li>
            <li><strong>Space:</strong> <code>O(1)</code></li>
        </ul>
        <h2>Java solution</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`public boolean detectCapitalUse(String word) {
    if (word.length() <= 1) return true;

    Predicate<Character> correctCase = Character::isLowerCase;

    if (Character.isUpperCase(word.charAt(0))
            && Character.isUpperCase(word.charAt(1))) {
        correctCase = Character::isUpperCase;
    }

    for (int i = 1; i < word.length(); i++) {
        if (!correctCase.test(word.charAt(i))) {
            return false;
        }
    }
    return true;
}`}</code>
        </pre>
        
    </>
);
